/*
 * Copyright (c) CloudKitect Inc. All Rights Reserved.
 */

import { App } from 'aws-cdk-lib';
import { Match, Template } from 'aws-cdk-lib/assertions';
import { BlockPublicAccess } from 'aws-cdk-lib/aws-s3';
import * as s3 from 'aws-cdk-lib/aws-s3';
import { CkAccountType, CkStack } from '../../lib';
import { CkBucket } from '../../src';

let app: App;
let stack: CkStack;
const stackProps = {
  ckAccountType: CkAccountType.PRODUCTION,
  ckApplication: 'Test',
  ckCompany: 'CloudKitect',
};

describe('Well Architected S3 Bucket Configurations', () => {
  beforeEach(() => {
    app = new App();
    stack = new CkStack(app, 'TestStack', stackProps);
  });

  test('Bucket default settings', () => {
    new CkBucket(stack, 'MyBucket', {});
    const template = Template.fromStack(stack);
    expect(template.toJSON()).toMatchSnapshot();
  });

  const defaultEncryption = {
    ServerSideEncryptionConfiguration: [
      {
        ServerSideEncryptionByDefault: {
          SSEAlgorithm: 'AES256',
        },
      },
    ],
  };

  test.each`
      actual       | expected
      ${undefined} | ${defaultEncryption}
      ${null}      | ${defaultEncryption}
   `(
    'CC-59: bucket encryption status should be $expected when $actual',
    ({ actual, expected }) => {
      new CkBucket(stack, 'MyBucket', {
        encryption: actual,
      });

      const template = Template.fromStack(stack);
      template.hasResourceProperties('AWS::S3::Bucket', {
        BucketEncryption: expected,
      });
    },
  );

  test('CC-68: bucket public read access should be disabled by default', () => {
    new CkBucket(stack, 'MyBucket', {
      enforceSSL: false,
    });

    const template = Template.fromStack(stack);
    template.resourceCountIs('AWS::S3::BucketPolicy', 0);
  });

  test.each`
      actual       | expected
      ${undefined} | ${false}
      ${null}      | ${false}
      ${true}      | ${false}
   `(
    'CC-68: bucket secure transport should be $expected when $actual',
    ({ actual, expected }) => {
      new CkBucket(stack, 'MyBucket', {
        enforceSSL: actual,
      });

      const template = Template.fromStack(stack);
      template.hasResourceProperties('AWS::S3::BucketPolicy', {
        Bucket: {
          Ref: 'MyBucketF68F3FF0',
        },
        PolicyDocument: {
          Statement: Match.arrayWith([
            {
              Action: 's3:*',
              Condition: {
                Bool: {
                  'aws:SecureTransport': `${expected}`,
                },
              },
              Effect: 'Deny',
              Principal: {
                AWS: '*',
              },
              Resource: Match.anyValue(),
            },
          ]),
        },
      });
    },
  );

  test('CC-62: bucket public read access should have read bucket policy when enabled', () => {
    new CkBucket(stack, 'MyBucket', {
      publicReadAccess: true,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ACLS,
    });

    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::S3::BucketPolicy', {
      PolicyDocument: {
        Statement: Match.arrayWith([
          {
            Action: 's3:GetObject',
            Effect: 'Allow',
            Principal: {
              AWS: '*',
            },
            Resource: Match.anyValue(),
          },
        ]),
      },
    });
  });

  const defaultAccess = {
    BlockPublicAcls: true,
    BlockPublicPolicy: true,
    IgnorePublicAcls: true,
    RestrictPublicBuckets: true,
  };
  const customAccess = {
    BlockPublicAcls: true,
    IgnorePublicAcls: true,
  };
  test.each`
      actual                             | expected
      ${undefined}                       | ${defaultAccess}
      ${null}                            | ${defaultAccess}
      ${BlockPublicAccess.BLOCK_ACLS} | ${customAccess}
   `(
    'CC-49: bucket public access should be $expected when $actual',
    ({ actual, expected }) => {
      new CkBucket(stack, 'MyBucket', {
        blockPublicAccess: actual,
      });
      const template = Template.fromStack(stack);
      template.hasResourceProperties('AWS::S3::Bucket', {
        PublicAccessBlockConfiguration: expected,
      });
    },
  );

  test.each`
      actual       | accountType
      ${undefined} | ${CkAccountType.PRODUCTION}
      ${null}      | ${CkAccountType.PRODUCTION}
      ${true}      | ${CkAccountType.PRODUCTION}
      ${true}      | ${CkAccountType.UAT}
   `(
    'CC-63: bucket versioning should be enabled when $actual in $accountType',
    ({ actual, accountType }) => {
      const myStack = new CkStack(app, 'MyStack', {
        ...stackProps,
        ckAccountType: accountType,
      });
      new CkBucket(myStack, 'MyBucket', {
        versioned: actual,
      });

      const template = Template.fromStack(myStack);
      template.hasResourceProperties('AWS::S3::Bucket', {
        VersioningConfiguration: {
          Status: 'Enabled',
        },
      });
    },
  );

  test.each`
      actual       | accountType
      ${undefined} | ${CkAccountType.UAT}
      ${null}      | ${CkAccountType.UAT}
      ${false}     | ${CkAccountType.UAT}
      ${false}     | ${CkAccountType.PRODUCTION}
   `(
    'CC-63: bucket versioning should be disabled when $actual in $accountType',
    ({ actual, accountType }) => {
      const myStack = new CkStack(app, 'MyStack', {
        ...stackProps,
        ckAccountType: accountType,
      });
      new CkBucket(myStack, 'MyBucket', {
        versioned: actual,
      });

      const template = Template.fromStack(myStack);
      template.hasResourceProperties('AWS::S3::Bucket', {
        VersioningConfiguration: Match.absent(),
      });
    },
  );
});
