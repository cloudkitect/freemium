# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CkServerlessContainerApps <a name="CkServerlessContainerApps" id="@cloudkitect/patterns.CkServerlessContainerApps"></a>

CloudKitect Serverless Container App.

#### Initializers <a name="Initializers" id="@cloudkitect/patterns.CkServerlessContainerApps.Initializer"></a>

```typescript
import { CkServerlessContainerApps } from '@cloudkitect/patterns'

new CkServerlessContainerApps(scope: Construct, id: string, props: CkServerlessContainerAppsProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cloudkitect/patterns.CkServerlessContainerApps.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@cloudkitect/patterns.CkServerlessContainerApps.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cloudkitect/patterns.CkServerlessContainerApps.Initializer.parameter.props">props</a></code> | <code><a href="#@cloudkitect/patterns.CkServerlessContainerAppsProps">CkServerlessContainerAppsProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cloudkitect/patterns.CkServerlessContainerApps.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@cloudkitect/patterns.CkServerlessContainerApps.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@cloudkitect/patterns.CkServerlessContainerApps.Initializer.parameter.props"></a>

- *Type:* <a href="#@cloudkitect/patterns.CkServerlessContainerAppsProps">CkServerlessContainerAppsProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cloudkitect/patterns.CkServerlessContainerApps.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cloudkitect/patterns.CkServerlessContainerApps.addService">addService</a></code> | Adds a Microservice as a new ECS Service to the cluster It will have its own TaskDefinition and will run as a task managed by ECS Service. |

---

##### `toString` <a name="toString" id="@cloudkitect/patterns.CkServerlessContainerApps.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addService` <a name="addService" id="@cloudkitect/patterns.CkServerlessContainerApps.addService"></a>

```typescript
public addService(props: CkServiceProps): ServiceConfig
```

Adds a Microservice as a new ECS Service to the cluster It will have its own TaskDefinition and will run as a task managed by ECS Service.

###### `props`<sup>Required</sup> <a name="props" id="@cloudkitect/patterns.CkServerlessContainerApps.addService.parameter.props"></a>

- *Type:* <a href="#@cloudkitect/patterns.CkServiceProps">CkServiceProps</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cloudkitect/patterns.CkServerlessContainerApps.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@cloudkitect/patterns.CkServerlessContainerApps.isConstruct"></a>

```typescript
import { CkServerlessContainerApps } from '@cloudkitect/patterns'

CkServerlessContainerApps.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cloudkitect/patterns.CkServerlessContainerApps.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cloudkitect/patterns.CkServerlessContainerApps.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cloudkitect/patterns.CkServerlessContainerApps.property.cloudFront">cloudFront</a></code> | <code>@cloudkitect/components.CkDistribution</code> | CloudFront distribution created for sending traffic to load balancer. |
| <code><a href="#@cloudkitect/patterns.CkServerlessContainerApps.property.fargateCluster">fargateCluster</a></code> | <code>@cloudkitect/components.CkFargateCluster</code> | ECS fargate cluster. |
| <code><a href="#@cloudkitect/patterns.CkServerlessContainerApps.property.publicAlb">publicAlb</a></code> | <code>@cloudkitect/components.CkPublicApplicationLoadbalancer</code> | Publicly accessible Application Load Balancer. |
| <code><a href="#@cloudkitect/patterns.CkServerlessContainerApps.property.vpc">vpc</a></code> | <code>@cloudkitect/components.CkVpc</code> | VPC where ECS cluster is launched. |
| <code><a href="#@cloudkitect/patterns.CkServerlessContainerApps.property.httpsListener">httpsListener</a></code> | <code>aws-cdk-lib.aws_elasticloadbalancingv2.ApplicationListener</code> | Https Listener configured for the public ALB. |

---

##### `node`<sup>Required</sup> <a name="node" id="@cloudkitect/patterns.CkServerlessContainerApps.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cloudFront`<sup>Required</sup> <a name="cloudFront" id="@cloudkitect/patterns.CkServerlessContainerApps.property.cloudFront"></a>

```typescript
public readonly cloudFront: CkDistribution;
```

