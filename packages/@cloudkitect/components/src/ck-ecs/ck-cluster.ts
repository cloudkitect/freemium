/*
 * Copyright (c) CloudKitect Inc. All Rights Reserved.
 */

import * as ecs from 'aws-cdk-lib/aws-ecs';
import { Construct } from 'constructs';
import { CkVendorTags } from '../ck-core/ck-vendor-tags';
import { CkVpc } from '../ck-ec2/ck-vpc';
import { CkStack } from '../ck-stack/ck-stack';

/**
 * CloudKitect Cluster component properties
 */
export interface CkClusterProps extends ecs.ClusterProps {}

/**
 * CloudKitect ECS cluster component is a regional grouping of one or more container instances on
 * which you can run tasks and services and enables container insights,
 *
 * ### Default Configuration
 * New VPC is created by default.
 *
 * ### Default Alarms
 * Available only in Enhanced components
 *
 * ### Logging and Monitoring
 * Available only in Enhanced components
 *
 * ### Examples
 * Default Usage
 * ```ts
 * new CkCluster(this, "LogicalId", {});
 * ```
 *
 * Custom Configuration
 * ```ts
 * new CkCluster(this, "LogicalId", {
 *    containerInsights: false
 * });
 * ```
 *
 * ### Compliance
 * It addresses the following compliance requirements
 *
 */
export class CkCluster extends ecs.Cluster {
  constructor(scope: Construct, id: string, props: CkClusterProps) {
    super(scope, id, {
      ...props,
      // CC-80: ECS Cluster should allow container insights by default for production
      containerInsights:
                props.containerInsights ?? CkStack.findStackOf(scope).isProduction(),

      // CC-81: VPC
      vpc: props.vpc ?? new CkVpc(scope, 'ClusterVPC', {}),
    });

    CkVendorTags.addTagsTo(this);
  }
}
