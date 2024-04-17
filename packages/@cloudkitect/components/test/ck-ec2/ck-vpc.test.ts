import { App } from 'aws-cdk-lib';
import { Match, Template } from 'aws-cdk-lib/assertions';
import { CkAccountType, CkStack } from '../../lib';
import { CkVpc } from '../../src/ck-ec2/ck-vpc';

let app: App;
let stack: CkStack;
const stackProps = {
  ckAccountType: CkAccountType.PRODUCTION,
  ckApplication: 'Test',
  ckCompany: 'CloudKitect',
};

describe('Well Architected VPC defaults', () => {
  beforeEach(() => {
    app = new App();
    stack = new CkStack(app, 'TestStack', { ...stackProps });
  });

  test('Well Architected VPC', () => {
    new CkVpc(stack, 'MyVPC', {});

    const template = Template.fromStack(stack);
    expect(template.toJSON()).toMatchSnapshot();
  });

  test('CC-50: Should create three subnets by default', () => {
    new CkVpc(stack, 'MyVPC', {});

    const template = Template.fromStack(stack);
    template.resourceCountIs('AWS::EC2::Subnet', 6);
    template.hasResourceProperties('AWS::EC2::Subnet', {
      Tags: Match.arrayWith([
        {
          Key: 'aws-cdk:subnet-name',
          Value: 'Isolated',
        },
      ]),
      MapPublicIpOnLaunch: false,
      CidrBlock: '10.0.4.0/24',
    });
    template.hasResourceProperties('AWS::EC2::Subnet', {
      Tags: Match.arrayWith([
        {
          Key: 'aws-cdk:subnet-name',
          Value: 'Private',
        },
      ]),
      MapPublicIpOnLaunch: false,
      CidrBlock: '10.0.3.0/24',
    });
    template.hasResourceProperties('AWS::EC2::Subnet', {
      Tags: Match.arrayWith([
        {
          Key: 'aws-cdk:subnet-name',
          Value: 'Public',
        },
      ]),
      MapPublicIpOnLaunch: true,
      CidrBlock: '10.0.0.0/24',
    });
  });

  test.each`
      actual       | expected
      ${undefined} | ${true}
      ${null}      | ${true}
      ${false}     | ${false}
   `(
    'WACDK-202: dns hostnames should be $expected when $actual',
    ({ actual, expected }) => {
      new CkVpc(stack, 'MyVPC', {
        enableDnsHostnames: actual,
      });

      const template = Template.fromStack(stack);
      template.hasResourceProperties('AWS::EC2::VPC', {
        EnableDnsHostnames: expected,
      });
    },
  );

  test.each`
      actual       | expected
      ${undefined} | ${1}
      ${null}      | ${1}
      ${false}     | ${0}
   `(
    'CC-5: default security group should be $expected when $actual',
    ({ actual, expected }) => {
      new CkVpc(stack, 'MyVPC', {
        restrictDefaultSecurityGroup: actual,
      });

      const template = Template.fromStack(stack);
      template.resourceCountIs('Custom::VpcRestrictDefaultSG', expected);
    },
  );

  test.each`
      actual       | expected | accountType
      ${undefined} | ${2}     | ${CkAccountType.PRODUCTION}
      ${null}      | ${2}     | ${CkAccountType.PRODUCTION}
      ${null}      | ${1}     | ${CkAccountType.DEVELOPMENT}
      ${2}         | ${2}     | ${CkAccountType.DEVELOPMENT}
   `(
    'CC-45: nat gateways should be $expected when $actual for $accountType',
    ({ actual, expected, accountType }) => {
      const myStack = new CkStack(app, 'MyTestStack', {
        ...stackProps,
        ckAccountType: accountType,
      });

      new CkVpc(myStack, 'MyVPC', {
        natGateways: actual,
      });

      const template = Template.fromStack(myStack);
      template.resourceCountIs('AWS::EC2::NatGateway', expected);
    },
  );

});