- *Type:* @cloudkitect/components.CkDistribution

CloudFront distribution created for sending traffic to load balancer.

---

##### `fargateCluster`<sup>Required</sup> <a name="fargateCluster" id="@cloudkitect/patterns.CkServerlessContainerApps.property.fargateCluster"></a>

```typescript
public readonly fargateCluster: CkFargateCluster;
```

- *Type:* @cloudkitect/components.CkFargateCluster

ECS fargate cluster.

---

##### `publicAlb`<sup>Required</sup> <a name="publicAlb" id="@cloudkitect/patterns.CkServerlessContainerApps.property.publicAlb"></a>

```typescript
public readonly publicAlb: CkPublicApplicationLoadbalancer;
```

- *Type:* @cloudkitect/components.CkPublicApplicationLoadbalancer

Publicly accessible Application Load Balancer.

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@cloudkitect/patterns.CkServerlessContainerApps.property.vpc"></a>

```typescript
public readonly vpc: CkVpc;
```

- *Type:* @cloudkitect/components.CkVpc

VPC where ECS cluster is launched.

---

##### `httpsListener`<sup>Optional</sup> <a name="httpsListener" id="@cloudkitect/patterns.CkServerlessContainerApps.property.httpsListener"></a>

```typescript
public readonly httpsListener: ApplicationListener;
```

- *Type:* aws-cdk-lib.aws_elasticloadbalancingv2.ApplicationListener

Https Listener configured for the public ALB.

---


### CkServerlessWebsite <a name="CkServerlessWebsite" id="@cloudkitect/patterns.CkServerlessWebsite"></a>

CloudKitect Serverless Website Pattern Properties.

### Infrastructure Diagram

### Default Configuration
Validated public certificate for the API domain
Cloudfront Distribution

Note: This construct expects a HostedZone present in the same AWS account

### Default Alarms
Available only in Enhanced components

### Logging and Monitoring
Available only in Enhanced components


### Examples
Default Usage, if HostedZone is in the same account
```ts
new CkServerlessWebsite(this, "LogicalId", {
     ckDomainName: 'example.com',
     ckSubdomain: "www",
     ckPathToContent: './site-content'
});
```

### Compliance
It addresses the following compliance requirements
1. Blocks public access
   >  - Risk Level: Medium
   >  - Compliance: PCI, HIPAA, GDPR, APRA, MAS, NIST4
   >  - Well Architected Pillar: Security
2. Block S3 Bucket Public 'READ' Access
   >  - Risk Level: Very High
   >  - Compliance: PCI, GDPR, ARPA, MAS, NIST4
   >  - Well Architected Pillar: Security
3. Only allow secure transport protocols
   >  - Risk Level: High
   >  - Compliance: PCI, APRA, MAS, NIST4
   >  - Well Architected Pillar: Security
4. Server side encryption
   >  - Risk Level: High
   >  - Compliance: PCI, HIPAA, GDPR, APRA, MAS, NIST4
   >  - Well Architected Pillar: Security
5. S3 Bucket Block ACLs
   >  - Risk Level: Very High
   >  - Compliance: PCI, APRA, MAS, NIST4
   >  - Well Architected Pillar: Security
6. Cloudfront origin should not use insecure protocols
   >  - Risk Level: Medium
   >  - Compliance: PCI, HIPAA, APRA, MAS, NIST4
   >  - Well Architected Pillar: Security
7. Cloudfront uses enhanced security policy min TLS1.2
   >  - Risk Level: High
   >  - Compliance: PCI, HIPAA, MAS, NIST4
   >  - Well Architected Pillar: Security
8. Cloudfront uses only secure protocol to communicate with origin
   >  - Risk Level: Medium
   >  - Compliance: PCI, HIPAA, APRA, MAS, NIST4
   >  - Well Architected Pillar: Security
9. Cloudfront uses only secure protocol to communicate with end users
   >  - Risk Level: High
   >  - Compliance: PCI, HIPAA, NIST4
   >  - Well Architected Pillar: Security
10. Enable origin access identify for S3 origins
   >  - Risk Level: Medium
   >  - Compliance: NA
   >  - Well Architected Pillar: Security

