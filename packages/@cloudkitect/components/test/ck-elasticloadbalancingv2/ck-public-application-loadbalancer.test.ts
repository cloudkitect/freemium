import { App } from 'aws-cdk-lib';
import { Match, Template } from 'aws-cdk-lib/assertions';
import { CkAccountType, CkStack, CkVpc } from '../../lib';
import { CkPublicApplicationLoadbalancer } from '../../src/ck-elasticloadbalancingv2/ck-public-application-loadbalancer';

let app: App;
let stack: CkStack;
let vpc: CkVpc;

const stackProps = {
  ckAccountType: CkAccountType.PRODUCTION,
  ckApplication: 'Test',
  ckCompany: 'CloudKitect',
};

describe('Well Architected Public facing application load balancer', () => {
  beforeEach(() => {
    app = new App();
    stack = new CkStack(app, 'TestStack', {
      ...stackProps,
      env: { region: 'us-east-1' },
    });
    vpc = new CkVpc(stack, 'Vpc', {});
  });

  test('default ALB settings', () => {
    new CkPublicApplicationLoadbalancer(stack, 'PublicAlb', {
      vpc: vpc,
    });

    const template = Template.fromStack(stack);
    expect(template.toJSON()).toMatchSnapshot();
  });

  test('CC-263: ALB default security groups', () => {
    new CkPublicApplicationLoadbalancer(stack, 'PublicAlb', {
      vpc: vpc,
    });

    const template = Template.fromStack(stack);
    template.resourceCountIs('AWS::EC2::SecurityGroup', 2);
    template.hasResourceProperties('AWS::EC2::SecurityGroup', {
      GroupDescription: 'Public Load Balancer Security Group',
      SecurityGroupEgress: [
        {
          CidrIp: '0.0.0.0/0',
          Description: 'Allow all outbound traffic by default',
          IpProtocol: '-1',
        },
      ],
      SecurityGroupIngress: [
        {
          CidrIp: '0.0.0.0/0',
          Description: 'All https traffic',
          FromPort: 443,
          IpProtocol: 'tcp',
          ToPort: 443,
        },
      ],
    });
  });

  test.each`
      actual       | expected
      ${undefined} | ${'internet-facing'}
      ${null}      | ${'internet-facing'}
      ${false}     | ${'internet-facing'}
   `(
    'CC-261: Test internet facing should be $expected when $actual',
    ({ actual, expected }) => {
      new CkPublicApplicationLoadbalancer(stack, 'PublicAlb', {
        vpc: vpc,
        internetFacing: actual,
      });

      const template = Template.fromStack(stack);
      template.hasResourceProperties(
        'AWS::ElasticLoadBalancingV2::LoadBalancer',
        {
          Scheme: expected,
        },
      );
    },
  );

  test.each`
      actual       | expected
      ${undefined} | ${'true'}
      ${null}      | ${'true'}
      ${true}      | ${'true'}
   `(
    'CC-265: Drop invalid headers should be $expected when $actual',
    ({ actual, expected }) => {
      new CkPublicApplicationLoadbalancer(stack, 'PublicAlb', {
        vpc: vpc,
        dropInvalidHeaderFields: actual,
      });

      const template = Template.fromStack(stack);
      template.hasResourceProperties(
        'AWS::ElasticLoadBalancingV2::LoadBalancer',
        {
          LoadBalancerAttributes: Match.arrayWith([
            {
              Key: 'routing.http.drop_invalid_header_fields.enabled',
              Value: expected,
            },
          ]),
        },
      );
    },
  );

  test('CC-262: ALB should redirect http to https', () => {
    new CkPublicApplicationLoadbalancer(stack, 'PublicAlb', {
      vpc: vpc,
    });

    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::ElasticLoadBalancingV2::Listener', {
      DefaultActions: [
        {
          RedirectConfig: {
            Port: '443',
            Protocol: 'HTTPS',
            StatusCode: 'HTTP_301',
          },
          Type: 'redirect',
        },
      ],
      LoadBalancerArn: {
        Ref: 'PublicAlb84330974',
      },
      Port: 80,
      Protocol: 'HTTP',
    });
  });

});
