/*
 * Copyright (c) CloudKitect Inc. All Rights Reserved.
 */

import { App } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { HostedZone, IHostedZone } from 'aws-cdk-lib/aws-route53';
import { CkAccountType, CkStack } from '../../lib';
import { CkDnsValidatedCertificate } from '../../src';

let app: App;
let stack: CkStack;
const domainName = 'example.com';
let hostedZone: IHostedZone;

const stackProps = {
  ckAccountType: CkAccountType.PRODUCTION,
  ckApplication: 'Test',
  ckCompany: 'CloudKitect',
};

describe('Well Architected DNS Validated certificate', () => {
  beforeEach(() => {
    app = new App();
    stack = new CkStack(app, 'Test-Stack', stackProps);
    hostedZone = new HostedZone(stack, 'HZone', {
      zoneName: domainName,
    });
  });

  test('Default dns certificate settings', () => {
    new CkDnsValidatedCertificate(stack, 'Certificate', {
      ckHostedZone: hostedZone,
      domainName,
    });

    const template = Template.fromStack(stack);
    expect(template.toJSON()).toMatchSnapshot();
  });


  test('CC-351: certificate validation via hosted zone', () => {
    new CkDnsValidatedCertificate(stack, 'Certificate', {
      domainName,
      ckHostedZone: hostedZone,
    });

    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::CertificateManager::Certificate', {
      DomainValidationOptions: [
        {
          DomainName: 'example.com',
          HostedZoneId: {
            Ref: 'HZoneBA7FEF6F',
          },
        },
      ],
    });
  });
});
