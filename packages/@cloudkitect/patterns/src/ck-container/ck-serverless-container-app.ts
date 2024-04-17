import {
  CkDistribution, CkDnsValidatedCertificate,
  CkFargateCluster,
  CkFargateService,
  CkFargateTaskDefinition,
  CkPublicApplicationLoadbalancer, CkStack, CkUtils, CkVendorTags,
  CkVpc,
} from '@cloudkitect/components';
import { CfnOutput } from 'aws-cdk-lib';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import * as origins from 'aws-cdk-lib/aws-cloudfront-origins';
import { HttpOrigin } from 'aws-cdk-lib/aws-cloudfront-origins';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as ecs from 'aws-cdk-lib/aws-ecs';
import { AwsLogDriverMode } from 'aws-cdk-lib/aws-ecs';
import * as elbv2 from 'aws-cdk-lib/aws-elasticloadbalancingv2';
import { LogGroup } from 'aws-cdk-lib/aws-logs';
import * as route53 from 'aws-cdk-lib/aws-route53';
import * as targets from 'aws-cdk-lib/aws-route53-targets';
import { Construct } from 'constructs';

/**
 * Serverless container app properties
 */
export interface CkServerlessContainerAppsProps {
  /**
     * Domain name
     * @example cloudkitect.com
     */
  readonly ckDomainName: string;

  /**
     * Subdomain is usually the name of the microservice application such as user-app, account-app etc.
     * @default app
     */
  readonly ckSubDomain?: string;
}


/**
 * Properties that are used to customize the service.
 * You can add multiple services behind the load balancer using addService() method
 * and passing these properties for customization.
 */
export interface CkServiceProps {
  /**
     * Service name e.g. UserService, FileService etc.
     */
  readonly ckServiceName: string;

  /**
     * Container image used for the task definition
     */
  readonly ckImage: ecs.ContainerImage;

  /**
     * Priority of the service within the load balancer routing
     * @default 1
     */
  readonly ckServicePriority?: number;

  /**
     * Service Path e.g /user or /account
     * @default /
     */
  readonly ckPathPattern?: string;

  /**
     * Health check path
     * @default /
     */
  readonly ckHealthCheckPath?: string;

  /**
     * Port at which container listens for requests
     * @default 80
     */
  readonly ckContainerPort?: number;
}

/**
 * Information regarding how the service is configured, can be used to customize certain aspects of the service
 */
export interface ServiceConfig {
  /**
     * Fargate task definition
     */
  readonly fargateTaskDefinition: CkFargateTaskDefinition;

  /**
     * Fargate security group
     */
  readonly fargateSecurityGroup: ec2.SecurityGroup;

  /**
     * Fargate ECS Service
     */
  readonly ecsService: CkFargateService;

  /**
     * Container Definition
     */
  readonly containerDef: ecs.ContainerDefinition;
}

/**
 * CloudKitect Serverless Container App
 */
export class CkServerlessContainerApps extends Construct {

  /**
     * VPC where ECS cluster is launched
     */
  readonly vpc: CkVpc;

  /**
     * ECS fargate cluster
     */
  readonly fargateCluster: CkFargateCluster;

  /**
     * Publicly accessible Application Load Balancer
     */
  readonly publicAlb: CkPublicApplicationLoadbalancer;

  /**
     * Https Listener configured for the public ALB
     */
  readonly httpsListener?: elbv2.ApplicationListener;

  /**
     * CloudFront distribution created for sending traffic to load balancer
     */
  readonly cloudFront: CkDistribution;

  constructor(scope: Construct, id: string, props: CkServerlessContainerAppsProps) {
    super(scope, id);

    this.vpc = new CkVpc(this, 'Vpc', {});
    this.fargateCluster = new CkFargateCluster(this, 'Cluster', {
      vpc: this.vpc,
    });

    // CP-52: Public ALB
    this.publicAlb = new CkPublicApplicationLoadbalancer(this, 'PublicAlb', {
      vpc: this.vpc,
    });

    const domainName = props.ckDomainName;
    const domainNameId = CkUtils.domainNameToPascalCase(domainName);
    const appSubDomain = props.ckSubDomain ?? 'app';
    const appDomain = `${appSubDomain}.${domainName}`;
    const lbDomain = `${appSubDomain}-alb.${domainName}`;

    // CP-53: Setup https listener with SSL Cert
    const zone = route53.HostedZone.fromLookup(this, `${domainNameId}HostedZone`, {
      domainName: props.ckDomainName,
    });

    const lbCertificate = new CkDnsValidatedCertificate(
      this,
      `${domainNameId}AlbCert`,
      {
        domainName: lbDomain,
        ckHostedZone: zone,
      },
    );

    this.httpsListener = this.publicAlb.addListener('HttpsListener', {
      port: 443,
      certificates: [lbCertificate],
    });

    this.httpsListener.addAction('Default', {
      action: elbv2.ListenerAction.fixedResponse(200, { messageBody: 'This is the ALB Default Action' }),
    });

    // CP-54: A record for load balancer
    const albARecord = new route53.ARecord(this, 'AlbAliasRecord', {
      recordName: lbDomain,
      target: route53.RecordTarget.fromAlias(
        new targets.LoadBalancerTarget(this.publicAlb),
      ),
      zone,
    });

    new CfnOutput(this, 'AlbEndpoint', {
      value: albARecord.domainName,
    });

    // CP-55: Setup CloudFront Distribution
    const certificate = new CkDnsValidatedCertificate(this, `${domainNameId}CfCert`, {
      domainName: appDomain,
      ckHostedZone: zone,
    },
    );

    const loadBalancerOriginRequestPolicy = new cloudfront.OriginRequestPolicy(this, 'ALBOriginRequestPolicy', {
      comment: 'Origin request policy for Load Balancer origin',
      cookieBehavior: cloudfront.OriginRequestCookieBehavior.all(),
      headerBehavior: cloudfront.OriginRequestHeaderBehavior.all(),
      queryStringBehavior: cloudfront.OriginRequestQueryStringBehavior.all(),
    });

    const originGroup = new origins.OriginGroup({
      primaryOrigin: new HttpOrigin(lbDomain, {
        protocolPolicy: cloudfront.OriginProtocolPolicy.HTTPS_ONLY,
      }),
      fallbackOrigin: new origins.HttpOrigin(`www.${domainName}`),
      // optional, defaults to: 500, 502, 503 and 504
      fallbackStatusCodes: [404, 500, 502, 503, 504],
    });

    this.cloudFront = new CkDistribution(
      this,
      `${domainNameId}Distribution`,
      {
        certificate: certificate,
        domainNames: [appDomain],
        defaultBehavior: {
          origin: originGroup,
          originRequestPolicy: loadBalancerOriginRequestPolicy,
        },
      },
    );

    // CP-56: Create A record for cloudfront distribution
    const cloudFrontARecord = new route53.ARecord(this, 'CfAliasRecord', {
      recordName: appDomain,
      target: route53.RecordTarget.fromAlias(
        new targets.CloudFrontTarget(this.cloudFront),
      ),
      zone,
    });

    new CfnOutput(this, 'CfEndpoint', {
      value: cloudFrontARecord.domainName,
    });

    CkVendorTags.addTagsTo(this);
  }