#### Initializers <a name="Initializers" id="@cloudkitect/patterns.CkServerlessWebsite.Initializer"></a>

```typescript
import { CkServerlessWebsite } from '@cloudkitect/patterns'

new CkServerlessWebsite(scope: Construct, name: string, props: CkServerlessWebsiteProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cloudkitect/patterns.CkServerlessWebsite.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@cloudkitect/patterns.CkServerlessWebsite.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cloudkitect/patterns.CkServerlessWebsite.Initializer.parameter.props">props</a></code> | <code><a href="#@cloudkitect/patterns.CkServerlessWebsiteProps">CkServerlessWebsiteProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cloudkitect/patterns.CkServerlessWebsite.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `name`<sup>Required</sup> <a name="name" id="@cloudkitect/patterns.CkServerlessWebsite.Initializer.parameter.name"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@cloudkitect/patterns.CkServerlessWebsite.Initializer.parameter.props"></a>

- *Type:* <a href="#@cloudkitect/patterns.CkServerlessWebsiteProps">CkServerlessWebsiteProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cloudkitect/patterns.CkServerlessWebsite.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cloudkitect/patterns.CkServerlessWebsite.getDistributionDomains">getDistributionDomains</a></code> | *No description.* |
| <code><a href="#@cloudkitect/patterns.CkServerlessWebsite.getSanCertificateDomains">getSanCertificateDomains</a></code> | *No description.* |
| <code><a href="#@cloudkitect/patterns.CkServerlessWebsite.getSiteDomain">getSiteDomain</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cloudkitect/patterns.CkServerlessWebsite.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `getDistributionDomains` <a name="getDistributionDomains" id="@cloudkitect/patterns.CkServerlessWebsite.getDistributionDomains"></a>

```typescript
public getDistributionDomains(props: CkServerlessWebsiteProps): string[]
```

###### `props`<sup>Required</sup> <a name="props" id="@cloudkitect/patterns.CkServerlessWebsite.getDistributionDomains.parameter.props"></a>

- *Type:* <a href="#@cloudkitect/patterns.CkServerlessWebsiteProps">CkServerlessWebsiteProps</a>

---

##### `getSanCertificateDomains` <a name="getSanCertificateDomains" id="@cloudkitect/patterns.CkServerlessWebsite.getSanCertificateDomains"></a>

```typescript
public getSanCertificateDomains(props: CkServerlessWebsiteProps): string[]
```

###### `props`<sup>Required</sup> <a name="props" id="@cloudkitect/patterns.CkServerlessWebsite.getSanCertificateDomains.parameter.props"></a>

- *Type:* <a href="#@cloudkitect/patterns.CkServerlessWebsiteProps">CkServerlessWebsiteProps</a>

---

##### `getSiteDomain` <a name="getSiteDomain" id="@cloudkitect/patterns.CkServerlessWebsite.getSiteDomain"></a>

```typescript
public getSiteDomain(props: CkServerlessWebsiteProps): string
```

###### `props`<sup>Required</sup> <a name="props" id="@cloudkitect/patterns.CkServerlessWebsite.getSiteDomain.parameter.props"></a>

- *Type:* <a href="#@cloudkitect/patterns.CkServerlessWebsiteProps">CkServerlessWebsiteProps</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cloudkitect/patterns.CkServerlessWebsite.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@cloudkitect/patterns.CkServerlessWebsite.isConstruct"></a>

```typescript
import { CkServerlessWebsite } from '@cloudkitect/patterns'

CkServerlessWebsite.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cloudkitect/patterns.CkServerlessWebsite.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cloudkitect/patterns.CkServerlessWebsite.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cloudkitect/patterns.CkServerlessWebsite.property.bucketDeployment">bucketDeployment</a></code> | <code>aws-cdk-lib.aws_s3_deployment.BucketDeployment</code> | Bucket deployment. |
| <code><a href="#@cloudkitect/patterns.CkServerlessWebsite.property.cdn">cdn</a></code> | <code>@cloudkitect/components.CkDistribution</code> | CloudFront distribution used in this construct. |
| <code><a href="#@cloudkitect/patterns.CkServerlessWebsite.property.cloudfrontOAI">cloudfrontOAI</a></code> | <code>aws-cdk-lib.aws_cloudfront.OriginAccessIdentity</code> | Origin Access Identity. |
| <code><a href="#@cloudkitect/patterns.CkServerlessWebsite.property.websiteBucket">websiteBucket</a></code> | <code>@cloudkitect/components.CkBucket</code> | Bucket hosting website content. |

