import { App } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { CkAccountType, CkStack, CkVpc } from '../../lib';
import { CkFargateCluster } from '../../src/ck-ecs/ck-fargate-clsuter';

let app: App;
let stack: CkStack;
let vpc: CkVpc;

const stackProps = {
  ckAccountType: CkAccountType.PRODUCTION,
  ckApplication: 'Test',
  ckCompany: 'CloudKitect',
};

describe('Well Architected ECS Fargate Cluster', () => {
  beforeEach(() => {
    app = new App();
    stack = new CkStack(app, 'TestStack', { ...stackProps });
    vpc = new CkVpc(stack, 'Vpc', {});
  });

  test('CC-80: Fargate Cluster default configuration in production environment', () => {
    new CkFargateCluster(stack, 'Cluster', {
      vpc: vpc,
    });
    const template = Template.fromStack(stack);
    expect(template.toJSON()).toMatchSnapshot();
  });
});
