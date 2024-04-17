/*
 * Copyright (c) CloudKitect Inc. All Rights Reserved.
 */

import * as ecs from 'aws-cdk-lib/aws-ecs';
import { Construct } from 'constructs';
import { CkVendorTags } from '../ck-core/ck-vendor-tags';
import { CkStack } from '../ck-stack/ck-stack';

/**
 * Well Architected Fargate Task Definition properties
 */
export interface CkFargateTaskDefinitionProps
  extends ecs.FargateTaskDefinitionProps {}

/**
 * Well Architected Fargate Task Definition component
 *
 * ### Default Configuration
 * CPU: 2048 (2vCPU) for Production
 * Memory: 4096 GB for Production
 * Storage: 50 GB for Production
 *
 * ### Default Alarms
 * None
 *
 * Note that the default alarm uses the CcAlarm construct, which sets up an alarm
 * action to notify the SNS Topic *AlarmEventsTopic* by default.
 *
 * ### Examples
 * Default Usage
 * ```ts
 * new CcFargateTaskDefinition(this, "LogicalId", {});
 * ```
 *
 * Custom Configuration
 * ```ts
 * new CcFargateTaskDefinition(this, "LogicalId", {
 *    cpu: 2048
 * });
 * ```
 *
 * ### Compliance
 * It addresses the following compliance requirements
 * 1. Encrypted storage
 *    >  - Risk Level: High
 *    >  - Compliance: NIST4
 *    >  - Well Architected Pillar: Security
 * 2. Cost Optimization
 *    >  - Risk Level: Low
 *    >  - Compliance: NA
 *    >  - Well Architected Pillar: Cost Optimization
 *
 */
export class CkFargateTaskDefinition extends ecs.FargateTaskDefinition {
  constructor(
    scope: Construct,
    id: string,
    props: CkFargateTaskDefinitionProps,
  ) {
    super(scope, id, {
      ...props,

      // CC-82: FargateTaskDefinition should have environment dependent cpu capacity
      cpu: props.cpu ?? (CkStack.findStackOf(scope).isProduction() ? 2048 : 256),

      // CC-83: FargateTaskDefinition should have environment dependent memory capacity
      memoryLimitMiB:
                props.memoryLimitMiB ??
                (CkStack.findStackOf(scope).isProduction() ? 4096 : 512),

      // CC-84: FargateTaskDefinition should have environment dependent ephemeral storage capacity
      ephemeralStorageGiB:
                props.ephemeralStorageGiB ??
                (CkStack.findStackOf(scope).isProduction() ? 50 : 21),
    });

    this.applyRemovalPolicy(CkStack.findStackOf(this).removalPolicy());

    CkVendorTags.addTagsTo(this);
  }
}
