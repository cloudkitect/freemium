/*
 * Copyright (c) CloudKitect Inc. All Rights Reserved.
 */
import { App } from 'aws-cdk-lib';
import { Match, Template } from 'aws-cdk-lib/assertions';
import {
  SecurityPolicyProtocol,
  ViewerProtocolPolicy,
} from 'aws-cdk-lib/aws-cloudfront';
import { HttpOrigin } from 'aws-cdk-lib/aws-cloudfront-origins';
import {
  CkAccountType, CkStack,
} from '../../lib';
import { CkDistribution } from '../../src';

let app: App;
let stack: CkStack;
let testOrigin: HttpOrigin;

const stackProps = {
  ckAccountType: CkAccountType.PRODUCTION,
  ckApplication: 'Test',
  ckCompany: 'CloudKitect',
};

describe('Well Architected CloudFront Distribution', () => {
  beforeEach(() => {
    stack = new CkStack(app, 'TestStack', { ...stackProps });
    testOrigin = new HttpOrigin('fake.example.com');
  });

  test('Default cloudfront settings', () => {
    new CkDistribution(stack, 'TestWaDistribution', {
      defaultBehavior: { origin: testOrigin },
    });

    const template = Template.fromStack(stack);
    expect(template.toJSON()).toMatchSnapshot();
  });

  test.each`
      actual                                  | expected
      ${undefined}                            | ${'TLSv1.2'}
      ${null}                                 | ${'TLSv1.2'}
      ${SecurityPolicyProtocol.TLS_V1_2_2021} | ${'TLSv1.2'}
      ${SecurityPolicyProtocol.TLS_V1_2_2019} | ${'TLSv1.2'}
   `(
    'CC-313: MinimumProtocolVersion should be $expected when $actual',
    ({ actual, expected }) => {
      new CkDistribution(stack, 'TestWaDistribution', {
        defaultBehavior: { origin: testOrigin },
        minimumProtocolVersion: actual,
      });
      const template = Template.fromStack(stack);

      template.hasResourceProperties('AWS::CloudFront::Distribution', {
        DistributionConfig: Match.objectLike({
          Origins: [
            {
              CustomOriginConfig: {
                OriginProtocolPolicy: 'https-only',
                OriginSSLProtocols: [expected],
              },
              DomainName: 'fake.example.com',
              Id: Match.stringLikeRegexp(
                'TestStackTestWaDistributionOrigin*',
              ),
            },
          ],
        }),
      });
    },
  );

  test.each`
      actual                                    | expected
      ${undefined}                              | ${'redirect-to-https'}
      ${null}                                   | ${'redirect-to-https'}
      ${ViewerProtocolPolicy.REDIRECT_TO_HTTPS} | ${'redirect-to-https'}
      ${ViewerProtocolPolicy.ALLOW_ALL}         | ${'allow-all'}
   `(
    'CC-312: REDIRECT_TO_HTTPS viewer protocol should be $expected when $actual',
    ({ actual, expected }) => {
      new CkDistribution(stack, 'TestWaDistribution', {
        defaultBehavior: {
          origin: testOrigin,
          viewerProtocolPolicy: actual,
        },
      });
      const template = Template.fromStack(stack);
      template.hasResourceProperties('AWS::CloudFront::Distribution', {
        DistributionConfig: {
          DefaultCacheBehavior: Match.objectLike({
            ViewerProtocolPolicy: expected,
          }),
        },
      });
    },
  );

});
