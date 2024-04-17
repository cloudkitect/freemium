/*
 * Copyright (c) CloudKitect Inc. All Rights Reserved.
 */

import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import {
  BehaviorOptions,
  Distribution,
  DistributionProps,
  PriceClass,
  ViewerProtocolPolicy,
} from 'aws-cdk-lib/aws-cloudfront';
import { Construct } from 'constructs';
import { CkVendorTags } from '../ck-core/ck-vendor-tags';
import { CkStack } from '../ck-stack/ck-stack';

/**
 * CloudKitect Cloudfront Distribution Component Properties
 */
export interface CkDistributionProps extends DistributionProps {}

/**
 * CloudKitect CloudFront Distribution Component.
 *
 * ### Default Configuration
 * Http Protocol: Redirect to Https
 * Protocol Version: SecurityPolicyProtocol.TLS_V1_2_2021
 *
 * ### Default Alarms
 * Available only in Enhanced components
 *
 * ### Logging and Monitoring
 * Available only in Enhanced components
 *
 *
 * ### Examples
 * Default Usage
 * ```ts
 * new CkDistribution(this, "LogicalId", {});
 * ```
 *
 * ### Compliance
 * It addresses the following compliance requirements
 * 1. Cloudfront origin should not use insecure protocols
 *    >  - Risk Level: Medium
 *    >  - Compliance: PCI, HIPAA, APRA, MAS, NIST4
 *    >  - Well Architected Pillar: Security
 * 2. Cloudfront uses enhanced security policy min TLS1.2
 *    >  - Risk Level: High
 *    >  - Compliance: PCI, HIPAA, MAS, NIST4
 *    >  - Well Architected Pillar: Security
 * 3. Cloudfront uses only secure protocol to communicate with origin
 *    >  - Risk Level: Medium
 *    >  - Compliance: PCI, HIPAA, APRA, MAS, NIST4
 *    >  - Well Architected Pillar: Security
 * 4. Cloudfront uses only secure protocol to communicate with end users
 *    >  - Risk Level: High
 *    >  - Compliance: PCI, HIPAA, NIST4
 *    >  - Well Architected Pillar: Security
 * 5. Use appropriate class for each environment to save cost
 *    >  - Risk Level: Low
 *    >  - Compliance: NA
 *    >  - Well Architected Pillar: Cost Optimization
 *
 */

export class CkDistribution extends Distribution {

  private static getWellArchitectedDefaultBehavior(
    defaultBehavior: BehaviorOptions,
  ): BehaviorOptions {
    return {
      ...defaultBehavior,
      // CC-312: CloudFront should only allow HTTPS from viewers
      viewerProtocolPolicy:
                defaultBehavior.viewerProtocolPolicy ??
                ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
    };
  }

  constructor(scope: Construct, id: string, props: CkDistributionProps) {
    super(scope, id, {
      ...props,
      defaultBehavior: CkDistribution.getWellArchitectedDefaultBehavior(
        props.defaultBehavior,
      ),
      defaultRootObject: props.defaultRootObject ?? 'index.html',

      // CC-313: Latest TLS protocol
      minimumProtocolVersion:
                props.minimumProtocolVersion ??
                cloudfront.SecurityPolicyProtocol.TLS_V1_2_2021,

      // CC-28: Cost optimization
      priceClass:
                props.priceClass ??
                (CkStack.findStackOf(scope).isProduction()
                  ? PriceClass.PRICE_CLASS_ALL
                  : PriceClass.PRICE_CLASS_100),
    });

    this.applyRemovalPolicy(CkStack.findStackOf(this).removalPolicy());

    CkVendorTags.addTagsTo(this);
  }
}
