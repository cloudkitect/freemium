import { App, Stack } from 'aws-cdk-lib';
import { Match, Template } from 'aws-cdk-lib/assertions';
import { CkAccountType, CkStack, CkVpc } from '../../lib';
import { CkCluster } from '../../src/ck-ecs/ck-cluster';

let app: App;
let stack: Stack;
let vpc: CkVpc;

const stackProps = {
  ckAccountType: CkAccountType.PRODUCTION,
  ckApplication: 'Test',
  ckCompany: 'CloudKitect',
};

describe('Well Architected ECS Cluster', () => {
  beforeEach(() => {
    app = new App();
    stack = new CkStack(app, 'TestStack', { ...stackProps });
    vpc = new CkVpc(stack, 'Vpc', {});
  });

  test('cluster default configuration in production environment', () => {
    new CkCluster(stack, 'Instance', {
      vpc: vpc,
    });
    const template = Template.fromStack(stack);
    expect(template.toJSON()).toMatchSnapshot();
  });

  test.each`
      actual       | expected      | accountType
      ${undefined} | ${'enabled'}  | ${CkAccountType.PRODUCTION}
      ${null}      | ${'enabled'}  | ${CkAccountType.PRODUCTION}
      ${false}     | ${'disabled'} | ${CkAccountType.PRODUCTION}
      ${true}      | ${'enabled'}  | ${CkAccountType.PRODUCTION}
      ${undefined} | ${'disabled'} | ${CkAccountType.DEVELOPMENT}
   `(
    'CC-80: container insights should be $expected when $actual in $accountType',
    ({ actual, expected, accountType }) => {
      const myStack = new CkStack(app, 'MyTestStack', {
        ...stackProps,
        ckAccountType: accountType,
      });
      const myVpc = new CkVpc(stack, 'MyVpc', {});

      new CkCluster(myStack, 'Instance', {
        vpc: myVpc,
        containerInsights: actual,
      });

      const template = Template.fromStack(myStack);
      template.hasResourceProperties('AWS::ECS::Cluster', {
        ClusterSettings: [
          {
            Name: 'containerInsights',
            Value: expected,
          },
        ],
      });
    },
  );

  test('CC-81: cluster vpc should be well architected by default', () => {
    new CkCluster(stack, 'Instance', {});

    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::EC2::VPC', {
      Tags: Match.arrayWith([
        {
          Key: 'CkVendor',
          Value: 'CloudKitect',
        },
      ]),
    });
  });
});
