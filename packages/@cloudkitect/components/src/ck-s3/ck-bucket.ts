/*
 * Copyright (c) CloudKitect Inc. All Rights Reserved.
 */

import * as s3 from 'aws-cdk-lib/aws-s3';
import {
  BucketEncryption,
} from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';
import { CkVendorTags } from '../ck-core/ck-vendor-tags';
import { CkStack } from '../ck-stack/ck-stack';

/**
 * CloudKitect Bucket component properties
 */
export interface CkBucketProps extends s3.BucketProps {}

/**
 * CloudKitect S3 Bucket component
 *
 * ### Default Configuration
 * Encryption: S3 Managed
 * Versioned: True
 * Removal Policy: Retain in Production
 *
 * ### Default Alarms
 * Available only in Enhanced components
 *
 * ### Logging and Monitoring
 * Available only in Enhanced components
 *
 * Note that the default alarm uses the CcAlarm construct, which sets up an alarm
 * action to notify the SNS Topic *AlarmEventsTopic* by default.
 *
 * ### Examples
 * Default Usage
 * ```ts
 * new CkBucket(this, "LogicalId", {
 * });
 * ```
 *
 * Custom Configuration
 * ```ts
 * new CkBucket(this, "LogicalId", {
 *    enforceSSL: false
 * });
 * ```
 *
 * ### Compliance
 * It addresses the following compliance requirements
 * 1. Blocks public access
 *    >  - Risk Level: Medium
 *    >  - Compliance: PCI, HIPAA, GDPR, APRA, MAS, NIST4
 *    >  - Well Architected Pillar: Security
 * 2. Bucket versioning enabled in Production Environment
 *    >  - Risk Level: Low
 *    >  - Compliance: PCI, APRA, MAS, NIST4
 *    >  - Well Architected Pillar: Reliability
 * 3. Block S3 Bucket Public 'READ' Access
 *    >  - Risk Level: Very High
 *    >  - Compliance: PCI, GDPR, ARPA, MAS, NIST4
 *    >  - Well Architected Pillar: Security
 * 4. Only allow secure transport protocols
 *    >  - Risk Level: High
 *    >  - Compliance: PCI, APRA, MAS, NIST4
 *    >  - Well Architected Pillar: Security
 * 5. Server side encryption
 *    >  - Risk Level: High
 *    >  - Compliance: PCI, HIPAA, GDPR, APRA, MAS, NIST4
 *    >  - Well Architected Pillar: Security
 *
 */
export class CkBucket extends s3.Bucket {

  constructor(scope: Construct, id: string, props: CkBucketProps) {
    super(scope, id, {
      ...props,

      // CC-59: Ensure buckets are encrypted by default
      encryption: props.encryption ?? BucketEncryption.S3_MANAGED,

      // CC-68: Enforce Secure Transport by default
      enforceSSL: props.enforceSSL ?? true,

      // CC-62: Block S3 Bucket Public 'READ' Access
      publicReadAccess: props.publicReadAccess ?? false,

      // CC-49: Enable S3 Block Public Access for S3 Buckets
      blockPublicAccess: props.blockPublicAccess ?? s3.BlockPublicAccess.BLOCK_ALL,

      // CC-63: S3 Bucket Versioning Enabled
      versioned: props.versioned ?? CkStack.findStackOf(scope).isProduction(),

    });

    CkVendorTags.addTagsTo(this);
  }

}
