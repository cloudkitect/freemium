/*
 * Copyright (c) CloudKitect Inc. All Rights Reserved.
 */

import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as ecs from 'aws-cdk-lib/aws-ecs';
import { Construct } from 'constructs';
import { CkVendorTags } from '../ck-core/ck-vendor-tags';
import { CkStack } from '../ck-stack/ck-stack';

/**
 * CloudKitect Fargate Service component properties
 */
export interface CkFargateServiceProps extends ecs.FargateServiceProps {}

/**
 * CloudKitect Fargate Service component to run tasks
 *
 * ### Default Configuration
 * VPC Subnet: Private
 *
 * ### Default Alarms
 * Available only in Enhanced components
 *
 * ### Logging and Monitoring
 * Available only in Enhanced components
 *
 * ### Examples
 * ```ts
 * new CkFargateService(this, "LogicalId", {});
 * ```
 *
 * Custom Configuration
 * ```ts
 * new CkFargateService(this, "LogicalId", {
 *    assignPublicIp: true
 * });
 * ```
 *
 * ### Compliance
 * It addresses the following compliance requirements
 * 1. Do not assign public IP
 *    >  - Risk Level: Medium
 *    >  - Compliance: NIST4
 *    >  - Well Architected Pillar:  Security
 */
export class CkFargateService extends ecs.FargateService {

  constructor(scope: Construct, id: string, props: CkFargateServiceProps) {
    super(scope, id, {
      ...props,

      // CC-85: Do not assign public IP address to Fargate Service
      assignPublicIp: props.assignPublicIp ?? false,

      // CC-89: Fargate Service should have circuit breaker with rollback failed deployments
      circuitBreaker: props.circuitBreaker ?? { rollback: true },

      // CC-94: vpc subnet logic
      vpcSubnets: props.vpcSubnets ?? {
        subnetType: ec2.SubnetType.PRIVATE_WITH_EGRESS,
      },
    });

    this.applyRemovalPolicy(CkStack.findStackOf(this).removalPolicy());

    CkVendorTags.addTagsTo(this);
  }

}
