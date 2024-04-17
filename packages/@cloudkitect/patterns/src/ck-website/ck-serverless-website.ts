/*
 * Copyright (c) CloudKitect Inc. All Rights Reserved.
 */
import {
  CkBucket,
  CkBucketProps,
  CkDistribution,
  CkDnsValidatedCertificate,
  CkStack,
  CkVendorTags,
} from '@cloudkitect/components';
import * as cdk from 'aws-cdk-lib';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import * as cloudfront_origins from 'aws-cdk-lib/aws-cloudfront-origins';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as route53 from 'aws-cdk-lib/aws-route53';
import * as targets from 'aws-cdk-lib/aws-route53-targets';
import * as s3deploy from 'aws-cdk-lib/aws-s3-deployment';
import { Construct } from 'constructs';


/**
 * CloudKitect Serverless Website Pattern Properties
 */
export interface CkServerlessWebsiteProps {
  /**
     * Domain name
     */
  readonly ckDomainName: string;
  /**
     * Subdomain name e.g. www
     * @default www
     */
  readonly ckSubdomain?: string;
  /**
     * Location of website content
     */
  readonly ckPathToContent: string;
  /**
     * Root object of the website, e.g. index.html
     * @default index.html
     */
  readonly ckDefaultRootObject?: string;
  /**
     * Additional bucket policy actions
     * @default s3:GetObject
     */
  readonly ckBucketPolicyActions?: string[];
  /**
     * Bucket properties to override defaults
     */
  readonly ckBucketProps?: CkBucketProps;
  /**
     * Origin Access Identity to override defaults
     * @default A new one is created
     */
  readonly ckOriginAccessIdentity?: cloudfront.OriginAccessIdentity;
  /**
     * Flag to enable or disable CloudFront logging
     * @default false
     */
  readonly ckEnableCloudFrontLogging?: boolean;
  /**
     * Override default CloudFront Distribution behavior
     */
  readonly ckCloudFrontDistributionDefaultBehavior?: cloudfront.BehaviorOptions;
  /**
     * Hosted zone properties
     */
  readonly ckHostedZone?: route53.IHostedZone;
}


/**
 * CloudKitect Serverless Website Pattern Properties
 *
 * ### Infrastructure Diagram
 *
 * ### Default Configuration
 * Validated public certificate for the API domain
 * Cloudfront Distribution
 *
 * Note: This construct expects a HostedZone present in the same AWS account
 *
 * ### Default Alarms
 * Available only in Enhanced components
 *
 * ### Logging and Monitoring
 * Available only in Enhanced components
 *
 *
 * ### Examples
 * Default Usage, if HostedZone is in the same account
 * ```ts
 * new CkServerlessWebsite(this, "LogicalId", {
 *      ckDomainName: 'example.com',
 *      ckSubdomain: "www",
 *      ckPathToContent: './site-content'
 * });
 * ```
 *
 * ### Compliance
 * It addresses the following compliance requirements
 * 1. Blocks public access
 *    >  - Risk Level: Medium
 *    >  - Compliance: PCI, HIPAA, GDPR, APRA, MAS, NIST4
 *    >  - Well Architected Pillar: Security
 * 2. Block S3 Bucket Public 'READ' Access
 *    >  - Risk Level: Very High
 *    >  - Compliance: PCI, GDPR, ARPA, MAS, NIST4
 *    >  - Well Architected Pillar: Security
 * 3. Only allow secure transport protocols
 *    >  - Risk Level: High
 *    >  - Compliance: PCI, APRA, MAS, NIST4
 *    >  - Well Architected Pillar: Security
 * 4. Server side encryption
 *    >  - Risk Level: High
 *    >  - Compliance: PCI, HIPAA, GDPR, APRA, MAS, NIST4
 *    >  - Well Architected Pillar: Security
 * 5. S3 Bucket Block ACLs
 *    >  - Risk Level: Very High
 *    >  - Compliance: PCI, APRA, MAS, NIST4
 *    >  - Well Architected Pillar: Security
 * 6. Cloudfront origin should not use insecure protocols
 *    >  - Risk Level: Medium
 *    >  - Compliance: PCI, HIPAA, APRA, MAS, NIST4
 *    >  - Well Architected Pillar: Security
 * 7. Cloudfront uses enhanced security policy min TLS1.2
 *    >  - Risk Level: High
 *    >  - Compliance: PCI, HIPAA, MAS, NIST4
 *    >  - Well Architected Pillar: Security
 * 8. Cloudfront uses only secure protocol to communicate with origin
 *    >  - Risk Level: Medium
 *    >  - Compliance: PCI, HIPAA, APRA, MAS, NIST4
 *    >  - Well Architected Pillar: Security
 * 9. Cloudfront uses only secure protocol to communicate with end users
 *    >  - Risk Level: High
 *    >  - Compliance: PCI, HIPAA, NIST4
 *    >  - Well Architected Pillar: Security
 * 10. Enable origin access identify for S3 origins
 *    >  - Risk Level: Medium
 *    >  - Compliance: NA
 *    >  - Well Architected Pillar: Security
 */
export class CkServerlessWebsite extends Construct {
  /**
     * Bucket hosting website content
     */
  readonly websiteBucket: CkBucket;

  /**
     * Origin Access Identity
     */
  readonly cloudfrontOAI: cloudfront.OriginAccessIdentity;

  /**
     * CloudFront distribution used in this construct
     */
  readonly cdn: CkDistribution;

