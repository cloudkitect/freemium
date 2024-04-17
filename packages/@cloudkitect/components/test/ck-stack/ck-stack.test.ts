import { App, RemovalPolicy } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { Bucket } from 'aws-cdk-lib/aws-s3';
import { CkAccountType, CkStack } from '../../lib';

let app: App;
const stackProps = {
  ckAccountType: CkAccountType.PRODUCTION,
  ckApplication: 'Test',
  ckCompany: 'CloudKitect',
};

describe('Well Architected Stack', () => {
  beforeEach(() => {
    app = new App();
  });

  test('Stack default settings', () => {
    const stack = new CkStack(app, 'MyCkStack', {
      ...stackProps,
    });
    const template = Template.fromStack(stack);
    expect(template.toJSON()).toMatchSnapshot();
  });

  test.each`
      prefix       | expected
      ${undefined} | ${''}
      ${null}      | ${''}
      ${''}        | ${''}
      ${'FT'}      | ${'FT'}
   `(
    'Stack id should be $expected when prefix is $prefix',
    ({ prefix, expected }) => {
      const stack = new CkStack(app, 'MyStack', {
        ...stackProps,
        ckPrefix: prefix,
      });
      expect(stack.node.id).toBe(`${expected}MyStack`);
    },
  );

  test('Test get stack', () => {
    const expected = new CkStack(app, 'MyStack', {
      ...stackProps,
    });
    const bucket = new Bucket(expected, 'Bucket');
    const actual = CkStack.findStackOf(bucket);
    expect(actual).toEqual(expected);
  });


  test('Test stack tags', () => {
    const stack = new CkStack(app, 'MyStack', stackProps);

    expect(stack.tags.tagValues()).toStrictEqual({
      CkApplication: stackProps.ckApplication,
      CkCompany: stackProps.ckCompany,
      CkAccountType: stackProps.ckAccountType,
    });
  });


  test.each`
      actual                       | expected
      ${CkAccountType.DEVELOPMENT} | ${false}
      ${CkAccountType.TEST}        | ${false}
      ${CkAccountType.UAT}         | ${false}
      ${CkAccountType.PRODUCTION}  | ${true}
   `(
    'Stack is in production should be $expected when accountType is $actual',
    ({ actual, expected }) => {
      const stack = new CkStack(app, 'MyStack', {
        ...stackProps,
        ckAccountType: actual,
      });
      expect(stack.isProduction()).toBe(expected);
      expect(stack.isNonProduction()).toBe(!expected);
    },
  );

  test.each`
      removalPolicyOverride    | removalPolicy
      ${undefined}             | ${RemovalPolicy.RETAIN}
      ${null}                  | ${RemovalPolicy.RETAIN}
      ${RemovalPolicy.RETAIN}  | ${RemovalPolicy.RETAIN}
      ${RemovalPolicy.DESTROY} | ${RemovalPolicy.DESTROY}
   `(
    'Stack removal policy should be $removalPolicy when removal policy override is $removalPolicyOverride',
    ({ removalPolicyOverride, removalPolicy }) => {
      const stack = new CkStack(app, 'MyStack', {
        ...stackProps,
        ckRemovalPolicyOverride: removalPolicyOverride,
      });
      expect(stack.removalPolicy()).toBe(removalPolicy);
    },
  );

  test.each`
      removalPolicy             | accountType
      ${RemovalPolicy.RETAIN}   | ${CkAccountType.PRODUCTION}
      ${RemovalPolicy.DESTROY}  | ${CkAccountType.DEVELOPMENT}
      ${RemovalPolicy.DESTROY}  | ${CkAccountType.UAT}
      ${RemovalPolicy.DESTROY}  | ${CkAccountType.TEST}
   `(
    'Stack removal policy should be $removalPolicy in $accountType',
    ({ removalPolicy, accountType }) => {
      const stack = new CkStack(app, 'MyStack', {
        ...stackProps,
        ckAccountType: accountType,
      });
      expect(stack.removalPolicy()).toBe(removalPolicy);
    },
  );


  test.each`
      actual                       | expected
      ${CkAccountType.DEVELOPMENT} | ${false}
      ${CkAccountType.TEST}        | ${true}
      ${CkAccountType.UAT}         | ${false}
      ${CkAccountType.PRODUCTION}  | ${false}
   `(
    'Stack is in test should be $expected when accountType is $actual',
    ({ actual, expected }) => {
      const stack = new CkStack(app, 'MyStack', {
        ...stackProps,
        ckAccountType: actual,
      });
      expect(stack.isTest()).toBe(expected);
    },
  );

  test.each`
      actual                       | expected
      ${CkAccountType.DEVELOPMENT} | ${false}
      ${CkAccountType.TEST}        | ${false}
      ${CkAccountType.UAT}         | ${true}
      ${CkAccountType.PRODUCTION}  | ${false}
   `(
    'Stack is in pre-production should be $expected when accountType is $actual',
    ({ actual, expected }) => {
      const stack = new CkStack(app, 'MyStack', {
        ...stackProps,
        ckAccountType: actual,
      });
      expect(stack.isUAT()).toBe(expected);
    },
  );

  test.each`
      actual                       | expected
      ${CkAccountType.DEVELOPMENT} | ${false}
      ${CkAccountType.TEST}        | ${false}
      ${CkAccountType.UAT}         | ${true}
      ${CkAccountType.PRODUCTION}  | ${true}
   `(
    'Stack is production like should be $expected when accountType is $actual',
    ({ actual, expected }) => {
      const stack = new CkStack(app, 'MyStack', {
        ...stackProps,
        ckAccountType: actual,
      });
      expect(stack.isProductionLike()).toBe(expected);
    },
  );

  test.each`
      actual                       | expected
      ${CkAccountType.DEVELOPMENT} | ${true}
      ${CkAccountType.TEST}        | ${true}
      ${CkAccountType.UAT}         | ${false}
      ${CkAccountType.PRODUCTION}  | ${false}
   `(
    'Stack is development like should be $expected when accountType is $actual',
    ({ actual, expected }) => {
      const stack = new CkStack(app, 'MyStack', {
        ...stackProps,
        ckAccountType: actual,
      });
      expect(stack.isDevelopmentLike()).toBe(expected);
    },
  );

  test.each`
      actual                       | expected
      ${CkAccountType.DEVELOPMENT} | ${true}
      ${CkAccountType.TEST}        | ${false}
      ${CkAccountType.UAT}         | ${false}
      ${CkAccountType.PRODUCTION}  | ${false}
   `(
    'Stack is in development should be $expected when accountType is $actual',
    ({ actual, expected }) => {
      const stack = new CkStack(app, 'MyStack', {
        ...stackProps,
        ckAccountType: actual,
      });
      expect(stack.isDevelopment()).toBe(expected);
    },
  );

});