---

##### `node`<sup>Required</sup> <a name="node" id="@cloudkitect/patterns.CkServerlessWebsite.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `bucketDeployment`<sup>Required</sup> <a name="bucketDeployment" id="@cloudkitect/patterns.CkServerlessWebsite.property.bucketDeployment"></a>

```typescript
public readonly bucketDeployment: BucketDeployment;
```

- *Type:* aws-cdk-lib.aws_s3_deployment.BucketDeployment

Bucket deployment.

---

##### `cdn`<sup>Required</sup> <a name="cdn" id="@cloudkitect/patterns.CkServerlessWebsite.property.cdn"></a>

```typescript
public readonly cdn: CkDistribution;
```

- *Type:* @cloudkitect/components.CkDistribution

CloudFront distribution used in this construct.

---

##### `cloudfrontOAI`<sup>Required</sup> <a name="cloudfrontOAI" id="@cloudkitect/patterns.CkServerlessWebsite.property.cloudfrontOAI"></a>

```typescript
public readonly cloudfrontOAI: OriginAccessIdentity;
```

- *Type:* aws-cdk-lib.aws_cloudfront.OriginAccessIdentity

Origin Access Identity.

---

##### `websiteBucket`<sup>Required</sup> <a name="websiteBucket" id="@cloudkitect/patterns.CkServerlessWebsite.property.websiteBucket"></a>

```typescript
public readonly websiteBucket: CkBucket;
```

- *Type:* @cloudkitect/components.CkBucket

Bucket hosting website content.

---


## Structs <a name="Structs" id="Structs"></a>

### CkServerlessContainerAppsProps <a name="CkServerlessContainerAppsProps" id="@cloudkitect/patterns.CkServerlessContainerAppsProps"></a>

Serverless container app properties.

#### Initializer <a name="Initializer" id="@cloudkitect/patterns.CkServerlessContainerAppsProps.Initializer"></a>

```typescript
import { CkServerlessContainerAppsProps } from '@cloudkitect/patterns'

const ckServerlessContainerAppsProps: CkServerlessContainerAppsProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cloudkitect/patterns.CkServerlessContainerAppsProps.property.ckDomainName">ckDomainName</a></code> | <code>string</code> | Domain name. |
| <code><a href="#@cloudkitect/patterns.CkServerlessContainerAppsProps.property.ckSubDomain">ckSubDomain</a></code> | <code>string</code> | Subdomain is usually the name of the microservice application such as user-app, account-app etc. |

---

##### `ckDomainName`<sup>Required</sup> <a name="ckDomainName" id="@cloudkitect/patterns.CkServerlessContainerAppsProps.property.ckDomainName"></a>

```typescript
public readonly ckDomainName: string;
```

- *Type:* string

Domain name.

---

*Example*

```typescript
cloudkitect.com
```


##### `ckSubDomain`<sup>Optional</sup> <a name="ckSubDomain" id="@cloudkitect/patterns.CkServerlessContainerAppsProps.property.ckSubDomain"></a>

```typescript
public readonly ckSubDomain: string;
```

- *Type:* string
- *Default:* app

Subdomain is usually the name of the microservice application such as user-app, account-app etc.

---

### CkServerlessWebsiteProps <a name="CkServerlessWebsiteProps" id="@cloudkitect/patterns.CkServerlessWebsiteProps"></a>

CloudKitect Serverless Website Pattern Properties.

#### Initializer <a name="Initializer" id="@cloudkitect/patterns.CkServerlessWebsiteProps.Initializer"></a>

```typescript
import { CkServerlessWebsiteProps } from '@cloudkitect/patterns'

