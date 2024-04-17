/*
 * Copyright (c) CloudKitect Inc. All Rights Reserved.
 */

import { Tags } from 'aws-cdk-lib';
import { Construct } from 'constructs';

/**
 * Class to add CloudKitect specific tags to all constructs
 */
export class CkVendorTags {
  public static addTagsTo(scope: Construct): void {
    Tags.of(scope).add('CkVendor', 'CloudKitect', {
      priority: 300,
    });
    Tags.of(scope).add('CkComponents', '2.128.0', {
      priority: 400,
    });
  }
}