  /**
     * Bucket deployment
     */
  readonly bucketDeployment: s3deploy.BucketDeployment;

  constructor(scope: Construct, name: string, props: CkServerlessWebsiteProps) {
    super(scope, name);

    const removalPolicy = CkStack.findStackOf(this).removalPolicy();
    const bucketObjectDeletion = removalPolicy == cdk.RemovalPolicy.DESTROY;

    // CP-74: website domain name
    const wwwSiteDomain = this.getSiteDomain(props);

    // CP-75: bucket for website content
    this.websiteBucket = new CkBucket(this, 'WebsiteBucket', {
      ...props.ckBucketProps,
      bucketName: wwwSiteDomain,
      removalPolicy: removalPolicy,
      autoDeleteObjects: bucketObjectDeletion,
      versioned: false,
    });

    const bucketPolicyActions = props.ckBucketPolicyActions ?? [];
    bucketPolicyActions.push('s3:GetObject');

    // CP-76: OAI for bucket access
    this.cloudfrontOAI = props.ckOriginAccessIdentity ?? new cloudfront.OriginAccessIdentity(
      this,
      'OAI',
      {
        comment: `OAI for ${props.ckDomainName}`,
      },
    );

    // Grant access to cloudfront
    this.websiteBucket.addToResourcePolicy(
      new iam.PolicyStatement({
        actions: bucketPolicyActions,
        resources: [this.websiteBucket.arnForObjects('*')],
        principals: [
          new iam.CanonicalUserPrincipal(
            this.cloudfrontOAI.cloudFrontOriginAccessIdentityS3CanonicalUserId,
          ),
        ],
      }),
    );

    // CP-82: create san cert domains
    const certSans = this.getSanCertificateDomains(props);

    const zone = props.ckHostedZone ?? route53.HostedZone.fromLookup(this, 'HostedZone', {
      domainName: props.ckDomainName,
    });

    // CP-81: Website ssl cert
    const certificate = new CkDnsValidatedCertificate(this, 'Cert', {
      ckHostedZone: zone,
      domainName: wwwSiteDomain,
      subjectAlternativeNames: certSans,
    });
    certificate.applyRemovalPolicy(removalPolicy);

    const distributionDomainWithSans = this.getDistributionDomains(props);

    // CP-77: Cloudfront distribution
    this.cdn = new CkDistribution(this, 'Cdn', {
      certificate: certificate,
      domainNames: distributionDomainWithSans,
      errorResponses: [
        {
          httpStatus: 403,
          responseHttpStatus: 403,
          responsePagePath: '/error.html',
          ttl: cdk.Duration.minutes(30),
        },
      ],
      defaultBehavior: {
        ...props.ckCloudFrontDistributionDefaultBehavior,
        origin: new cloudfront_origins.S3Origin(this.websiteBucket, {
          originAccessIdentity: this.cloudfrontOAI,
        }),
        compress: true,
        allowedMethods: cloudfront.AllowedMethods.ALLOW_GET_HEAD_OPTIONS,
      },
    });
    this.cdn.applyRemovalPolicy(removalPolicy);

    this.bucketDeployment = new s3deploy.BucketDeployment(this, 'DeployWithInvalidation', {
      sources: [s3deploy.Source.asset(props.ckPathToContent)],
      destinationBucket: this.websiteBucket,
      distribution: this.cdn,
      distributionPaths: ['/*'],
      ephemeralStorageSize: cdk.Size.gibibytes(1),
      memoryLimit: 1024,
    });

    let cfAliasRecord = new route53.ARecord(this, 'CfAliasRecord', {
      recordName: wwwSiteDomain,
      target: route53.RecordTarget.fromAlias(
        new targets.CloudFrontTarget(this.cdn),
      ),
      zone,
    });
    cfAliasRecord.applyRemovalPolicy(removalPolicy);

    // CP-82: create route53 record for sans
    certSans.forEach((san, index) => {
      const record = new route53.ARecord(this, `WwwAliasRecord${index}`, {
        recordName: san,
        target: route53.RecordTarget.fromAlias(
          new targets.Route53RecordTarget(cfAliasRecord),
        ),
        zone,
      });
      record.applyRemovalPolicy(removalPolicy);
      new cdk.CfnOutput(this, `UrlOutput${index}`, {
        value: san,
      });
    });

    CkVendorTags.addTagsTo(scope);
  }

  getDistributionDomains(props: CkServerlessWebsiteProps): string[] {
    return this.getSanCertificateDomains(props).concat([this.getSiteDomain(props)]);
  }

  getSiteDomain(props: CkServerlessWebsiteProps): string {
    const wwwSubDomain = 'www';
    const domainName = props.ckDomainName; // ?? props.ckHostedZoneProps.ckZoneName
    if (props.ckSubdomain && props.ckSubdomain != wwwSubDomain) {
      return `${wwwSubDomain}.${props.ckSubdomain}.${domainName}`;
    } else {
      return `${wwwSubDomain}.${domainName}`;
    }
  }

  getSanCertificateDomains(props: CkServerlessWebsiteProps): string[] {
    const domainName = props.ckDomainName;
    const wwwSubDomain = 'www';
    let certificateDomains: string[] = [];

    if (props.ckSubdomain && props.ckSubdomain != wwwSubDomain) {
      certificateDomains = certificateDomains.concat([`${props.ckSubdomain}.${domainName}`]);
    } else {
      certificateDomains = certificateDomains.concat( [domainName] );
    }

    return certificateDomains;
  }


}
