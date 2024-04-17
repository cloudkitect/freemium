/*
 * Copyright (c) CloudKitect Inc. All Rights Reserved.
 */

import { App } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import {
  AttributeType,
  TableClass,
  TableEncryptionV2,
} from 'aws-cdk-lib/aws-dynamodb';
import { CkAccountType, CkStack } from '../../lib';
import { CkTableV2 } from '../../src';

let app: App;
let stack: CkStack;
const stackProps = {
  ckAccountType: CkAccountType.PRODUCTION,
  ckApplication: 'Test',
  ckCompany: 'CloudKitect',
};

describe('Well Architected DynamoDB Table V2', () => {
  beforeEach(() => {
    app = new App();
    stack = new CkStack(app, 'TestStack', stackProps);
  });

  test('default table configurations', () => {
    new CkTableV2(stack, 'WaTable', {
      partitionKey: { name: 'id', type: AttributeType.STRING },
    });

    const template = Template.fromStack(stack);
    expect(template.toJSON()).toMatchSnapshot();
  });


  test.each`
      actual       | expected | accountType
      ${undefined} | ${true}  | ${CkAccountType.PRODUCTION}
      ${null}      | ${true}  | ${CkAccountType.PRODUCTION}
      ${false}     | ${false} | ${CkAccountType.PRODUCTION}
      ${undefined} | ${false} | ${CkAccountType.DEVELOPMENT}
      ${true}      | ${true}  | ${CkAccountType.DEVELOPMENT}
   `(
    'CC-361: PITR should be $expected when $actual in $accountType',
    ({ actual, expected, accountType }) => {
      const myStack = new CkStack(app, 'MyStack', {
        ...stackProps,
        ckAccountType: accountType,
      });

      new CkTableV2(myStack, 'CkTable', {
        partitionKey: { name: 'id', type: AttributeType.STRING },
        pointInTimeRecovery: actual,
      });

      const template = Template.fromStack(myStack);
      template.hasResourceProperties('AWS::DynamoDB::GlobalTable', {
        Replicas: [
          {
            PointInTimeRecoverySpecification: {
              PointInTimeRecoveryEnabled: expected,
            },
            Region: {
              Ref: 'AWS::Region',
            },
          },
        ],
      });
    },
  );

  test.each`
      actual                                | expected                                | accountType
      ${undefined}                          | ${{ SSEEnabled: true, SSEType: 'KMS' }} | ${CkAccountType.PRODUCTION}
      ${null}                               | ${{ SSEEnabled: true, SSEType: 'KMS' }} | ${CkAccountType.PRODUCTION}
      ${TableEncryptionV2.dynamoOwnedKey()} | ${{ SSEEnabled: false }}                | ${CkAccountType.PRODUCTION}
      ${undefined}                          | ${{ SSEEnabled: false }}                | ${CkAccountType.DEVELOPMENT}
   `(
    'CC-360: encryption should be $expected when $actual in $accountType',
    ({ actual, expected, accountType }) => {
      const myStack = new CkStack(app, 'MyStack', {
        ...stackProps,
        ckAccountType: accountType,
      });

      new CkTableV2(myStack, 'WaTable', {
        partitionKey: { name: 'id', type: AttributeType.STRING },
        encryption: actual,
      });

      const template = Template.fromStack(myStack);
      template.hasResourceProperties('AWS::DynamoDB::GlobalTable', {
        SSESpecification: expected,
      });
    },
  );

  test.each`
      actual       | expected
      ${undefined} | ${true}
      ${null}      | ${true}
      ${false}     | ${false}
   `(
    'CC-365: contributor insights should be $expected when $actual in $accountType',
    ({ actual, expected }) => {
      new CkTableV2(stack, 'CkTable', {
        partitionKey: { name: 'id', type: AttributeType.STRING },
        contributorInsights: actual,
      });

      const template = Template.fromStack(stack);
      template.hasResourceProperties('AWS::DynamoDB::GlobalTable', {
        Replicas: [
          {
            ContributorInsightsSpecification: {
              Enabled: expected,
            },
          },
        ],
      });
    },
  );

  test.each`
      actual                                   | expected                                 | accountType
      ${undefined}                             | ${TableClass.STANDARD}                   | ${CkAccountType.PRODUCTION}
      ${null}                                  | ${TableClass.STANDARD}                   | ${CkAccountType.PRODUCTION}
      ${TableClass.STANDARD_INFREQUENT_ACCESS} | ${TableClass.STANDARD_INFREQUENT_ACCESS} | ${CkAccountType.PRODUCTION}
      ${undefined}                             | ${TableClass.STANDARD_INFREQUENT_ACCESS} | ${CkAccountType.DEVELOPMENT}
   `(
    'CC-202: table class should be $expected when $actual in $accountType',
    ({ actual, expected, accountType }) => {
      const myStack = new CkStack(app, 'MyStack', {
        ...stackProps,
        ckAccountType: accountType,
      });

      new CkTableV2(myStack, 'WaTable', {
        partitionKey: { name: 'id', type: AttributeType.STRING },
        tableClass: actual,
      });

      const template = Template.fromStack(myStack);
      template.hasResourceProperties('AWS::DynamoDB::GlobalTable', {
        Replicas: [
          {
            TableClass: expected,
          },
        ],
      });
    },
  );


});