  // CP-60: Adding service to the cluster
  /**
     * Adds a Microservice as a new ECS Service to the cluster
     * It will have its own TaskDefinition and will run as a task managed by ECS Service
     * @param props
     */
  public addService(props: CkServiceProps): ServiceConfig {
    //CP-61: Container port override
    const containerPort = props.ckContainerPort ?? 80;
    const containerTcpPort = ec2.Port.tcp(containerPort);
    const allTraffic = ec2.Port.allTraffic();

    // CP-62: fargate task definition
    const fargateTaskDef = new CkFargateTaskDefinition(this, `${props.ckServiceName}FargateTaskDef`, {});

    const logGroup = new LogGroup(this, `${props.ckServiceName}LogGroup`, {});
    const containerDefProps = {
      image: props.ckImage,
      portMappings: [{
        containerPort: containerPort,
      }],
      // CP-63: Configure log driver
      logging: ecs.LogDrivers.awsLogs({
        streamPrefix: `${props.ckServiceName}Logs`,
        logGroup: logGroup,
        // CP-33: Non Blocking Logging
        mode: AwsLogDriverMode.NON_BLOCKING,
      }),
    };

    const containerDef = fargateTaskDef.addContainer(`${props.ckServiceName}Container`, containerDefProps);

    // CP-64: fargate task security group
    const fargateSecurityGroup = new ec2.SecurityGroup(this, `${props.ckServiceName}FargateSG`, {
      vpc: this.vpc,
      allowAllOutbound: true,
      description: `${props.ckServiceName} Fargate Service Security Group`,
    });
    fargateSecurityGroup.addIngressRule(ec2.Peer.securityGroupId(this.publicAlb?.lbSecurityGroup?.securityGroupId!), containerTcpPort, 'Traffic from Application Load Balancer to container port');
    fargateSecurityGroup.addEgressRule(ec2.Peer.ipv4('0.0.0.0/0'), allTraffic, 'All outgoing traffic');

    // CP-65: Create target group and register with ECS service
    const ecsService = new CkFargateService(this, `${props.ckServiceName}FargateSvc`, {
      cluster: this.fargateCluster,
      taskDefinition: fargateTaskDef,
      securityGroups: [fargateSecurityGroup],
    });

    // CP-67: Cluster scaling policy
    const scaling = ecsService.autoScaleTaskCount({
      maxCapacity: CkStack.findStackOf(this).isProduction() ? 10 : 2,
    });
    scaling.scaleOnCpuUtilization(`${props.ckServiceName}CpuScaling`, {
      targetUtilizationPercent: CkStack.findStackOf(this).isProduction() ? 60 : 80,
    });
    scaling.scaleOnMemoryUtilization(`${props.ckServiceName}MemoryScaling`, {
      targetUtilizationPercent: CkStack.findStackOf(this).isProduction() ? 70 : 90,
    });

    const targetGroup = this.httpsListener!.addTargets(`${props.ckServiceName}Targets`, {
      port: containerPort,
      protocol: elbv2.ApplicationProtocol.HTTP,
      targets: [ecsService],
    });

    const servicePath = props.ckPathPattern ?? '/';
    const applicationPath = servicePath == '/' ? '/**' : `${props.ckPathPattern}/**`;
    const defaultHealthCheckPath = servicePath == '/' ? '/' : `${props.ckPathPattern}/`;
    const healthCheckPath = props.ckHealthCheckPath ?? defaultHealthCheckPath;
    const servicePriority = props.ckServicePriority ?? 1;

    targetGroup.configureHealthCheck({
      path: healthCheckPath,
    });

    // CP-66: configure load balancer to forward requests to target group
    this.httpsListener!.addAction(`${props.ckServiceName}Action`, {
      conditions: [
        elbv2.ListenerCondition.pathPatterns([applicationPath]),
      ],
      action: elbv2.ListenerAction.forward([targetGroup]),
      priority: servicePriority,
    });

    return {
      fargateTaskDefinition: fargateTaskDef,
      fargateSecurityGroup: fargateSecurityGroup,
      ecsService: ecsService,
      containerDef: containerDef,
    };
  }


}