const ckServerlessWebsiteProps: CkServerlessWebsiteProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cloudkitect/patterns.CkServerlessWebsiteProps.property.ckDomainName">ckDomainName</a></code> | <code>string</code> | Domain name. |
| <code><a href="#@cloudkitect/patterns.CkServerlessWebsiteProps.property.ckPathToContent">ckPathToContent</a></code> | <code>string</code> | Location of website content. |
| <code><a href="#@cloudkitect/patterns.CkServerlessWebsiteProps.property.ckBucketPolicyActions">ckBucketPolicyActions</a></code> | <code>string[]</code> | Additional bucket policy actions. |
| <code><a href="#@cloudkitect/patterns.CkServerlessWebsiteProps.property.ckBucketProps">ckBucketProps</a></code> | <code>@cloudkitect/components.CkBucketProps</code> | Bucket properties to override defaults. |
| <code><a href="#@cloudkitect/patterns.CkServerlessWebsiteProps.property.ckCloudFrontDistributionDefaultBehavior">ckCloudFrontDistributionDefaultBehavior</a></code> | <code>aws-cdk-lib.aws_cloudfront.BehaviorOptions</code> | Override default CloudFront Distribution behavior. |
| <code><a href="#@cloudkitect/patterns.CkServerlessWebsiteProps.property.ckDefaultRootObject">ckDefaultRootObject</a></code> | <code>string</code> | Root object of the website, e.g. index.html. |
| <code><a href="#@cloudkitect/patterns.CkServerlessWebsiteProps.property.ckEnableCloudFrontLogging">ckEnableCloudFrontLogging</a></code> | <code>boolean</code> | Flag to enable or disable CloudFront logging. |
| <code><a href="#@cloudkitect/patterns.CkServerlessWebsiteProps.property.ckHostedZone">ckHostedZone</a></code> | <code>aws-cdk-lib.aws_route53.IHostedZone</code> | Hosted zone properties. |
| <code><a href="#@cloudkitect/patterns.CkServerlessWebsiteProps.property.ckOriginAccessIdentity">ckOriginAccessIdentity</a></code> | <code>aws-cdk-lib.aws_cloudfront.OriginAccessIdentity</code> | Origin Access Identity to override defaults. |
| <code><a href="#@cloudkitect/patterns.CkServerlessWebsiteProps.property.ckSubdomain">ckSubdomain</a></code> | <code>string</code> | Subdomain name e.g. www. |

---

##### `ckDomainName`<sup>Required</sup> <a name="ckDomainName" id="@cloudkitect/patterns.CkServerlessWebsiteProps.property.ckDomainName"></a>

```typescript
public readonly ckDomainName: string;
```

- *Type:* string

Domain name.

---

##### `ckPathToContent`<sup>Required</sup> <a name="ckPathToContent" id="@cloudkitect/patterns.CkServerlessWebsiteProps.property.ckPathToContent"></a>

```typescript
public readonly ckPathToContent: string;
```

- *Type:* string

Location of website content.

---

##### `ckBucketPolicyActions`<sup>Optional</sup> <a name="ckBucketPolicyActions" id="@cloudkitect/patterns.CkServerlessWebsiteProps.property.ckBucketPolicyActions"></a>

```typescript
public readonly ckBucketPolicyActions: string[];
```

- *Type:* string[]
- *Default:* s3:GetObject

Additional bucket policy actions.

---

##### `ckBucketProps`<sup>Optional</sup> <a name="ckBucketProps" id="@cloudkitect/patterns.CkServerlessWebsiteProps.property.ckBucketProps"></a>

```typescript
public readonly ckBucketProps: CkBucketProps;
```

- *Type:* @cloudkitect/components.CkBucketProps

Bucket properties to override defaults.

---

##### `ckCloudFrontDistributionDefaultBehavior`<sup>Optional</sup> <a name="ckCloudFrontDistributionDefaultBehavior" id="@cloudkitect/patterns.CkServerlessWebsiteProps.property.ckCloudFrontDistributionDefaultBehavior"></a>

```typescript
public readonly ckCloudFrontDistributionDefaultBehavior: BehaviorOptions;
```

