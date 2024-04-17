import { App, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { ContainerImage, TaskDefinition } from 'aws-cdk-lib/aws-ecs';
import { CkAccountType, CkCluster, CkStack, CkVpc } from '../../lib';
import { CkFargateService } from '../../src/ck-ecs/ck-fargate-service';
import { CkFargateTaskDefinition } from '../../src/ck-ecs/ck-fargate-task-definition';

let app: App;
let stack: Stack;
let cluster: CkCluster;
let taskDef: TaskDefinition;

const stackProps = {
  ckAccountType: CkAccountType.PRODUCTION,
  ckApplication: 'Test',
  ckCompany: 'CloudKitect',
};

describe('Well Architected ECS Fargate Service', () => {
  beforeEach(() => {
    app = new App();
    stack = new CkStack(app, 'TestStack', { ...stackProps });
    taskDef = new CkFargateTaskDefinition(stack, 'FGTD', {});
    taskDef.addContainer('WebContainer', {
      image: ContainerImage.fromRegistry('amazon/amazon-ecs-sample'),
    });
    const vpc = new CkVpc(stack, 'VPC', {});
    cluster = new CkCluster(stack, 'Cluster', {
      vpc: vpc,
    });
  });

  test('default fargate service configuration', () => {
    new CkFargateService(stack, 'FGService', {
      cluster: cluster,
      taskDefinition: taskDef,
    });

    const template = Template.fromStack(stack);
    expect(template.toJSON()).toMatchSnapshot();
  });

  test.each`
      actual       | expected
      ${undefined} | ${'DISABLED'}
      ${null}      | ${'DISABLED'}
      ${false}     | ${'DISABLED'}
      ${true}      | ${'ENABLED'}
   `(
    'CC-85: public ip should be $expected when $actual',
    ({ actual, expected }) => {
      new CkFargateService(stack, 'FGService', {
        cluster: cluster,
        assignPublicIp: actual,
        taskDefinition: taskDef,
      });

      const template = Template.fromStack(stack);
      template.hasResourceProperties('AWS::ECS::Service', {
        NetworkConfiguration: {
          AwsvpcConfiguration: {
            AssignPublicIp: expected,
          },
        },
      });
    },
  );

  test.each`
      actual                 | expected
      ${undefined}           | ${true}
      ${null}                | ${true}
      ${{ rollback: false }} | ${false}
   `(
    'CC-89: circuit breaker should be $expected when $actual',
    ({ actual, expected }) => {
      new CkFargateService(stack, 'FGService', {
        cluster: cluster,
        circuitBreaker: actual,
        taskDefinition: taskDef,
      });

      const template = Template.fromStack(stack);
      template.hasResourceProperties('AWS::ECS::Service', {
        DeploymentConfiguration: {
          DeploymentCircuitBreaker: {
            Enable: true,
            Rollback: expected,
          },
          MaximumPercent: 200,
          MinimumHealthyPercent: 50,
        },
      });
    },
  );

  test('CC-94: should launch in private subnet', () => {
    new CkFargateService(stack, 'FGService', {
      cluster: cluster,
      taskDefinition: taskDef,
    });

    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::ECS::Service', {
      NetworkConfiguration: {
        AwsvpcConfiguration: {
          Subnets: [
            {
              Ref: 'VPCPrivateSubnet1Subnet8BCA10E0',
            },
            {
              Ref: 'VPCPrivateSubnet2SubnetCFCDAA7A',
            },
          ],
        },
      },
    });
  });

});
