/*
 * Copyright (c) CloudKitect Inc. All Rights Reserved.
 */

import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';
import { TablePropsV2, TableV2 } from 'aws-cdk-lib/aws-dynamodb';
import { Construct } from 'constructs';
import { CkVendorTags } from '../ck-core/ck-vendor-tags';
import { CkStack } from '../ck-stack/ck-stack';

/**
 * CloudKitect DynamodDB Table Component Properties
 */
export interface CkTableV2Props extends TablePropsV2 {
}

/**
 * CloudKitect DynamoDB Table V2 component
 *
 * ### Default Configuration
 * * Encryption: Keys managed by AWS in customer account
 *
 * ### Default Alarms
 * Available only in Enhanced components
 *
 * ### Logging and Monitoring
 * Available only in Enhanced components
 *
 * ### Backups
 * Available only in Enhanced components
 *
 * ### Examples
 * Default Usage
 * ```ts
 * new CkTableV2(this, "LogicalId", {});
 * ```
 *
 * Custom Configuration
 * ```ts
 * new CkTableV2(this, "LogicalId", {
 *    encryption: TableEncryption.AWS_MANAGED
 * });
 * ```
 *
 * ### Compliance
 * It addresses the following compliance requirements
 * 1. DynamoDB point in time recovery
 *    >  - Risk Level: High
 *    >  - Compliance: NIST4
 *    >  - Well Architected Pillar: Reliability
 * 2. Encryption key in customer account
 *    >  - Risk Level: Medium
 *    >  - Compliance: NIST4
 *    >  - Well Architected Pillar: Security
 *
 *    ![Compliance Check Report](http://cloudkitect.com/wp-content/uploads/2024/01/dynamodb-compliance.png)
 */
export class CkTableV2 extends TableV2 {

  private static getEncryptionStrategy(
    scope: Construct,
  ): dynamodb.TableEncryptionV2 {
    return CkStack.findStackOf(scope).isProduction()
      ? dynamodb.TableEncryptionV2.awsManagedKey()
      : dynamodb.TableEncryptionV2.dynamoOwnedKey();
  }

  private static getTableClassStrategy(scope: Construct): dynamodb.TableClass {
    return CkStack.findStackOf(scope).isProduction()
      ? dynamodb.TableClass.STANDARD
      : dynamodb.TableClass.STANDARD_INFREQUENT_ACCESS;
  }

  constructor(scope: Construct, id: string, props: CkTableV2Props) {
    super(scope, id, {
      ...props,

      // CC-361: Point in time
      pointInTimeRecovery:
                props.pointInTimeRecovery ?? CkStack.findStackOf(scope).isProduction(),

      // CC-360: Default encryption
      encryption: props.encryption ?? CkTableV2.getEncryptionStrategy(scope),

      // CC-202: Table class
      tableClass: props.tableClass ?? CkTableV2.getTableClassStrategy(scope),

      // CC-365: contributor insights
      contributorInsights: props.contributorInsights ?? true,
    });

    CkVendorTags.addTagsTo(this);
  }
}
