/*
 * Copyright (c) CloudKitect Inc. All Rights Reserved.
 */

import { Construct } from 'constructs';
import { CkCluster, CkClusterProps } from './ck-cluster';
import { CkVendorTags } from '../ck-core/ck-vendor-tags';
import { CkStack } from '../ck-stack/ck-stack';

/**
 * CloudKitect Fargate Cluster component properties
 */
export interface CkFargateClusterProps extends CkClusterProps {}

/**
 * CloudKitect ECS cluster component backed by Fargate capacity provider is a regional grouping of
 * one or more container instances on which you can run tasks and services and enables container insights,
 *
 * ### Default Alarms
 *
 * ### Examples
 * Default Usage
 * ```ts
 * new CcFargateCluster(this, "LogicalId", {});
 * ```
 *
 * Custom Configuration
 * ```ts
 * new CcFargateCluster(this, "LogicalId", {
 *    containerInsights: false
 * });
 * ```
 *
 * ### Compliance
 * It addresses the following compliance requirements
 * 1. Cluster insights enabled
 *    >  - Risk Level: Medium
 *    >  - Compliance: NA
 *    >  - Well Architected Pillar: Operational Excellence
 */
export class CkFargateCluster extends CkCluster {
  constructor(scope: Construct, id: string, props: CkFargateClusterProps) {
    super(scope, id, {
      ...props,
      // CC-322: Fargate capacity provider
      enableFargateCapacityProviders: true,
    });

    this.applyRemovalPolicy(CkStack.findStackOf(this).removalPolicy());

    CkVendorTags.addTagsTo(this);
  }
}
