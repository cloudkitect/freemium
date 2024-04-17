import { App } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { TagMutability } from 'aws-cdk-lib/aws-ecr';
import { CkAccountType, CkStack } from '../../lib';
import { CkRepository } from '../../src/ck-ecr/ck-repository';

let app: App;
let stack: CkStack;

const stackProps = {
  ckAccountType: CkAccountType.PRODUCTION,
  ckApplication: 'Test',
  ckCompany: 'CloudKitect',
};

describe('Well Architected ECR Repository', () => {
  beforeEach(() => {
    app = new App();
    stack = new CkStack(app, 'Test-Stack', { ...stackProps });
  });

  test('default repository settings', () => {
    new CkRepository(stack, 'MyRepo', {});

    const template = Template.fromStack(stack);
    expect(template.toJSON()).toMatchSnapshot();
  });

  test.each`
      actual       | expected
      ${undefined} | ${true}
      ${null}      | ${true}
      ${false}     | ${false}
      ${true}      | ${true}
   `(
    'CC-75: Image scan should be $expected when $actual',
    ({ actual, expected }) => {
      new CkRepository(stack, 'MyRepo', {
        imageScanOnPush: actual,
      });

      const template = Template.fromStack(stack);
      template.hasResourceProperties('AWS::ECR::Repository', {
        ImageScanningConfiguration: {
          ScanOnPush: expected,
        },
      });
    },
  );

  test.each`
      actual       | expected
      ${undefined} | ${'KMS'}
      ${null}      | ${'KMS'}
   `(
    'CC-78: Repository encryption should be $expected when $actual',
    ({ actual, expected }) => {
      new CkRepository(stack, 'MyRepo', {
        lifecycleRules: actual,
      });

      const template = Template.fromStack(stack);
      template.hasResourceProperties('AWS::ECR::Repository', {
        EncryptionConfiguration: {
          EncryptionType: expected,
        },
      });
    },
  );

  test.each`
      actual                   | expected
      ${undefined}             | ${'IMMUTABLE'}
      ${null}                  | ${'IMMUTABLE'}
      ${TagMutability.MUTABLE} | ${'MUTABLE'}
   `(
    'CC-79: Image immutability should be $expected when $actual',
    ({ actual, expected }) => {
      new CkRepository(stack, 'MyRepo', {
        imageTagMutability: actual,
      });

      const template = Template.fromStack(stack);
      template.hasResourceProperties('AWS::ECR::Repository', {
        ImageTagMutability: expected,
      });
    },
  );
});