- *Type:* aws-cdk-lib.aws_cloudfront.BehaviorOptions

Override default CloudFront Distribution behavior.

---

##### `ckDefaultRootObject`<sup>Optional</sup> <a name="ckDefaultRootObject" id="@cloudkitect/patterns.CkServerlessWebsiteProps.property.ckDefaultRootObject"></a>

```typescript
public readonly ckDefaultRootObject: string;
```

- *Type:* string
- *Default:* index.html

Root object of the website, e.g. index.html.

---

##### `ckEnableCloudFrontLogging`<sup>Optional</sup> <a name="ckEnableCloudFrontLogging" id="@cloudkitect/patterns.CkServerlessWebsiteProps.property.ckEnableCloudFrontLogging"></a>

```typescript
public readonly ckEnableCloudFrontLogging: boolean;
```

- *Type:* boolean
- *Default:* false

Flag to enable or disable CloudFront logging.

---

##### `ckHostedZone`<sup>Optional</sup> <a name="ckHostedZone" id="@cloudkitect/patterns.CkServerlessWebsiteProps.property.ckHostedZone"></a>

```typescript
public readonly ckHostedZone: IHostedZone;
```

- *Type:* aws-cdk-lib.aws_route53.IHostedZone

Hosted zone properties.

---

##### `ckOriginAccessIdentity`<sup>Optional</sup> <a name="ckOriginAccessIdentity" id="@cloudkitect/patterns.CkServerlessWebsiteProps.property.ckOriginAccessIdentity"></a>

```typescript
public readonly ckOriginAccessIdentity: OriginAccessIdentity;
```

- *Type:* aws-cdk-lib.aws_cloudfront.OriginAccessIdentity
- *Default:* A new one is created

Origin Access Identity to override defaults.

---

##### `ckSubdomain`<sup>Optional</sup> <a name="ckSubdomain" id="@cloudkitect/patterns.CkServerlessWebsiteProps.property.ckSubdomain"></a>

```typescript
public readonly ckSubdomain: string;
```

- *Type:* string
- *Default:* www

Subdomain name e.g. www.

---

### CkServiceProps <a name="CkServiceProps" id="@cloudkitect/patterns.CkServiceProps"></a>

Properties that are used to customize the service.

You can add multiple services behind the load balancer using addService() method
and passing these properties for customization.

#### Initializer <a name="Initializer" id="@cloudkitect/patterns.CkServiceProps.Initializer"></a>

