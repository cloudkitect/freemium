/*
 * Copyright (c) CloudKitect Inc. All Rights Reserved.
 */

import {
  Certificate,
  CertificateProps,
  CertificateValidation,
} from 'aws-cdk-lib/aws-certificatemanager';
import { IHostedZone } from 'aws-cdk-lib/aws-route53';
import { Construct } from 'constructs';
import { CkVendorTags } from '../ck-core/ck-vendor-tags';
import { CkStack } from '../ck-stack/ck-stack';

/**
 * CloudKitect DnsValidatedCertificate Component Properties
 */
export interface CkDnsValidatedCertificateProps extends CertificateProps{
  /**
     * Hosted zone
     */
  readonly ckHostedZone: IHostedZone;
}

/**
 * CloudKitect DnsValidatedCertificate Component.
 *
 * ### Default Configuration
 *
 * ### Default Alarms
 * Available in Enhanced components only
 *
 * ### Logging and Monitoring
 * Available only in Enhanced components
 *
 * ### Examples
 * Default Usage
 * ```ts
 * new CkDnsValidatedCertificate(this, "LogicalId", {
 *     domainName: "cloudkitect.com"
 * });
 * ```
 *
 * ### Compliance
 * None
 *
 */
export class CkDnsValidatedCertificate extends Certificate {

  constructor(
    scope: Construct,
    id: string,
    props: CkDnsValidatedCertificateProps,
  ) {
    super(scope, id, {
      ...props,
      validation: CertificateValidation.fromDns(props.ckHostedZone),
    });

    this.applyRemovalPolicy(CkStack.findStackOf(this).removalPolicy());

    CkVendorTags.addTagsTo(this);
  }
}
