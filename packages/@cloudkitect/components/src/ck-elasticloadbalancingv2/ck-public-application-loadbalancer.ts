/*
 * Copyright (c) CloudKitect Inc. All Rights Reserved.
 */

import * as ec2 from 'aws-cdk-lib/aws-ec2';
import { SecurityGroup } from 'aws-cdk-lib/aws-ec2';
import * as elbv2 from 'aws-cdk-lib/aws-elasticloadbalancingv2';
import { Construct } from 'constructs';
import { CkVendorTags } from '../ck-core/ck-vendor-tags';
import { CkStack } from '../ck-stack/ck-stack';

/**
 * CloudKitect  Public Application Load Balancer component properties.
 */
export interface CkPublicApplicationLoadBalancerProps
  extends elbv2.ApplicationLoadBalancerProps {
}

/**
 * CloudKitect Public Application Load Balancer component.
 * This load balancer is created in public subnet
 *
 * ### Default Configuration
 * Drop Invalid header fields: true
 * Removal Policy: Retain in Production
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
 * new CkPublicApplicationLoadbalancer(this, "LogicalId", {});
 * ```
 *
 * Custom Configuration
 * ```ts
 * new CkPublicApplicationLoadbalancer(this, "LogicalId", {
 *    deletionProtection: false
 * });
 * ```
 *
 * ### Compliance
 * It addresses the following compliance requirements
 * 1. Ensure ALB is always using https, by redirecting http to https
 *    >  - Risk Level: High
 *    >  - Compliance: PCI, APRA, NIST4
 *    >  - Well Architected Pillar: Security
 * 2. Security group to only allow https traffic
 *    >  - Risk Level: High
 *    >  - Compliance: PCI, APRA, MAS, NIST4
 *    >  - Well Architected Pillar: Security
 *
 */
export class CkPublicApplicationLoadbalancer extends elbv2.ApplicationLoadBalancer {

  /**
     * Security group created inside load balancer that only allows traffic from https
     */
  public readonly lbSecurityGroup: SecurityGroup;

  constructor(
    scope: Construct,
    id: string,
    props: CkPublicApplicationLoadBalancerProps,
  ) {
    super(scope, id, {
      ...props,
      // CC-261: Public facing application load balancer
      internetFacing: true,

      // CC-265: Invalid header fields should be dropped
      dropInvalidHeaderFields: props.dropInvalidHeaderFields ?? true,
    });

    // CC-262: Create redirect from http to https
    this.addRedirect({
      sourcePort: 80,
      sourceProtocol: elbv2.ApplicationProtocol.HTTP,
      targetPort: 443,
      targetProtocol: elbv2.ApplicationProtocol.HTTPS,
    });

    // CC-263: ALB security group
    this.lbSecurityGroup = new ec2.SecurityGroup(
      this,
      'LoadBalancerSecurityGroup',
      {
        vpc: props.vpc,
        allowAllOutbound: true,
        description: 'Public Load Balancer Security Group',
      },
    );
    this.lbSecurityGroup.addIngressRule(
      ec2.Peer.anyIpv4(),
      ec2.Port.tcp(443),
      'All https traffic',
    );
    this.lbSecurityGroup.addEgressRule(
      ec2.Peer.ipv4('0.0.0.0/0'),
      ec2.Port.allTraffic(),
      'All outgoing traffic',
    );

    this.applyRemovalPolicy(CkStack.findStackOf(this).removalPolicy());

    CkVendorTags.addTagsTo(this);
  }
}
