/*
 * Copyright (c) CloudKitect Inc. All Rights Reserved.
 */

import * as ecr from 'aws-cdk-lib/aws-ecr';
import { RepositoryEncryption, TagMutability } from 'aws-cdk-lib/aws-ecr';
import { Construct } from 'constructs';
import { CkVendorTags } from '../ck-core/ck-vendor-tags';

/**
 * CloudKitect ECR Repository component properties
 */
export interface CkRepositoryProps extends ecr.RepositoryProps {}

/**
 * CloudKitect ECR Repository component used for creating ECR repositories.
 *
 * ### Default Configuration
 * Encryption: KMS (AWS Managed Keys)
 * Image Immutable: true
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
 * new CkRepository(this, "LogicalId", {});
 * ```
 *
 * Custom Configuration
 * ```ts
 * new CkRepository(this, "LogicalId", {
 *    imageScanOnPush: false
 * });
 * ```
 *
 * ### Compliance
 * It addresses the following compliance requirements
 * 1. Enable scan on image push
 *    >  - Risk Level: Medium
 *    >  - Compliance: NA
 *    >  - Well Architected Pillar: Security
 * 2. Repository should be encrypted
 *    >  - Risk Level: Medium
 *    >  - Compliance: NA
 *    >  - Well Architected Pillar: Security
 * 3. Images tags should be immutable
 *    >  - Risk Level: Medium
 *    >  - Compliance: NA
 *    >  - Well Architected Pillar: Security, Operational Excellence
 *
 *      ![Compliance Check Report](http://cloudkitect.com/wp-content/uploads/2024/01/ecr-compliance.png)
 */
export class CkRepository extends ecr.Repository {
  constructor(scope: Construct, id: string, props: CkRepositoryProps) {
    super(scope, id, {
      ...props,
      // CC-75: Repository shroud have auto scan by default
      imageScanOnPush: props.imageScanOnPush ?? true,

      // CC-79: Image tags should be immutable
      imageTagMutability:
                props.imageTagMutability ?? TagMutability.IMMUTABLE,

      // CC-78: Repository Encrypted
      encryption: props.encryption ?? RepositoryEncryption.KMS,
    });

    CkVendorTags.addTagsTo(this);
  }
}