```typescript
import { CkServiceProps } from '@cloudkitect/patterns'

const ckServiceProps: CkServiceProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cloudkitect/patterns.CkServiceProps.property.ckImage">ckImage</a></code> | <code>aws-cdk-lib.aws_ecs.ContainerImage</code> | Container image used for the task definition. |
| <code><a href="#@cloudkitect/patterns.CkServiceProps.property.ckServiceName">ckServiceName</a></code> | <code>string</code> | Service name e.g. UserService, FileService etc. |
| <code><a href="#@cloudkitect/patterns.CkServiceProps.property.ckContainerPort">ckContainerPort</a></code> | <code>number</code> | Port at which container listens for requests. |
| <code><a href="#@cloudkitect/patterns.CkServiceProps.property.ckHealthCheckPath">ckHealthCheckPath</a></code> | <code>string</code> | Health check path. |
| <code><a href="#@cloudkitect/patterns.CkServiceProps.property.ckPathPattern">ckPathPattern</a></code> | <code>string</code> | Service Path e.g /user or /account. |
| <code><a href="#@cloudkitect/patterns.CkServiceProps.property.ckServicePriority">ckServicePriority</a></code> | <code>number</code> | Priority of the service within the load balancer routing. |

---

##### `ckImage`<sup>Required</sup> <a name="ckImage" id="@cloudkitect/patterns.CkServiceProps.property.ckImage"></a>

```typescript
public readonly ckImage: ContainerImage;
```

- *Type:* aws-cdk-lib.aws_ecs.ContainerImage

Container image used for the task definition.

---

##### `ckServiceName`<sup>Required</sup> <a name="ckServiceName" id="@cloudkitect/patterns.CkServiceProps.property.ckServiceName"></a>

```typescript
public readonly ckServiceName: string;
```

- *Type:* string

Service name e.g. UserService, FileService etc.

---

##### `ckContainerPort`<sup>Optional</sup> <a name="ckContainerPort" id="@cloudkitect/patterns.CkServiceProps.property.ckContainerPort"></a>

```typescript
public readonly ckContainerPort: number;
```

- *Type:* number
- *Default:* 80

Port at which container listens for requests.

---

##### `ckHealthCheckPath`<sup>Optional</sup> <a name="ckHealthCheckPath" id="@cloudkitect/patterns.CkServiceProps.property.ckHealthCheckPath"></a>

```typescript
public readonly ckHealthCheckPath: string;
```

- *Type:* string
- *Default:* /

Health check path.

---

##### `ckPathPattern`<sup>Optional</sup> <a name="ckPathPattern" id="@cloudkitect/patterns.CkServiceProps.property.ckPathPattern"></a>

```typescript
public readonly ckPathPattern: string;
```

- *Type:* string
- *Default:* /

Service Path e.g /user or /account.

---

##### `ckServicePriority`<sup>Optional</sup> <a name="ckServicePriority" id="@cloudkitect/patterns.CkServiceProps.property.ckServicePriority"></a>

```typescript
public readonly ckServicePriority: number;
```

- *Type:* number
- *Default:* 1

Priority of the service within the load balancer routing.

---

### ServiceConfig <a name="ServiceConfig" id="@cloudkitect/patterns.ServiceConfig"></a>

Information regarding how the service is configured, can be used to customize certain aspects of the service.

#### Initializer <a name="Initializer" id="@cloudkitect/patterns.ServiceConfig.Initializer"></a>

```typescript
import { ServiceConfig } from '@cloudkitect/patterns'

const serviceConfig: ServiceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cloudkitect/patterns.ServiceConfig.property.containerDef">containerDef</a></code> | <code>aws-cdk-lib.aws_ecs.ContainerDefinition</code> | Container Definition. |
| <code><a href="#@cloudkitect/patterns.ServiceConfig.property.ecsService">ecsService</a></code> | <code>@cloudkitect/components.CkFargateService</code> | Fargate ECS Service. |
| <code><a href="#@cloudkitect/patterns.ServiceConfig.property.fargateSecurityGroup">fargateSecurityGroup</a></code> | <code>aws-cdk-lib.aws_ec2.SecurityGroup</code> | Fargate security group. |
| <code><a href="#@cloudkitect/patterns.ServiceConfig.property.fargateTaskDefinition">fargateTaskDefinition</a></code> | <code>@cloudkitect/components.CkFargateTaskDefinition</code> | Fargate task definition. |

---

##### `containerDef`<sup>Required</sup> <a name="containerDef" id="@cloudkitect/patterns.ServiceConfig.property.containerDef"></a>

```typescript
public readonly containerDef: ContainerDefinition;
```

- *Type:* aws-cdk-lib.aws_ecs.ContainerDefinition

Container Definition.

---

##### `ecsService`<sup>Required</sup> <a name="ecsService" id="@cloudkitect/patterns.ServiceConfig.property.ecsService"></a>

```typescript
public readonly ecsService: CkFargateService;
```

- *Type:* @cloudkitect/components.CkFargateService

Fargate ECS Service.

---

##### `fargateSecurityGroup`<sup>Required</sup> <a name="fargateSecurityGroup" id="@cloudkitect/patterns.ServiceConfig.property.fargateSecurityGroup"></a>

```typescript
public readonly fargateSecurityGroup: SecurityGroup;
```

- *Type:* aws-cdk-lib.aws_ec2.SecurityGroup

Fargate security group.

---

##### `fargateTaskDefinition`<sup>Required</sup> <a name="fargateTaskDefinition" id="@cloudkitect/patterns.ServiceConfig.property.fargateTaskDefinition"></a>

```typescript
public readonly fargateTaskDefinition: CkFargateTaskDefinition;
```

- *Type:* @cloudkitect/components.CkFargateTaskDefinition

Fargate task definition.

---



