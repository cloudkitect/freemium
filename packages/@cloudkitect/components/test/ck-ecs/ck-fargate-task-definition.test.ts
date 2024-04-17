import { App } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { CkAccountType, CkStack } from '../../lib';
import { CkFargateTaskDefinition } from '../../src/ck-ecs/ck-fargate-task-definition';

let app: App;
let stack: CkStack;
const stackProps = {
  ckAccountType: CkAccountType.PRODUCTION,
  ckApplication: 'Test',
  ckCompany: 'CloudKitect',
};

describe('Well Architected ECS Fargate Task Definition', () => {
  beforeEach(() => {
    app = new App();
    stack = new CkStack(app, 'TestStack', { ...stackProps });
  });

  test('default fargate task definition', () => {
    new CkFargateTaskDefinition(stack, 'FGTaskDef', {});

    const template = Template.fromStack(stack);
    expect(template.toJSON()).toMatchSnapshot();
  });

  test.each`
      actual       | accountType                  | expected
      ${undefined} | ${CkAccountType.PRODUCTION}  | ${'2048'}
      ${null}      | ${CkAccountType.PRODUCTION}  | ${'2048'}
      ${'512'}     | ${CkAccountType.PRODUCTION}  | ${'512'}
      ${undefined} | ${CkAccountType.DEVELOPMENT} | ${'256'}
      ${null}      | ${CkAccountType.DEVELOPMENT} | ${'256'}
      ${'512'}     | ${CkAccountType.DEVELOPMENT} | ${'512'}
   `(
    'CC-82: task definition cpu should be $expected when $actual in $accountType',
    ({ actual, accountType, expected }) => {
      const myStack = new CkStack(app, 'MyStack', {
        ...stackProps,
        ckAccountType: accountType,
      });
      new CkFargateTaskDefinition(myStack, 'FGTaskDef', {
        cpu: actual,
      });

      const template = Template.fromStack(myStack);
      template.hasResourceProperties('AWS::ECS::TaskDefinition', {
        Cpu: expected,
      });
    },
  );

  test.each`
      actual       | accountType                  | expected
      ${undefined} | ${CkAccountType.PRODUCTION}  | ${'4096'}
      ${null}      | ${CkAccountType.PRODUCTION}  | ${'4096'}
      ${'512'}     | ${CkAccountType.PRODUCTION}  | ${'512'}
      ${undefined} | ${CkAccountType.DEVELOPMENT} | ${'512'}
      ${null}      | ${CkAccountType.DEVELOPMENT} | ${'512'}
      ${'1024'}    | ${CkAccountType.DEVELOPMENT} | ${'1024'}
   `(
    'CC-83: task definition memory should be $expected when $actual in $accountType',
    ({ actual, accountType, expected }) => {
      const myStack = new CkStack(app, 'MyStack', {
        ...stackProps,
        ckAccountType: accountType,
      });
      new CkFargateTaskDefinition(myStack, 'FGTaskDef', {
        memoryLimitMiB: actual,
      });

      const template = Template.fromStack(myStack);
      template.hasResourceProperties('AWS::ECS::TaskDefinition', {
        Memory: expected,
      });
    },
  );

  test.each`
      actual       | accountType                  | expected
      ${undefined} | ${CkAccountType.PRODUCTION}  | ${50}
      ${null}      | ${CkAccountType.PRODUCTION}  | ${50}
      ${100}       | ${CkAccountType.PRODUCTION}  | ${100}
      ${undefined} | ${CkAccountType.DEVELOPMENT} | ${21}
      ${null}      | ${CkAccountType.DEVELOPMENT} | ${21}
      ${50}        | ${CkAccountType.DEVELOPMENT} | ${50}
   `(
    'CC-84: task definition ephemeral storage should be $expected when $actual in $accountType',
    ({ actual, accountType, expected }) => {
      const myStack = new CkStack(app, 'MyStack', {
        ...stackProps,
        ckAccountType: accountType,
      });
      new CkFargateTaskDefinition(myStack, 'FGTaskDef', {
        ephemeralStorageGiB: actual,
      });

      const template = Template.fromStack(myStack);
      template.hasResourceProperties('AWS::ECS::TaskDefinition', {
        EphemeralStorage: {
          SizeInGiB: expected,
        },
      });
    },
  );
});
