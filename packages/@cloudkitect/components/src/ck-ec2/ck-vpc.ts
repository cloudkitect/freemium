/*
 * Copyright (c) CloudKitect Inc. All Rights Reserved.
 */

import * as ec2 from 'aws-cdk-lib/aws-ec2';
import { Construct } from 'constructs';
import { CkVendorTags } from '../ck-core/ck-vendor-tags';
import { CkStack } from '../ck-stack/ck-stack';

/**
 * CloudKitect VPC Component properties
 */
export interface CkVpcProps extends ec2.VpcProps {}

/**
 * CloudKitect Virtual Private Cloud - VPC component
 *
 * ### Default Configuration
 * Subnets: Public, Private, Isolated,
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
 * new CkVpc(this, "LogicalId", {});
 * ```
 *
 * Custom Configuration
 * ```ts
 * new CkVpc(this, "LogicalId", {
 *    enableDnsHostnames: false
 * });
 * ```
 *
 * ### Compliance
 * It addresses the following compliance requirements
 * 1. Highly available NAT Gateway in use
 *    >  - Risk Level: Medium
 *    >  - Compliance: APRA, MAS, NIST4
 *    >  - Well Architected Pillar: Performance Efficiency
 * 2. Restrict default security groups
 *    >  - Risk Level: Medium
 *    >  - Compliance: NIST4
 *    >  - Well Architected Pillar: Security
 * 3. Create three subnets Public, Private and Isolated
 *    >  - Risk Level: Medium
 *    >  - Compliance: NIST4
 *    >  - Well Architected Pillar: Security
 */
export class CkVpc extends ec2.Vpc {

  constructor(scope: Construct, id: string, props: CkVpcProps) {
    super(scope, id, {
      ...props,
      // WACDK-226: DNS hostnames
      enableDnsHostnames: props.enableDnsHostnames ?? true,
      enableDnsSupport: props.enableDnsSupport ?? true,

      // CC-5: Remove default security group
      restrictDefaultSecurityGroup:
                props.restrictDefaultSecurityGroup ?? true,

      // CC-45: Environment specific NAT Gateways
      natGateways:
                props.natGateways ??
                (CkStack.findStackOf(scope).isProduction() ? 2 : 1),

      // CC-50: Create 3 subnets by default per AZ
      subnetConfiguration: [
        {
          cidrMask: 24,
          name: 'Public',
          subnetType: ec2.SubnetType.PUBLIC,
        },
        {
          cidrMask: 24,
          name: 'Private',
          subnetType: ec2.SubnetType.PRIVATE_WITH_EGRESS,
        },
        {
          cidrMask: 24,
          name: 'Isolated',
          subnetType: ec2.SubnetType.PRIVATE_ISOLATED,
        },
      ],
    });

    this.applyRemovalPolicy(CkStack.findStackOf(this).removalPolicy());
    CkVendorTags.addTagsTo(this);
  }
}
