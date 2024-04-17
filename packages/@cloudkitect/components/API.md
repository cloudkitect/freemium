# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CkBucket <a name="CkBucket" id="@cloudkitect/components.CkBucket"></a>

CloudKitect S3 Bucket component.

### Default Configuration
Encryption: S3 Managed
Versioned: True
Removal Policy: Retain in Production

### Default Alarms
Available only in Enhanced components

### Logging and Monitoring
Available only in Enhanced components

Note that the default alarm uses the CcAlarm construct, which sets up an alarm
action to notify the SNS Topic *AlarmEventsTopic* by default.

### Examples
Default Usage
```ts
new CkBucket(this, "LogicalId", {
});
```

Custom Configuration
```ts
new CkBucket(this, "LogicalId", {
   enforceSSL: false
});
```

### Compliance
It addresses the following compliance requirements
1. Blocks public access
   >  - Risk Level: Medium
   >  - Compliance: PCI, HIPAA, GDPR, APRA, MAS, NIST4
   >  - Well Architected Pillar: Security
2. Bucket versioning enabled in Production Environment
   >  - Risk Level: Low
   >  - Compliance: PCI, APRA, MAS, NIST4
   >  - Well Architected Pillar: Reliability
3. Block S3 Bucket Public 'READ' Access
   >  - Risk Level: Very High
   >  - Compliance: PCI, GDPR, ARPA, MAS, NIST4
   >  - Well Architected Pillar: Security
4. Only allow secure transport protocols
   >  - Risk Level: High
   >  - Compliance: PCI, APRA, MAS, NIST4
   >  - Well Architected Pillar: Security
5. Server side encryption
   >  - Risk Level: High
   >  - Compliance: PCI, HIPAA, GDPR, APRA, MAS, NIST4
   >  - Well Architected Pillar: Security

#### Initializers <a name="Initializers" id="@cloudkitect/components.CkBucket.Initializer"></a>

```typescript
import { CkBucket } from '@cloudkitect/components'

new CkBucket(scope: Construct, id: string, props: CkBucketProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cloudkitect/components.CkBucket.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@cloudkitect/components.CkBucket.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cloudkitect/components.CkBucket.Initializer.parameter.props">props</a></code> | <code><a href="#@cloudkitect/components.CkBucketProps">CkBucketProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cloudkitect/components.CkBucket.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@cloudkitect/components.CkBucket.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@cloudkitect/components.CkBucket.Initializer.parameter.props"></a>

- *Type:* <a href="#@cloudkitect/components.CkBucketProps">CkBucketProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cloudkitect/components.CkBucket.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cloudkitect/components.CkBucket.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#@cloudkitect/components.CkBucket.addEventNotification">addEventNotification</a></code> | Adds a bucket notification event destination. |
| <code><a href="#@cloudkitect/components.CkBucket.addObjectCreatedNotification">addObjectCreatedNotification</a></code> | Subscribes a destination to receive notifications when an object is created in the bucket. |
| <code><a href="#@cloudkitect/components.CkBucket.addObjectRemovedNotification">addObjectRemovedNotification</a></code> | Subscribes a destination to receive notifications when an object is removed from the bucket. |
| <code><a href="#@cloudkitect/components.CkBucket.addToResourcePolicy">addToResourcePolicy</a></code> | Adds a statement to the resource policy for a principal (i.e. account/role/service) to perform actions on this bucket and/or its contents. Use `bucketArn` and `arnForObjects(keys)` to obtain ARNs for this bucket or objects. |
| <code><a href="#@cloudkitect/components.CkBucket.arnForObjects">arnForObjects</a></code> | Returns an ARN that represents all objects within the bucket that match the key pattern specified. |
| <code><a href="#@cloudkitect/components.CkBucket.enableEventBridgeNotification">enableEventBridgeNotification</a></code> | Enables event bridge notification, causing all events below to be sent to EventBridge:. |
| <code><a href="#@cloudkitect/components.CkBucket.grantDelete">grantDelete</a></code> | Grants s3:DeleteObject* permission to an IAM principal for objects in this bucket. |
| <code><a href="#@cloudkitect/components.CkBucket.grantPublicAccess">grantPublicAccess</a></code> | Allows unrestricted access to objects from this bucket. |
| <code><a href="#@cloudkitect/components.CkBucket.grantPut">grantPut</a></code> | Grants s3:PutObject* and s3:Abort* permissions for this bucket to an IAM principal. |
| <code><a href="#@cloudkitect/components.CkBucket.grantPutAcl">grantPutAcl</a></code> | Grant the given IAM identity permissions to modify the ACLs of objects in the given Bucket. |
| <code><a href="#@cloudkitect/components.CkBucket.grantRead">grantRead</a></code> | Grant read permissions for this bucket and it's contents to an IAM principal (Role/Group/User). |
| <code><a href="#@cloudkitect/components.CkBucket.grantReadWrite">grantReadWrite</a></code> | Grants read/write permissions for this bucket and it's contents to an IAM principal (Role/Group/User). |
| <code><a href="#@cloudkitect/components.CkBucket.grantWrite">grantWrite</a></code> | Grant write permissions to this bucket to an IAM principal. |
| <code><a href="#@cloudkitect/components.CkBucket.onCloudTrailEvent">onCloudTrailEvent</a></code> | Define a CloudWatch event that triggers when something happens to this repository. |
| <code><a href="#@cloudkitect/components.CkBucket.onCloudTrailPutObject">onCloudTrailPutObject</a></code> | Defines an AWS CloudWatch event that triggers when an object is uploaded to the specified paths (keys) in this bucket using the PutObject API call. |
| <code><a href="#@cloudkitect/components.CkBucket.onCloudTrailWriteObject">onCloudTrailWriteObject</a></code> | Defines an AWS CloudWatch event that triggers when an object at the specified paths (keys) in this bucket are written to. |
| <code><a href="#@cloudkitect/components.CkBucket.s3UrlForObject">s3UrlForObject</a></code> | The S3 URL of an S3 object. For example:. |
| <code><a href="#@cloudkitect/components.CkBucket.transferAccelerationUrlForObject">transferAccelerationUrlForObject</a></code> | The https Transfer Acceleration URL of an S3 object. |
| <code><a href="#@cloudkitect/components.CkBucket.urlForObject">urlForObject</a></code> | The https URL of an S3 object. Specify `regional: false` at the options for non-regional URLs. For example:. |
| <code><a href="#@cloudkitect/components.CkBucket.virtualHostedUrlForObject">virtualHostedUrlForObject</a></code> | The virtual hosted-style URL of an S3 object. Specify `regional: false` at the options for non-regional URL. For example:. |
| <code><a href="#@cloudkitect/components.CkBucket.addCorsRule">addCorsRule</a></code> | Adds a cross-origin access configuration for objects in an Amazon S3 bucket. |
| <code><a href="#@cloudkitect/components.CkBucket.addInventory">addInventory</a></code> | Add an inventory configuration. |
| <code><a href="#@cloudkitect/components.CkBucket.addLifecycleRule">addLifecycleRule</a></code> | Add a lifecycle rule to the bucket. |
| <code><a href="#@cloudkitect/components.CkBucket.addMetric">addMetric</a></code> | Adds a metrics configuration for the CloudWatch request metrics from the bucket. |

---

##### `toString` <a name="toString" id="@cloudkitect/components.CkBucket.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@cloudkitect/components.CkBucket.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="@cloudkitect/components.CkBucket.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addEventNotification` <a name="addEventNotification" id="@cloudkitect/components.CkBucket.addEventNotification"></a>

```typescript
public addEventNotification(event: EventType, dest: IBucketNotificationDestination, filters: NotificationKeyFilter): void
```

Adds a bucket notification event destination.

> [https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html](https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html)

*Example*

```typescript
   declare const myLambda: lambda.Function;
   const bucket = new s3.Bucket(this, 'MyBucket');
   bucket.addEventNotification(s3.EventType.OBJECT_CREATED, new s3n.LambdaDestination(myLambda), {prefix: 'home/myusername/*'});
```


###### `event`<sup>Required</sup> <a name="event" id="@cloudkitect/components.CkBucket.addEventNotification.parameter.event"></a>

- *Type:* aws-cdk-lib.aws_s3.EventType

The event to trigger the notification.

---

###### `dest`<sup>Required</sup> <a name="dest" id="@cloudkitect/components.CkBucket.addEventNotification.parameter.dest"></a>

- *Type:* aws-cdk-lib.aws_s3.IBucketNotificationDestination

The notification destination (Lambda, SNS Topic or SQS Queue).

---

###### `filters`<sup>Required</sup> <a name="filters" id="@cloudkitect/components.CkBucket.addEventNotification.parameter.filters"></a>

- *Type:* aws-cdk-lib.aws_s3.NotificationKeyFilter

S3 object key filter rules to determine which objects trigger this event.

Each filter must include a `prefix` and/or `suffix`
that will be matched against the s3 object key. Refer to the S3 Developer Guide
for details about allowed filter rules.

---

##### `addObjectCreatedNotification` <a name="addObjectCreatedNotification" id="@cloudkitect/components.CkBucket.addObjectCreatedNotification"></a>

```typescript
public addObjectCreatedNotification(dest: IBucketNotificationDestination, filters: NotificationKeyFilter): void
```

Subscribes a destination to receive notifications when an object is created in the bucket.

This is identical to calling
`onEvent(EventType.OBJECT_CREATED)`.

###### `dest`<sup>Required</sup> <a name="dest" id="@cloudkitect/components.CkBucket.addObjectCreatedNotification.parameter.dest"></a>

- *Type:* aws-cdk-lib.aws_s3.IBucketNotificationDestination

The notification destination (see onEvent).

---

###### `filters`<sup>Required</sup> <a name="filters" id="@cloudkitect/components.CkBucket.addObjectCreatedNotification.parameter.filters"></a>

- *Type:* aws-cdk-lib.aws_s3.NotificationKeyFilter

Filters (see onEvent).

---

##### `addObjectRemovedNotification` <a name="addObjectRemovedNotification" id="@cloudkitect/components.CkBucket.addObjectRemovedNotification"></a>

```typescript
public addObjectRemovedNotification(dest: IBucketNotificationDestination, filters: NotificationKeyFilter): void
```

Subscribes a destination to receive notifications when an object is removed from the bucket.

This is identical to calling
`onEvent(EventType.OBJECT_REMOVED)`.

###### `dest`<sup>Required</sup> <a name="dest" id="@cloudkitect/components.CkBucket.addObjectRemovedNotification.parameter.dest"></a>

- *Type:* aws-cdk-lib.aws_s3.IBucketNotificationDestination

The notification destination (see onEvent).

---

###### `filters`<sup>Required</sup> <a name="filters" id="@cloudkitect/components.CkBucket.addObjectRemovedNotification.parameter.filters"></a>

- *Type:* aws-cdk-lib.aws_s3.NotificationKeyFilter

Filters (see onEvent).

---

##### `addToResourcePolicy` <a name="addToResourcePolicy" id="@cloudkitect/components.CkBucket.addToResourcePolicy"></a>

```typescript
public addToResourcePolicy(permission: PolicyStatement): AddToResourcePolicyResult
```

Adds a statement to the resource policy for a principal (i.e. account/role/service) to perform actions on this bucket and/or its contents. Use `bucketArn` and `arnForObjects(keys)` to obtain ARNs for this bucket or objects.

Note that the policy statement may or may not be added to the policy.
For example, when an `IBucket` is created from an existing bucket,
it's not possible to tell whether the bucket already has a policy
attached, let alone to re-use that policy to add more statements to it.
So it's safest to do nothing in these cases.

###### `permission`<sup>Required</sup> <a name="permission" id="@cloudkitect/components.CkBucket.addToResourcePolicy.parameter.permission"></a>

- *Type:* aws-cdk-lib.aws_iam.PolicyStatement

the policy statement to be added to the bucket's policy.

---

##### `arnForObjects` <a name="arnForObjects" id="@cloudkitect/components.CkBucket.arnForObjects"></a>

```typescript
public arnForObjects(keyPattern: string): string
```

Returns an ARN that represents all objects within the bucket that match the key pattern specified.

To represent all keys, specify ``"*"``.

If you need to specify a keyPattern with multiple components, concatenate them into a single string, e.g.:

  arnForObjects(`home/${team}/${user}/*`)

###### `keyPattern`<sup>Required</sup> <a name="keyPattern" id="@cloudkitect/components.CkBucket.arnForObjects.parameter.keyPattern"></a>

- *Type:* string

---

##### `enableEventBridgeNotification` <a name="enableEventBridgeNotification" id="@cloudkitect/components.CkBucket.enableEventBridgeNotification"></a>

```typescript
public enableEventBridgeNotification(): void
```

Enables event bridge notification, causing all events below to be sent to EventBridge:.

Object Deleted (DeleteObject)
- Object Deleted (Lifecycle expiration)
- Object Restore Initiated
- Object Restore Completed
- Object Restore Expired
- Object Storage Class Changed
- Object Access Tier Changed
- Object ACL Updated
- Object Tags Added
- Object Tags Deleted

##### `grantDelete` <a name="grantDelete" id="@cloudkitect/components.CkBucket.grantDelete"></a>

```typescript
public grantDelete(identity: IGrantable, objectsKeyPattern?: any): Grant
```

Grants s3:DeleteObject* permission to an IAM principal for objects in this bucket.

###### `identity`<sup>Required</sup> <a name="identity" id="@cloudkitect/components.CkBucket.grantDelete.parameter.identity"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

The principal.

---

###### `objectsKeyPattern`<sup>Optional</sup> <a name="objectsKeyPattern" id="@cloudkitect/components.CkBucket.grantDelete.parameter.objectsKeyPattern"></a>

- *Type:* any

Restrict the permission to a certain key pattern (default '*').

Parameter type is `any` but `string` should be passed in.

---

##### `grantPublicAccess` <a name="grantPublicAccess" id="@cloudkitect/components.CkBucket.grantPublicAccess"></a>

```typescript
public grantPublicAccess(allowedActions: string, keyPrefix?: string): Grant
```

Allows unrestricted access to objects from this bucket.

IMPORTANT: This permission allows anyone to perform actions on S3 objects
in this bucket, which is useful for when you configure your bucket as a
website and want everyone to be able to read objects in the bucket without
needing to authenticate.

Without arguments, this method will grant read ("s3:GetObject") access to
all objects ("*") in the bucket.

The method returns the `iam.Grant` object, which can then be modified
as needed. For example, you can add a condition that will restrict access only
to an IPv4 range like this:

    const grant = bucket.grantPublicAccess();
    grant.resourceStatement!.addCondition(‘IpAddress’, { “aws:SourceIp”: “54.240.143.0/24” });

Note that if this `IBucket` refers to an existing bucket, possibly not
managed by CloudFormation, this method will have no effect, since it's
impossible to modify the policy of an existing bucket.

###### `allowedActions`<sup>Required</sup> <a name="allowedActions" id="@cloudkitect/components.CkBucket.grantPublicAccess.parameter.allowedActions"></a>

- *Type:* string

the set of S3 actions to allow.

Default is "s3:GetObject".

---

###### `keyPrefix`<sup>Optional</sup> <a name="keyPrefix" id="@cloudkitect/components.CkBucket.grantPublicAccess.parameter.keyPrefix"></a>

- *Type:* string

the prefix of S3 object keys (e.g. `home/*`). Default is "*".

---

##### `grantPut` <a name="grantPut" id="@cloudkitect/components.CkBucket.grantPut"></a>

```typescript
public grantPut(identity: IGrantable, objectsKeyPattern?: any): Grant
```

Grants s3:PutObject* and s3:Abort* permissions for this bucket to an IAM principal.

If encryption is used, permission to use the key to encrypt the contents
of written files will also be granted to the same principal.

###### `identity`<sup>Required</sup> <a name="identity" id="@cloudkitect/components.CkBucket.grantPut.parameter.identity"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

The principal.

---

###### `objectsKeyPattern`<sup>Optional</sup> <a name="objectsKeyPattern" id="@cloudkitect/components.CkBucket.grantPut.parameter.objectsKeyPattern"></a>

- *Type:* any

Restrict the permission to a certain key pattern (default '*').

Parameter type is `any` but `string` should be passed in.

---

##### `grantPutAcl` <a name="grantPutAcl" id="@cloudkitect/components.CkBucket.grantPutAcl"></a>

```typescript
public grantPutAcl(identity: IGrantable, objectsKeyPattern?: string): Grant
```

Grant the given IAM identity permissions to modify the ACLs of objects in the given Bucket.

If your application has the '@aws-cdk/aws-s3:grantWriteWithoutAcl' feature flag set,
calling `grantWrite` or `grantReadWrite` no longer grants permissions to modify the ACLs of the objects;
in this case, if you need to modify object ACLs, call this method explicitly.

###### `identity`<sup>Required</sup> <a name="identity" id="@cloudkitect/components.CkBucket.grantPutAcl.parameter.identity"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

###### `objectsKeyPattern`<sup>Optional</sup> <a name="objectsKeyPattern" id="@cloudkitect/components.CkBucket.grantPutAcl.parameter.objectsKeyPattern"></a>

- *Type:* string

---

##### `grantRead` <a name="grantRead" id="@cloudkitect/components.CkBucket.grantRead"></a>

```typescript
public grantRead(identity: IGrantable, objectsKeyPattern?: any): Grant
```

Grant read permissions for this bucket and it's contents to an IAM principal (Role/Group/User).

If encryption is used, permission to use the key to decrypt the contents
of the bucket will also be granted to the same principal.

###### `identity`<sup>Required</sup> <a name="identity" id="@cloudkitect/components.CkBucket.grantRead.parameter.identity"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

The principal.

---

###### `objectsKeyPattern`<sup>Optional</sup> <a name="objectsKeyPattern" id="@cloudkitect/components.CkBucket.grantRead.parameter.objectsKeyPattern"></a>

- *Type:* any

Restrict the permission to a certain key pattern (default '*').

Parameter type is `any` but `string` should be passed in.

---

##### `grantReadWrite` <a name="grantReadWrite" id="@cloudkitect/components.CkBucket.grantReadWrite"></a>

```typescript
public grantReadWrite(identity: IGrantable, objectsKeyPattern?: any): Grant
```

Grants read/write permissions for this bucket and it's contents to an IAM principal (Role/Group/User).

If an encryption key is used, permission to use the key for
encrypt/decrypt will also be granted.

Before CDK version 1.85.0, this method granted the `s3:PutObject*` permission that included `s3:PutObjectAcl`,
which could be used to grant read/write object access to IAM principals in other accounts.
If you want to get rid of that behavior, update your CDK version to 1.85.0 or later,
and make sure the `@aws-cdk/aws-s3:grantWriteWithoutAcl` feature flag is set to `true`
in the `context` key of your cdk.json file.
If you've already updated, but still need the principal to have permissions to modify the ACLs,
use the `grantPutAcl` method.

###### `identity`<sup>Required</sup> <a name="identity" id="@cloudkitect/components.CkBucket.grantReadWrite.parameter.identity"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

###### `objectsKeyPattern`<sup>Optional</sup> <a name="objectsKeyPattern" id="@cloudkitect/components.CkBucket.grantReadWrite.parameter.objectsKeyPattern"></a>

- *Type:* any

---

##### `grantWrite` <a name="grantWrite" id="@cloudkitect/components.CkBucket.grantWrite"></a>

```typescript
public grantWrite(identity: IGrantable, objectsKeyPattern?: any, allowedActionPatterns?: string[]): Grant
```

Grant write permissions to this bucket to an IAM principal.

If encryption is used, permission to use the key to encrypt the contents
of written files will also be granted to the same principal.

Before CDK version 1.85.0, this method granted the `s3:PutObject*` permission that included `s3:PutObjectAcl`,
which could be used to grant read/write object access to IAM principals in other accounts.
If you want to get rid of that behavior, update your CDK version to 1.85.0 or later,
and make sure the `@aws-cdk/aws-s3:grantWriteWithoutAcl` feature flag is set to `true`
in the `context` key of your cdk.json file.
If you've already updated, but still need the principal to have permissions to modify the ACLs,
use the `grantPutAcl` method.

###### `identity`<sup>Required</sup> <a name="identity" id="@cloudkitect/components.CkBucket.grantWrite.parameter.identity"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

###### `objectsKeyPattern`<sup>Optional</sup> <a name="objectsKeyPattern" id="@cloudkitect/components.CkBucket.grantWrite.parameter.objectsKeyPattern"></a>

- *Type:* any

---

###### `allowedActionPatterns`<sup>Optional</sup> <a name="allowedActionPatterns" id="@cloudkitect/components.CkBucket.grantWrite.parameter.allowedActionPatterns"></a>

- *Type:* string[]

---

##### `onCloudTrailEvent` <a name="onCloudTrailEvent" id="@cloudkitect/components.CkBucket.onCloudTrailEvent"></a>

```typescript
public onCloudTrailEvent(id: string, options?: OnCloudTrailBucketEventOptions): Rule
```

Define a CloudWatch event that triggers when something happens to this repository.

Requires that there exists at least one CloudTrail Trail in your account
that captures the event. This method will not create the Trail.

###### `id`<sup>Required</sup> <a name="id" id="@cloudkitect/components.CkBucket.onCloudTrailEvent.parameter.id"></a>

- *Type:* string

The id of the rule.

---

###### `options`<sup>Optional</sup> <a name="options" id="@cloudkitect/components.CkBucket.onCloudTrailEvent.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_s3.OnCloudTrailBucketEventOptions

Options for adding the rule.

---

##### `onCloudTrailPutObject` <a name="onCloudTrailPutObject" id="@cloudkitect/components.CkBucket.onCloudTrailPutObject"></a>

```typescript
public onCloudTrailPutObject(id: string, options?: OnCloudTrailBucketEventOptions): Rule
```

Defines an AWS CloudWatch event that triggers when an object is uploaded to the specified paths (keys) in this bucket using the PutObject API call.

Note that some tools like `aws s3 cp` will automatically use either
PutObject or the multipart upload API depending on the file size,
so using `onCloudTrailWriteObject` may be preferable.

Requires that there exists at least one CloudTrail Trail in your account
that captures the event. This method will not create the Trail.

###### `id`<sup>Required</sup> <a name="id" id="@cloudkitect/components.CkBucket.onCloudTrailPutObject.parameter.id"></a>

- *Type:* string

The id of the rule.

---

###### `options`<sup>Optional</sup> <a name="options" id="@cloudkitect/components.CkBucket.onCloudTrailPutObject.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_s3.OnCloudTrailBucketEventOptions

Options for adding the rule.

---

##### `onCloudTrailWriteObject` <a name="onCloudTrailWriteObject" id="@cloudkitect/components.CkBucket.onCloudTrailWriteObject"></a>

```typescript
public onCloudTrailWriteObject(id: string, options?: OnCloudTrailBucketEventOptions): Rule
```

Defines an AWS CloudWatch event that triggers when an object at the specified paths (keys) in this bucket are written to.

This includes
the events PutObject, CopyObject, and CompleteMultipartUpload.

Note that some tools like `aws s3 cp` will automatically use either
PutObject or the multipart upload API depending on the file size,
so using this method may be preferable to `onCloudTrailPutObject`.

Requires that there exists at least one CloudTrail Trail in your account
that captures the event. This method will not create the Trail.

###### `id`<sup>Required</sup> <a name="id" id="@cloudkitect/components.CkBucket.onCloudTrailWriteObject.parameter.id"></a>

- *Type:* string

The id of the rule.

---

###### `options`<sup>Optional</sup> <a name="options" id="@cloudkitect/components.CkBucket.onCloudTrailWriteObject.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_s3.OnCloudTrailBucketEventOptions

Options for adding the rule.

---

##### `s3UrlForObject` <a name="s3UrlForObject" id="@cloudkitect/components.CkBucket.s3UrlForObject"></a>

```typescript
public s3UrlForObject(key?: string): string
```

The S3 URL of an S3 object. For example:.

`s3://onlybucket`
- `s3://bucket/key`

###### `key`<sup>Optional</sup> <a name="key" id="@cloudkitect/components.CkBucket.s3UrlForObject.parameter.key"></a>

- *Type:* string

The S3 key of the object.

If not specified, the S3 URL of the
bucket is returned.

---

##### `transferAccelerationUrlForObject` <a name="transferAccelerationUrlForObject" id="@cloudkitect/components.CkBucket.transferAccelerationUrlForObject"></a>

```typescript
public transferAccelerationUrlForObject(key?: string, options?: TransferAccelerationUrlOptions): string
```

The https Transfer Acceleration URL of an S3 object.

Specify `dualStack: true` at the options
for dual-stack endpoint (connect to the bucket over IPv6). For example:

- `https://bucket.s3-accelerate.amazonaws.com`
- `https://bucket.s3-accelerate.amazonaws.com/key`

###### `key`<sup>Optional</sup> <a name="key" id="@cloudkitect/components.CkBucket.transferAccelerationUrlForObject.parameter.key"></a>

- *Type:* string

The S3 key of the object.

If not specified, the URL of the
bucket is returned.

---

###### `options`<sup>Optional</sup> <a name="options" id="@cloudkitect/components.CkBucket.transferAccelerationUrlForObject.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_s3.TransferAccelerationUrlOptions

Options for generating URL.

---

##### `urlForObject` <a name="urlForObject" id="@cloudkitect/components.CkBucket.urlForObject"></a>

```typescript
public urlForObject(key?: string): string
```

The https URL of an S3 object. Specify `regional: false` at the options for non-regional URLs. For example:.

`https://s3.us-west-1.amazonaws.com/onlybucket`
- `https://s3.us-west-1.amazonaws.com/bucket/key`
- `https://s3.cn-north-1.amazonaws.com.cn/china-bucket/mykey`

###### `key`<sup>Optional</sup> <a name="key" id="@cloudkitect/components.CkBucket.urlForObject.parameter.key"></a>

- *Type:* string

The S3 key of the object.

If not specified, the URL of the
bucket is returned.

---

##### `virtualHostedUrlForObject` <a name="virtualHostedUrlForObject" id="@cloudkitect/components.CkBucket.virtualHostedUrlForObject"></a>

```typescript
public virtualHostedUrlForObject(key?: string, options?: VirtualHostedStyleUrlOptions): string
```

The virtual hosted-style URL of an S3 object. Specify `regional: false` at the options for non-regional URL. For example:.

`https://only-bucket.s3.us-west-1.amazonaws.com`
- `https://bucket.s3.us-west-1.amazonaws.com/key`
- `https://bucket.s3.amazonaws.com/key`
- `https://china-bucket.s3.cn-north-1.amazonaws.com.cn/mykey`

###### `key`<sup>Optional</sup> <a name="key" id="@cloudkitect/components.CkBucket.virtualHostedUrlForObject.parameter.key"></a>

- *Type:* string

The S3 key of the object.

If not specified, the URL of the
bucket is returned.

---

###### `options`<sup>Optional</sup> <a name="options" id="@cloudkitect/components.CkBucket.virtualHostedUrlForObject.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_s3.VirtualHostedStyleUrlOptions

Options for generating URL.

---

##### `addCorsRule` <a name="addCorsRule" id="@cloudkitect/components.CkBucket.addCorsRule"></a>

```typescript
public addCorsRule(rule: CorsRule): void
```

Adds a cross-origin access configuration for objects in an Amazon S3 bucket.

###### `rule`<sup>Required</sup> <a name="rule" id="@cloudkitect/components.CkBucket.addCorsRule.parameter.rule"></a>

- *Type:* aws-cdk-lib.aws_s3.CorsRule

The CORS configuration rule to add.

---

##### `addInventory` <a name="addInventory" id="@cloudkitect/components.CkBucket.addInventory"></a>

```typescript
public addInventory(inventory: Inventory): void
```

Add an inventory configuration.

###### `inventory`<sup>Required</sup> <a name="inventory" id="@cloudkitect/components.CkBucket.addInventory.parameter.inventory"></a>

- *Type:* aws-cdk-lib.aws_s3.Inventory

configuration to add.

---

##### `addLifecycleRule` <a name="addLifecycleRule" id="@cloudkitect/components.CkBucket.addLifecycleRule"></a>

```typescript
public addLifecycleRule(rule: LifecycleRule): void
```

Add a lifecycle rule to the bucket.

###### `rule`<sup>Required</sup> <a name="rule" id="@cloudkitect/components.CkBucket.addLifecycleRule.parameter.rule"></a>

- *Type:* aws-cdk-lib.aws_s3.LifecycleRule

The rule to add.

---

##### `addMetric` <a name="addMetric" id="@cloudkitect/components.CkBucket.addMetric"></a>

```typescript
public addMetric(metric: BucketMetrics): void
```

Adds a metrics configuration for the CloudWatch request metrics from the bucket.

###### `metric`<sup>Required</sup> <a name="metric" id="@cloudkitect/components.CkBucket.addMetric.parameter.metric"></a>

- *Type:* aws-cdk-lib.aws_s3.BucketMetrics

The metric configuration to add.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cloudkitect/components.CkBucket.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cloudkitect/components.CkBucket.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#@cloudkitect/components.CkBucket.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#@cloudkitect/components.CkBucket.fromBucketArn">fromBucketArn</a></code> | *No description.* |
| <code><a href="#@cloudkitect/components.CkBucket.fromBucketAttributes">fromBucketAttributes</a></code> | Creates a Bucket construct that represents an external bucket. |
| <code><a href="#@cloudkitect/components.CkBucket.fromBucketName">fromBucketName</a></code> | *No description.* |
| <code><a href="#@cloudkitect/components.CkBucket.fromCfnBucket">fromCfnBucket</a></code> | Create a mutable `IBucket` based on a low-level `CfnBucket`. |
| <code><a href="#@cloudkitect/components.CkBucket.validateBucketName">validateBucketName</a></code> | Thrown an exception if the given bucket name is not valid. |

---

##### `isConstruct` <a name="isConstruct" id="@cloudkitect/components.CkBucket.isConstruct"></a>

```typescript
import { CkBucket } from '@cloudkitect/components'

CkBucket.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cloudkitect/components.CkBucket.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="@cloudkitect/components.CkBucket.isOwnedResource"></a>

```typescript
import { CkBucket } from '@cloudkitect/components'

CkBucket.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="@cloudkitect/components.CkBucket.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="@cloudkitect/components.CkBucket.isResource"></a>

```typescript
import { CkBucket } from '@cloudkitect/components'

CkBucket.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@cloudkitect/components.CkBucket.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromBucketArn` <a name="fromBucketArn" id="@cloudkitect/components.CkBucket.fromBucketArn"></a>

```typescript
import { CkBucket } from '@cloudkitect/components'

CkBucket.fromBucketArn(scope: Construct, id: string, bucketArn: string)
```

###### `scope`<sup>Required</sup> <a name="scope" id="@cloudkitect/components.CkBucket.fromBucketArn.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@cloudkitect/components.CkBucket.fromBucketArn.parameter.id"></a>

- *Type:* string

---

###### `bucketArn`<sup>Required</sup> <a name="bucketArn" id="@cloudkitect/components.CkBucket.fromBucketArn.parameter.bucketArn"></a>

- *Type:* string

---

##### `fromBucketAttributes` <a name="fromBucketAttributes" id="@cloudkitect/components.CkBucket.fromBucketAttributes"></a>

```typescript
import { CkBucket } from '@cloudkitect/components'

CkBucket.fromBucketAttributes(scope: Construct, id: string, attrs: BucketAttributes)
```

Creates a Bucket construct that represents an external bucket.

###### `scope`<sup>Required</sup> <a name="scope" id="@cloudkitect/components.CkBucket.fromBucketAttributes.parameter.scope"></a>

- *Type:* constructs.Construct

The parent creating construct (usually `this`).

---

###### `id`<sup>Required</sup> <a name="id" id="@cloudkitect/components.CkBucket.fromBucketAttributes.parameter.id"></a>

- *Type:* string

The construct's name.

---

###### `attrs`<sup>Required</sup> <a name="attrs" id="@cloudkitect/components.CkBucket.fromBucketAttributes.parameter.attrs"></a>

- *Type:* aws-cdk-lib.aws_s3.BucketAttributes

A `BucketAttributes` object.

Can be obtained from a call to
`bucket.export()` or manually created.

---

##### `fromBucketName` <a name="fromBucketName" id="@cloudkitect/components.CkBucket.fromBucketName"></a>

```typescript
import { CkBucket } from '@cloudkitect/components'

CkBucket.fromBucketName(scope: Construct, id: string, bucketName: string)
```

###### `scope`<sup>Required</sup> <a name="scope" id="@cloudkitect/components.CkBucket.fromBucketName.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@cloudkitect/components.CkBucket.fromBucketName.parameter.id"></a>

- *Type:* string

---

###### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cloudkitect/components.CkBucket.fromBucketName.parameter.bucketName"></a>

- *Type:* string

---

##### `fromCfnBucket` <a name="fromCfnBucket" id="@cloudkitect/components.CkBucket.fromCfnBucket"></a>

```typescript
import { CkBucket } from '@cloudkitect/components'

CkBucket.fromCfnBucket(cfnBucket: CfnBucket)
```

Create a mutable `IBucket` based on a low-level `CfnBucket`.

###### `cfnBucket`<sup>Required</sup> <a name="cfnBucket" id="@cloudkitect/components.CkBucket.fromCfnBucket.parameter.cfnBucket"></a>

- *Type:* aws-cdk-lib.aws_s3.CfnBucket

---

##### `validateBucketName` <a name="validateBucketName" id="@cloudkitect/components.CkBucket.validateBucketName"></a>

```typescript
import { CkBucket } from '@cloudkitect/components'

CkBucket.validateBucketName(physicalName: string)
```

Thrown an exception if the given bucket name is not valid.

###### `physicalName`<sup>Required</sup> <a name="physicalName" id="@cloudkitect/components.CkBucket.validateBucketName.parameter.physicalName"></a>

- *Type:* string

name of the bucket.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cloudkitect/components.CkBucket.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cloudkitect/components.CkBucket.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@cloudkitect/components.CkBucket.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@cloudkitect/components.CkBucket.property.bucketArn">bucketArn</a></code> | <code>string</code> | The ARN of the bucket. |
| <code><a href="#@cloudkitect/components.CkBucket.property.bucketDomainName">bucketDomainName</a></code> | <code>string</code> | The IPv4 DNS name of the specified bucket. |
| <code><a href="#@cloudkitect/components.CkBucket.property.bucketDualStackDomainName">bucketDualStackDomainName</a></code> | <code>string</code> | The IPv6 DNS name of the specified bucket. |
| <code><a href="#@cloudkitect/components.CkBucket.property.bucketName">bucketName</a></code> | <code>string</code> | The name of the bucket. |
| <code><a href="#@cloudkitect/components.CkBucket.property.bucketRegionalDomainName">bucketRegionalDomainName</a></code> | <code>string</code> | The regional domain name of the specified bucket. |
| <code><a href="#@cloudkitect/components.CkBucket.property.bucketWebsiteDomainName">bucketWebsiteDomainName</a></code> | <code>string</code> | The Domain name of the static website. |
| <code><a href="#@cloudkitect/components.CkBucket.property.bucketWebsiteUrl">bucketWebsiteUrl</a></code> | <code>string</code> | The URL of the static website. |
| <code><a href="#@cloudkitect/components.CkBucket.property.encryptionKey">encryptionKey</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | Optional KMS encryption key associated with this bucket. |
| <code><a href="#@cloudkitect/components.CkBucket.property.isWebsite">isWebsite</a></code> | <code>boolean</code> | If this bucket has been configured for static website hosting. |
| <code><a href="#@cloudkitect/components.CkBucket.property.policy">policy</a></code> | <code>aws-cdk-lib.aws_s3.BucketPolicy</code> | The resource policy associated with this bucket. |

---

##### `node`<sup>Required</sup> <a name="node" id="@cloudkitect/components.CkBucket.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@cloudkitect/components.CkBucket.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@cloudkitect/components.CkBucket.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `bucketArn`<sup>Required</sup> <a name="bucketArn" id="@cloudkitect/components.CkBucket.property.bucketArn"></a>

```typescript
public readonly bucketArn: string;
```

- *Type:* string

The ARN of the bucket.

---

##### `bucketDomainName`<sup>Required</sup> <a name="bucketDomainName" id="@cloudkitect/components.CkBucket.property.bucketDomainName"></a>

```typescript
public readonly bucketDomainName: string;
```

- *Type:* string

The IPv4 DNS name of the specified bucket.

---

##### `bucketDualStackDomainName`<sup>Required</sup> <a name="bucketDualStackDomainName" id="@cloudkitect/components.CkBucket.property.bucketDualStackDomainName"></a>

```typescript
public readonly bucketDualStackDomainName: string;
```

- *Type:* string

The IPv6 DNS name of the specified bucket.

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cloudkitect/components.CkBucket.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

The name of the bucket.

---

##### `bucketRegionalDomainName`<sup>Required</sup> <a name="bucketRegionalDomainName" id="@cloudkitect/components.CkBucket.property.bucketRegionalDomainName"></a>

```typescript
public readonly bucketRegionalDomainName: string;
```

- *Type:* string

The regional domain name of the specified bucket.

---

##### `bucketWebsiteDomainName`<sup>Required</sup> <a name="bucketWebsiteDomainName" id="@cloudkitect/components.CkBucket.property.bucketWebsiteDomainName"></a>

```typescript
public readonly bucketWebsiteDomainName: string;
```

- *Type:* string

The Domain name of the static website.

---

##### `bucketWebsiteUrl`<sup>Required</sup> <a name="bucketWebsiteUrl" id="@cloudkitect/components.CkBucket.property.bucketWebsiteUrl"></a>

```typescript
public readonly bucketWebsiteUrl: string;
```

- *Type:* string

The URL of the static website.

---

##### `encryptionKey`<sup>Optional</sup> <a name="encryptionKey" id="@cloudkitect/components.CkBucket.property.encryptionKey"></a>

```typescript
public readonly encryptionKey: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey

Optional KMS encryption key associated with this bucket.

---

##### `isWebsite`<sup>Optional</sup> <a name="isWebsite" id="@cloudkitect/components.CkBucket.property.isWebsite"></a>

```typescript
public readonly isWebsite: boolean;
```

- *Type:* boolean

If this bucket has been configured for static website hosting.

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cloudkitect/components.CkBucket.property.policy"></a>

```typescript
public readonly policy: BucketPolicy;
```

- *Type:* aws-cdk-lib.aws_s3.BucketPolicy

The resource policy associated with this bucket.

If `autoCreatePolicy` is true, a `BucketPolicy` will be created upon the
first call to addToResourcePolicy(s).

---


### CkCluster <a name="CkCluster" id="@cloudkitect/components.CkCluster"></a>

CloudKitect ECS cluster component is a regional grouping of one or more container instances on which you can run tasks and services and enables container insights,  ### Default Configuration New VPC is created by default.

### Default Alarms
Available only in Enhanced components

### Logging and Monitoring
Available only in Enhanced components

### Examples
Default Usage
```ts
new CkCluster(this, "LogicalId", {});
```

Custom Configuration
```ts
new CkCluster(this, "LogicalId", {
   containerInsights: false
});
```

### Compliance
It addresses the following compliance requirements

#### Initializers <a name="Initializers" id="@cloudkitect/components.CkCluster.Initializer"></a>

```typescript
import { CkCluster } from '@cloudkitect/components'

new CkCluster(scope: Construct, id: string, props: CkClusterProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cloudkitect/components.CkCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@cloudkitect/components.CkCluster.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cloudkitect/components.CkCluster.Initializer.parameter.props">props</a></code> | <code><a href="#@cloudkitect/components.CkClusterProps">CkClusterProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cloudkitect/components.CkCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@cloudkitect/components.CkCluster.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@cloudkitect/components.CkCluster.Initializer.parameter.props"></a>

- *Type:* <a href="#@cloudkitect/components.CkClusterProps">CkClusterProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cloudkitect/components.CkCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cloudkitect/components.CkCluster.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#@cloudkitect/components.CkCluster.addAsgCapacityProvider">addAsgCapacityProvider</a></code> | This method adds an Auto Scaling Group Capacity Provider to a cluster. |
| <code><a href="#@cloudkitect/components.CkCluster.addCapacity">addCapacity</a></code> | It is highly recommended to use `Cluster.addAsgCapacityProvider` instead of this method. |
| <code><a href="#@cloudkitect/components.CkCluster.addDefaultCapacityProviderStrategy">addDefaultCapacityProviderStrategy</a></code> | Add default capacity provider strategy for this cluster. |
| <code><a href="#@cloudkitect/components.CkCluster.addDefaultCloudMapNamespace">addDefaultCloudMapNamespace</a></code> | Add an AWS Cloud Map DNS namespace for this cluster. |
| <code><a href="#@cloudkitect/components.CkCluster.arnForTasks">arnForTasks</a></code> | Returns an ARN that represents all tasks within the cluster that match the task pattern specified. |
| <code><a href="#@cloudkitect/components.CkCluster.enableFargateCapacityProviders">enableFargateCapacityProviders</a></code> | Enable the Fargate capacity providers for this cluster. |
| <code><a href="#@cloudkitect/components.CkCluster.grantTaskProtection">grantTaskProtection</a></code> | Grants an ECS Task Protection API permission to the specified grantee. |
| <code><a href="#@cloudkitect/components.CkCluster.metric">metric</a></code> | This method returns the specifed CloudWatch metric for this cluster. |
| <code><a href="#@cloudkitect/components.CkCluster.metricCpuReservation">metricCpuReservation</a></code> | This method returns the CloudWatch metric for this clusters CPU reservation. |
| <code><a href="#@cloudkitect/components.CkCluster.metricCpuUtilization">metricCpuUtilization</a></code> | This method returns the CloudWatch metric for this clusters CPU utilization. |
| <code><a href="#@cloudkitect/components.CkCluster.metricMemoryReservation">metricMemoryReservation</a></code> | This method returns the CloudWatch metric for this clusters memory reservation. |
| <code><a href="#@cloudkitect/components.CkCluster.metricMemoryUtilization">metricMemoryUtilization</a></code> | This method returns the CloudWatch metric for this clusters memory utilization. |

---

##### `toString` <a name="toString" id="@cloudkitect/components.CkCluster.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@cloudkitect/components.CkCluster.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="@cloudkitect/components.CkCluster.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addAsgCapacityProvider` <a name="addAsgCapacityProvider" id="@cloudkitect/components.CkCluster.addAsgCapacityProvider"></a>

```typescript
public addAsgCapacityProvider(provider: AsgCapacityProvider, options?: AddAutoScalingGroupCapacityOptions): void
```

This method adds an Auto Scaling Group Capacity Provider to a cluster.

###### `provider`<sup>Required</sup> <a name="provider" id="@cloudkitect/components.CkCluster.addAsgCapacityProvider.parameter.provider"></a>

- *Type:* aws-cdk-lib.aws_ecs.AsgCapacityProvider

the capacity provider to add to this cluster.

---

###### `options`<sup>Optional</sup> <a name="options" id="@cloudkitect/components.CkCluster.addAsgCapacityProvider.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_ecs.AddAutoScalingGroupCapacityOptions

---

##### `addCapacity` <a name="addCapacity" id="@cloudkitect/components.CkCluster.addCapacity"></a>

```typescript
public addCapacity(id: string, options: AddCapacityOptions): AutoScalingGroup
```

It is highly recommended to use `Cluster.addAsgCapacityProvider` instead of this method.

This method adds compute capacity to a cluster by creating an AutoScalingGroup with the specified options.

Returns the AutoScalingGroup so you can add autoscaling settings to it.

###### `id`<sup>Required</sup> <a name="id" id="@cloudkitect/components.CkCluster.addCapacity.parameter.id"></a>

- *Type:* string

---

###### `options`<sup>Required</sup> <a name="options" id="@cloudkitect/components.CkCluster.addCapacity.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_ecs.AddCapacityOptions

---

##### `addDefaultCapacityProviderStrategy` <a name="addDefaultCapacityProviderStrategy" id="@cloudkitect/components.CkCluster.addDefaultCapacityProviderStrategy"></a>

```typescript
public addDefaultCapacityProviderStrategy(defaultCapacityProviderStrategy: CapacityProviderStrategy[]): void
```

Add default capacity provider strategy for this cluster.

###### `defaultCapacityProviderStrategy`<sup>Required</sup> <a name="defaultCapacityProviderStrategy" id="@cloudkitect/components.CkCluster.addDefaultCapacityProviderStrategy.parameter.defaultCapacityProviderStrategy"></a>

- *Type:* aws-cdk-lib.aws_ecs.CapacityProviderStrategy[]

cluster default capacity provider strategy. This takes the form of a list of CapacityProviderStrategy objects.

For example
[
{
capacityProvider: 'FARGATE',
base: 10,
weight: 50
}
]

---

##### `addDefaultCloudMapNamespace` <a name="addDefaultCloudMapNamespace" id="@cloudkitect/components.CkCluster.addDefaultCloudMapNamespace"></a>

```typescript
public addDefaultCloudMapNamespace(options: CloudMapNamespaceOptions): INamespace
```

Add an AWS Cloud Map DNS namespace for this cluster.

NOTE: HttpNamespaces are supported only for use cases involving Service Connect. For use cases involving both Service-
Discovery and Service Connect, customers should manage the HttpNamespace outside of the Cluster.addDefaultCloudMapNamespace method.

###### `options`<sup>Required</sup> <a name="options" id="@cloudkitect/components.CkCluster.addDefaultCloudMapNamespace.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_ecs.CloudMapNamespaceOptions

---

##### `arnForTasks` <a name="arnForTasks" id="@cloudkitect/components.CkCluster.arnForTasks"></a>

```typescript
public arnForTasks(keyPattern: string): string
```

Returns an ARN that represents all tasks within the cluster that match the task pattern specified.

To represent all tasks, specify ``"*"``.

###### `keyPattern`<sup>Required</sup> <a name="keyPattern" id="@cloudkitect/components.CkCluster.arnForTasks.parameter.keyPattern"></a>

- *Type:* string

Task id pattern.

---

##### `enableFargateCapacityProviders` <a name="enableFargateCapacityProviders" id="@cloudkitect/components.CkCluster.enableFargateCapacityProviders"></a>

```typescript
public enableFargateCapacityProviders(): void
```

Enable the Fargate capacity providers for this cluster.

##### `grantTaskProtection` <a name="grantTaskProtection" id="@cloudkitect/components.CkCluster.grantTaskProtection"></a>

```typescript
public grantTaskProtection(grantee: IGrantable): Grant
```

Grants an ECS Task Protection API permission to the specified grantee.

This method provides a streamlined way to assign the 'ecs:UpdateTaskProtection'
permission, enabling the grantee to manage task protection in the ECS cluster.

###### `grantee`<sup>Required</sup> <a name="grantee" id="@cloudkitect/components.CkCluster.grantTaskProtection.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

The entity (e.g., IAM role or user) to grant the permissions to.

---

##### `metric` <a name="metric" id="@cloudkitect/components.CkCluster.metric"></a>

```typescript
public metric(metricName: string, props?: MetricOptions): Metric
```

This method returns the specifed CloudWatch metric for this cluster.

###### `metricName`<sup>Required</sup> <a name="metricName" id="@cloudkitect/components.CkCluster.metric.parameter.metricName"></a>

- *Type:* string

---

###### `props`<sup>Optional</sup> <a name="props" id="@cloudkitect/components.CkCluster.metric.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricCpuReservation` <a name="metricCpuReservation" id="@cloudkitect/components.CkCluster.metricCpuReservation"></a>

```typescript
public metricCpuReservation(props?: MetricOptions): Metric
```

This method returns the CloudWatch metric for this clusters CPU reservation.

###### `props`<sup>Optional</sup> <a name="props" id="@cloudkitect/components.CkCluster.metricCpuReservation.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricCpuUtilization` <a name="metricCpuUtilization" id="@cloudkitect/components.CkCluster.metricCpuUtilization"></a>

```typescript
public metricCpuUtilization(props?: MetricOptions): Metric
```

This method returns the CloudWatch metric for this clusters CPU utilization.

###### `props`<sup>Optional</sup> <a name="props" id="@cloudkitect/components.CkCluster.metricCpuUtilization.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricMemoryReservation` <a name="metricMemoryReservation" id="@cloudkitect/components.CkCluster.metricMemoryReservation"></a>

```typescript
public metricMemoryReservation(props?: MetricOptions): Metric
```

This method returns the CloudWatch metric for this clusters memory reservation.

###### `props`<sup>Optional</sup> <a name="props" id="@cloudkitect/components.CkCluster.metricMemoryReservation.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricMemoryUtilization` <a name="metricMemoryUtilization" id="@cloudkitect/components.CkCluster.metricMemoryUtilization"></a>

```typescript
public metricMemoryUtilization(props?: MetricOptions): Metric
```

This method returns the CloudWatch metric for this clusters memory utilization.

###### `props`<sup>Optional</sup> <a name="props" id="@cloudkitect/components.CkCluster.metricMemoryUtilization.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cloudkitect/components.CkCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cloudkitect/components.CkCluster.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#@cloudkitect/components.CkCluster.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#@cloudkitect/components.CkCluster.fromClusterArn">fromClusterArn</a></code> | Import an existing cluster to the stack from the cluster ARN. |
| <code><a href="#@cloudkitect/components.CkCluster.fromClusterAttributes">fromClusterAttributes</a></code> | Import an existing cluster to the stack from its attributes. |
| <code><a href="#@cloudkitect/components.CkCluster.isCluster">isCluster</a></code> | Return whether the given object is a Cluster. |

---

##### `isConstruct` <a name="isConstruct" id="@cloudkitect/components.CkCluster.isConstruct"></a>

```typescript
import { CkCluster } from '@cloudkitect/components'

CkCluster.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cloudkitect/components.CkCluster.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="@cloudkitect/components.CkCluster.isOwnedResource"></a>

```typescript
import { CkCluster } from '@cloudkitect/components'

CkCluster.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="@cloudkitect/components.CkCluster.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="@cloudkitect/components.CkCluster.isResource"></a>

```typescript
import { CkCluster } from '@cloudkitect/components'

CkCluster.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@cloudkitect/components.CkCluster.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromClusterArn` <a name="fromClusterArn" id="@cloudkitect/components.CkCluster.fromClusterArn"></a>

```typescript
import { CkCluster } from '@cloudkitect/components'

CkCluster.fromClusterArn(scope: Construct, id: string, clusterArn: string)
```

Import an existing cluster to the stack from the cluster ARN.

This does not provide access to the vpc, hasEc2Capacity, or connections -
use the `fromClusterAttributes` method to access those properties.

###### `scope`<sup>Required</sup> <a name="scope" id="@cloudkitect/components.CkCluster.fromClusterArn.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@cloudkitect/components.CkCluster.fromClusterArn.parameter.id"></a>

- *Type:* string

---

###### `clusterArn`<sup>Required</sup> <a name="clusterArn" id="@cloudkitect/components.CkCluster.fromClusterArn.parameter.clusterArn"></a>

- *Type:* string

---

##### `fromClusterAttributes` <a name="fromClusterAttributes" id="@cloudkitect/components.CkCluster.fromClusterAttributes"></a>

```typescript
import { CkCluster } from '@cloudkitect/components'

CkCluster.fromClusterAttributes(scope: Construct, id: string, attrs: ClusterAttributes)
```

Import an existing cluster to the stack from its attributes.

###### `scope`<sup>Required</sup> <a name="scope" id="@cloudkitect/components.CkCluster.fromClusterAttributes.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@cloudkitect/components.CkCluster.fromClusterAttributes.parameter.id"></a>

- *Type:* string

---

###### `attrs`<sup>Required</sup> <a name="attrs" id="@cloudkitect/components.CkCluster.fromClusterAttributes.parameter.attrs"></a>

- *Type:* aws-cdk-lib.aws_ecs.ClusterAttributes

---

##### `isCluster` <a name="isCluster" id="@cloudkitect/components.CkCluster.isCluster"></a>

```typescript
import { CkCluster } from '@cloudkitect/components'

CkCluster.isCluster(x: any)
```

Return whether the given object is a Cluster.

###### `x`<sup>Required</sup> <a name="x" id="@cloudkitect/components.CkCluster.isCluster.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cloudkitect/components.CkCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cloudkitect/components.CkCluster.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@cloudkitect/components.CkCluster.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@cloudkitect/components.CkCluster.property.capacityProviderNames">capacityProviderNames</a></code> | <code>string[]</code> | Getter for _capacityProviderNames added to cluster. |
| <code><a href="#@cloudkitect/components.CkCluster.property.clusterArn">clusterArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) that identifies the cluster. |
| <code><a href="#@cloudkitect/components.CkCluster.property.clusterName">clusterName</a></code> | <code>string</code> | The name of the cluster. |
| <code><a href="#@cloudkitect/components.CkCluster.property.connections">connections</a></code> | <code>aws-cdk-lib.aws_ec2.Connections</code> | Manage the allowed network connections for the cluster with Security Groups. |
| <code><a href="#@cloudkitect/components.CkCluster.property.defaultCapacityProviderStrategy">defaultCapacityProviderStrategy</a></code> | <code>aws-cdk-lib.aws_ecs.CapacityProviderStrategy[]</code> | Getter for _defaultCapacityProviderStrategy. |
| <code><a href="#@cloudkitect/components.CkCluster.property.hasEc2Capacity">hasEc2Capacity</a></code> | <code>boolean</code> | Whether the cluster has EC2 capacity associated with it. |
| <code><a href="#@cloudkitect/components.CkCluster.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | The VPC associated with the cluster. |
| <code><a href="#@cloudkitect/components.CkCluster.property.autoscalingGroup">autoscalingGroup</a></code> | <code>aws-cdk-lib.aws_autoscaling.IAutoScalingGroup</code> | Getter for autoscaling group added to cluster. |
| <code><a href="#@cloudkitect/components.CkCluster.property.defaultCloudMapNamespace">defaultCloudMapNamespace</a></code> | <code>aws-cdk-lib.aws_servicediscovery.INamespace</code> | Getter for namespace added to cluster. |
| <code><a href="#@cloudkitect/components.CkCluster.property.executeCommandConfiguration">executeCommandConfiguration</a></code> | <code>aws-cdk-lib.aws_ecs.ExecuteCommandConfiguration</code> | Getter for execute command configuration associated with the cluster. |

---

##### `node`<sup>Required</sup> <a name="node" id="@cloudkitect/components.CkCluster.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@cloudkitect/components.CkCluster.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@cloudkitect/components.CkCluster.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `capacityProviderNames`<sup>Required</sup> <a name="capacityProviderNames" id="@cloudkitect/components.CkCluster.property.capacityProviderNames"></a>

```typescript
public readonly capacityProviderNames: string[];
```

- *Type:* string[]

Getter for _capacityProviderNames added to cluster.

---

##### `clusterArn`<sup>Required</sup> <a name="clusterArn" id="@cloudkitect/components.CkCluster.property.clusterArn"></a>

```typescript
public readonly clusterArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) that identifies the cluster.

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cloudkitect/components.CkCluster.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

The name of the cluster.

---

##### `connections`<sup>Required</sup> <a name="connections" id="@cloudkitect/components.CkCluster.property.connections"></a>

```typescript
public readonly connections: Connections;
```

- *Type:* aws-cdk-lib.aws_ec2.Connections

Manage the allowed network connections for the cluster with Security Groups.

---

##### `defaultCapacityProviderStrategy`<sup>Required</sup> <a name="defaultCapacityProviderStrategy" id="@cloudkitect/components.CkCluster.property.defaultCapacityProviderStrategy"></a>

```typescript
public readonly defaultCapacityProviderStrategy: CapacityProviderStrategy[];
```

- *Type:* aws-cdk-lib.aws_ecs.CapacityProviderStrategy[]

Getter for _defaultCapacityProviderStrategy.

This is necessary to correctly create Capacity Provider Associations.

---

##### `hasEc2Capacity`<sup>Required</sup> <a name="hasEc2Capacity" id="@cloudkitect/components.CkCluster.property.hasEc2Capacity"></a>

```typescript
public readonly hasEc2Capacity: boolean;
```

- *Type:* boolean

Whether the cluster has EC2 capacity associated with it.

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@cloudkitect/components.CkCluster.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

The VPC associated with the cluster.

---

##### `autoscalingGroup`<sup>Optional</sup> <a name="autoscalingGroup" id="@cloudkitect/components.CkCluster.property.autoscalingGroup"></a>

```typescript
public readonly autoscalingGroup: IAutoScalingGroup;
```

- *Type:* aws-cdk-lib.aws_autoscaling.IAutoScalingGroup

Getter for autoscaling group added to cluster.

---

##### `defaultCloudMapNamespace`<sup>Optional</sup> <a name="defaultCloudMapNamespace" id="@cloudkitect/components.CkCluster.property.defaultCloudMapNamespace"></a>

```typescript
public readonly defaultCloudMapNamespace: INamespace;
```

- *Type:* aws-cdk-lib.aws_servicediscovery.INamespace

Getter for namespace added to cluster.

---

##### `executeCommandConfiguration`<sup>Optional</sup> <a name="executeCommandConfiguration" id="@cloudkitect/components.CkCluster.property.executeCommandConfiguration"></a>

```typescript
public readonly executeCommandConfiguration: ExecuteCommandConfiguration;
```

- *Type:* aws-cdk-lib.aws_ecs.ExecuteCommandConfiguration

Getter for execute command configuration associated with the cluster.

---


### CkDistribution <a name="CkDistribution" id="@cloudkitect/components.CkDistribution"></a>

CloudKitect CloudFront Distribution Component.

### Default Configuration
Http Protocol: Redirect to Https
Protocol Version: SecurityPolicyProtocol.TLS_V1_2_2021

### Default Alarms
Available only in Enhanced components

### Logging and Monitoring
Available only in Enhanced components


### Examples
Default Usage
```ts
new CkDistribution(this, "LogicalId", {});
```

### Compliance
It addresses the following compliance requirements
1. Cloudfront origin should not use insecure protocols
   >  - Risk Level: Medium
   >  - Compliance: PCI, HIPAA, APRA, MAS, NIST4
   >  - Well Architected Pillar: Security
2. Cloudfront uses enhanced security policy min TLS1.2
   >  - Risk Level: High
   >  - Compliance: PCI, HIPAA, MAS, NIST4
   >  - Well Architected Pillar: Security
3. Cloudfront uses only secure protocol to communicate with origin
   >  - Risk Level: Medium
   >  - Compliance: PCI, HIPAA, APRA, MAS, NIST4
   >  - Well Architected Pillar: Security
4. Cloudfront uses only secure protocol to communicate with end users
   >  - Risk Level: High
   >  - Compliance: PCI, HIPAA, NIST4
   >  - Well Architected Pillar: Security
5. Use appropriate class for each environment to save cost
   >  - Risk Level: Low
   >  - Compliance: NA
   >  - Well Architected Pillar: Cost Optimization

#### Initializers <a name="Initializers" id="@cloudkitect/components.CkDistribution.Initializer"></a>

```typescript
import { CkDistribution } from '@cloudkitect/components'

new CkDistribution(scope: Construct, id: string, props: CkDistributionProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cloudkitect/components.CkDistribution.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@cloudkitect/components.CkDistribution.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cloudkitect/components.CkDistribution.Initializer.parameter.props">props</a></code> | <code><a href="#@cloudkitect/components.CkDistributionProps">CkDistributionProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cloudkitect/components.CkDistribution.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@cloudkitect/components.CkDistribution.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@cloudkitect/components.CkDistribution.Initializer.parameter.props"></a>

- *Type:* <a href="#@cloudkitect/components.CkDistributionProps">CkDistributionProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cloudkitect/components.CkDistribution.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cloudkitect/components.CkDistribution.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#@cloudkitect/components.CkDistribution.addBehavior">addBehavior</a></code> | Adds a new behavior to this distribution for the given pathPattern. |
| <code><a href="#@cloudkitect/components.CkDistribution.grant">grant</a></code> | Adds an IAM policy statement associated with this distribution to an IAM principal's policy. |
| <code><a href="#@cloudkitect/components.CkDistribution.grantCreateInvalidation">grantCreateInvalidation</a></code> | Grant to create invalidations for this bucket to an IAM principal (Role/Group/User). |
| <code><a href="#@cloudkitect/components.CkDistribution.metric">metric</a></code> | Return the given named metric for this Distribution. |
| <code><a href="#@cloudkitect/components.CkDistribution.metric401ErrorRate">metric401ErrorRate</a></code> | Metric for the percentage of all viewer requests for which the response's HTTP status code is 401. |
| <code><a href="#@cloudkitect/components.CkDistribution.metric403ErrorRate">metric403ErrorRate</a></code> | Metric for the percentage of all viewer requests for which the response's HTTP status code is 403. |
| <code><a href="#@cloudkitect/components.CkDistribution.metric404ErrorRate">metric404ErrorRate</a></code> | Metric for the percentage of all viewer requests for which the response's HTTP status code is 404. |
| <code><a href="#@cloudkitect/components.CkDistribution.metric4xxErrorRate">metric4xxErrorRate</a></code> | Metric for the percentage of all viewer requests for which the response's HTTP status code is 4xx. |
| <code><a href="#@cloudkitect/components.CkDistribution.metric502ErrorRate">metric502ErrorRate</a></code> | Metric for the percentage of all viewer requests for which the response's HTTP status code is 502. |
| <code><a href="#@cloudkitect/components.CkDistribution.metric503ErrorRate">metric503ErrorRate</a></code> | Metric for the percentage of all viewer requests for which the response's HTTP status code is 503. |
| <code><a href="#@cloudkitect/components.CkDistribution.metric504ErrorRate">metric504ErrorRate</a></code> | Metric for the percentage of all viewer requests for which the response's HTTP status code is 504. |
| <code><a href="#@cloudkitect/components.CkDistribution.metric5xxErrorRate">metric5xxErrorRate</a></code> | Metric for the percentage of all viewer requests for which the response's HTTP status code is 5xx. |
| <code><a href="#@cloudkitect/components.CkDistribution.metricBytesDownloaded">metricBytesDownloaded</a></code> | Metric for the total number of bytes downloaded by viewers for GET, HEAD, and OPTIONS requests. |
| <code><a href="#@cloudkitect/components.CkDistribution.metricBytesUploaded">metricBytesUploaded</a></code> | Metric for the total number of bytes that viewers uploaded to your origin with CloudFront, using POST and PUT requests. |
| <code><a href="#@cloudkitect/components.CkDistribution.metricCacheHitRate">metricCacheHitRate</a></code> | Metric for the percentage of all cacheable requests for which CloudFront served the content from its cache. |
| <code><a href="#@cloudkitect/components.CkDistribution.metricOriginLatency">metricOriginLatency</a></code> | Metric for the total time spent from when CloudFront receives a request to when it starts providing a response to the network (not the viewer), for requests that are served from the origin, not the CloudFront cache. |
| <code><a href="#@cloudkitect/components.CkDistribution.metricRequests">metricRequests</a></code> | Metric for the total number of viewer requests received by CloudFront, for all HTTP methods and for both HTTP and HTTPS requests. |
| <code><a href="#@cloudkitect/components.CkDistribution.metricTotalErrorRate">metricTotalErrorRate</a></code> | Metric for the percentage of all viewer requests for which the response's HTTP status code is 4xx or 5xx. |

---

##### `toString` <a name="toString" id="@cloudkitect/components.CkDistribution.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@cloudkitect/components.CkDistribution.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="@cloudkitect/components.CkDistribution.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addBehavior` <a name="addBehavior" id="@cloudkitect/components.CkDistribution.addBehavior"></a>

```typescript
public addBehavior(pathPattern: string, origin: IOrigin, behaviorOptions?: AddBehaviorOptions): void
```

Adds a new behavior to this distribution for the given pathPattern.

###### `pathPattern`<sup>Required</sup> <a name="pathPattern" id="@cloudkitect/components.CkDistribution.addBehavior.parameter.pathPattern"></a>

- *Type:* string

the path pattern (e.g., 'images/*') that specifies which requests to apply the behavior to.

---

###### `origin`<sup>Required</sup> <a name="origin" id="@cloudkitect/components.CkDistribution.addBehavior.parameter.origin"></a>

- *Type:* aws-cdk-lib.aws_cloudfront.IOrigin

the origin to use for this behavior.

---

###### `behaviorOptions`<sup>Optional</sup> <a name="behaviorOptions" id="@cloudkitect/components.CkDistribution.addBehavior.parameter.behaviorOptions"></a>

- *Type:* aws-cdk-lib.aws_cloudfront.AddBehaviorOptions

the options for the behavior at this path.

---

##### `grant` <a name="grant" id="@cloudkitect/components.CkDistribution.grant"></a>

```typescript
public grant(identity: IGrantable, actions: string): Grant
```

Adds an IAM policy statement associated with this distribution to an IAM principal's policy.

###### `identity`<sup>Required</sup> <a name="identity" id="@cloudkitect/components.CkDistribution.grant.parameter.identity"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

The principal.

---

###### `actions`<sup>Required</sup> <a name="actions" id="@cloudkitect/components.CkDistribution.grant.parameter.actions"></a>

- *Type:* string

The set of actions to allow (i.e. "cloudfront:ListInvalidations").

---

##### `grantCreateInvalidation` <a name="grantCreateInvalidation" id="@cloudkitect/components.CkDistribution.grantCreateInvalidation"></a>

```typescript
public grantCreateInvalidation(identity: IGrantable): Grant
```

Grant to create invalidations for this bucket to an IAM principal (Role/Group/User).

###### `identity`<sup>Required</sup> <a name="identity" id="@cloudkitect/components.CkDistribution.grantCreateInvalidation.parameter.identity"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

The principal.

---

##### `metric` <a name="metric" id="@cloudkitect/components.CkDistribution.metric"></a>

```typescript
public metric(metricName: string, props?: MetricOptions): Metric
```

Return the given named metric for this Distribution.

###### `metricName`<sup>Required</sup> <a name="metricName" id="@cloudkitect/components.CkDistribution.metric.parameter.metricName"></a>

- *Type:* string

---

###### `props`<sup>Optional</sup> <a name="props" id="@cloudkitect/components.CkDistribution.metric.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metric401ErrorRate` <a name="metric401ErrorRate" id="@cloudkitect/components.CkDistribution.metric401ErrorRate"></a>

```typescript
public metric401ErrorRate(props?: MetricOptions): Metric
```

Metric for the percentage of all viewer requests for which the response's HTTP status code is 401.

To obtain this metric, you need to set `publishAdditionalMetrics` to `true`.

###### `props`<sup>Optional</sup> <a name="props" id="@cloudkitect/components.CkDistribution.metric401ErrorRate.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metric403ErrorRate` <a name="metric403ErrorRate" id="@cloudkitect/components.CkDistribution.metric403ErrorRate"></a>

```typescript
public metric403ErrorRate(props?: MetricOptions): Metric
```

Metric for the percentage of all viewer requests for which the response's HTTP status code is 403.

To obtain this metric, you need to set `publishAdditionalMetrics` to `true`.

###### `props`<sup>Optional</sup> <a name="props" id="@cloudkitect/components.CkDistribution.metric403ErrorRate.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metric404ErrorRate` <a name="metric404ErrorRate" id="@cloudkitect/components.CkDistribution.metric404ErrorRate"></a>

```typescript
public metric404ErrorRate(props?: MetricOptions): Metric
```

Metric for the percentage of all viewer requests for which the response's HTTP status code is 404.

To obtain this metric, you need to set `publishAdditionalMetrics` to `true`.

###### `props`<sup>Optional</sup> <a name="props" id="@cloudkitect/components.CkDistribution.metric404ErrorRate.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metric4xxErrorRate` <a name="metric4xxErrorRate" id="@cloudkitect/components.CkDistribution.metric4xxErrorRate"></a>

```typescript
public metric4xxErrorRate(props?: MetricOptions): Metric
```

Metric for the percentage of all viewer requests for which the response's HTTP status code is 4xx.

###### `props`<sup>Optional</sup> <a name="props" id="@cloudkitect/components.CkDistribution.metric4xxErrorRate.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metric502ErrorRate` <a name="metric502ErrorRate" id="@cloudkitect/components.CkDistribution.metric502ErrorRate"></a>

```typescript
public metric502ErrorRate(props?: MetricOptions): Metric
```

Metric for the percentage of all viewer requests for which the response's HTTP status code is 502.

To obtain this metric, you need to set `publishAdditionalMetrics` to `true`.

###### `props`<sup>Optional</sup> <a name="props" id="@cloudkitect/components.CkDistribution.metric502ErrorRate.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metric503ErrorRate` <a name="metric503ErrorRate" id="@cloudkitect/components.CkDistribution.metric503ErrorRate"></a>

```typescript
public metric503ErrorRate(props?: MetricOptions): Metric
```

Metric for the percentage of all viewer requests for which the response's HTTP status code is 503.

To obtain this metric, you need to set `publishAdditionalMetrics` to `true`.

###### `props`<sup>Optional</sup> <a name="props" id="@cloudkitect/components.CkDistribution.metric503ErrorRate.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metric504ErrorRate` <a name="metric504ErrorRate" id="@cloudkitect/components.CkDistribution.metric504ErrorRate"></a>

```typescript
public metric504ErrorRate(props?: MetricOptions): Metric
```

Metric for the percentage of all viewer requests for which the response's HTTP status code is 504.

To obtain this metric, you need to set `publishAdditionalMetrics` to `true`.

###### `props`<sup>Optional</sup> <a name="props" id="@cloudkitect/components.CkDistribution.metric504ErrorRate.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metric5xxErrorRate` <a name="metric5xxErrorRate" id="@cloudkitect/components.CkDistribution.metric5xxErrorRate"></a>

```typescript
public metric5xxErrorRate(props?: MetricOptions): Metric
```

Metric for the percentage of all viewer requests for which the response's HTTP status code is 5xx.

###### `props`<sup>Optional</sup> <a name="props" id="@cloudkitect/components.CkDistribution.metric5xxErrorRate.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricBytesDownloaded` <a name="metricBytesDownloaded" id="@cloudkitect/components.CkDistribution.metricBytesDownloaded"></a>

```typescript
public metricBytesDownloaded(props?: MetricOptions): Metric
```

Metric for the total number of bytes downloaded by viewers for GET, HEAD, and OPTIONS requests.

###### `props`<sup>Optional</sup> <a name="props" id="@cloudkitect/components.CkDistribution.metricBytesDownloaded.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricBytesUploaded` <a name="metricBytesUploaded" id="@cloudkitect/components.CkDistribution.metricBytesUploaded"></a>

```typescript
public metricBytesUploaded(props?: MetricOptions): Metric
```

Metric for the total number of bytes that viewers uploaded to your origin with CloudFront, using POST and PUT requests.

###### `props`<sup>Optional</sup> <a name="props" id="@cloudkitect/components.CkDistribution.metricBytesUploaded.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricCacheHitRate` <a name="metricCacheHitRate" id="@cloudkitect/components.CkDistribution.metricCacheHitRate"></a>

```typescript
public metricCacheHitRate(props?: MetricOptions): Metric
```

Metric for the percentage of all cacheable requests for which CloudFront served the content from its cache.

HTTP POST and PUT requests, and errors, are not considered cacheable requests.

To obtain this metric, you need to set `publishAdditionalMetrics` to `true`.

###### `props`<sup>Optional</sup> <a name="props" id="@cloudkitect/components.CkDistribution.metricCacheHitRate.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricOriginLatency` <a name="metricOriginLatency" id="@cloudkitect/components.CkDistribution.metricOriginLatency"></a>

```typescript
public metricOriginLatency(props?: MetricOptions): Metric
```

Metric for the total time spent from when CloudFront receives a request to when it starts providing a response to the network (not the viewer), for requests that are served from the origin, not the CloudFront cache.

This is also known as first byte latency, or time-to-first-byte.

To obtain this metric, you need to set `publishAdditionalMetrics` to `true`.

###### `props`<sup>Optional</sup> <a name="props" id="@cloudkitect/components.CkDistribution.metricOriginLatency.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricRequests` <a name="metricRequests" id="@cloudkitect/components.CkDistribution.metricRequests"></a>

```typescript
public metricRequests(props?: MetricOptions): Metric
```

Metric for the total number of viewer requests received by CloudFront, for all HTTP methods and for both HTTP and HTTPS requests.

###### `props`<sup>Optional</sup> <a name="props" id="@cloudkitect/components.CkDistribution.metricRequests.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricTotalErrorRate` <a name="metricTotalErrorRate" id="@cloudkitect/components.CkDistribution.metricTotalErrorRate"></a>

```typescript
public metricTotalErrorRate(props?: MetricOptions): Metric
```

Metric for the percentage of all viewer requests for which the response's HTTP status code is 4xx or 5xx.

###### `props`<sup>Optional</sup> <a name="props" id="@cloudkitect/components.CkDistribution.metricTotalErrorRate.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cloudkitect/components.CkDistribution.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cloudkitect/components.CkDistribution.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#@cloudkitect/components.CkDistribution.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#@cloudkitect/components.CkDistribution.fromDistributionAttributes">fromDistributionAttributes</a></code> | Creates a Distribution construct that represents an external (imported) distribution. |

---

##### `isConstruct` <a name="isConstruct" id="@cloudkitect/components.CkDistribution.isConstruct"></a>

```typescript
import { CkDistribution } from '@cloudkitect/components'

CkDistribution.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cloudkitect/components.CkDistribution.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="@cloudkitect/components.CkDistribution.isOwnedResource"></a>

```typescript
import { CkDistribution } from '@cloudkitect/components'

CkDistribution.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="@cloudkitect/components.CkDistribution.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="@cloudkitect/components.CkDistribution.isResource"></a>

```typescript
import { CkDistribution } from '@cloudkitect/components'

CkDistribution.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@cloudkitect/components.CkDistribution.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromDistributionAttributes` <a name="fromDistributionAttributes" id="@cloudkitect/components.CkDistribution.fromDistributionAttributes"></a>

```typescript
import { CkDistribution } from '@cloudkitect/components'

CkDistribution.fromDistributionAttributes(scope: Construct, id: string, attrs: DistributionAttributes)
```

Creates a Distribution construct that represents an external (imported) distribution.

###### `scope`<sup>Required</sup> <a name="scope" id="@cloudkitect/components.CkDistribution.fromDistributionAttributes.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@cloudkitect/components.CkDistribution.fromDistributionAttributes.parameter.id"></a>

- *Type:* string

---

###### `attrs`<sup>Required</sup> <a name="attrs" id="@cloudkitect/components.CkDistribution.fromDistributionAttributes.parameter.attrs"></a>

- *Type:* aws-cdk-lib.aws_cloudfront.DistributionAttributes

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cloudkitect/components.CkDistribution.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cloudkitect/components.CkDistribution.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@cloudkitect/components.CkDistribution.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@cloudkitect/components.CkDistribution.property.distributionDomainName">distributionDomainName</a></code> | <code>string</code> | The domain name of the Distribution, such as d111111abcdef8.cloudfront.net. |
| <code><a href="#@cloudkitect/components.CkDistribution.property.distributionId">distributionId</a></code> | <code>string</code> | The distribution ID for this distribution. |
| <code><a href="#@cloudkitect/components.CkDistribution.property.domainName">domainName</a></code> | <code>string</code> | The domain name of the Distribution, such as d111111abcdef8.cloudfront.net. |

---

##### `node`<sup>Required</sup> <a name="node" id="@cloudkitect/components.CkDistribution.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@cloudkitect/components.CkDistribution.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@cloudkitect/components.CkDistribution.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `distributionDomainName`<sup>Required</sup> <a name="distributionDomainName" id="@cloudkitect/components.CkDistribution.property.distributionDomainName"></a>

```typescript
public readonly distributionDomainName: string;
```

- *Type:* string

The domain name of the Distribution, such as d111111abcdef8.cloudfront.net.

---

##### `distributionId`<sup>Required</sup> <a name="distributionId" id="@cloudkitect/components.CkDistribution.property.distributionId"></a>

```typescript
public readonly distributionId: string;
```

- *Type:* string

The distribution ID for this distribution.

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cloudkitect/components.CkDistribution.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

The domain name of the Distribution, such as d111111abcdef8.cloudfront.net.

---


### CkDnsValidatedCertificate <a name="CkDnsValidatedCertificate" id="@cloudkitect/components.CkDnsValidatedCertificate"></a>

CloudKitect DnsValidatedCertificate Component.

### Default Configuration

### Default Alarms
Available in Enhanced components only

### Logging and Monitoring
Available only in Enhanced components

### Examples
Default Usage
```ts
new CkDnsValidatedCertificate(this, "LogicalId", {
    domainName: "cloudkitect.com"
});
```

### Compliance
None

#### Initializers <a name="Initializers" id="@cloudkitect/components.CkDnsValidatedCertificate.Initializer"></a>

```typescript
import { CkDnsValidatedCertificate } from '@cloudkitect/components'

new CkDnsValidatedCertificate(scope: Construct, id: string, props: CkDnsValidatedCertificateProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cloudkitect/components.CkDnsValidatedCertificate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@cloudkitect/components.CkDnsValidatedCertificate.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cloudkitect/components.CkDnsValidatedCertificate.Initializer.parameter.props">props</a></code> | <code><a href="#@cloudkitect/components.CkDnsValidatedCertificateProps">CkDnsValidatedCertificateProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cloudkitect/components.CkDnsValidatedCertificate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@cloudkitect/components.CkDnsValidatedCertificate.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@cloudkitect/components.CkDnsValidatedCertificate.Initializer.parameter.props"></a>

- *Type:* <a href="#@cloudkitect/components.CkDnsValidatedCertificateProps">CkDnsValidatedCertificateProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cloudkitect/components.CkDnsValidatedCertificate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cloudkitect/components.CkDnsValidatedCertificate.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#@cloudkitect/components.CkDnsValidatedCertificate.metricDaysToExpiry">metricDaysToExpiry</a></code> | Return the DaysToExpiry metric for this AWS Certificate Manager Certificate. By default, this is the minimum value over 1 day. |

---

##### `toString` <a name="toString" id="@cloudkitect/components.CkDnsValidatedCertificate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@cloudkitect/components.CkDnsValidatedCertificate.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="@cloudkitect/components.CkDnsValidatedCertificate.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `metricDaysToExpiry` <a name="metricDaysToExpiry" id="@cloudkitect/components.CkDnsValidatedCertificate.metricDaysToExpiry"></a>

```typescript
public metricDaysToExpiry(props?: MetricOptions): Metric
```

Return the DaysToExpiry metric for this AWS Certificate Manager Certificate. By default, this is the minimum value over 1 day.

This metric is no longer emitted once the certificate has effectively
expired, so alarms configured on this metric should probably treat missing
data as "breaching".

###### `props`<sup>Optional</sup> <a name="props" id="@cloudkitect/components.CkDnsValidatedCertificate.metricDaysToExpiry.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cloudkitect/components.CkDnsValidatedCertificate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cloudkitect/components.CkDnsValidatedCertificate.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#@cloudkitect/components.CkDnsValidatedCertificate.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#@cloudkitect/components.CkDnsValidatedCertificate.fromCertificateArn">fromCertificateArn</a></code> | Import a certificate. |

---

##### `isConstruct` <a name="isConstruct" id="@cloudkitect/components.CkDnsValidatedCertificate.isConstruct"></a>

```typescript
import { CkDnsValidatedCertificate } from '@cloudkitect/components'

CkDnsValidatedCertificate.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cloudkitect/components.CkDnsValidatedCertificate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="@cloudkitect/components.CkDnsValidatedCertificate.isOwnedResource"></a>

```typescript
import { CkDnsValidatedCertificate } from '@cloudkitect/components'

CkDnsValidatedCertificate.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="@cloudkitect/components.CkDnsValidatedCertificate.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="@cloudkitect/components.CkDnsValidatedCertificate.isResource"></a>

```typescript
import { CkDnsValidatedCertificate } from '@cloudkitect/components'

CkDnsValidatedCertificate.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@cloudkitect/components.CkDnsValidatedCertificate.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromCertificateArn` <a name="fromCertificateArn" id="@cloudkitect/components.CkDnsValidatedCertificate.fromCertificateArn"></a>

```typescript
import { CkDnsValidatedCertificate } from '@cloudkitect/components'

CkDnsValidatedCertificate.fromCertificateArn(scope: Construct, id: string, certificateArn: string)
```

Import a certificate.

###### `scope`<sup>Required</sup> <a name="scope" id="@cloudkitect/components.CkDnsValidatedCertificate.fromCertificateArn.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@cloudkitect/components.CkDnsValidatedCertificate.fromCertificateArn.parameter.id"></a>

- *Type:* string

---

###### `certificateArn`<sup>Required</sup> <a name="certificateArn" id="@cloudkitect/components.CkDnsValidatedCertificate.fromCertificateArn.parameter.certificateArn"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cloudkitect/components.CkDnsValidatedCertificate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cloudkitect/components.CkDnsValidatedCertificate.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@cloudkitect/components.CkDnsValidatedCertificate.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@cloudkitect/components.CkDnsValidatedCertificate.property.certificateArn">certificateArn</a></code> | <code>string</code> | The certificate's ARN. |

---

##### `node`<sup>Required</sup> <a name="node" id="@cloudkitect/components.CkDnsValidatedCertificate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@cloudkitect/components.CkDnsValidatedCertificate.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@cloudkitect/components.CkDnsValidatedCertificate.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `certificateArn`<sup>Required</sup> <a name="certificateArn" id="@cloudkitect/components.CkDnsValidatedCertificate.property.certificateArn"></a>

```typescript
public readonly certificateArn: string;
```

- *Type:* string

The certificate's ARN.

---


### CkFargateCluster <a name="CkFargateCluster" id="@cloudkitect/components.CkFargateCluster"></a>

CloudKitect ECS cluster component backed by Fargate capacity provider is a regional grouping of one or more container instances on which you can run tasks and services and enables container insights,  ### Default Alarms  ### Examples Default Usage ```ts new CcFargateCluster(this, "LogicalId", {});

```

Custom Configuration
```ts
new CcFargateCluster(this, "LogicalId", {
   containerInsights: false
});
```

### Compliance
It addresses the following compliance requirements
1. Cluster insights enabled
   >  - Risk Level: Medium
   >  - Compliance: NA
   >  - Well Architected Pillar: Operational Excellence

#### Initializers <a name="Initializers" id="@cloudkitect/components.CkFargateCluster.Initializer"></a>

```typescript
import { CkFargateCluster } from '@cloudkitect/components'

new CkFargateCluster(scope: Construct, id: string, props: CkFargateClusterProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cloudkitect/components.CkFargateCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@cloudkitect/components.CkFargateCluster.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cloudkitect/components.CkFargateCluster.Initializer.parameter.props">props</a></code> | <code><a href="#@cloudkitect/components.CkFargateClusterProps">CkFargateClusterProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cloudkitect/components.CkFargateCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@cloudkitect/components.CkFargateCluster.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@cloudkitect/components.CkFargateCluster.Initializer.parameter.props"></a>

- *Type:* <a href="#@cloudkitect/components.CkFargateClusterProps">CkFargateClusterProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cloudkitect/components.CkFargateCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cloudkitect/components.CkFargateCluster.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#@cloudkitect/components.CkFargateCluster.addAsgCapacityProvider">addAsgCapacityProvider</a></code> | This method adds an Auto Scaling Group Capacity Provider to a cluster. |
| <code><a href="#@cloudkitect/components.CkFargateCluster.addCapacity">addCapacity</a></code> | It is highly recommended to use `Cluster.addAsgCapacityProvider` instead of this method. |
| <code><a href="#@cloudkitect/components.CkFargateCluster.addDefaultCapacityProviderStrategy">addDefaultCapacityProviderStrategy</a></code> | Add default capacity provider strategy for this cluster. |
| <code><a href="#@cloudkitect/components.CkFargateCluster.addDefaultCloudMapNamespace">addDefaultCloudMapNamespace</a></code> | Add an AWS Cloud Map DNS namespace for this cluster. |
| <code><a href="#@cloudkitect/components.CkFargateCluster.arnForTasks">arnForTasks</a></code> | Returns an ARN that represents all tasks within the cluster that match the task pattern specified. |
| <code><a href="#@cloudkitect/components.CkFargateCluster.enableFargateCapacityProviders">enableFargateCapacityProviders</a></code> | Enable the Fargate capacity providers for this cluster. |
| <code><a href="#@cloudkitect/components.CkFargateCluster.grantTaskProtection">grantTaskProtection</a></code> | Grants an ECS Task Protection API permission to the specified grantee. |
| <code><a href="#@cloudkitect/components.CkFargateCluster.metric">metric</a></code> | This method returns the specifed CloudWatch metric for this cluster. |
| <code><a href="#@cloudkitect/components.CkFargateCluster.metricCpuReservation">metricCpuReservation</a></code> | This method returns the CloudWatch metric for this clusters CPU reservation. |
| <code><a href="#@cloudkitect/components.CkFargateCluster.metricCpuUtilization">metricCpuUtilization</a></code> | This method returns the CloudWatch metric for this clusters CPU utilization. |
| <code><a href="#@cloudkitect/components.CkFargateCluster.metricMemoryReservation">metricMemoryReservation</a></code> | This method returns the CloudWatch metric for this clusters memory reservation. |
| <code><a href="#@cloudkitect/components.CkFargateCluster.metricMemoryUtilization">metricMemoryUtilization</a></code> | This method returns the CloudWatch metric for this clusters memory utilization. |

---

##### `toString` <a name="toString" id="@cloudkitect/components.CkFargateCluster.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@cloudkitect/components.CkFargateCluster.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="@cloudkitect/components.CkFargateCluster.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addAsgCapacityProvider` <a name="addAsgCapacityProvider" id="@cloudkitect/components.CkFargateCluster.addAsgCapacityProvider"></a>

```typescript
public addAsgCapacityProvider(provider: AsgCapacityProvider, options?: AddAutoScalingGroupCapacityOptions): void
```

This method adds an Auto Scaling Group Capacity Provider to a cluster.

###### `provider`<sup>Required</sup> <a name="provider" id="@cloudkitect/components.CkFargateCluster.addAsgCapacityProvider.parameter.provider"></a>

- *Type:* aws-cdk-lib.aws_ecs.AsgCapacityProvider

the capacity provider to add to this cluster.

---

###### `options`<sup>Optional</sup> <a name="options" id="@cloudkitect/components.CkFargateCluster.addAsgCapacityProvider.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_ecs.AddAutoScalingGroupCapacityOptions

---

##### `addCapacity` <a name="addCapacity" id="@cloudkitect/components.CkFargateCluster.addCapacity"></a>

```typescript
public addCapacity(id: string, options: AddCapacityOptions): AutoScalingGroup
```

It is highly recommended to use `Cluster.addAsgCapacityProvider` instead of this method.

This method adds compute capacity to a cluster by creating an AutoScalingGroup with the specified options.

Returns the AutoScalingGroup so you can add autoscaling settings to it.

###### `id`<sup>Required</sup> <a name="id" id="@cloudkitect/components.CkFargateCluster.addCapacity.parameter.id"></a>

- *Type:* string

---

###### `options`<sup>Required</sup> <a name="options" id="@cloudkitect/components.CkFargateCluster.addCapacity.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_ecs.AddCapacityOptions

---

##### `addDefaultCapacityProviderStrategy` <a name="addDefaultCapacityProviderStrategy" id="@cloudkitect/components.CkFargateCluster.addDefaultCapacityProviderStrategy"></a>

```typescript
public addDefaultCapacityProviderStrategy(defaultCapacityProviderStrategy: CapacityProviderStrategy[]): void
```

Add default capacity provider strategy for this cluster.

###### `defaultCapacityProviderStrategy`<sup>Required</sup> <a name="defaultCapacityProviderStrategy" id="@cloudkitect/components.CkFargateCluster.addDefaultCapacityProviderStrategy.parameter.defaultCapacityProviderStrategy"></a>

- *Type:* aws-cdk-lib.aws_ecs.CapacityProviderStrategy[]

cluster default capacity provider strategy. This takes the form of a list of CapacityProviderStrategy objects.

For example
[
{
capacityProvider: 'FARGATE',
base: 10,
weight: 50
}
]

---

##### `addDefaultCloudMapNamespace` <a name="addDefaultCloudMapNamespace" id="@cloudkitect/components.CkFargateCluster.addDefaultCloudMapNamespace"></a>

```typescript
public addDefaultCloudMapNamespace(options: CloudMapNamespaceOptions): INamespace
```

Add an AWS Cloud Map DNS namespace for this cluster.

NOTE: HttpNamespaces are supported only for use cases involving Service Connect. For use cases involving both Service-
Discovery and Service Connect, customers should manage the HttpNamespace outside of the Cluster.addDefaultCloudMapNamespace method.

###### `options`<sup>Required</sup> <a name="options" id="@cloudkitect/components.CkFargateCluster.addDefaultCloudMapNamespace.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_ecs.CloudMapNamespaceOptions

---

##### `arnForTasks` <a name="arnForTasks" id="@cloudkitect/components.CkFargateCluster.arnForTasks"></a>

```typescript
public arnForTasks(keyPattern: string): string
```

Returns an ARN that represents all tasks within the cluster that match the task pattern specified.

To represent all tasks, specify ``"*"``.

###### `keyPattern`<sup>Required</sup> <a name="keyPattern" id="@cloudkitect/components.CkFargateCluster.arnForTasks.parameter.keyPattern"></a>

- *Type:* string

Task id pattern.

---

##### `enableFargateCapacityProviders` <a name="enableFargateCapacityProviders" id="@cloudkitect/components.CkFargateCluster.enableFargateCapacityProviders"></a>

```typescript
public enableFargateCapacityProviders(): void
```

Enable the Fargate capacity providers for this cluster.

##### `grantTaskProtection` <a name="grantTaskProtection" id="@cloudkitect/components.CkFargateCluster.grantTaskProtection"></a>

```typescript
public grantTaskProtection(grantee: IGrantable): Grant
```

Grants an ECS Task Protection API permission to the specified grantee.

This method provides a streamlined way to assign the 'ecs:UpdateTaskProtection'
permission, enabling the grantee to manage task protection in the ECS cluster.

###### `grantee`<sup>Required</sup> <a name="grantee" id="@cloudkitect/components.CkFargateCluster.grantTaskProtection.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

The entity (e.g., IAM role or user) to grant the permissions to.

---

##### `metric` <a name="metric" id="@cloudkitect/components.CkFargateCluster.metric"></a>

```typescript
public metric(metricName: string, props?: MetricOptions): Metric
```

This method returns the specifed CloudWatch metric for this cluster.

###### `metricName`<sup>Required</sup> <a name="metricName" id="@cloudkitect/components.CkFargateCluster.metric.parameter.metricName"></a>

- *Type:* string

---

###### `props`<sup>Optional</sup> <a name="props" id="@cloudkitect/components.CkFargateCluster.metric.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricCpuReservation` <a name="metricCpuReservation" id="@cloudkitect/components.CkFargateCluster.metricCpuReservation"></a>

```typescript
public metricCpuReservation(props?: MetricOptions): Metric
```

This method returns the CloudWatch metric for this clusters CPU reservation.

###### `props`<sup>Optional</sup> <a name="props" id="@cloudkitect/components.CkFargateCluster.metricCpuReservation.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricCpuUtilization` <a name="metricCpuUtilization" id="@cloudkitect/components.CkFargateCluster.metricCpuUtilization"></a>

```typescript
public metricCpuUtilization(props?: MetricOptions): Metric
```

This method returns the CloudWatch metric for this clusters CPU utilization.

###### `props`<sup>Optional</sup> <a name="props" id="@cloudkitect/components.CkFargateCluster.metricCpuUtilization.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricMemoryReservation` <a name="metricMemoryReservation" id="@cloudkitect/components.CkFargateCluster.metricMemoryReservation"></a>

```typescript
public metricMemoryReservation(props?: MetricOptions): Metric
```

This method returns the CloudWatch metric for this clusters memory reservation.

###### `props`<sup>Optional</sup> <a name="props" id="@cloudkitect/components.CkFargateCluster.metricMemoryReservation.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricMemoryUtilization` <a name="metricMemoryUtilization" id="@cloudkitect/components.CkFargateCluster.metricMemoryUtilization"></a>

```typescript
public metricMemoryUtilization(props?: MetricOptions): Metric
```

This method returns the CloudWatch metric for this clusters memory utilization.

###### `props`<sup>Optional</sup> <a name="props" id="@cloudkitect/components.CkFargateCluster.metricMemoryUtilization.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cloudkitect/components.CkFargateCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cloudkitect/components.CkFargateCluster.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#@cloudkitect/components.CkFargateCluster.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#@cloudkitect/components.CkFargateCluster.fromClusterArn">fromClusterArn</a></code> | Import an existing cluster to the stack from the cluster ARN. |
| <code><a href="#@cloudkitect/components.CkFargateCluster.fromClusterAttributes">fromClusterAttributes</a></code> | Import an existing cluster to the stack from its attributes. |
| <code><a href="#@cloudkitect/components.CkFargateCluster.isCluster">isCluster</a></code> | Return whether the given object is a Cluster. |

---

##### `isConstruct` <a name="isConstruct" id="@cloudkitect/components.CkFargateCluster.isConstruct"></a>

```typescript
import { CkFargateCluster } from '@cloudkitect/components'

CkFargateCluster.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cloudkitect/components.CkFargateCluster.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="@cloudkitect/components.CkFargateCluster.isOwnedResource"></a>

```typescript
import { CkFargateCluster } from '@cloudkitect/components'

CkFargateCluster.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="@cloudkitect/components.CkFargateCluster.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="@cloudkitect/components.CkFargateCluster.isResource"></a>

```typescript
import { CkFargateCluster } from '@cloudkitect/components'

CkFargateCluster.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@cloudkitect/components.CkFargateCluster.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromClusterArn` <a name="fromClusterArn" id="@cloudkitect/components.CkFargateCluster.fromClusterArn"></a>

```typescript
import { CkFargateCluster } from '@cloudkitect/components'

CkFargateCluster.fromClusterArn(scope: Construct, id: string, clusterArn: string)
```

Import an existing cluster to the stack from the cluster ARN.

This does not provide access to the vpc, hasEc2Capacity, or connections -
use the `fromClusterAttributes` method to access those properties.

###### `scope`<sup>Required</sup> <a name="scope" id="@cloudkitect/components.CkFargateCluster.fromClusterArn.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@cloudkitect/components.CkFargateCluster.fromClusterArn.parameter.id"></a>

- *Type:* string

---

###### `clusterArn`<sup>Required</sup> <a name="clusterArn" id="@cloudkitect/components.CkFargateCluster.fromClusterArn.parameter.clusterArn"></a>

- *Type:* string

---

##### `fromClusterAttributes` <a name="fromClusterAttributes" id="@cloudkitect/components.CkFargateCluster.fromClusterAttributes"></a>

```typescript
import { CkFargateCluster } from '@cloudkitect/components'

CkFargateCluster.fromClusterAttributes(scope: Construct, id: string, attrs: ClusterAttributes)
```

Import an existing cluster to the stack from its attributes.

###### `scope`<sup>Required</sup> <a name="scope" id="@cloudkitect/components.CkFargateCluster.fromClusterAttributes.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@cloudkitect/components.CkFargateCluster.fromClusterAttributes.parameter.id"></a>

- *Type:* string

---

###### `attrs`<sup>Required</sup> <a name="attrs" id="@cloudkitect/components.CkFargateCluster.fromClusterAttributes.parameter.attrs"></a>

- *Type:* aws-cdk-lib.aws_ecs.ClusterAttributes

---

##### `isCluster` <a name="isCluster" id="@cloudkitect/components.CkFargateCluster.isCluster"></a>

```typescript
import { CkFargateCluster } from '@cloudkitect/components'

CkFargateCluster.isCluster(x: any)
```

Return whether the given object is a Cluster.

###### `x`<sup>Required</sup> <a name="x" id="@cloudkitect/components.CkFargateCluster.isCluster.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cloudkitect/components.CkFargateCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cloudkitect/components.CkFargateCluster.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@cloudkitect/components.CkFargateCluster.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@cloudkitect/components.CkFargateCluster.property.capacityProviderNames">capacityProviderNames</a></code> | <code>string[]</code> | Getter for _capacityProviderNames added to cluster. |
| <code><a href="#@cloudkitect/components.CkFargateCluster.property.clusterArn">clusterArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) that identifies the cluster. |
| <code><a href="#@cloudkitect/components.CkFargateCluster.property.clusterName">clusterName</a></code> | <code>string</code> | The name of the cluster. |
| <code><a href="#@cloudkitect/components.CkFargateCluster.property.connections">connections</a></code> | <code>aws-cdk-lib.aws_ec2.Connections</code> | Manage the allowed network connections for the cluster with Security Groups. |
| <code><a href="#@cloudkitect/components.CkFargateCluster.property.defaultCapacityProviderStrategy">defaultCapacityProviderStrategy</a></code> | <code>aws-cdk-lib.aws_ecs.CapacityProviderStrategy[]</code> | Getter for _defaultCapacityProviderStrategy. |
| <code><a href="#@cloudkitect/components.CkFargateCluster.property.hasEc2Capacity">hasEc2Capacity</a></code> | <code>boolean</code> | Whether the cluster has EC2 capacity associated with it. |
| <code><a href="#@cloudkitect/components.CkFargateCluster.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | The VPC associated with the cluster. |
| <code><a href="#@cloudkitect/components.CkFargateCluster.property.autoscalingGroup">autoscalingGroup</a></code> | <code>aws-cdk-lib.aws_autoscaling.IAutoScalingGroup</code> | Getter for autoscaling group added to cluster. |
| <code><a href="#@cloudkitect/components.CkFargateCluster.property.defaultCloudMapNamespace">defaultCloudMapNamespace</a></code> | <code>aws-cdk-lib.aws_servicediscovery.INamespace</code> | Getter for namespace added to cluster. |
| <code><a href="#@cloudkitect/components.CkFargateCluster.property.executeCommandConfiguration">executeCommandConfiguration</a></code> | <code>aws-cdk-lib.aws_ecs.ExecuteCommandConfiguration</code> | Getter for execute command configuration associated with the cluster. |

---

##### `node`<sup>Required</sup> <a name="node" id="@cloudkitect/components.CkFargateCluster.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@cloudkitect/components.CkFargateCluster.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@cloudkitect/components.CkFargateCluster.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `capacityProviderNames`<sup>Required</sup> <a name="capacityProviderNames" id="@cloudkitect/components.CkFargateCluster.property.capacityProviderNames"></a>

```typescript
public readonly capacityProviderNames: string[];
```

- *Type:* string[]

Getter for _capacityProviderNames added to cluster.

---

##### `clusterArn`<sup>Required</sup> <a name="clusterArn" id="@cloudkitect/components.CkFargateCluster.property.clusterArn"></a>

```typescript
public readonly clusterArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) that identifies the cluster.

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cloudkitect/components.CkFargateCluster.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

The name of the cluster.

---

##### `connections`<sup>Required</sup> <a name="connections" id="@cloudkitect/components.CkFargateCluster.property.connections"></a>

```typescript
public readonly connections: Connections;
```

- *Type:* aws-cdk-lib.aws_ec2.Connections

Manage the allowed network connections for the cluster with Security Groups.

---

##### `defaultCapacityProviderStrategy`<sup>Required</sup> <a name="defaultCapacityProviderStrategy" id="@cloudkitect/components.CkFargateCluster.property.defaultCapacityProviderStrategy"></a>

```typescript
public readonly defaultCapacityProviderStrategy: CapacityProviderStrategy[];
```

- *Type:* aws-cdk-lib.aws_ecs.CapacityProviderStrategy[]

Getter for _defaultCapacityProviderStrategy.

This is necessary to correctly create Capacity Provider Associations.

---

##### `hasEc2Capacity`<sup>Required</sup> <a name="hasEc2Capacity" id="@cloudkitect/components.CkFargateCluster.property.hasEc2Capacity"></a>

```typescript
public readonly hasEc2Capacity: boolean;
```

- *Type:* boolean

Whether the cluster has EC2 capacity associated with it.

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@cloudkitect/components.CkFargateCluster.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

The VPC associated with the cluster.

---

##### `autoscalingGroup`<sup>Optional</sup> <a name="autoscalingGroup" id="@cloudkitect/components.CkFargateCluster.property.autoscalingGroup"></a>

```typescript
public readonly autoscalingGroup: IAutoScalingGroup;
```

- *Type:* aws-cdk-lib.aws_autoscaling.IAutoScalingGroup

Getter for autoscaling group added to cluster.

---

##### `defaultCloudMapNamespace`<sup>Optional</sup> <a name="defaultCloudMapNamespace" id="@cloudkitect/components.CkFargateCluster.property.defaultCloudMapNamespace"></a>

```typescript
public readonly defaultCloudMapNamespace: INamespace;
```

- *Type:* aws-cdk-lib.aws_servicediscovery.INamespace

Getter for namespace added to cluster.

---

##### `executeCommandConfiguration`<sup>Optional</sup> <a name="executeCommandConfiguration" id="@cloudkitect/components.CkFargateCluster.property.executeCommandConfiguration"></a>

```typescript
public readonly executeCommandConfiguration: ExecuteCommandConfiguration;
```

- *Type:* aws-cdk-lib.aws_ecs.ExecuteCommandConfiguration

Getter for execute command configuration associated with the cluster.

---


### CkFargateService <a name="CkFargateService" id="@cloudkitect/components.CkFargateService"></a>

CloudKitect Fargate Service component to run tasks.

### Default Configuration
VPC Subnet: Private

### Default Alarms
Available only in Enhanced components

### Logging and Monitoring
Available only in Enhanced components

### Examples
```ts
new CkFargateService(this, "LogicalId", {});
```

Custom Configuration
```ts
new CkFargateService(this, "LogicalId", {
   assignPublicIp: true
});
```

### Compliance
It addresses the following compliance requirements
1. Do not assign public IP
   >  - Risk Level: Medium
   >  - Compliance: NIST4
   >  - Well Architected Pillar:  Security

#### Initializers <a name="Initializers" id="@cloudkitect/components.CkFargateService.Initializer"></a>

```typescript
import { CkFargateService } from '@cloudkitect/components'

new CkFargateService(scope: Construct, id: string, props: CkFargateServiceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cloudkitect/components.CkFargateService.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@cloudkitect/components.CkFargateService.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cloudkitect/components.CkFargateService.Initializer.parameter.props">props</a></code> | <code><a href="#@cloudkitect/components.CkFargateServiceProps">CkFargateServiceProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cloudkitect/components.CkFargateService.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@cloudkitect/components.CkFargateService.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@cloudkitect/components.CkFargateService.Initializer.parameter.props"></a>

- *Type:* <a href="#@cloudkitect/components.CkFargateServiceProps">CkFargateServiceProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cloudkitect/components.CkFargateService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cloudkitect/components.CkFargateService.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#@cloudkitect/components.CkFargateService.addVolume">addVolume</a></code> | Adds a volume to the Service. |
| <code><a href="#@cloudkitect/components.CkFargateService.associateCloudMapService">associateCloudMapService</a></code> | Associates this service with a CloudMap service. |
| <code><a href="#@cloudkitect/components.CkFargateService.attachToApplicationTargetGroup">attachToApplicationTargetGroup</a></code> | This method is called to attach this service to an Application Load Balancer. |
| <code><a href="#@cloudkitect/components.CkFargateService.attachToClassicLB">attachToClassicLB</a></code> | Registers the service as a target of a Classic Load Balancer (CLB). |
| <code><a href="#@cloudkitect/components.CkFargateService.attachToNetworkTargetGroup">attachToNetworkTargetGroup</a></code> | This method is called to attach this service to a Network Load Balancer. |
| <code><a href="#@cloudkitect/components.CkFargateService.autoScaleTaskCount">autoScaleTaskCount</a></code> | An attribute representing the minimum and maximum task count for an AutoScalingGroup. |
| <code><a href="#@cloudkitect/components.CkFargateService.enableCloudMap">enableCloudMap</a></code> | Enable CloudMap service discovery for the service. |
| <code><a href="#@cloudkitect/components.CkFargateService.enableDeploymentAlarms">enableDeploymentAlarms</a></code> | Enable Deployment Alarms which take advantage of arbitrary alarms and configure them after service initialization. |
| <code><a href="#@cloudkitect/components.CkFargateService.enableServiceConnect">enableServiceConnect</a></code> | Enable Service Connect on this service. |
| <code><a href="#@cloudkitect/components.CkFargateService.loadBalancerTarget">loadBalancerTarget</a></code> | Return a load balancing target for a specific container and port. |
| <code><a href="#@cloudkitect/components.CkFargateService.metric">metric</a></code> | This method returns the specified CloudWatch metric name for this service. |
| <code><a href="#@cloudkitect/components.CkFargateService.metricCpuUtilization">metricCpuUtilization</a></code> | This method returns the CloudWatch metric for this service's CPU utilization. |
| <code><a href="#@cloudkitect/components.CkFargateService.metricMemoryUtilization">metricMemoryUtilization</a></code> | This method returns the CloudWatch metric for this service's memory utilization. |
| <code><a href="#@cloudkitect/components.CkFargateService.registerLoadBalancerTargets">registerLoadBalancerTargets</a></code> | Use this function to create all load balancer targets to be registered in this service, add them to target groups, and attach target groups to listeners accordingly. |

---

##### `toString` <a name="toString" id="@cloudkitect/components.CkFargateService.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@cloudkitect/components.CkFargateService.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="@cloudkitect/components.CkFargateService.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addVolume` <a name="addVolume" id="@cloudkitect/components.CkFargateService.addVolume"></a>

```typescript
public addVolume(volume: ServiceManagedVolume): void
```

Adds a volume to the Service.

###### `volume`<sup>Required</sup> <a name="volume" id="@cloudkitect/components.CkFargateService.addVolume.parameter.volume"></a>

- *Type:* aws-cdk-lib.aws_ecs.ServiceManagedVolume

---

##### `associateCloudMapService` <a name="associateCloudMapService" id="@cloudkitect/components.CkFargateService.associateCloudMapService"></a>

```typescript
public associateCloudMapService(options: AssociateCloudMapServiceOptions): void
```

Associates this service with a CloudMap service.

###### `options`<sup>Required</sup> <a name="options" id="@cloudkitect/components.CkFargateService.associateCloudMapService.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_ecs.AssociateCloudMapServiceOptions

---

##### `attachToApplicationTargetGroup` <a name="attachToApplicationTargetGroup" id="@cloudkitect/components.CkFargateService.attachToApplicationTargetGroup"></a>

```typescript
public attachToApplicationTargetGroup(targetGroup: IApplicationTargetGroup): LoadBalancerTargetProps
```

This method is called to attach this service to an Application Load Balancer.

Don't call this function directly. Instead, call `listener.addTargets()`
to add this service to a load balancer.

###### `targetGroup`<sup>Required</sup> <a name="targetGroup" id="@cloudkitect/components.CkFargateService.attachToApplicationTargetGroup.parameter.targetGroup"></a>

- *Type:* aws-cdk-lib.aws_elasticloadbalancingv2.IApplicationTargetGroup

---

##### `attachToClassicLB` <a name="attachToClassicLB" id="@cloudkitect/components.CkFargateService.attachToClassicLB"></a>

```typescript
public attachToClassicLB(loadBalancer: LoadBalancer): void
```

Registers the service as a target of a Classic Load Balancer (CLB).

Don't call this. Call `loadBalancer.addTarget()` instead.

###### `loadBalancer`<sup>Required</sup> <a name="loadBalancer" id="@cloudkitect/components.CkFargateService.attachToClassicLB.parameter.loadBalancer"></a>

- *Type:* aws-cdk-lib.aws_elasticloadbalancing.LoadBalancer

---

##### `attachToNetworkTargetGroup` <a name="attachToNetworkTargetGroup" id="@cloudkitect/components.CkFargateService.attachToNetworkTargetGroup"></a>

```typescript
public attachToNetworkTargetGroup(targetGroup: INetworkTargetGroup): LoadBalancerTargetProps
```

This method is called to attach this service to a Network Load Balancer.

Don't call this function directly. Instead, call `listener.addTargets()`
to add this service to a load balancer.

###### `targetGroup`<sup>Required</sup> <a name="targetGroup" id="@cloudkitect/components.CkFargateService.attachToNetworkTargetGroup.parameter.targetGroup"></a>

- *Type:* aws-cdk-lib.aws_elasticloadbalancingv2.INetworkTargetGroup

---

##### `autoScaleTaskCount` <a name="autoScaleTaskCount" id="@cloudkitect/components.CkFargateService.autoScaleTaskCount"></a>

```typescript
public autoScaleTaskCount(props: EnableScalingProps): ScalableTaskCount
```

An attribute representing the minimum and maximum task count for an AutoScalingGroup.

###### `props`<sup>Required</sup> <a name="props" id="@cloudkitect/components.CkFargateService.autoScaleTaskCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_applicationautoscaling.EnableScalingProps

---

##### `enableCloudMap` <a name="enableCloudMap" id="@cloudkitect/components.CkFargateService.enableCloudMap"></a>

```typescript
public enableCloudMap(options: CloudMapOptions): Service
```

Enable CloudMap service discovery for the service.

###### `options`<sup>Required</sup> <a name="options" id="@cloudkitect/components.CkFargateService.enableCloudMap.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_ecs.CloudMapOptions

---

##### `enableDeploymentAlarms` <a name="enableDeploymentAlarms" id="@cloudkitect/components.CkFargateService.enableDeploymentAlarms"></a>

```typescript
public enableDeploymentAlarms(alarmNames: string[], options?: DeploymentAlarmOptions): void
```

Enable Deployment Alarms which take advantage of arbitrary alarms and configure them after service initialization.

If you have already enabled deployment alarms, this function can be used to tell ECS about additional alarms that
should interrupt a deployment.

New alarms specified in subsequent calls of this function will be appended to the existing list of alarms.

The same Alarm Behavior must be used on all deployment alarms. If you specify different AlarmBehavior values in
multiple calls to this function, or the Alarm Behavior used here doesn't match the one used in the service
constructor, an error will be thrown.

If the alarm's metric references the service, you cannot pass `Alarm.alarmName` here. That will cause a circular
dependency between the service and its deployment alarm. See this package's README for options to alarm on service
metrics, and avoid this circular dependency.

###### `alarmNames`<sup>Required</sup> <a name="alarmNames" id="@cloudkitect/components.CkFargateService.enableDeploymentAlarms.parameter.alarmNames"></a>

- *Type:* string[]

---

###### `options`<sup>Optional</sup> <a name="options" id="@cloudkitect/components.CkFargateService.enableDeploymentAlarms.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_ecs.DeploymentAlarmOptions

---

##### `enableServiceConnect` <a name="enableServiceConnect" id="@cloudkitect/components.CkFargateService.enableServiceConnect"></a>

```typescript
public enableServiceConnect(config?: ServiceConnectProps): void
```

Enable Service Connect on this service.

###### `config`<sup>Optional</sup> <a name="config" id="@cloudkitect/components.CkFargateService.enableServiceConnect.parameter.config"></a>

- *Type:* aws-cdk-lib.aws_ecs.ServiceConnectProps

---

##### `loadBalancerTarget` <a name="loadBalancerTarget" id="@cloudkitect/components.CkFargateService.loadBalancerTarget"></a>

```typescript
public loadBalancerTarget(options: LoadBalancerTargetOptions): IEcsLoadBalancerTarget
```

Return a load balancing target for a specific container and port.

Use this function to create a load balancer target if you want to load balance to
another container than the first essential container or the first mapped port on
the container.

Use the return value of this function where you would normally use a load balancer
target, instead of the `Service` object itself.

*Example*

```typescript
declare const listener: elbv2.ApplicationListener;
declare const service: ecs.BaseService;
listener.addTargets('ECS', {
  port: 80,
  targets: [service.loadBalancerTarget({
    containerName: 'MyContainer',
    containerPort: 1234,
  })],
});
```


###### `options`<sup>Required</sup> <a name="options" id="@cloudkitect/components.CkFargateService.loadBalancerTarget.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_ecs.LoadBalancerTargetOptions

---

##### `metric` <a name="metric" id="@cloudkitect/components.CkFargateService.metric"></a>

```typescript
public metric(metricName: string, props?: MetricOptions): Metric
```

This method returns the specified CloudWatch metric name for this service.

###### `metricName`<sup>Required</sup> <a name="metricName" id="@cloudkitect/components.CkFargateService.metric.parameter.metricName"></a>

- *Type:* string

---

###### `props`<sup>Optional</sup> <a name="props" id="@cloudkitect/components.CkFargateService.metric.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricCpuUtilization` <a name="metricCpuUtilization" id="@cloudkitect/components.CkFargateService.metricCpuUtilization"></a>

```typescript
public metricCpuUtilization(props?: MetricOptions): Metric
```

This method returns the CloudWatch metric for this service's CPU utilization.

###### `props`<sup>Optional</sup> <a name="props" id="@cloudkitect/components.CkFargateService.metricCpuUtilization.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricMemoryUtilization` <a name="metricMemoryUtilization" id="@cloudkitect/components.CkFargateService.metricMemoryUtilization"></a>

```typescript
public metricMemoryUtilization(props?: MetricOptions): Metric
```

This method returns the CloudWatch metric for this service's memory utilization.

###### `props`<sup>Optional</sup> <a name="props" id="@cloudkitect/components.CkFargateService.metricMemoryUtilization.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `registerLoadBalancerTargets` <a name="registerLoadBalancerTargets" id="@cloudkitect/components.CkFargateService.registerLoadBalancerTargets"></a>

```typescript
public registerLoadBalancerTargets(targets: EcsTarget): void
```

Use this function to create all load balancer targets to be registered in this service, add them to target groups, and attach target groups to listeners accordingly.

Alternatively, you can use `listener.addTargets()` to create targets and add them to target groups.

*Example*

```typescript
declare const listener: elbv2.ApplicationListener;
declare const service: ecs.BaseService;
service.registerLoadBalancerTargets(
  {
    containerName: 'web',
    containerPort: 80,
    newTargetGroupId: 'ECS',
    listener: ecs.ListenerConfig.applicationListener(listener, {
      protocol: elbv2.ApplicationProtocol.HTTPS
    }),
  },
)
```


###### `targets`<sup>Required</sup> <a name="targets" id="@cloudkitect/components.CkFargateService.registerLoadBalancerTargets.parameter.targets"></a>

- *Type:* aws-cdk-lib.aws_ecs.EcsTarget

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cloudkitect/components.CkFargateService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cloudkitect/components.CkFargateService.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#@cloudkitect/components.CkFargateService.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#@cloudkitect/components.CkFargateService.fromServiceArnWithCluster">fromServiceArnWithCluster</a></code> | Import an existing ECS/Fargate Service using the service cluster format. |
| <code><a href="#@cloudkitect/components.CkFargateService.fromFargateServiceArn">fromFargateServiceArn</a></code> | Imports from the specified service ARN. |
| <code><a href="#@cloudkitect/components.CkFargateService.fromFargateServiceAttributes">fromFargateServiceAttributes</a></code> | Imports from the specified service attributes. |

---

##### `isConstruct` <a name="isConstruct" id="@cloudkitect/components.CkFargateService.isConstruct"></a>

```typescript
import { CkFargateService } from '@cloudkitect/components'

CkFargateService.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cloudkitect/components.CkFargateService.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="@cloudkitect/components.CkFargateService.isOwnedResource"></a>

```typescript
import { CkFargateService } from '@cloudkitect/components'

CkFargateService.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="@cloudkitect/components.CkFargateService.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="@cloudkitect/components.CkFargateService.isResource"></a>

```typescript
import { CkFargateService } from '@cloudkitect/components'

CkFargateService.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@cloudkitect/components.CkFargateService.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromServiceArnWithCluster` <a name="fromServiceArnWithCluster" id="@cloudkitect/components.CkFargateService.fromServiceArnWithCluster"></a>

```typescript
import { CkFargateService } from '@cloudkitect/components'

CkFargateService.fromServiceArnWithCluster(scope: Construct, id: string, serviceArn: string)
```

Import an existing ECS/Fargate Service using the service cluster format.

The format is the "new" format "arn:aws:ecs:region:aws_account_id:service/cluster-name/service-name".

> [https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-account-settings.html#ecs-resource-ids](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-account-settings.html#ecs-resource-ids)

###### `scope`<sup>Required</sup> <a name="scope" id="@cloudkitect/components.CkFargateService.fromServiceArnWithCluster.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@cloudkitect/components.CkFargateService.fromServiceArnWithCluster.parameter.id"></a>

- *Type:* string

---

###### `serviceArn`<sup>Required</sup> <a name="serviceArn" id="@cloudkitect/components.CkFargateService.fromServiceArnWithCluster.parameter.serviceArn"></a>

- *Type:* string

---

##### `fromFargateServiceArn` <a name="fromFargateServiceArn" id="@cloudkitect/components.CkFargateService.fromFargateServiceArn"></a>

```typescript
import { CkFargateService } from '@cloudkitect/components'

CkFargateService.fromFargateServiceArn(scope: Construct, id: string, fargateServiceArn: string)
```

Imports from the specified service ARN.

###### `scope`<sup>Required</sup> <a name="scope" id="@cloudkitect/components.CkFargateService.fromFargateServiceArn.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@cloudkitect/components.CkFargateService.fromFargateServiceArn.parameter.id"></a>

- *Type:* string

---

###### `fargateServiceArn`<sup>Required</sup> <a name="fargateServiceArn" id="@cloudkitect/components.CkFargateService.fromFargateServiceArn.parameter.fargateServiceArn"></a>

- *Type:* string

---

##### `fromFargateServiceAttributes` <a name="fromFargateServiceAttributes" id="@cloudkitect/components.CkFargateService.fromFargateServiceAttributes"></a>

```typescript
import { CkFargateService } from '@cloudkitect/components'

CkFargateService.fromFargateServiceAttributes(scope: Construct, id: string, attrs: FargateServiceAttributes)
```

Imports from the specified service attributes.

###### `scope`<sup>Required</sup> <a name="scope" id="@cloudkitect/components.CkFargateService.fromFargateServiceAttributes.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@cloudkitect/components.CkFargateService.fromFargateServiceAttributes.parameter.id"></a>

- *Type:* string

---

###### `attrs`<sup>Required</sup> <a name="attrs" id="@cloudkitect/components.CkFargateService.fromFargateServiceAttributes.parameter.attrs"></a>

- *Type:* aws-cdk-lib.aws_ecs.FargateServiceAttributes

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cloudkitect/components.CkFargateService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cloudkitect/components.CkFargateService.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@cloudkitect/components.CkFargateService.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@cloudkitect/components.CkFargateService.property.cluster">cluster</a></code> | <code>aws-cdk-lib.aws_ecs.ICluster</code> | The cluster that hosts the service. |
| <code><a href="#@cloudkitect/components.CkFargateService.property.connections">connections</a></code> | <code>aws-cdk-lib.aws_ec2.Connections</code> | The security groups which manage the allowed network traffic for the service. |
| <code><a href="#@cloudkitect/components.CkFargateService.property.serviceArn">serviceArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the service. |
| <code><a href="#@cloudkitect/components.CkFargateService.property.serviceName">serviceName</a></code> | <code>string</code> | The name of the service. |
| <code><a href="#@cloudkitect/components.CkFargateService.property.taskDefinition">taskDefinition</a></code> | <code>aws-cdk-lib.aws_ecs.TaskDefinition</code> | The task definition to use for tasks in the service. |
| <code><a href="#@cloudkitect/components.CkFargateService.property.cloudMapService">cloudMapService</a></code> | <code>aws-cdk-lib.aws_servicediscovery.IService</code> | The CloudMap service created for this service, if any. |

---

##### `node`<sup>Required</sup> <a name="node" id="@cloudkitect/components.CkFargateService.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@cloudkitect/components.CkFargateService.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@cloudkitect/components.CkFargateService.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cloudkitect/components.CkFargateService.property.cluster"></a>

```typescript
public readonly cluster: ICluster;
```

- *Type:* aws-cdk-lib.aws_ecs.ICluster

The cluster that hosts the service.

---

##### `connections`<sup>Required</sup> <a name="connections" id="@cloudkitect/components.CkFargateService.property.connections"></a>

```typescript
public readonly connections: Connections;
```

- *Type:* aws-cdk-lib.aws_ec2.Connections

The security groups which manage the allowed network traffic for the service.

---

##### `serviceArn`<sup>Required</sup> <a name="serviceArn" id="@cloudkitect/components.CkFargateService.property.serviceArn"></a>

```typescript
public readonly serviceArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the service.

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cloudkitect/components.CkFargateService.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

The name of the service.

---

##### `taskDefinition`<sup>Required</sup> <a name="taskDefinition" id="@cloudkitect/components.CkFargateService.property.taskDefinition"></a>

```typescript
public readonly taskDefinition: TaskDefinition;
```

- *Type:* aws-cdk-lib.aws_ecs.TaskDefinition

The task definition to use for tasks in the service.

---

##### `cloudMapService`<sup>Optional</sup> <a name="cloudMapService" id="@cloudkitect/components.CkFargateService.property.cloudMapService"></a>

```typescript
public readonly cloudMapService: IService;
```

- *Type:* aws-cdk-lib.aws_servicediscovery.IService

The CloudMap service created for this service, if any.

---


### CkFargateTaskDefinition <a name="CkFargateTaskDefinition" id="@cloudkitect/components.CkFargateTaskDefinition"></a>

Well Architected Fargate Task Definition component.

### Default Configuration
CPU: 2048 (2vCPU) for Production
Memory: 4096 GB for Production
Storage: 50 GB for Production

### Default Alarms
None

Note that the default alarm uses the CcAlarm construct, which sets up an alarm
action to notify the SNS Topic *AlarmEventsTopic* by default.

### Examples
Default Usage
```ts
new CcFargateTaskDefinition(this, "LogicalId", {});
```

Custom Configuration
```ts
new CcFargateTaskDefinition(this, "LogicalId", {
   cpu: 2048
});
```

### Compliance
It addresses the following compliance requirements
1. Encrypted storage
   >  - Risk Level: High
   >  - Compliance: NIST4
   >  - Well Architected Pillar: Security
2. Cost Optimization
   >  - Risk Level: Low
   >  - Compliance: NA
   >  - Well Architected Pillar: Cost Optimization

#### Initializers <a name="Initializers" id="@cloudkitect/components.CkFargateTaskDefinition.Initializer"></a>

```typescript
import { CkFargateTaskDefinition } from '@cloudkitect/components'

new CkFargateTaskDefinition(scope: Construct, id: string, props: CkFargateTaskDefinitionProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cloudkitect/components.CkFargateTaskDefinition.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@cloudkitect/components.CkFargateTaskDefinition.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cloudkitect/components.CkFargateTaskDefinition.Initializer.parameter.props">props</a></code> | <code><a href="#@cloudkitect/components.CkFargateTaskDefinitionProps">CkFargateTaskDefinitionProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cloudkitect/components.CkFargateTaskDefinition.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@cloudkitect/components.CkFargateTaskDefinition.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@cloudkitect/components.CkFargateTaskDefinition.Initializer.parameter.props"></a>

- *Type:* <a href="#@cloudkitect/components.CkFargateTaskDefinitionProps">CkFargateTaskDefinitionProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cloudkitect/components.CkFargateTaskDefinition.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cloudkitect/components.CkFargateTaskDefinition.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#@cloudkitect/components.CkFargateTaskDefinition.addContainer">addContainer</a></code> | Adds a new container to the task definition. |
| <code><a href="#@cloudkitect/components.CkFargateTaskDefinition.addExtension">addExtension</a></code> | Adds the specified extension to the task definition. |
| <code><a href="#@cloudkitect/components.CkFargateTaskDefinition.addFirelensLogRouter">addFirelensLogRouter</a></code> | Adds a firelens log router to the task definition. |
| <code><a href="#@cloudkitect/components.CkFargateTaskDefinition.addInferenceAccelerator">addInferenceAccelerator</a></code> | Adds an inference accelerator to the task definition. |
| <code><a href="#@cloudkitect/components.CkFargateTaskDefinition.addPlacementConstraint">addPlacementConstraint</a></code> | Adds the specified placement constraint to the task definition. |
| <code><a href="#@cloudkitect/components.CkFargateTaskDefinition.addToExecutionRolePolicy">addToExecutionRolePolicy</a></code> | Adds a policy statement to the task execution IAM role. |
| <code><a href="#@cloudkitect/components.CkFargateTaskDefinition.addToTaskRolePolicy">addToTaskRolePolicy</a></code> | Adds a policy statement to the task IAM role. |
| <code><a href="#@cloudkitect/components.CkFargateTaskDefinition.addVolume">addVolume</a></code> | Adds a volume to the task definition. |
| <code><a href="#@cloudkitect/components.CkFargateTaskDefinition.findContainer">findContainer</a></code> | Returns the container that match the provided containerName. |
| <code><a href="#@cloudkitect/components.CkFargateTaskDefinition.findPortMappingByName">findPortMappingByName</a></code> | Determine the existing port mapping for the provided name. |
| <code><a href="#@cloudkitect/components.CkFargateTaskDefinition.grantRun">grantRun</a></code> | Grants permissions to run this task definition. |
| <code><a href="#@cloudkitect/components.CkFargateTaskDefinition.obtainExecutionRole">obtainExecutionRole</a></code> | Creates the task execution IAM role if it doesn't already exist. |

---

##### `toString` <a name="toString" id="@cloudkitect/components.CkFargateTaskDefinition.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@cloudkitect/components.CkFargateTaskDefinition.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="@cloudkitect/components.CkFargateTaskDefinition.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addContainer` <a name="addContainer" id="@cloudkitect/components.CkFargateTaskDefinition.addContainer"></a>

```typescript
public addContainer(id: string, props: ContainerDefinitionOptions): ContainerDefinition
```

Adds a new container to the task definition.

###### `id`<sup>Required</sup> <a name="id" id="@cloudkitect/components.CkFargateTaskDefinition.addContainer.parameter.id"></a>

- *Type:* string

---

###### `props`<sup>Required</sup> <a name="props" id="@cloudkitect/components.CkFargateTaskDefinition.addContainer.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_ecs.ContainerDefinitionOptions

---

##### `addExtension` <a name="addExtension" id="@cloudkitect/components.CkFargateTaskDefinition.addExtension"></a>

```typescript
public addExtension(extension: ITaskDefinitionExtension): void
```

Adds the specified extension to the task definition.

Extension can be used to apply a packaged modification to
a task definition.

###### `extension`<sup>Required</sup> <a name="extension" id="@cloudkitect/components.CkFargateTaskDefinition.addExtension.parameter.extension"></a>

- *Type:* aws-cdk-lib.aws_ecs.ITaskDefinitionExtension

---

##### `addFirelensLogRouter` <a name="addFirelensLogRouter" id="@cloudkitect/components.CkFargateTaskDefinition.addFirelensLogRouter"></a>

```typescript
public addFirelensLogRouter(id: string, props: FirelensLogRouterDefinitionOptions): FirelensLogRouter
```

Adds a firelens log router to the task definition.

###### `id`<sup>Required</sup> <a name="id" id="@cloudkitect/components.CkFargateTaskDefinition.addFirelensLogRouter.parameter.id"></a>

- *Type:* string

---

###### `props`<sup>Required</sup> <a name="props" id="@cloudkitect/components.CkFargateTaskDefinition.addFirelensLogRouter.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_ecs.FirelensLogRouterDefinitionOptions

---

##### `addInferenceAccelerator` <a name="addInferenceAccelerator" id="@cloudkitect/components.CkFargateTaskDefinition.addInferenceAccelerator"></a>

```typescript
public addInferenceAccelerator(inferenceAccelerator: InferenceAccelerator): void
```

Adds an inference accelerator to the task definition.

###### `inferenceAccelerator`<sup>Required</sup> <a name="inferenceAccelerator" id="@cloudkitect/components.CkFargateTaskDefinition.addInferenceAccelerator.parameter.inferenceAccelerator"></a>

- *Type:* aws-cdk-lib.aws_ecs.InferenceAccelerator

---

##### `addPlacementConstraint` <a name="addPlacementConstraint" id="@cloudkitect/components.CkFargateTaskDefinition.addPlacementConstraint"></a>

```typescript
public addPlacementConstraint(constraint: PlacementConstraint): void
```

Adds the specified placement constraint to the task definition.

###### `constraint`<sup>Required</sup> <a name="constraint" id="@cloudkitect/components.CkFargateTaskDefinition.addPlacementConstraint.parameter.constraint"></a>

- *Type:* aws-cdk-lib.aws_ecs.PlacementConstraint

---

##### `addToExecutionRolePolicy` <a name="addToExecutionRolePolicy" id="@cloudkitect/components.CkFargateTaskDefinition.addToExecutionRolePolicy"></a>

```typescript
public addToExecutionRolePolicy(statement: PolicyStatement): void
```

Adds a policy statement to the task execution IAM role.

###### `statement`<sup>Required</sup> <a name="statement" id="@cloudkitect/components.CkFargateTaskDefinition.addToExecutionRolePolicy.parameter.statement"></a>

- *Type:* aws-cdk-lib.aws_iam.PolicyStatement

---

##### `addToTaskRolePolicy` <a name="addToTaskRolePolicy" id="@cloudkitect/components.CkFargateTaskDefinition.addToTaskRolePolicy"></a>

```typescript
public addToTaskRolePolicy(statement: PolicyStatement): void
```

Adds a policy statement to the task IAM role.

###### `statement`<sup>Required</sup> <a name="statement" id="@cloudkitect/components.CkFargateTaskDefinition.addToTaskRolePolicy.parameter.statement"></a>

- *Type:* aws-cdk-lib.aws_iam.PolicyStatement

---

##### `addVolume` <a name="addVolume" id="@cloudkitect/components.CkFargateTaskDefinition.addVolume"></a>

```typescript
public addVolume(volume: Volume): void
```

Adds a volume to the task definition.

###### `volume`<sup>Required</sup> <a name="volume" id="@cloudkitect/components.CkFargateTaskDefinition.addVolume.parameter.volume"></a>

- *Type:* aws-cdk-lib.aws_ecs.Volume

---

##### `findContainer` <a name="findContainer" id="@cloudkitect/components.CkFargateTaskDefinition.findContainer"></a>

```typescript
public findContainer(containerName: string): ContainerDefinition
```

Returns the container that match the provided containerName.

###### `containerName`<sup>Required</sup> <a name="containerName" id="@cloudkitect/components.CkFargateTaskDefinition.findContainer.parameter.containerName"></a>

- *Type:* string

---

##### `findPortMappingByName` <a name="findPortMappingByName" id="@cloudkitect/components.CkFargateTaskDefinition.findPortMappingByName"></a>

```typescript
public findPortMappingByName(name: string): PortMapping
```

Determine the existing port mapping for the provided name.

###### `name`<sup>Required</sup> <a name="name" id="@cloudkitect/components.CkFargateTaskDefinition.findPortMappingByName.parameter.name"></a>

- *Type:* string

: port mapping name.

---

##### `grantRun` <a name="grantRun" id="@cloudkitect/components.CkFargateTaskDefinition.grantRun"></a>

```typescript
public grantRun(grantee: IGrantable): Grant
```

Grants permissions to run this task definition.

This will grant the following permissions:

  - ecs:RunTask
  - iam:PassRole

###### `grantee`<sup>Required</sup> <a name="grantee" id="@cloudkitect/components.CkFargateTaskDefinition.grantRun.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

Principal to grant consume rights to.

---

##### `obtainExecutionRole` <a name="obtainExecutionRole" id="@cloudkitect/components.CkFargateTaskDefinition.obtainExecutionRole"></a>

```typescript
public obtainExecutionRole(): IRole
```

Creates the task execution IAM role if it doesn't already exist.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cloudkitect/components.CkFargateTaskDefinition.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cloudkitect/components.CkFargateTaskDefinition.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#@cloudkitect/components.CkFargateTaskDefinition.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#@cloudkitect/components.CkFargateTaskDefinition.fromTaskDefinitionArn">fromTaskDefinitionArn</a></code> | Imports a task definition from the specified task definition ARN. |
| <code><a href="#@cloudkitect/components.CkFargateTaskDefinition.fromTaskDefinitionAttributes">fromTaskDefinitionAttributes</a></code> | Create a task definition from a task definition reference. |
| <code><a href="#@cloudkitect/components.CkFargateTaskDefinition.fromFargateTaskDefinitionArn">fromFargateTaskDefinitionArn</a></code> | Imports a task definition from the specified task definition ARN. |
| <code><a href="#@cloudkitect/components.CkFargateTaskDefinition.fromFargateTaskDefinitionAttributes">fromFargateTaskDefinitionAttributes</a></code> | Import an existing Fargate task definition from its attributes. |

---

##### `isConstruct` <a name="isConstruct" id="@cloudkitect/components.CkFargateTaskDefinition.isConstruct"></a>

```typescript
import { CkFargateTaskDefinition } from '@cloudkitect/components'

CkFargateTaskDefinition.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cloudkitect/components.CkFargateTaskDefinition.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="@cloudkitect/components.CkFargateTaskDefinition.isOwnedResource"></a>

```typescript
import { CkFargateTaskDefinition } from '@cloudkitect/components'

CkFargateTaskDefinition.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="@cloudkitect/components.CkFargateTaskDefinition.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="@cloudkitect/components.CkFargateTaskDefinition.isResource"></a>

```typescript
import { CkFargateTaskDefinition } from '@cloudkitect/components'

CkFargateTaskDefinition.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@cloudkitect/components.CkFargateTaskDefinition.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromTaskDefinitionArn` <a name="fromTaskDefinitionArn" id="@cloudkitect/components.CkFargateTaskDefinition.fromTaskDefinitionArn"></a>

```typescript
import { CkFargateTaskDefinition } from '@cloudkitect/components'

CkFargateTaskDefinition.fromTaskDefinitionArn(scope: Construct, id: string, taskDefinitionArn: string)
```

Imports a task definition from the specified task definition ARN.

The task will have a compatibility of EC2+Fargate.

###### `scope`<sup>Required</sup> <a name="scope" id="@cloudkitect/components.CkFargateTaskDefinition.fromTaskDefinitionArn.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@cloudkitect/components.CkFargateTaskDefinition.fromTaskDefinitionArn.parameter.id"></a>

- *Type:* string

---

###### `taskDefinitionArn`<sup>Required</sup> <a name="taskDefinitionArn" id="@cloudkitect/components.CkFargateTaskDefinition.fromTaskDefinitionArn.parameter.taskDefinitionArn"></a>

- *Type:* string

---

##### `fromTaskDefinitionAttributes` <a name="fromTaskDefinitionAttributes" id="@cloudkitect/components.CkFargateTaskDefinition.fromTaskDefinitionAttributes"></a>

```typescript
import { CkFargateTaskDefinition } from '@cloudkitect/components'

CkFargateTaskDefinition.fromTaskDefinitionAttributes(scope: Construct, id: string, attrs: TaskDefinitionAttributes)
```

Create a task definition from a task definition reference.

###### `scope`<sup>Required</sup> <a name="scope" id="@cloudkitect/components.CkFargateTaskDefinition.fromTaskDefinitionAttributes.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@cloudkitect/components.CkFargateTaskDefinition.fromTaskDefinitionAttributes.parameter.id"></a>

- *Type:* string

---

###### `attrs`<sup>Required</sup> <a name="attrs" id="@cloudkitect/components.CkFargateTaskDefinition.fromTaskDefinitionAttributes.parameter.attrs"></a>

- *Type:* aws-cdk-lib.aws_ecs.TaskDefinitionAttributes

---

##### `fromFargateTaskDefinitionArn` <a name="fromFargateTaskDefinitionArn" id="@cloudkitect/components.CkFargateTaskDefinition.fromFargateTaskDefinitionArn"></a>

```typescript
import { CkFargateTaskDefinition } from '@cloudkitect/components'

CkFargateTaskDefinition.fromFargateTaskDefinitionArn(scope: Construct, id: string, fargateTaskDefinitionArn: string)
```

Imports a task definition from the specified task definition ARN.

###### `scope`<sup>Required</sup> <a name="scope" id="@cloudkitect/components.CkFargateTaskDefinition.fromFargateTaskDefinitionArn.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@cloudkitect/components.CkFargateTaskDefinition.fromFargateTaskDefinitionArn.parameter.id"></a>

- *Type:* string

---

###### `fargateTaskDefinitionArn`<sup>Required</sup> <a name="fargateTaskDefinitionArn" id="@cloudkitect/components.CkFargateTaskDefinition.fromFargateTaskDefinitionArn.parameter.fargateTaskDefinitionArn"></a>

- *Type:* string

---

##### `fromFargateTaskDefinitionAttributes` <a name="fromFargateTaskDefinitionAttributes" id="@cloudkitect/components.CkFargateTaskDefinition.fromFargateTaskDefinitionAttributes"></a>

```typescript
import { CkFargateTaskDefinition } from '@cloudkitect/components'

CkFargateTaskDefinition.fromFargateTaskDefinitionAttributes(scope: Construct, id: string, attrs: FargateTaskDefinitionAttributes)
```

Import an existing Fargate task definition from its attributes.

###### `scope`<sup>Required</sup> <a name="scope" id="@cloudkitect/components.CkFargateTaskDefinition.fromFargateTaskDefinitionAttributes.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@cloudkitect/components.CkFargateTaskDefinition.fromFargateTaskDefinitionAttributes.parameter.id"></a>

- *Type:* string

---

###### `attrs`<sup>Required</sup> <a name="attrs" id="@cloudkitect/components.CkFargateTaskDefinition.fromFargateTaskDefinitionAttributes.parameter.attrs"></a>

- *Type:* aws-cdk-lib.aws_ecs.FargateTaskDefinitionAttributes

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cloudkitect/components.CkFargateTaskDefinition.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cloudkitect/components.CkFargateTaskDefinition.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@cloudkitect/components.CkFargateTaskDefinition.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@cloudkitect/components.CkFargateTaskDefinition.property.compatibility">compatibility</a></code> | <code>aws-cdk-lib.aws_ecs.Compatibility</code> | The task launch type compatibility requirement. |
| <code><a href="#@cloudkitect/components.CkFargateTaskDefinition.property.family">family</a></code> | <code>string</code> | The name of a family that this task definition is registered to. |
| <code><a href="#@cloudkitect/components.CkFargateTaskDefinition.property.inferenceAccelerators">inferenceAccelerators</a></code> | <code>aws-cdk-lib.aws_ecs.InferenceAccelerator[]</code> | Public getter method to access list of inference accelerators attached to the instance. |
| <code><a href="#@cloudkitect/components.CkFargateTaskDefinition.property.isEc2Compatible">isEc2Compatible</a></code> | <code>boolean</code> | Return true if the task definition can be run on an EC2 cluster. |
| <code><a href="#@cloudkitect/components.CkFargateTaskDefinition.property.isExternalCompatible">isExternalCompatible</a></code> | <code>boolean</code> | Return true if the task definition can be run on a ECS anywhere cluster. |
| <code><a href="#@cloudkitect/components.CkFargateTaskDefinition.property.isFargateCompatible">isFargateCompatible</a></code> | <code>boolean</code> | Return true if the task definition can be run on a Fargate cluster. |
| <code><a href="#@cloudkitect/components.CkFargateTaskDefinition.property.networkMode">networkMode</a></code> | <code>aws-cdk-lib.aws_ecs.NetworkMode</code> | The Docker networking mode to use for the containers in the task. |
| <code><a href="#@cloudkitect/components.CkFargateTaskDefinition.property.taskDefinitionArn">taskDefinitionArn</a></code> | <code>string</code> | The full Amazon Resource Name (ARN) of the task definition. |
| <code><a href="#@cloudkitect/components.CkFargateTaskDefinition.property.taskRole">taskRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The name of the IAM role that grants containers in the task permission to call AWS APIs on your behalf. |
| <code><a href="#@cloudkitect/components.CkFargateTaskDefinition.property.ephemeralStorageGiB">ephemeralStorageGiB</a></code> | <code>number</code> | The amount (in GiB) of ephemeral storage to be allocated to the task. |
| <code><a href="#@cloudkitect/components.CkFargateTaskDefinition.property.executionRole">executionRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | Execution role for this task definition. |
| <code><a href="#@cloudkitect/components.CkFargateTaskDefinition.property.referencesSecretJsonField">referencesSecretJsonField</a></code> | <code>boolean</code> | Whether this task definition has at least a container that references a specific JSON field of a secret stored in Secrets Manager. |
| <code><a href="#@cloudkitect/components.CkFargateTaskDefinition.property.defaultContainer">defaultContainer</a></code> | <code>aws-cdk-lib.aws_ecs.ContainerDefinition</code> | Default container for this task. |

---

##### `node`<sup>Required</sup> <a name="node" id="@cloudkitect/components.CkFargateTaskDefinition.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@cloudkitect/components.CkFargateTaskDefinition.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@cloudkitect/components.CkFargateTaskDefinition.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `compatibility`<sup>Required</sup> <a name="compatibility" id="@cloudkitect/components.CkFargateTaskDefinition.property.compatibility"></a>

```typescript
public readonly compatibility: Compatibility;
```

- *Type:* aws-cdk-lib.aws_ecs.Compatibility

The task launch type compatibility requirement.

---

##### `family`<sup>Required</sup> <a name="family" id="@cloudkitect/components.CkFargateTaskDefinition.property.family"></a>

```typescript
public readonly family: string;
```

- *Type:* string

The name of a family that this task definition is registered to.

A family groups multiple versions of a task definition.

---

##### `inferenceAccelerators`<sup>Required</sup> <a name="inferenceAccelerators" id="@cloudkitect/components.CkFargateTaskDefinition.property.inferenceAccelerators"></a>

```typescript
public readonly inferenceAccelerators: InferenceAccelerator[];
```

- *Type:* aws-cdk-lib.aws_ecs.InferenceAccelerator[]

Public getter method to access list of inference accelerators attached to the instance.

---

##### `isEc2Compatible`<sup>Required</sup> <a name="isEc2Compatible" id="@cloudkitect/components.CkFargateTaskDefinition.property.isEc2Compatible"></a>

```typescript
public readonly isEc2Compatible: boolean;
```

- *Type:* boolean

Return true if the task definition can be run on an EC2 cluster.

---

##### `isExternalCompatible`<sup>Required</sup> <a name="isExternalCompatible" id="@cloudkitect/components.CkFargateTaskDefinition.property.isExternalCompatible"></a>

```typescript
public readonly isExternalCompatible: boolean;
```

- *Type:* boolean

Return true if the task definition can be run on a ECS anywhere cluster.

---

##### `isFargateCompatible`<sup>Required</sup> <a name="isFargateCompatible" id="@cloudkitect/components.CkFargateTaskDefinition.property.isFargateCompatible"></a>

```typescript
public readonly isFargateCompatible: boolean;
```

- *Type:* boolean

Return true if the task definition can be run on a Fargate cluster.

---

##### `networkMode`<sup>Required</sup> <a name="networkMode" id="@cloudkitect/components.CkFargateTaskDefinition.property.networkMode"></a>

```typescript
public readonly networkMode: NetworkMode;
```

- *Type:* aws-cdk-lib.aws_ecs.NetworkMode

The Docker networking mode to use for the containers in the task.

Fargate tasks require the awsvpc network mode.

---

##### `taskDefinitionArn`<sup>Required</sup> <a name="taskDefinitionArn" id="@cloudkitect/components.CkFargateTaskDefinition.property.taskDefinitionArn"></a>

```typescript
public readonly taskDefinitionArn: string;
```

- *Type:* string

The full Amazon Resource Name (ARN) of the task definition.

---

##### `taskRole`<sup>Required</sup> <a name="taskRole" id="@cloudkitect/components.CkFargateTaskDefinition.property.taskRole"></a>

```typescript
public readonly taskRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

The name of the IAM role that grants containers in the task permission to call AWS APIs on your behalf.

---

##### `ephemeralStorageGiB`<sup>Optional</sup> <a name="ephemeralStorageGiB" id="@cloudkitect/components.CkFargateTaskDefinition.property.ephemeralStorageGiB"></a>

```typescript
public readonly ephemeralStorageGiB: number;
```

- *Type:* number

The amount (in GiB) of ephemeral storage to be allocated to the task.

---

##### `executionRole`<sup>Optional</sup> <a name="executionRole" id="@cloudkitect/components.CkFargateTaskDefinition.property.executionRole"></a>

```typescript
public readonly executionRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

Execution role for this task definition.

---

##### `referencesSecretJsonField`<sup>Optional</sup> <a name="referencesSecretJsonField" id="@cloudkitect/components.CkFargateTaskDefinition.property.referencesSecretJsonField"></a>

```typescript
public readonly referencesSecretJsonField: boolean;
```

- *Type:* boolean

Whether this task definition has at least a container that references a specific JSON field of a secret stored in Secrets Manager.

---

##### `defaultContainer`<sup>Optional</sup> <a name="defaultContainer" id="@cloudkitect/components.CkFargateTaskDefinition.property.defaultContainer"></a>

```typescript
public readonly defaultContainer: ContainerDefinition;
```

- *Type:* aws-cdk-lib.aws_ecs.ContainerDefinition

Default container for this task.

Load balancers will send traffic to this container. The first
essential container that is added to this task will become the default
container.

---


### CkPublicApplicationLoadbalancer <a name="CkPublicApplicationLoadbalancer" id="@cloudkitect/components.CkPublicApplicationLoadbalancer"></a>

CloudKitect Public Application Load Balancer component. This load balancer is created in public subnet.

### Default Configuration
Drop Invalid header fields: true
Removal Policy: Retain in Production

### Default Alarms
Available only in Enhanced components

### Logging and Monitoring
Available only in Enhanced components

### Examples
Default Usage
```ts
new CkPublicApplicationLoadbalancer(this, "LogicalId", {});
```

Custom Configuration
```ts
new CkPublicApplicationLoadbalancer(this, "LogicalId", {
   deletionProtection: false
});
```

### Compliance
It addresses the following compliance requirements
1. Ensure ALB is always using https, by redirecting http to https
   >  - Risk Level: High
   >  - Compliance: PCI, APRA, NIST4
   >  - Well Architected Pillar: Security
2. Security group to only allow https traffic
   >  - Risk Level: High
   >  - Compliance: PCI, APRA, MAS, NIST4
   >  - Well Architected Pillar: Security

#### Initializers <a name="Initializers" id="@cloudkitect/components.CkPublicApplicationLoadbalancer.Initializer"></a>

```typescript
import { CkPublicApplicationLoadbalancer } from '@cloudkitect/components'

new CkPublicApplicationLoadbalancer(scope: Construct, id: string, props: CkPublicApplicationLoadBalancerProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cloudkitect/components.CkPublicApplicationLoadbalancer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@cloudkitect/components.CkPublicApplicationLoadbalancer.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cloudkitect/components.CkPublicApplicationLoadbalancer.Initializer.parameter.props">props</a></code> | <code><a href="#@cloudkitect/components.CkPublicApplicationLoadBalancerProps">CkPublicApplicationLoadBalancerProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cloudkitect/components.CkPublicApplicationLoadbalancer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@cloudkitect/components.CkPublicApplicationLoadbalancer.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@cloudkitect/components.CkPublicApplicationLoadbalancer.Initializer.parameter.props"></a>

- *Type:* <a href="#@cloudkitect/components.CkPublicApplicationLoadBalancerProps">CkPublicApplicationLoadBalancerProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cloudkitect/components.CkPublicApplicationLoadbalancer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cloudkitect/components.CkPublicApplicationLoadbalancer.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#@cloudkitect/components.CkPublicApplicationLoadbalancer.logAccessLogs">logAccessLogs</a></code> | Enable access logging for this load balancer. |
| <code><a href="#@cloudkitect/components.CkPublicApplicationLoadbalancer.removeAttribute">removeAttribute</a></code> | Remove an attribute from the load balancer. |
| <code><a href="#@cloudkitect/components.CkPublicApplicationLoadbalancer.setAttribute">setAttribute</a></code> | Set a non-standard attribute on the load balancer. |
| <code><a href="#@cloudkitect/components.CkPublicApplicationLoadbalancer.addListener">addListener</a></code> | Add a new listener to this load balancer. |
| <code><a href="#@cloudkitect/components.CkPublicApplicationLoadbalancer.addRedirect">addRedirect</a></code> | Add a redirection listener to this load balancer. |
| <code><a href="#@cloudkitect/components.CkPublicApplicationLoadbalancer.addSecurityGroup">addSecurityGroup</a></code> | Add a security group to this load balancer. |
| <code><a href="#@cloudkitect/components.CkPublicApplicationLoadbalancer.metric">metric</a></code> | Return the given named metric for this Application Load Balancer. |
| <code><a href="#@cloudkitect/components.CkPublicApplicationLoadbalancer.metricActiveConnectionCount">metricActiveConnectionCount</a></code> | The total number of concurrent TCP connections active from clients to the load balancer and from the load balancer to targets. |
| <code><a href="#@cloudkitect/components.CkPublicApplicationLoadbalancer.metricClientTlsNegotiationErrorCount">metricClientTlsNegotiationErrorCount</a></code> | The number of TLS connections initiated by the client that did not establish a session with the load balancer. |
| <code><a href="#@cloudkitect/components.CkPublicApplicationLoadbalancer.metricConsumedLCUs">metricConsumedLCUs</a></code> | The number of load balancer capacity units (LCU) used by your load balancer. |
| <code><a href="#@cloudkitect/components.CkPublicApplicationLoadbalancer.metricElbAuthError">metricElbAuthError</a></code> | The number of user authentications that could not be completed. |
| <code><a href="#@cloudkitect/components.CkPublicApplicationLoadbalancer.metricElbAuthFailure">metricElbAuthFailure</a></code> | The number of user authentications that could not be completed because the IdP denied access to the user or an authorization code was used more than once. |
| <code><a href="#@cloudkitect/components.CkPublicApplicationLoadbalancer.metricElbAuthLatency">metricElbAuthLatency</a></code> | The time elapsed, in milliseconds, to query the IdP for the ID token and user info. |
| <code><a href="#@cloudkitect/components.CkPublicApplicationLoadbalancer.metricElbAuthSuccess">metricElbAuthSuccess</a></code> | The number of authenticate actions that were successful. |
| <code><a href="#@cloudkitect/components.CkPublicApplicationLoadbalancer.metricHttpCodeElb">metricHttpCodeElb</a></code> | The number of HTTP 3xx/4xx/5xx codes that originate from the load balancer. |
| <code><a href="#@cloudkitect/components.CkPublicApplicationLoadbalancer.metricHttpCodeTarget">metricHttpCodeTarget</a></code> | The number of HTTP 2xx/3xx/4xx/5xx response codes generated by all targets in the load balancer. |
| <code><a href="#@cloudkitect/components.CkPublicApplicationLoadbalancer.metricHttpFixedResponseCount">metricHttpFixedResponseCount</a></code> | The number of fixed-response actions that were successful. |
| <code><a href="#@cloudkitect/components.CkPublicApplicationLoadbalancer.metricHttpRedirectCount">metricHttpRedirectCount</a></code> | The number of redirect actions that were successful. |
| <code><a href="#@cloudkitect/components.CkPublicApplicationLoadbalancer.metricHttpRedirectUrlLimitExceededCount">metricHttpRedirectUrlLimitExceededCount</a></code> | The number of redirect actions that couldn't be completed because the URL in the response location header is larger than 8K. |
| <code><a href="#@cloudkitect/components.CkPublicApplicationLoadbalancer.metricIpv6ProcessedBytes">metricIpv6ProcessedBytes</a></code> | The total number of bytes processed by the load balancer over IPv6. |
| <code><a href="#@cloudkitect/components.CkPublicApplicationLoadbalancer.metricIpv6RequestCount">metricIpv6RequestCount</a></code> | The number of IPv6 requests received by the load balancer. |
| <code><a href="#@cloudkitect/components.CkPublicApplicationLoadbalancer.metricNewConnectionCount">metricNewConnectionCount</a></code> | The total number of new TCP connections established from clients to the load balancer and from the load balancer to targets. |
| <code><a href="#@cloudkitect/components.CkPublicApplicationLoadbalancer.metricProcessedBytes">metricProcessedBytes</a></code> | The total number of bytes processed by the load balancer over IPv4 and IPv6. |
| <code><a href="#@cloudkitect/components.CkPublicApplicationLoadbalancer.metricRejectedConnectionCount">metricRejectedConnectionCount</a></code> | The number of connections that were rejected because the load balancer had reached its maximum number of connections. |
| <code><a href="#@cloudkitect/components.CkPublicApplicationLoadbalancer.metricRequestCount">metricRequestCount</a></code> | The number of requests processed over IPv4 and IPv6. |
| <code><a href="#@cloudkitect/components.CkPublicApplicationLoadbalancer.metricRuleEvaluations">metricRuleEvaluations</a></code> | The number of rules processed by the load balancer given a request rate averaged over an hour. |
| <code><a href="#@cloudkitect/components.CkPublicApplicationLoadbalancer.metricTargetConnectionErrorCount">metricTargetConnectionErrorCount</a></code> | The number of connections that were not successfully established between the load balancer and target. |
| <code><a href="#@cloudkitect/components.CkPublicApplicationLoadbalancer.metricTargetResponseTime">metricTargetResponseTime</a></code> | The time elapsed, in seconds, after the request leaves the load balancer until a response from the target is received. |
| <code><a href="#@cloudkitect/components.CkPublicApplicationLoadbalancer.metricTargetTLSNegotiationErrorCount">metricTargetTLSNegotiationErrorCount</a></code> | The number of TLS connections initiated by the load balancer that did not establish a session with the target. |

---

##### `toString` <a name="toString" id="@cloudkitect/components.CkPublicApplicationLoadbalancer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@cloudkitect/components.CkPublicApplicationLoadbalancer.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="@cloudkitect/components.CkPublicApplicationLoadbalancer.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `logAccessLogs` <a name="logAccessLogs" id="@cloudkitect/components.CkPublicApplicationLoadbalancer.logAccessLogs"></a>

```typescript
public logAccessLogs(bucket: IBucket, prefix?: string): void
```

Enable access logging for this load balancer.

A region must be specified on the stack containing the load balancer; you cannot enable logging on
environment-agnostic stacks. See https://docs.aws.amazon.com/cdk/latest/guide/environments.html

###### `bucket`<sup>Required</sup> <a name="bucket" id="@cloudkitect/components.CkPublicApplicationLoadbalancer.logAccessLogs.parameter.bucket"></a>

- *Type:* aws-cdk-lib.aws_s3.IBucket

---

###### `prefix`<sup>Optional</sup> <a name="prefix" id="@cloudkitect/components.CkPublicApplicationLoadbalancer.logAccessLogs.parameter.prefix"></a>

- *Type:* string

---

##### `removeAttribute` <a name="removeAttribute" id="@cloudkitect/components.CkPublicApplicationLoadbalancer.removeAttribute"></a>

```typescript
public removeAttribute(key: string): void
```

Remove an attribute from the load balancer.

###### `key`<sup>Required</sup> <a name="key" id="@cloudkitect/components.CkPublicApplicationLoadbalancer.removeAttribute.parameter.key"></a>

- *Type:* string

---

##### `setAttribute` <a name="setAttribute" id="@cloudkitect/components.CkPublicApplicationLoadbalancer.setAttribute"></a>

```typescript
public setAttribute(key: string, value?: string): void
```

Set a non-standard attribute on the load balancer.

> [https://docs.aws.amazon.com/elasticloadbalancing/latest/application/application-load-balancers.html#load-balancer-attributes](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/application-load-balancers.html#load-balancer-attributes)

###### `key`<sup>Required</sup> <a name="key" id="@cloudkitect/components.CkPublicApplicationLoadbalancer.setAttribute.parameter.key"></a>

- *Type:* string

---

###### `value`<sup>Optional</sup> <a name="value" id="@cloudkitect/components.CkPublicApplicationLoadbalancer.setAttribute.parameter.value"></a>

- *Type:* string

---

##### `addListener` <a name="addListener" id="@cloudkitect/components.CkPublicApplicationLoadbalancer.addListener"></a>

```typescript
public addListener(id: string, props: BaseApplicationListenerProps): ApplicationListener
```

Add a new listener to this load balancer.

###### `id`<sup>Required</sup> <a name="id" id="@cloudkitect/components.CkPublicApplicationLoadbalancer.addListener.parameter.id"></a>

- *Type:* string

---

###### `props`<sup>Required</sup> <a name="props" id="@cloudkitect/components.CkPublicApplicationLoadbalancer.addListener.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_elasticloadbalancingv2.BaseApplicationListenerProps

---

##### `addRedirect` <a name="addRedirect" id="@cloudkitect/components.CkPublicApplicationLoadbalancer.addRedirect"></a>

```typescript
public addRedirect(props?: ApplicationLoadBalancerRedirectConfig): ApplicationListener
```

Add a redirection listener to this load balancer.

###### `props`<sup>Optional</sup> <a name="props" id="@cloudkitect/components.CkPublicApplicationLoadbalancer.addRedirect.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_elasticloadbalancingv2.ApplicationLoadBalancerRedirectConfig

---

##### `addSecurityGroup` <a name="addSecurityGroup" id="@cloudkitect/components.CkPublicApplicationLoadbalancer.addSecurityGroup"></a>

```typescript
public addSecurityGroup(securityGroup: ISecurityGroup): void
```

Add a security group to this load balancer.

###### `securityGroup`<sup>Required</sup> <a name="securityGroup" id="@cloudkitect/components.CkPublicApplicationLoadbalancer.addSecurityGroup.parameter.securityGroup"></a>

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup

---

##### ~~`metric`~~ <a name="metric" id="@cloudkitect/components.CkPublicApplicationLoadbalancer.metric"></a>

```typescript
public metric(metricName: string, props?: MetricOptions): Metric
```

Return the given named metric for this Application Load Balancer.

###### `metricName`<sup>Required</sup> <a name="metricName" id="@cloudkitect/components.CkPublicApplicationLoadbalancer.metric.parameter.metricName"></a>

- *Type:* string

---

###### `props`<sup>Optional</sup> <a name="props" id="@cloudkitect/components.CkPublicApplicationLoadbalancer.metric.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### ~~`metricActiveConnectionCount`~~ <a name="metricActiveConnectionCount" id="@cloudkitect/components.CkPublicApplicationLoadbalancer.metricActiveConnectionCount"></a>

```typescript
public metricActiveConnectionCount(props?: MetricOptions): Metric
```

The total number of concurrent TCP connections active from clients to the load balancer and from the load balancer to targets.

###### `props`<sup>Optional</sup> <a name="props" id="@cloudkitect/components.CkPublicApplicationLoadbalancer.metricActiveConnectionCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### ~~`metricClientTlsNegotiationErrorCount`~~ <a name="metricClientTlsNegotiationErrorCount" id="@cloudkitect/components.CkPublicApplicationLoadbalancer.metricClientTlsNegotiationErrorCount"></a>

```typescript
public metricClientTlsNegotiationErrorCount(props?: MetricOptions): Metric
```

The number of TLS connections initiated by the client that did not establish a session with the load balancer.

Possible causes include a
mismatch of ciphers or protocols.

###### `props`<sup>Optional</sup> <a name="props" id="@cloudkitect/components.CkPublicApplicationLoadbalancer.metricClientTlsNegotiationErrorCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### ~~`metricConsumedLCUs`~~ <a name="metricConsumedLCUs" id="@cloudkitect/components.CkPublicApplicationLoadbalancer.metricConsumedLCUs"></a>

```typescript
public metricConsumedLCUs(props?: MetricOptions): Metric
```

The number of load balancer capacity units (LCU) used by your load balancer.

###### `props`<sup>Optional</sup> <a name="props" id="@cloudkitect/components.CkPublicApplicationLoadbalancer.metricConsumedLCUs.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### ~~`metricElbAuthError`~~ <a name="metricElbAuthError" id="@cloudkitect/components.CkPublicApplicationLoadbalancer.metricElbAuthError"></a>

```typescript
public metricElbAuthError(props?: MetricOptions): Metric
```

The number of user authentications that could not be completed.

Because an authenticate action was misconfigured, the load balancer
couldn't establish a connection with the IdP, or the load balancer
couldn't complete the authentication flow due to an internal error.

###### `props`<sup>Optional</sup> <a name="props" id="@cloudkitect/components.CkPublicApplicationLoadbalancer.metricElbAuthError.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### ~~`metricElbAuthFailure`~~ <a name="metricElbAuthFailure" id="@cloudkitect/components.CkPublicApplicationLoadbalancer.metricElbAuthFailure"></a>

```typescript
public metricElbAuthFailure(props?: MetricOptions): Metric
```

The number of user authentications that could not be completed because the IdP denied access to the user or an authorization code was used more than once.

###### `props`<sup>Optional</sup> <a name="props" id="@cloudkitect/components.CkPublicApplicationLoadbalancer.metricElbAuthFailure.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### ~~`metricElbAuthLatency`~~ <a name="metricElbAuthLatency" id="@cloudkitect/components.CkPublicApplicationLoadbalancer.metricElbAuthLatency"></a>

```typescript
public metricElbAuthLatency(props?: MetricOptions): Metric
```

The time elapsed, in milliseconds, to query the IdP for the ID token and user info.

If one or more of these operations fail, this is the time to failure.

###### `props`<sup>Optional</sup> <a name="props" id="@cloudkitect/components.CkPublicApplicationLoadbalancer.metricElbAuthLatency.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### ~~`metricElbAuthSuccess`~~ <a name="metricElbAuthSuccess" id="@cloudkitect/components.CkPublicApplicationLoadbalancer.metricElbAuthSuccess"></a>

```typescript
public metricElbAuthSuccess(props?: MetricOptions): Metric
```

The number of authenticate actions that were successful.

This metric is incremented at the end of the authentication workflow,
after the load balancer has retrieved the user claims from the IdP.

###### `props`<sup>Optional</sup> <a name="props" id="@cloudkitect/components.CkPublicApplicationLoadbalancer.metricElbAuthSuccess.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### ~~`metricHttpCodeElb`~~ <a name="metricHttpCodeElb" id="@cloudkitect/components.CkPublicApplicationLoadbalancer.metricHttpCodeElb"></a>

```typescript
public metricHttpCodeElb(code: HttpCodeElb, props?: MetricOptions): Metric
```

The number of HTTP 3xx/4xx/5xx codes that originate from the load balancer.

This does not include any response codes generated by the targets.

###### `code`<sup>Required</sup> <a name="code" id="@cloudkitect/components.CkPublicApplicationLoadbalancer.metricHttpCodeElb.parameter.code"></a>

- *Type:* aws-cdk-lib.aws_elasticloadbalancingv2.HttpCodeElb

---

###### `props`<sup>Optional</sup> <a name="props" id="@cloudkitect/components.CkPublicApplicationLoadbalancer.metricHttpCodeElb.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### ~~`metricHttpCodeTarget`~~ <a name="metricHttpCodeTarget" id="@cloudkitect/components.CkPublicApplicationLoadbalancer.metricHttpCodeTarget"></a>

```typescript
public metricHttpCodeTarget(code: HttpCodeTarget, props?: MetricOptions): Metric
```

The number of HTTP 2xx/3xx/4xx/5xx response codes generated by all targets in the load balancer.

This does not include any response codes generated by the load balancer.

###### `code`<sup>Required</sup> <a name="code" id="@cloudkitect/components.CkPublicApplicationLoadbalancer.metricHttpCodeTarget.parameter.code"></a>

- *Type:* aws-cdk-lib.aws_elasticloadbalancingv2.HttpCodeTarget

---

###### `props`<sup>Optional</sup> <a name="props" id="@cloudkitect/components.CkPublicApplicationLoadbalancer.metricHttpCodeTarget.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### ~~`metricHttpFixedResponseCount`~~ <a name="metricHttpFixedResponseCount" id="@cloudkitect/components.CkPublicApplicationLoadbalancer.metricHttpFixedResponseCount"></a>

```typescript
public metricHttpFixedResponseCount(props?: MetricOptions): Metric
```

The number of fixed-response actions that were successful.

###### `props`<sup>Optional</sup> <a name="props" id="@cloudkitect/components.CkPublicApplicationLoadbalancer.metricHttpFixedResponseCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### ~~`metricHttpRedirectCount`~~ <a name="metricHttpRedirectCount" id="@cloudkitect/components.CkPublicApplicationLoadbalancer.metricHttpRedirectCount"></a>

```typescript
public metricHttpRedirectCount(props?: MetricOptions): Metric
```

The number of redirect actions that were successful.

###### `props`<sup>Optional</sup> <a name="props" id="@cloudkitect/components.CkPublicApplicationLoadbalancer.metricHttpRedirectCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### ~~`metricHttpRedirectUrlLimitExceededCount`~~ <a name="metricHttpRedirectUrlLimitExceededCount" id="@cloudkitect/components.CkPublicApplicationLoadbalancer.metricHttpRedirectUrlLimitExceededCount"></a>

```typescript
public metricHttpRedirectUrlLimitExceededCount(props?: MetricOptions): Metric
```

The number of redirect actions that couldn't be completed because the URL in the response location header is larger than 8K.

###### `props`<sup>Optional</sup> <a name="props" id="@cloudkitect/components.CkPublicApplicationLoadbalancer.metricHttpRedirectUrlLimitExceededCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### ~~`metricIpv6ProcessedBytes`~~ <a name="metricIpv6ProcessedBytes" id="@cloudkitect/components.CkPublicApplicationLoadbalancer.metricIpv6ProcessedBytes"></a>

```typescript
public metricIpv6ProcessedBytes(props?: MetricOptions): Metric
```

The total number of bytes processed by the load balancer over IPv6.

###### `props`<sup>Optional</sup> <a name="props" id="@cloudkitect/components.CkPublicApplicationLoadbalancer.metricIpv6ProcessedBytes.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### ~~`metricIpv6RequestCount`~~ <a name="metricIpv6RequestCount" id="@cloudkitect/components.CkPublicApplicationLoadbalancer.metricIpv6RequestCount"></a>

```typescript
public metricIpv6RequestCount(props?: MetricOptions): Metric
```

The number of IPv6 requests received by the load balancer.

###### `props`<sup>Optional</sup> <a name="props" id="@cloudkitect/components.CkPublicApplicationLoadbalancer.metricIpv6RequestCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### ~~`metricNewConnectionCount`~~ <a name="metricNewConnectionCount" id="@cloudkitect/components.CkPublicApplicationLoadbalancer.metricNewConnectionCount"></a>

```typescript
public metricNewConnectionCount(props?: MetricOptions): Metric
```

The total number of new TCP connections established from clients to the load balancer and from the load balancer to targets.

###### `props`<sup>Optional</sup> <a name="props" id="@cloudkitect/components.CkPublicApplicationLoadbalancer.metricNewConnectionCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### ~~`metricProcessedBytes`~~ <a name="metricProcessedBytes" id="@cloudkitect/components.CkPublicApplicationLoadbalancer.metricProcessedBytes"></a>

```typescript
public metricProcessedBytes(props?: MetricOptions): Metric
```

The total number of bytes processed by the load balancer over IPv4 and IPv6.

###### `props`<sup>Optional</sup> <a name="props" id="@cloudkitect/components.CkPublicApplicationLoadbalancer.metricProcessedBytes.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### ~~`metricRejectedConnectionCount`~~ <a name="metricRejectedConnectionCount" id="@cloudkitect/components.CkPublicApplicationLoadbalancer.metricRejectedConnectionCount"></a>

```typescript
public metricRejectedConnectionCount(props?: MetricOptions): Metric
```

The number of connections that were rejected because the load balancer had reached its maximum number of connections.

###### `props`<sup>Optional</sup> <a name="props" id="@cloudkitect/components.CkPublicApplicationLoadbalancer.metricRejectedConnectionCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### ~~`metricRequestCount`~~ <a name="metricRequestCount" id="@cloudkitect/components.CkPublicApplicationLoadbalancer.metricRequestCount"></a>

```typescript
public metricRequestCount(props?: MetricOptions): Metric
```

The number of requests processed over IPv4 and IPv6.

This count includes only the requests with a response generated by a target of the load balancer.

###### `props`<sup>Optional</sup> <a name="props" id="@cloudkitect/components.CkPublicApplicationLoadbalancer.metricRequestCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### ~~`metricRuleEvaluations`~~ <a name="metricRuleEvaluations" id="@cloudkitect/components.CkPublicApplicationLoadbalancer.metricRuleEvaluations"></a>

```typescript
public metricRuleEvaluations(props?: MetricOptions): Metric
```

The number of rules processed by the load balancer given a request rate averaged over an hour.

###### `props`<sup>Optional</sup> <a name="props" id="@cloudkitect/components.CkPublicApplicationLoadbalancer.metricRuleEvaluations.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### ~~`metricTargetConnectionErrorCount`~~ <a name="metricTargetConnectionErrorCount" id="@cloudkitect/components.CkPublicApplicationLoadbalancer.metricTargetConnectionErrorCount"></a>

```typescript
public metricTargetConnectionErrorCount(props?: MetricOptions): Metric
```

The number of connections that were not successfully established between the load balancer and target.

###### `props`<sup>Optional</sup> <a name="props" id="@cloudkitect/components.CkPublicApplicationLoadbalancer.metricTargetConnectionErrorCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### ~~`metricTargetResponseTime`~~ <a name="metricTargetResponseTime" id="@cloudkitect/components.CkPublicApplicationLoadbalancer.metricTargetResponseTime"></a>

```typescript
public metricTargetResponseTime(props?: MetricOptions): Metric
```

The time elapsed, in seconds, after the request leaves the load balancer until a response from the target is received.

###### `props`<sup>Optional</sup> <a name="props" id="@cloudkitect/components.CkPublicApplicationLoadbalancer.metricTargetResponseTime.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### ~~`metricTargetTLSNegotiationErrorCount`~~ <a name="metricTargetTLSNegotiationErrorCount" id="@cloudkitect/components.CkPublicApplicationLoadbalancer.metricTargetTLSNegotiationErrorCount"></a>

```typescript
public metricTargetTLSNegotiationErrorCount(props?: MetricOptions): Metric
```

The number of TLS connections initiated by the load balancer that did not establish a session with the target.

Possible causes include a mismatch of ciphers or protocols.

###### `props`<sup>Optional</sup> <a name="props" id="@cloudkitect/components.CkPublicApplicationLoadbalancer.metricTargetTLSNegotiationErrorCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cloudkitect/components.CkPublicApplicationLoadbalancer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cloudkitect/components.CkPublicApplicationLoadbalancer.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#@cloudkitect/components.CkPublicApplicationLoadbalancer.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#@cloudkitect/components.CkPublicApplicationLoadbalancer.fromApplicationLoadBalancerAttributes">fromApplicationLoadBalancerAttributes</a></code> | Import an existing Application Load Balancer. |
| <code><a href="#@cloudkitect/components.CkPublicApplicationLoadbalancer.fromLookup">fromLookup</a></code> | Look up an application load balancer. |

---

##### `isConstruct` <a name="isConstruct" id="@cloudkitect/components.CkPublicApplicationLoadbalancer.isConstruct"></a>

```typescript
import { CkPublicApplicationLoadbalancer } from '@cloudkitect/components'

CkPublicApplicationLoadbalancer.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cloudkitect/components.CkPublicApplicationLoadbalancer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="@cloudkitect/components.CkPublicApplicationLoadbalancer.isOwnedResource"></a>

```typescript
import { CkPublicApplicationLoadbalancer } from '@cloudkitect/components'

CkPublicApplicationLoadbalancer.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="@cloudkitect/components.CkPublicApplicationLoadbalancer.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="@cloudkitect/components.CkPublicApplicationLoadbalancer.isResource"></a>

```typescript
import { CkPublicApplicationLoadbalancer } from '@cloudkitect/components'

CkPublicApplicationLoadbalancer.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@cloudkitect/components.CkPublicApplicationLoadbalancer.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromApplicationLoadBalancerAttributes` <a name="fromApplicationLoadBalancerAttributes" id="@cloudkitect/components.CkPublicApplicationLoadbalancer.fromApplicationLoadBalancerAttributes"></a>

```typescript
import { CkPublicApplicationLoadbalancer } from '@cloudkitect/components'

CkPublicApplicationLoadbalancer.fromApplicationLoadBalancerAttributes(scope: Construct, id: string, attrs: ApplicationLoadBalancerAttributes)
```

Import an existing Application Load Balancer.

###### `scope`<sup>Required</sup> <a name="scope" id="@cloudkitect/components.CkPublicApplicationLoadbalancer.fromApplicationLoadBalancerAttributes.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@cloudkitect/components.CkPublicApplicationLoadbalancer.fromApplicationLoadBalancerAttributes.parameter.id"></a>

- *Type:* string

---

###### `attrs`<sup>Required</sup> <a name="attrs" id="@cloudkitect/components.CkPublicApplicationLoadbalancer.fromApplicationLoadBalancerAttributes.parameter.attrs"></a>

- *Type:* aws-cdk-lib.aws_elasticloadbalancingv2.ApplicationLoadBalancerAttributes

---

##### `fromLookup` <a name="fromLookup" id="@cloudkitect/components.CkPublicApplicationLoadbalancer.fromLookup"></a>

```typescript
import { CkPublicApplicationLoadbalancer } from '@cloudkitect/components'

CkPublicApplicationLoadbalancer.fromLookup(scope: Construct, id: string, options: ApplicationLoadBalancerLookupOptions)
```

Look up an application load balancer.

###### `scope`<sup>Required</sup> <a name="scope" id="@cloudkitect/components.CkPublicApplicationLoadbalancer.fromLookup.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@cloudkitect/components.CkPublicApplicationLoadbalancer.fromLookup.parameter.id"></a>

- *Type:* string

---

###### `options`<sup>Required</sup> <a name="options" id="@cloudkitect/components.CkPublicApplicationLoadbalancer.fromLookup.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_elasticloadbalancingv2.ApplicationLoadBalancerLookupOptions

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cloudkitect/components.CkPublicApplicationLoadbalancer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cloudkitect/components.CkPublicApplicationLoadbalancer.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@cloudkitect/components.CkPublicApplicationLoadbalancer.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@cloudkitect/components.CkPublicApplicationLoadbalancer.property.loadBalancerArn">loadBalancerArn</a></code> | <code>string</code> | The ARN of this load balancer. |
| <code><a href="#@cloudkitect/components.CkPublicApplicationLoadbalancer.property.loadBalancerCanonicalHostedZoneId">loadBalancerCanonicalHostedZoneId</a></code> | <code>string</code> | The canonical hosted zone ID of this load balancer. |
| <code><a href="#@cloudkitect/components.CkPublicApplicationLoadbalancer.property.loadBalancerDnsName">loadBalancerDnsName</a></code> | <code>string</code> | The DNS name of this load balancer. |
| <code><a href="#@cloudkitect/components.CkPublicApplicationLoadbalancer.property.loadBalancerFullName">loadBalancerFullName</a></code> | <code>string</code> | The full name of this load balancer. |
| <code><a href="#@cloudkitect/components.CkPublicApplicationLoadbalancer.property.loadBalancerName">loadBalancerName</a></code> | <code>string</code> | The name of this load balancer. |
| <code><a href="#@cloudkitect/components.CkPublicApplicationLoadbalancer.property.loadBalancerSecurityGroups">loadBalancerSecurityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cloudkitect/components.CkPublicApplicationLoadbalancer.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | The VPC this load balancer has been created in. |
| <code><a href="#@cloudkitect/components.CkPublicApplicationLoadbalancer.property.connections">connections</a></code> | <code>aws-cdk-lib.aws_ec2.Connections</code> | The network connections associated with this resource. |
| <code><a href="#@cloudkitect/components.CkPublicApplicationLoadbalancer.property.listeners">listeners</a></code> | <code>aws-cdk-lib.aws_elasticloadbalancingv2.ApplicationListener[]</code> | A list of listeners that have been added to the load balancer. |
| <code><a href="#@cloudkitect/components.CkPublicApplicationLoadbalancer.property.metrics">metrics</a></code> | <code>aws-cdk-lib.aws_elasticloadbalancingv2.IApplicationLoadBalancerMetrics</code> | All metrics available for this load balancer. |
| <code><a href="#@cloudkitect/components.CkPublicApplicationLoadbalancer.property.ipAddressType">ipAddressType</a></code> | <code>aws-cdk-lib.aws_elasticloadbalancingv2.IpAddressType</code> | The IP Address Type for this load balancer. |
| <code><a href="#@cloudkitect/components.CkPublicApplicationLoadbalancer.property.lbSecurityGroup">lbSecurityGroup</a></code> | <code>aws-cdk-lib.aws_ec2.SecurityGroup</code> | Security group created inside load balancer that only allows traffic from https. |

---

##### `node`<sup>Required</sup> <a name="node" id="@cloudkitect/components.CkPublicApplicationLoadbalancer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@cloudkitect/components.CkPublicApplicationLoadbalancer.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@cloudkitect/components.CkPublicApplicationLoadbalancer.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `loadBalancerArn`<sup>Required</sup> <a name="loadBalancerArn" id="@cloudkitect/components.CkPublicApplicationLoadbalancer.property.loadBalancerArn"></a>

```typescript
public readonly loadBalancerArn: string;
```

- *Type:* string

The ARN of this load balancer.

Example value: `arn:aws:elasticloadbalancing:us-west-2:123456789012:loadbalancer/app/my-internal-load-balancer/50dc6c495c0c9188`

---

##### `loadBalancerCanonicalHostedZoneId`<sup>Required</sup> <a name="loadBalancerCanonicalHostedZoneId" id="@cloudkitect/components.CkPublicApplicationLoadbalancer.property.loadBalancerCanonicalHostedZoneId"></a>

```typescript
public readonly loadBalancerCanonicalHostedZoneId: string;
```

- *Type:* string

The canonical hosted zone ID of this load balancer.

Example value: `Z2P70J7EXAMPLE`

---

##### `loadBalancerDnsName`<sup>Required</sup> <a name="loadBalancerDnsName" id="@cloudkitect/components.CkPublicApplicationLoadbalancer.property.loadBalancerDnsName"></a>

```typescript
public readonly loadBalancerDnsName: string;
```

- *Type:* string

The DNS name of this load balancer.

Example value: `my-load-balancer-424835706.us-west-2.elb.amazonaws.com`

---

##### `loadBalancerFullName`<sup>Required</sup> <a name="loadBalancerFullName" id="@cloudkitect/components.CkPublicApplicationLoadbalancer.property.loadBalancerFullName"></a>

```typescript
public readonly loadBalancerFullName: string;
```

- *Type:* string

The full name of this load balancer.

Example value: `app/my-load-balancer/50dc6c495c0c9188`

---

##### `loadBalancerName`<sup>Required</sup> <a name="loadBalancerName" id="@cloudkitect/components.CkPublicApplicationLoadbalancer.property.loadBalancerName"></a>

```typescript
public readonly loadBalancerName: string;
```

- *Type:* string

The name of this load balancer.

Example value: `my-load-balancer`

---

##### `loadBalancerSecurityGroups`<sup>Required</sup> <a name="loadBalancerSecurityGroups" id="@cloudkitect/components.CkPublicApplicationLoadbalancer.property.loadBalancerSecurityGroups"></a>

```typescript
public readonly loadBalancerSecurityGroups: string[];
```

- *Type:* string[]

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="@cloudkitect/components.CkPublicApplicationLoadbalancer.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

The VPC this load balancer has been created in.

This property is always defined (not `null` or `undefined`) for sub-classes of `BaseLoadBalancer`.

---

##### `connections`<sup>Required</sup> <a name="connections" id="@cloudkitect/components.CkPublicApplicationLoadbalancer.property.connections"></a>

```typescript
public readonly connections: Connections;
```

- *Type:* aws-cdk-lib.aws_ec2.Connections

The network connections associated with this resource.

---

##### `listeners`<sup>Required</sup> <a name="listeners" id="@cloudkitect/components.CkPublicApplicationLoadbalancer.property.listeners"></a>

```typescript
public readonly listeners: ApplicationListener[];
```

- *Type:* aws-cdk-lib.aws_elasticloadbalancingv2.ApplicationListener[]

A list of listeners that have been added to the load balancer.

This list is only valid for owned constructs.

---

##### `metrics`<sup>Required</sup> <a name="metrics" id="@cloudkitect/components.CkPublicApplicationLoadbalancer.property.metrics"></a>

```typescript
public readonly metrics: IApplicationLoadBalancerMetrics;
```

- *Type:* aws-cdk-lib.aws_elasticloadbalancingv2.IApplicationLoadBalancerMetrics

All metrics available for this load balancer.

---

##### `ipAddressType`<sup>Optional</sup> <a name="ipAddressType" id="@cloudkitect/components.CkPublicApplicationLoadbalancer.property.ipAddressType"></a>

```typescript
public readonly ipAddressType: IpAddressType;
```

- *Type:* aws-cdk-lib.aws_elasticloadbalancingv2.IpAddressType

The IP Address Type for this load balancer.

---

##### `lbSecurityGroup`<sup>Required</sup> <a name="lbSecurityGroup" id="@cloudkitect/components.CkPublicApplicationLoadbalancer.property.lbSecurityGroup"></a>

```typescript
public readonly lbSecurityGroup: SecurityGroup;
```

- *Type:* aws-cdk-lib.aws_ec2.SecurityGroup

Security group created inside load balancer that only allows traffic from https.

---


### CkRepository <a name="CkRepository" id="@cloudkitect/components.CkRepository"></a>

CloudKitect ECR Repository component used for creating ECR repositories.

### Default Configuration
Encryption: KMS (AWS Managed Keys)
Image Immutable: true

### Default Alarms
Available only in Enhanced components

### Logging and Monitoring
Available only in Enhanced components

### Backups
Available only in Enhanced components

### Examples
Default Usage
```ts
new CkRepository(this, "LogicalId", {});
```

Custom Configuration
```ts
new CkRepository(this, "LogicalId", {
   imageScanOnPush: false
});
```

### Compliance
It addresses the following compliance requirements
1. Enable scan on image push
   >  - Risk Level: Medium
   >  - Compliance: NA
   >  - Well Architected Pillar: Security
2. Repository should be encrypted
   >  - Risk Level: Medium
   >  - Compliance: NA
   >  - Well Architected Pillar: Security
3. Images tags should be immutable
   >  - Risk Level: Medium
   >  - Compliance: NA
   >  - Well Architected Pillar: Security, Operational Excellence

     ![Compliance Check Report](http://cloudkitect.com/wp-content/uploads/2024/01/ecr-compliance.png)

#### Initializers <a name="Initializers" id="@cloudkitect/components.CkRepository.Initializer"></a>

```typescript
import { CkRepository } from '@cloudkitect/components'

new CkRepository(scope: Construct, id: string, props: CkRepositoryProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cloudkitect/components.CkRepository.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@cloudkitect/components.CkRepository.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cloudkitect/components.CkRepository.Initializer.parameter.props">props</a></code> | <code><a href="#@cloudkitect/components.CkRepositoryProps">CkRepositoryProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cloudkitect/components.CkRepository.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@cloudkitect/components.CkRepository.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@cloudkitect/components.CkRepository.Initializer.parameter.props"></a>

- *Type:* <a href="#@cloudkitect/components.CkRepositoryProps">CkRepositoryProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cloudkitect/components.CkRepository.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cloudkitect/components.CkRepository.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#@cloudkitect/components.CkRepository.addToResourcePolicy">addToResourcePolicy</a></code> | Add a policy statement to the repository's resource policy. |
| <code><a href="#@cloudkitect/components.CkRepository.grant">grant</a></code> | Grant the given principal identity permissions to perform the actions on this repository. |
| <code><a href="#@cloudkitect/components.CkRepository.grantPull">grantPull</a></code> | Grant the given identity permissions to use the images in this repository. |
| <code><a href="#@cloudkitect/components.CkRepository.grantPullPush">grantPullPush</a></code> | Grant the given identity permissions to pull and push images to this repository. |
| <code><a href="#@cloudkitect/components.CkRepository.grantPush">grantPush</a></code> | Grant the given identity permissions to use the images in this repository. |
| <code><a href="#@cloudkitect/components.CkRepository.grantRead">grantRead</a></code> | Grant the given identity permissions to read the images in this repository. |
| <code><a href="#@cloudkitect/components.CkRepository.onCloudTrailEvent">onCloudTrailEvent</a></code> | Define a CloudWatch event that triggers when something happens to this repository. |
| <code><a href="#@cloudkitect/components.CkRepository.onCloudTrailImagePushed">onCloudTrailImagePushed</a></code> | Defines an AWS CloudWatch event rule that can trigger a target when an image is pushed to this repository. |
| <code><a href="#@cloudkitect/components.CkRepository.onEvent">onEvent</a></code> | Defines a CloudWatch event rule which triggers for repository events. |
| <code><a href="#@cloudkitect/components.CkRepository.onImageScanCompleted">onImageScanCompleted</a></code> | Defines an AWS CloudWatch event rule that can trigger a target when an image scan is completed. |
| <code><a href="#@cloudkitect/components.CkRepository.repositoryUriForDigest">repositoryUriForDigest</a></code> | Returns the URL of the repository. Can be used in `docker push/pull`. |
| <code><a href="#@cloudkitect/components.CkRepository.repositoryUriForTag">repositoryUriForTag</a></code> | Returns the URL of the repository. Can be used in `docker push/pull`. |
| <code><a href="#@cloudkitect/components.CkRepository.repositoryUriForTagOrDigest">repositoryUriForTagOrDigest</a></code> | Returns the URL of the repository. Can be used in `docker push/pull`. |
| <code><a href="#@cloudkitect/components.CkRepository.addLifecycleRule">addLifecycleRule</a></code> | Add a life cycle rule to the repository. |

---

##### `toString` <a name="toString" id="@cloudkitect/components.CkRepository.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@cloudkitect/components.CkRepository.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="@cloudkitect/components.CkRepository.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addToResourcePolicy` <a name="addToResourcePolicy" id="@cloudkitect/components.CkRepository.addToResourcePolicy"></a>

```typescript
public addToResourcePolicy(statement: PolicyStatement): AddToResourcePolicyResult
```

Add a policy statement to the repository's resource policy.

While other resources policies in AWS either require or accept a resource section,
Cfn for ECR does not allow us to specify a resource policy.
It will fail if a resource section is present at all.

###### `statement`<sup>Required</sup> <a name="statement" id="@cloudkitect/components.CkRepository.addToResourcePolicy.parameter.statement"></a>

- *Type:* aws-cdk-lib.aws_iam.PolicyStatement

---

##### `grant` <a name="grant" id="@cloudkitect/components.CkRepository.grant"></a>

```typescript
public grant(grantee: IGrantable, actions: string): Grant
```

Grant the given principal identity permissions to perform the actions on this repository.

###### `grantee`<sup>Required</sup> <a name="grantee" id="@cloudkitect/components.CkRepository.grant.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

###### `actions`<sup>Required</sup> <a name="actions" id="@cloudkitect/components.CkRepository.grant.parameter.actions"></a>

- *Type:* string

---

##### `grantPull` <a name="grantPull" id="@cloudkitect/components.CkRepository.grantPull"></a>

```typescript
public grantPull(grantee: IGrantable): Grant
```

Grant the given identity permissions to use the images in this repository.

###### `grantee`<sup>Required</sup> <a name="grantee" id="@cloudkitect/components.CkRepository.grantPull.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

##### `grantPullPush` <a name="grantPullPush" id="@cloudkitect/components.CkRepository.grantPullPush"></a>

```typescript
public grantPullPush(grantee: IGrantable): Grant
```

Grant the given identity permissions to pull and push images to this repository.

###### `grantee`<sup>Required</sup> <a name="grantee" id="@cloudkitect/components.CkRepository.grantPullPush.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

##### `grantPush` <a name="grantPush" id="@cloudkitect/components.CkRepository.grantPush"></a>

```typescript
public grantPush(grantee: IGrantable): Grant
```

Grant the given identity permissions to use the images in this repository.

###### `grantee`<sup>Required</sup> <a name="grantee" id="@cloudkitect/components.CkRepository.grantPush.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

##### `grantRead` <a name="grantRead" id="@cloudkitect/components.CkRepository.grantRead"></a>

```typescript
public grantRead(grantee: IGrantable): Grant
```

Grant the given identity permissions to read the images in this repository.

###### `grantee`<sup>Required</sup> <a name="grantee" id="@cloudkitect/components.CkRepository.grantRead.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

##### `onCloudTrailEvent` <a name="onCloudTrailEvent" id="@cloudkitect/components.CkRepository.onCloudTrailEvent"></a>

```typescript
public onCloudTrailEvent(id: string, options?: OnEventOptions): Rule
```

Define a CloudWatch event that triggers when something happens to this repository.

Requires that there exists at least one CloudTrail Trail in your account
that captures the event. This method will not create the Trail.

###### `id`<sup>Required</sup> <a name="id" id="@cloudkitect/components.CkRepository.onCloudTrailEvent.parameter.id"></a>

- *Type:* string

The id of the rule.

---

###### `options`<sup>Optional</sup> <a name="options" id="@cloudkitect/components.CkRepository.onCloudTrailEvent.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_events.OnEventOptions

Options for adding the rule.

---

##### `onCloudTrailImagePushed` <a name="onCloudTrailImagePushed" id="@cloudkitect/components.CkRepository.onCloudTrailImagePushed"></a>

```typescript
public onCloudTrailImagePushed(id: string, options?: OnCloudTrailImagePushedOptions): Rule
```

Defines an AWS CloudWatch event rule that can trigger a target when an image is pushed to this repository.

Requires that there exists at least one CloudTrail Trail in your account
that captures the event. This method will not create the Trail.

###### `id`<sup>Required</sup> <a name="id" id="@cloudkitect/components.CkRepository.onCloudTrailImagePushed.parameter.id"></a>

- *Type:* string

The id of the rule.

---

###### `options`<sup>Optional</sup> <a name="options" id="@cloudkitect/components.CkRepository.onCloudTrailImagePushed.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_ecr.OnCloudTrailImagePushedOptions

Options for adding the rule.

---

##### `onEvent` <a name="onEvent" id="@cloudkitect/components.CkRepository.onEvent"></a>

```typescript
public onEvent(id: string, options?: OnEventOptions): Rule
```

Defines a CloudWatch event rule which triggers for repository events.

Use
`rule.addEventPattern(pattern)` to specify a filter.

###### `id`<sup>Required</sup> <a name="id" id="@cloudkitect/components.CkRepository.onEvent.parameter.id"></a>

- *Type:* string

---

###### `options`<sup>Optional</sup> <a name="options" id="@cloudkitect/components.CkRepository.onEvent.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_events.OnEventOptions

---

##### `onImageScanCompleted` <a name="onImageScanCompleted" id="@cloudkitect/components.CkRepository.onImageScanCompleted"></a>

```typescript
public onImageScanCompleted(id: string, options?: OnImageScanCompletedOptions): Rule
```

Defines an AWS CloudWatch event rule that can trigger a target when an image scan is completed.

###### `id`<sup>Required</sup> <a name="id" id="@cloudkitect/components.CkRepository.onImageScanCompleted.parameter.id"></a>

- *Type:* string

The id of the rule.

---

###### `options`<sup>Optional</sup> <a name="options" id="@cloudkitect/components.CkRepository.onImageScanCompleted.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_ecr.OnImageScanCompletedOptions

Options for adding the rule.

---

##### `repositoryUriForDigest` <a name="repositoryUriForDigest" id="@cloudkitect/components.CkRepository.repositoryUriForDigest"></a>

```typescript
public repositoryUriForDigest(digest?: string): string
```

Returns the URL of the repository. Can be used in `docker push/pull`.

ACCOUNT.dkr.ecr.REGION.amazonaws.com/REPOSITORY[@DIGEST]

###### `digest`<sup>Optional</sup> <a name="digest" id="@cloudkitect/components.CkRepository.repositoryUriForDigest.parameter.digest"></a>

- *Type:* string

Optional image digest.

---

##### `repositoryUriForTag` <a name="repositoryUriForTag" id="@cloudkitect/components.CkRepository.repositoryUriForTag"></a>

```typescript
public repositoryUriForTag(tag?: string): string
```

Returns the URL of the repository. Can be used in `docker push/pull`.

ACCOUNT.dkr.ecr.REGION.amazonaws.com/REPOSITORY[:TAG]

###### `tag`<sup>Optional</sup> <a name="tag" id="@cloudkitect/components.CkRepository.repositoryUriForTag.parameter.tag"></a>

- *Type:* string

Optional image tag.

---

##### `repositoryUriForTagOrDigest` <a name="repositoryUriForTagOrDigest" id="@cloudkitect/components.CkRepository.repositoryUriForTagOrDigest"></a>

```typescript
public repositoryUriForTagOrDigest(tagOrDigest?: string): string
```

Returns the URL of the repository. Can be used in `docker push/pull`.

ACCOUNT.dkr.ecr.REGION.amazonaws.com/REPOSITORY[:TAG]
   ACCOUNT.dkr.ecr.REGION.amazonaws.com/REPOSITORY[@DIGEST]

###### `tagOrDigest`<sup>Optional</sup> <a name="tagOrDigest" id="@cloudkitect/components.CkRepository.repositoryUriForTagOrDigest.parameter.tagOrDigest"></a>

- *Type:* string

Optional image tag or digest (digests must start with `sha256:`).

---

##### `addLifecycleRule` <a name="addLifecycleRule" id="@cloudkitect/components.CkRepository.addLifecycleRule"></a>

```typescript
public addLifecycleRule(rule: LifecycleRule): void
```

Add a life cycle rule to the repository.

Life cycle rules automatically expire images from the repository that match
certain conditions.

###### `rule`<sup>Required</sup> <a name="rule" id="@cloudkitect/components.CkRepository.addLifecycleRule.parameter.rule"></a>

- *Type:* aws-cdk-lib.aws_ecr.LifecycleRule

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cloudkitect/components.CkRepository.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cloudkitect/components.CkRepository.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#@cloudkitect/components.CkRepository.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#@cloudkitect/components.CkRepository.arnForLocalRepository">arnForLocalRepository</a></code> | Returns an ECR ARN for a repository that resides in the same account/region as the current stack. |
| <code><a href="#@cloudkitect/components.CkRepository.fromRepositoryArn">fromRepositoryArn</a></code> | *No description.* |
| <code><a href="#@cloudkitect/components.CkRepository.fromRepositoryAttributes">fromRepositoryAttributes</a></code> | Import a repository. |
| <code><a href="#@cloudkitect/components.CkRepository.fromRepositoryName">fromRepositoryName</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cloudkitect/components.CkRepository.isConstruct"></a>

```typescript
import { CkRepository } from '@cloudkitect/components'

CkRepository.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cloudkitect/components.CkRepository.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="@cloudkitect/components.CkRepository.isOwnedResource"></a>

```typescript
import { CkRepository } from '@cloudkitect/components'

CkRepository.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="@cloudkitect/components.CkRepository.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="@cloudkitect/components.CkRepository.isResource"></a>

```typescript
import { CkRepository } from '@cloudkitect/components'

CkRepository.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@cloudkitect/components.CkRepository.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `arnForLocalRepository` <a name="arnForLocalRepository" id="@cloudkitect/components.CkRepository.arnForLocalRepository"></a>

```typescript
import { CkRepository } from '@cloudkitect/components'

CkRepository.arnForLocalRepository(repositoryName: string, scope: IConstruct, account?: string)
```

Returns an ECR ARN for a repository that resides in the same account/region as the current stack.

###### `repositoryName`<sup>Required</sup> <a name="repositoryName" id="@cloudkitect/components.CkRepository.arnForLocalRepository.parameter.repositoryName"></a>

- *Type:* string

---

###### `scope`<sup>Required</sup> <a name="scope" id="@cloudkitect/components.CkRepository.arnForLocalRepository.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `account`<sup>Optional</sup> <a name="account" id="@cloudkitect/components.CkRepository.arnForLocalRepository.parameter.account"></a>

- *Type:* string

---

##### `fromRepositoryArn` <a name="fromRepositoryArn" id="@cloudkitect/components.CkRepository.fromRepositoryArn"></a>

```typescript
import { CkRepository } from '@cloudkitect/components'

CkRepository.fromRepositoryArn(scope: Construct, id: string, repositoryArn: string)
```

###### `scope`<sup>Required</sup> <a name="scope" id="@cloudkitect/components.CkRepository.fromRepositoryArn.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@cloudkitect/components.CkRepository.fromRepositoryArn.parameter.id"></a>

- *Type:* string

---

###### `repositoryArn`<sup>Required</sup> <a name="repositoryArn" id="@cloudkitect/components.CkRepository.fromRepositoryArn.parameter.repositoryArn"></a>

- *Type:* string

---

##### `fromRepositoryAttributes` <a name="fromRepositoryAttributes" id="@cloudkitect/components.CkRepository.fromRepositoryAttributes"></a>

```typescript
import { CkRepository } from '@cloudkitect/components'

CkRepository.fromRepositoryAttributes(scope: Construct, id: string, attrs: RepositoryAttributes)
```

Import a repository.

###### `scope`<sup>Required</sup> <a name="scope" id="@cloudkitect/components.CkRepository.fromRepositoryAttributes.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@cloudkitect/components.CkRepository.fromRepositoryAttributes.parameter.id"></a>

- *Type:* string

---

###### `attrs`<sup>Required</sup> <a name="attrs" id="@cloudkitect/components.CkRepository.fromRepositoryAttributes.parameter.attrs"></a>

- *Type:* aws-cdk-lib.aws_ecr.RepositoryAttributes

---

##### `fromRepositoryName` <a name="fromRepositoryName" id="@cloudkitect/components.CkRepository.fromRepositoryName"></a>

```typescript
import { CkRepository } from '@cloudkitect/components'

CkRepository.fromRepositoryName(scope: Construct, id: string, repositoryName: string)
```

###### `scope`<sup>Required</sup> <a name="scope" id="@cloudkitect/components.CkRepository.fromRepositoryName.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@cloudkitect/components.CkRepository.fromRepositoryName.parameter.id"></a>

- *Type:* string

---

###### `repositoryName`<sup>Required</sup> <a name="repositoryName" id="@cloudkitect/components.CkRepository.fromRepositoryName.parameter.repositoryName"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cloudkitect/components.CkRepository.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cloudkitect/components.CkRepository.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@cloudkitect/components.CkRepository.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@cloudkitect/components.CkRepository.property.repositoryArn">repositoryArn</a></code> | <code>string</code> | The ARN of the repository. |
| <code><a href="#@cloudkitect/components.CkRepository.property.repositoryName">repositoryName</a></code> | <code>string</code> | The name of the repository. |
| <code><a href="#@cloudkitect/components.CkRepository.property.repositoryUri">repositoryUri</a></code> | <code>string</code> | The URI of this repository (represents the latest image):. |

---

##### `node`<sup>Required</sup> <a name="node" id="@cloudkitect/components.CkRepository.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@cloudkitect/components.CkRepository.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@cloudkitect/components.CkRepository.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `repositoryArn`<sup>Required</sup> <a name="repositoryArn" id="@cloudkitect/components.CkRepository.property.repositoryArn"></a>

```typescript
public readonly repositoryArn: string;
```

- *Type:* string

The ARN of the repository.

---

##### `repositoryName`<sup>Required</sup> <a name="repositoryName" id="@cloudkitect/components.CkRepository.property.repositoryName"></a>

```typescript
public readonly repositoryName: string;
```

- *Type:* string

The name of the repository.

---

##### `repositoryUri`<sup>Required</sup> <a name="repositoryUri" id="@cloudkitect/components.CkRepository.property.repositoryUri"></a>

```typescript
public readonly repositoryUri: string;
```

- *Type:* string

The URI of this repository (represents the latest image):.

ACCOUNT.dkr.ecr.REGION.amazonaws.com/REPOSITORY

---


### CkStack <a name="CkStack" id="@cloudkitect/components.CkStack"></a>

CloudKitect stack component that is environment aware and provides several methods to find out the account type it is deployed so that other constructs can make decisions based on environments.

### Examples
Default Usage
```ts
const stackProps = {
    ckApplication: 'ExampleApp',
    ckCompany: 'CloudKitect',
    ckAccountType: AccountType.UAT,
    env: {account: "ACCOUNT_ID", region: "us-east-1"}
}
new CkStack(app, "StackId", {
    ...stackProps
});
```

### Compliance
It addresses the following compliance requirements
* 1. Cloudformation stacks in use for defining infrastructure
   >  - Risk Level: Medium
   >  - Compliance: APRA, MAS
   >  - Well Architected Pillar: Reliability, Operational Excellence

#### Initializers <a name="Initializers" id="@cloudkitect/components.CkStack.Initializer"></a>

```typescript
import { CkStack } from '@cloudkitect/components'

new CkStack(scope: Construct, id: string, props: CkStackProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cloudkitect/components.CkStack.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@cloudkitect/components.CkStack.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cloudkitect/components.CkStack.Initializer.parameter.props">props</a></code> | <code><a href="#@cloudkitect/components.CkStackProps">CkStackProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cloudkitect/components.CkStack.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@cloudkitect/components.CkStack.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@cloudkitect/components.CkStack.Initializer.parameter.props"></a>

- *Type:* <a href="#@cloudkitect/components.CkStackProps">CkStackProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cloudkitect/components.CkStack.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cloudkitect/components.CkStack.addDependency">addDependency</a></code> | Add a dependency between this stack and another stack. |
| <code><a href="#@cloudkitect/components.CkStack.addMetadata">addMetadata</a></code> | Adds an arbitary key-value pair, with information you want to record about the stack. |
| <code><a href="#@cloudkitect/components.CkStack.addTransform">addTransform</a></code> | Add a Transform to this stack. A Transform is a macro that AWS CloudFormation uses to process your template. |
| <code><a href="#@cloudkitect/components.CkStack.exportStringListValue">exportStringListValue</a></code> | Create a CloudFormation Export for a string list value. |
| <code><a href="#@cloudkitect/components.CkStack.exportValue">exportValue</a></code> | Create a CloudFormation Export for a string value. |
| <code><a href="#@cloudkitect/components.CkStack.formatArn">formatArn</a></code> | Creates an ARN from components. |
| <code><a href="#@cloudkitect/components.CkStack.getLogicalId">getLogicalId</a></code> | Allocates a stack-unique CloudFormation-compatible logical identity for a specific resource. |
| <code><a href="#@cloudkitect/components.CkStack.regionalFact">regionalFact</a></code> | Look up a fact value for the given fact for the region of this stack. |
| <code><a href="#@cloudkitect/components.CkStack.renameLogicalId">renameLogicalId</a></code> | Rename a generated logical identities. |
| <code><a href="#@cloudkitect/components.CkStack.reportMissingContextKey">reportMissingContextKey</a></code> | Indicate that a context key was expected. |
| <code><a href="#@cloudkitect/components.CkStack.resolve">resolve</a></code> | Resolve a tokenized value in the context of the current stack. |
| <code><a href="#@cloudkitect/components.CkStack.splitArn">splitArn</a></code> | Splits the provided ARN into its components. |
| <code><a href="#@cloudkitect/components.CkStack.toJsonString">toJsonString</a></code> | Convert an object, potentially containing tokens, to a JSON string. |
| <code><a href="#@cloudkitect/components.CkStack.toYamlString">toYamlString</a></code> | Convert an object, potentially containing tokens, to a YAML string. |
| <code><a href="#@cloudkitect/components.CkStack.accountType">accountType</a></code> | Account type where the stack is deployed. |
| <code><a href="#@cloudkitect/components.CkStack.applicationName">applicationName</a></code> | Application name. |
| <code><a href="#@cloudkitect/components.CkStack.company">company</a></code> | Company name. |
| <code><a href="#@cloudkitect/components.CkStack.isDevelopment">isDevelopment</a></code> | Find out if the stack is running in development account. |
| <code><a href="#@cloudkitect/components.CkStack.isDevelopmentLike">isDevelopmentLike</a></code> | Find out if the stack is running in a development like environment such as dev or test. |
| <code><a href="#@cloudkitect/components.CkStack.isNonProduction">isNonProduction</a></code> | Find out if the stack is running in a non production account such as dev, test, uat. |
| <code><a href="#@cloudkitect/components.CkStack.isProduction">isProduction</a></code> | Find out if the stack is running in production account. |
| <code><a href="#@cloudkitect/components.CkStack.isProductionLike">isProductionLike</a></code> | Find out if the stack is running in a production like environment such as uat and prod. |
| <code><a href="#@cloudkitect/components.CkStack.isTest">isTest</a></code> | Find out if the stack is running in test account. |
| <code><a href="#@cloudkitect/components.CkStack.isUAT">isUAT</a></code> | Find out if the stack is running in uat account. |
| <code><a href="#@cloudkitect/components.CkStack.removalPolicy">removalPolicy</a></code> | Removal policy is based on stack termination protection. |

---

##### `toString` <a name="toString" id="@cloudkitect/components.CkStack.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addDependency` <a name="addDependency" id="@cloudkitect/components.CkStack.addDependency"></a>

```typescript
public addDependency(target: Stack, reason?: string): void
```

Add a dependency between this stack and another stack.

This can be used to define dependencies between any two stacks within an
app, and also supports nested stacks.

###### `target`<sup>Required</sup> <a name="target" id="@cloudkitect/components.CkStack.addDependency.parameter.target"></a>

- *Type:* aws-cdk-lib.Stack

---

###### `reason`<sup>Optional</sup> <a name="reason" id="@cloudkitect/components.CkStack.addDependency.parameter.reason"></a>

- *Type:* string

---

##### `addMetadata` <a name="addMetadata" id="@cloudkitect/components.CkStack.addMetadata"></a>

```typescript
public addMetadata(key: string, value: any): void
```

Adds an arbitary key-value pair, with information you want to record about the stack.

These get translated to the Metadata section of the generated template.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html)

###### `key`<sup>Required</sup> <a name="key" id="@cloudkitect/components.CkStack.addMetadata.parameter.key"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cloudkitect/components.CkStack.addMetadata.parameter.value"></a>

- *Type:* any

---

##### `addTransform` <a name="addTransform" id="@cloudkitect/components.CkStack.addTransform"></a>

```typescript
public addTransform(transform: string): void
```

Add a Transform to this stack. A Transform is a macro that AWS CloudFormation uses to process your template.

Duplicate values are removed when stack is synthesized.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-section-structure.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-section-structure.html)

*Example*

```typescript
declare const stack: Stack;

stack.addTransform('AWS::Serverless-2016-10-31')
```


###### `transform`<sup>Required</sup> <a name="transform" id="@cloudkitect/components.CkStack.addTransform.parameter.transform"></a>

- *Type:* string

The transform to add.

---

##### `exportStringListValue` <a name="exportStringListValue" id="@cloudkitect/components.CkStack.exportStringListValue"></a>

```typescript
public exportStringListValue(exportedValue: any, options?: ExportValueOptions): string[]
```

Create a CloudFormation Export for a string list value.

Returns a string list representing the corresponding `Fn.importValue()`
expression for this Export. The export expression is automatically wrapped with an
`Fn::Join` and the import value with an `Fn::Split`, since CloudFormation can only
export strings. You can control the name for the export by passing the `name` option.

If you don't supply a value for `name`, the value you're exporting must be
a Resource attribute (for example: `bucket.bucketName`) and it will be
given the same name as the automatic cross-stack reference that would be created
if you used the attribute in another Stack.

One of the uses for this method is to *remove* the relationship between
two Stacks established by automatic cross-stack references. It will
temporarily ensure that the CloudFormation Export still exists while you
remove the reference from the consuming stack. After that, you can remove
the resource and the manual export.

See `exportValue` for an example of this process.

###### `exportedValue`<sup>Required</sup> <a name="exportedValue" id="@cloudkitect/components.CkStack.exportStringListValue.parameter.exportedValue"></a>

- *Type:* any

---

###### `options`<sup>Optional</sup> <a name="options" id="@cloudkitect/components.CkStack.exportStringListValue.parameter.options"></a>

- *Type:* aws-cdk-lib.ExportValueOptions

---

##### `exportValue` <a name="exportValue" id="@cloudkitect/components.CkStack.exportValue"></a>

```typescript
public exportValue(exportedValue: any, options?: ExportValueOptions): string
```

Create a CloudFormation Export for a string value.

Returns a string representing the corresponding `Fn.importValue()`
expression for this Export. You can control the name for the export by
passing the `name` option.

If you don't supply a value for `name`, the value you're exporting must be
a Resource attribute (for example: `bucket.bucketName`) and it will be
given the same name as the automatic cross-stack reference that would be created
if you used the attribute in another Stack.

One of the uses for this method is to *remove* the relationship between
two Stacks established by automatic cross-stack references. It will
temporarily ensure that the CloudFormation Export still exists while you
remove the reference from the consuming stack. After that, you can remove
the resource and the manual export.

## Example

Here is how the process works. Let's say there are two stacks,
`producerStack` and `consumerStack`, and `producerStack` has a bucket
called `bucket`, which is referenced by `consumerStack` (perhaps because
an AWS Lambda Function writes into it, or something like that).

It is not safe to remove `producerStack.bucket` because as the bucket is being
deleted, `consumerStack` might still be using it.

Instead, the process takes two deployments:

### Deployment 1: break the relationship

- Make sure `consumerStack` no longer references `bucket.bucketName` (maybe the consumer
  stack now uses its own bucket, or it writes to an AWS DynamoDB table, or maybe you just
  remove the Lambda Function altogether).
- In the `ProducerStack` class, call `this.exportValue(this.bucket.bucketName)`. This
  will make sure the CloudFormation Export continues to exist while the relationship
  between the two stacks is being broken.
- Deploy (this will effectively only change the `consumerStack`, but it's safe to deploy both).

### Deployment 2: remove the bucket resource

- You are now free to remove the `bucket` resource from `producerStack`.
- Don't forget to remove the `exportValue()` call as well.
- Deploy again (this time only the `producerStack` will be changed -- the bucket will be deleted).

###### `exportedValue`<sup>Required</sup> <a name="exportedValue" id="@cloudkitect/components.CkStack.exportValue.parameter.exportedValue"></a>

- *Type:* any

---

###### `options`<sup>Optional</sup> <a name="options" id="@cloudkitect/components.CkStack.exportValue.parameter.options"></a>

- *Type:* aws-cdk-lib.ExportValueOptions

---

##### `formatArn` <a name="formatArn" id="@cloudkitect/components.CkStack.formatArn"></a>

```typescript
public formatArn(components: ArnComponents): string
```

Creates an ARN from components.

If `partition`, `region` or `account` are not specified, the stack's
partition, region and account will be used.

If any component is the empty string, an empty string will be inserted
into the generated ARN at the location that component corresponds to.

The ARN will be formatted as follows:

  arn:{partition}:{service}:{region}:{account}:{resource}{sep}{resource-name}

The required ARN pieces that are omitted will be taken from the stack that
the 'scope' is attached to. If all ARN pieces are supplied, the supplied scope
can be 'undefined'.

###### `components`<sup>Required</sup> <a name="components" id="@cloudkitect/components.CkStack.formatArn.parameter.components"></a>

- *Type:* aws-cdk-lib.ArnComponents

---

##### `getLogicalId` <a name="getLogicalId" id="@cloudkitect/components.CkStack.getLogicalId"></a>

```typescript
public getLogicalId(element: CfnElement): string
```

Allocates a stack-unique CloudFormation-compatible logical identity for a specific resource.

This method is called when a `CfnElement` is created and used to render the
initial logical identity of resources. Logical ID renames are applied at
this stage.

This method uses the protected method `allocateLogicalId` to render the
logical ID for an element. To modify the naming scheme, extend the `Stack`
class and override this method.

###### `element`<sup>Required</sup> <a name="element" id="@cloudkitect/components.CkStack.getLogicalId.parameter.element"></a>

- *Type:* aws-cdk-lib.CfnElement

The CloudFormation element for which a logical identity is needed.

---

##### `regionalFact` <a name="regionalFact" id="@cloudkitect/components.CkStack.regionalFact"></a>

```typescript
public regionalFact(factName: string, defaultValue?: string): string
```

Look up a fact value for the given fact for the region of this stack.

Will return a definite value only if the region of the current stack is resolved.
If not, a lookup map will be added to the stack and the lookup will be done at
CDK deployment time.

What regions will be included in the lookup map is controlled by the
`@aws-cdk/core:target-partitions` context value: it must be set to a list
of partitions, and only regions from the given partitions will be included.
If no such context key is set, all regions will be included.

This function is intended to be used by construct library authors. Application
builders can rely on the abstractions offered by construct libraries and do
not have to worry about regional facts.

If `defaultValue` is not given, it is an error if the fact is unknown for
the given region.

###### `factName`<sup>Required</sup> <a name="factName" id="@cloudkitect/components.CkStack.regionalFact.parameter.factName"></a>

- *Type:* string

---

###### `defaultValue`<sup>Optional</sup> <a name="defaultValue" id="@cloudkitect/components.CkStack.regionalFact.parameter.defaultValue"></a>

- *Type:* string

---

##### `renameLogicalId` <a name="renameLogicalId" id="@cloudkitect/components.CkStack.renameLogicalId"></a>

```typescript
public renameLogicalId(oldId: string, newId: string): void
```

Rename a generated logical identities.

To modify the naming scheme strategy, extend the `Stack` class and
override the `allocateLogicalId` method.

###### `oldId`<sup>Required</sup> <a name="oldId" id="@cloudkitect/components.CkStack.renameLogicalId.parameter.oldId"></a>

- *Type:* string

---

###### `newId`<sup>Required</sup> <a name="newId" id="@cloudkitect/components.CkStack.renameLogicalId.parameter.newId"></a>

- *Type:* string

---

##### `reportMissingContextKey` <a name="reportMissingContextKey" id="@cloudkitect/components.CkStack.reportMissingContextKey"></a>

```typescript
public reportMissingContextKey(report: MissingContext): void
```

Indicate that a context key was expected.

Contains instructions which will be emitted into the cloud assembly on how
the key should be supplied.

###### `report`<sup>Required</sup> <a name="report" id="@cloudkitect/components.CkStack.reportMissingContextKey.parameter.report"></a>

- *Type:* aws-cdk-lib.cloud_assembly_schema.MissingContext

The set of parameters needed to obtain the context.

---

##### `resolve` <a name="resolve" id="@cloudkitect/components.CkStack.resolve"></a>

```typescript
public resolve(obj: any): any
```

Resolve a tokenized value in the context of the current stack.

###### `obj`<sup>Required</sup> <a name="obj" id="@cloudkitect/components.CkStack.resolve.parameter.obj"></a>

- *Type:* any

---

##### `splitArn` <a name="splitArn" id="@cloudkitect/components.CkStack.splitArn"></a>

```typescript
public splitArn(arn: string, arnFormat: ArnFormat): ArnComponents
```

Splits the provided ARN into its components.

Works both if 'arn' is a string like 'arn:aws:s3:::bucket',
and a Token representing a dynamic CloudFormation expression
(in which case the returned components will also be dynamic CloudFormation expressions,
encoded as Tokens).

###### `arn`<sup>Required</sup> <a name="arn" id="@cloudkitect/components.CkStack.splitArn.parameter.arn"></a>

- *Type:* string

the ARN to split into its components.

---

###### `arnFormat`<sup>Required</sup> <a name="arnFormat" id="@cloudkitect/components.CkStack.splitArn.parameter.arnFormat"></a>

- *Type:* aws-cdk-lib.ArnFormat

the expected format of 'arn' - depends on what format the service 'arn' represents uses.

---

##### `toJsonString` <a name="toJsonString" id="@cloudkitect/components.CkStack.toJsonString"></a>

```typescript
public toJsonString(obj: any, space?: number): string
```

Convert an object, potentially containing tokens, to a JSON string.

###### `obj`<sup>Required</sup> <a name="obj" id="@cloudkitect/components.CkStack.toJsonString.parameter.obj"></a>

- *Type:* any

---

###### `space`<sup>Optional</sup> <a name="space" id="@cloudkitect/components.CkStack.toJsonString.parameter.space"></a>

- *Type:* number

---

##### `toYamlString` <a name="toYamlString" id="@cloudkitect/components.CkStack.toYamlString"></a>

```typescript
public toYamlString(obj: any): string
```

Convert an object, potentially containing tokens, to a YAML string.

###### `obj`<sup>Required</sup> <a name="obj" id="@cloudkitect/components.CkStack.toYamlString.parameter.obj"></a>

- *Type:* any

---

##### `accountType` <a name="accountType" id="@cloudkitect/components.CkStack.accountType"></a>

```typescript
public accountType(): CkAccountType
```

Account type where the stack is deployed.

##### `applicationName` <a name="applicationName" id="@cloudkitect/components.CkStack.applicationName"></a>

```typescript
public applicationName(): string
```

Application name.

##### `company` <a name="company" id="@cloudkitect/components.CkStack.company"></a>

```typescript
public company(): string
```

Company name.

##### `isDevelopment` <a name="isDevelopment" id="@cloudkitect/components.CkStack.isDevelopment"></a>

```typescript
public isDevelopment(): boolean
```

Find out if the stack is running in development account.

##### `isDevelopmentLike` <a name="isDevelopmentLike" id="@cloudkitect/components.CkStack.isDevelopmentLike"></a>

```typescript
public isDevelopmentLike(): boolean
```

Find out if the stack is running in a development like environment such as dev or test.

##### `isNonProduction` <a name="isNonProduction" id="@cloudkitect/components.CkStack.isNonProduction"></a>

```typescript
public isNonProduction(): boolean
```

Find out if the stack is running in a non production account such as dev, test, uat.

##### `isProduction` <a name="isProduction" id="@cloudkitect/components.CkStack.isProduction"></a>

```typescript
public isProduction(): boolean
```

Find out if the stack is running in production account.

##### `isProductionLike` <a name="isProductionLike" id="@cloudkitect/components.CkStack.isProductionLike"></a>

```typescript
public isProductionLike(): boolean
```

Find out if the stack is running in a production like environment such as uat and prod.

##### `isTest` <a name="isTest" id="@cloudkitect/components.CkStack.isTest"></a>

```typescript
public isTest(): boolean
```

Find out if the stack is running in test account.

##### `isUAT` <a name="isUAT" id="@cloudkitect/components.CkStack.isUAT"></a>

```typescript
public isUAT(): boolean
```

Find out if the stack is running in uat account.

##### `removalPolicy` <a name="removalPolicy" id="@cloudkitect/components.CkStack.removalPolicy"></a>

```typescript
public removalPolicy(): RemovalPolicy
```

Removal policy is based on stack termination protection.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cloudkitect/components.CkStack.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cloudkitect/components.CkStack.isStack">isStack</a></code> | Return whether the given object is a Stack. |
| <code><a href="#@cloudkitect/components.CkStack.of">of</a></code> | Looks up the first stack scope in which `construct` is defined. |
| <code><a href="#@cloudkitect/components.CkStack.createStackId">createStackId</a></code> | *No description.* |
| <code><a href="#@cloudkitect/components.CkStack.findStackOf">findStackOf</a></code> | Get stack where the construct is deployed. |

---

##### `isConstruct` <a name="isConstruct" id="@cloudkitect/components.CkStack.isConstruct"></a>

```typescript
import { CkStack } from '@cloudkitect/components'

CkStack.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cloudkitect/components.CkStack.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isStack` <a name="isStack" id="@cloudkitect/components.CkStack.isStack"></a>

```typescript
import { CkStack } from '@cloudkitect/components'

CkStack.isStack(x: any)
```

Return whether the given object is a Stack.

We do attribute detection since we can't reliably use 'instanceof'.

###### `x`<sup>Required</sup> <a name="x" id="@cloudkitect/components.CkStack.isStack.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="@cloudkitect/components.CkStack.of"></a>

```typescript
import { CkStack } from '@cloudkitect/components'

CkStack.of(construct: IConstruct)
```

Looks up the first stack scope in which `construct` is defined.

Fails if there is no stack up the tree.

###### `construct`<sup>Required</sup> <a name="construct" id="@cloudkitect/components.CkStack.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

The construct to start the search from.

---

##### `createStackId` <a name="createStackId" id="@cloudkitect/components.CkStack.createStackId"></a>

```typescript
import { CkStack } from '@cloudkitect/components'

CkStack.createStackId(id: string, prefix?: string)
```

###### `id`<sup>Required</sup> <a name="id" id="@cloudkitect/components.CkStack.createStackId.parameter.id"></a>

- *Type:* string

---

###### `prefix`<sup>Optional</sup> <a name="prefix" id="@cloudkitect/components.CkStack.createStackId.parameter.prefix"></a>

- *Type:* string

---

##### `findStackOf` <a name="findStackOf" id="@cloudkitect/components.CkStack.findStackOf"></a>

```typescript
import { CkStack } from '@cloudkitect/components'

CkStack.findStackOf(construct: Construct)
```

Get stack where the construct is deployed.

###### `construct`<sup>Required</sup> <a name="construct" id="@cloudkitect/components.CkStack.findStackOf.parameter.construct"></a>

- *Type:* constructs.Construct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cloudkitect/components.CkStack.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cloudkitect/components.CkStack.property.account">account</a></code> | <code>string</code> | The AWS account into which this stack will be deployed. |
| <code><a href="#@cloudkitect/components.CkStack.property.artifactId">artifactId</a></code> | <code>string</code> | The ID of the cloud assembly artifact for this stack. |
| <code><a href="#@cloudkitect/components.CkStack.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | Returns the list of AZs that are available in the AWS environment (account/region) associated with this stack. |
| <code><a href="#@cloudkitect/components.CkStack.property.bundlingRequired">bundlingRequired</a></code> | <code>boolean</code> | Indicates whether the stack requires bundling or not. |
| <code><a href="#@cloudkitect/components.CkStack.property.dependencies">dependencies</a></code> | <code>aws-cdk-lib.Stack[]</code> | Return the stacks this stack depends on. |
| <code><a href="#@cloudkitect/components.CkStack.property.environment">environment</a></code> | <code>string</code> | The environment coordinates in which this stack is deployed. |
| <code><a href="#@cloudkitect/components.CkStack.property.nested">nested</a></code> | <code>boolean</code> | Indicates if this is a nested stack, in which case `parentStack` will include a reference to it's parent. |
| <code><a href="#@cloudkitect/components.CkStack.property.notificationArns">notificationArns</a></code> | <code>string[]</code> | Returns the list of notification Amazon Resource Names (ARNs) for the current stack. |
| <code><a href="#@cloudkitect/components.CkStack.property.partition">partition</a></code> | <code>string</code> | The partition in which this stack is defined. |
| <code><a href="#@cloudkitect/components.CkStack.property.region">region</a></code> | <code>string</code> | The AWS region into which this stack will be deployed (e.g. `us-west-2`). |
| <code><a href="#@cloudkitect/components.CkStack.property.stackId">stackId</a></code> | <code>string</code> | The ID of the stack. |
| <code><a href="#@cloudkitect/components.CkStack.property.stackName">stackName</a></code> | <code>string</code> | The concrete CloudFormation physical stack name. |
| <code><a href="#@cloudkitect/components.CkStack.property.synthesizer">synthesizer</a></code> | <code>aws-cdk-lib.IStackSynthesizer</code> | Synthesis method for this stack. |
| <code><a href="#@cloudkitect/components.CkStack.property.tags">tags</a></code> | <code>aws-cdk-lib.TagManager</code> | Tags to be applied to the stack. |
| <code><a href="#@cloudkitect/components.CkStack.property.templateFile">templateFile</a></code> | <code>string</code> | The name of the CloudFormation template file emitted to the output directory during synthesis. |
| <code><a href="#@cloudkitect/components.CkStack.property.templateOptions">templateOptions</a></code> | <code>aws-cdk-lib.ITemplateOptions</code> | Options for CloudFormation template (like version, transform, description). |
| <code><a href="#@cloudkitect/components.CkStack.property.urlSuffix">urlSuffix</a></code> | <code>string</code> | The Amazon domain suffix for the region in which this stack is defined. |
| <code><a href="#@cloudkitect/components.CkStack.property.nestedStackParent">nestedStackParent</a></code> | <code>aws-cdk-lib.Stack</code> | If this is a nested stack, returns it's parent stack. |
| <code><a href="#@cloudkitect/components.CkStack.property.nestedStackResource">nestedStackResource</a></code> | <code>aws-cdk-lib.CfnResource</code> | If this is a nested stack, this represents its `AWS::CloudFormation::Stack` resource. |
| <code><a href="#@cloudkitect/components.CkStack.property.terminationProtection">terminationProtection</a></code> | <code>boolean</code> | Whether termination protection is enabled for this stack. |
| <code><a href="#@cloudkitect/components.CkStack.property.removalPolicyOverride">removalPolicyOverride</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cloudkitect/components.CkStack.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `account`<sup>Required</sup> <a name="account" id="@cloudkitect/components.CkStack.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

The AWS account into which this stack will be deployed.

This value is resolved according to the following rules:

1. The value provided to `env.account` when the stack is defined. This can
   either be a concrete account (e.g. `585695031111`) or the
   `Aws.ACCOUNT_ID` token.
3. `Aws.ACCOUNT_ID`, which represents the CloudFormation intrinsic reference
   `{ "Ref": "AWS::AccountId" }` encoded as a string token.

Preferably, you should use the return value as an opaque string and not
attempt to parse it to implement your logic. If you do, you must first
check that it is a concrete value an not an unresolved token. If this
value is an unresolved token (`Token.isUnresolved(stack.account)` returns
`true`), this implies that the user wishes that this stack will synthesize
into a **account-agnostic template**. In this case, your code should either
fail (throw an error, emit a synth error using `Annotations.of(construct).addError()`) or
implement some other region-agnostic behavior.

---

##### `artifactId`<sup>Required</sup> <a name="artifactId" id="@cloudkitect/components.CkStack.property.artifactId"></a>

```typescript
public readonly artifactId: string;
```

- *Type:* string

The ID of the cloud assembly artifact for this stack.

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="@cloudkitect/components.CkStack.property.availabilityZones"></a>

```typescript
public readonly availabilityZones: string[];
```

- *Type:* string[]

Returns the list of AZs that are available in the AWS environment (account/region) associated with this stack.

If the stack is environment-agnostic (either account and/or region are
tokens), this property will return an array with 2 tokens that will resolve
at deploy-time to the first two availability zones returned from CloudFormation's
`Fn::GetAZs` intrinsic function.

If they are not available in the context, returns a set of dummy values and
reports them as missing, and let the CLI resolve them by calling EC2
`DescribeAvailabilityZones` on the target environment.

To specify a different strategy for selecting availability zones override this method.

---

##### `bundlingRequired`<sup>Required</sup> <a name="bundlingRequired" id="@cloudkitect/components.CkStack.property.bundlingRequired"></a>

```typescript
public readonly bundlingRequired: boolean;
```

- *Type:* boolean

Indicates whether the stack requires bundling or not.

---

##### `dependencies`<sup>Required</sup> <a name="dependencies" id="@cloudkitect/components.CkStack.property.dependencies"></a>

```typescript
public readonly dependencies: Stack[];
```

- *Type:* aws-cdk-lib.Stack[]

Return the stacks this stack depends on.

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cloudkitect/components.CkStack.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

The environment coordinates in which this stack is deployed.

In the form
`aws://account/region`. Use `stack.account` and `stack.region` to obtain
the specific values, no need to parse.

You can use this value to determine if two stacks are targeting the same
environment.

If either `stack.account` or `stack.region` are not concrete values (e.g.
`Aws.ACCOUNT_ID` or `Aws.REGION`) the special strings `unknown-account` and/or
`unknown-region` will be used respectively to indicate this stack is
region/account-agnostic.

---

##### `nested`<sup>Required</sup> <a name="nested" id="@cloudkitect/components.CkStack.property.nested"></a>

```typescript
public readonly nested: boolean;
```

- *Type:* boolean

Indicates if this is a nested stack, in which case `parentStack` will include a reference to it's parent.

---

##### `notificationArns`<sup>Required</sup> <a name="notificationArns" id="@cloudkitect/components.CkStack.property.notificationArns"></a>

```typescript
public readonly notificationArns: string[];
```

- *Type:* string[]

Returns the list of notification Amazon Resource Names (ARNs) for the current stack.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cloudkitect/components.CkStack.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

The partition in which this stack is defined.

---

##### `region`<sup>Required</sup> <a name="region" id="@cloudkitect/components.CkStack.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The AWS region into which this stack will be deployed (e.g. `us-west-2`).

This value is resolved according to the following rules:

1. The value provided to `env.region` when the stack is defined. This can
   either be a concrete region (e.g. `us-west-2`) or the `Aws.REGION`
   token.
3. `Aws.REGION`, which is represents the CloudFormation intrinsic reference
   `{ "Ref": "AWS::Region" }` encoded as a string token.

Preferably, you should use the return value as an opaque string and not
attempt to parse it to implement your logic. If you do, you must first
check that it is a concrete value an not an unresolved token. If this
value is an unresolved token (`Token.isUnresolved(stack.region)` returns
`true`), this implies that the user wishes that this stack will synthesize
into a **region-agnostic template**. In this case, your code should either
fail (throw an error, emit a synth error using `Annotations.of(construct).addError()`) or
implement some other region-agnostic behavior.

---

##### `stackId`<sup>Required</sup> <a name="stackId" id="@cloudkitect/components.CkStack.property.stackId"></a>

```typescript
public readonly stackId: string;
```

- *Type:* string

The ID of the stack.

---

*Example*

```typescript
// After resolving, looks like
'arn:aws:cloudformation:us-west-2:123456789012:stack/teststack/51af3dc0-da77-11e4-872e-1234567db123'
```


##### `stackName`<sup>Required</sup> <a name="stackName" id="@cloudkitect/components.CkStack.property.stackName"></a>

```typescript
public readonly stackName: string;
```

- *Type:* string

The concrete CloudFormation physical stack name.

This is either the name defined explicitly in the `stackName` prop or
allocated based on the stack's location in the construct tree. Stacks that
are directly defined under the app use their construct `id` as their stack
name. Stacks that are defined deeper within the tree will use a hashed naming
scheme based on the construct path to ensure uniqueness.

If you wish to obtain the deploy-time AWS::StackName intrinsic,
you can use `Aws.STACK_NAME` directly.

---

##### `synthesizer`<sup>Required</sup> <a name="synthesizer" id="@cloudkitect/components.CkStack.property.synthesizer"></a>

```typescript
public readonly synthesizer: IStackSynthesizer;
```

- *Type:* aws-cdk-lib.IStackSynthesizer

Synthesis method for this stack.

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cloudkitect/components.CkStack.property.tags"></a>

```typescript
public readonly tags: TagManager;
```

- *Type:* aws-cdk-lib.TagManager

Tags to be applied to the stack.

---

##### `templateFile`<sup>Required</sup> <a name="templateFile" id="@cloudkitect/components.CkStack.property.templateFile"></a>

```typescript
public readonly templateFile: string;
```

- *Type:* string

The name of the CloudFormation template file emitted to the output directory during synthesis.

Example value: `MyStack.template.json`

---

##### `templateOptions`<sup>Required</sup> <a name="templateOptions" id="@cloudkitect/components.CkStack.property.templateOptions"></a>

```typescript
public readonly templateOptions: ITemplateOptions;
```

- *Type:* aws-cdk-lib.ITemplateOptions

Options for CloudFormation template (like version, transform, description).

---

##### `urlSuffix`<sup>Required</sup> <a name="urlSuffix" id="@cloudkitect/components.CkStack.property.urlSuffix"></a>

```typescript
public readonly urlSuffix: string;
```

- *Type:* string

The Amazon domain suffix for the region in which this stack is defined.

---

##### `nestedStackParent`<sup>Optional</sup> <a name="nestedStackParent" id="@cloudkitect/components.CkStack.property.nestedStackParent"></a>

```typescript
public readonly nestedStackParent: Stack;
```

- *Type:* aws-cdk-lib.Stack

If this is a nested stack, returns it's parent stack.

---

##### `nestedStackResource`<sup>Optional</sup> <a name="nestedStackResource" id="@cloudkitect/components.CkStack.property.nestedStackResource"></a>

```typescript
public readonly nestedStackResource: CfnResource;
```

- *Type:* aws-cdk-lib.CfnResource

If this is a nested stack, this represents its `AWS::CloudFormation::Stack` resource.

`undefined` for top-level (non-nested) stacks.

---

##### `terminationProtection`<sup>Required</sup> <a name="terminationProtection" id="@cloudkitect/components.CkStack.property.terminationProtection"></a>

```typescript
public readonly terminationProtection: boolean;
```

- *Type:* boolean

Whether termination protection is enabled for this stack.

---

##### `removalPolicyOverride`<sup>Optional</sup> <a name="removalPolicyOverride" id="@cloudkitect/components.CkStack.property.removalPolicyOverride"></a>

```typescript
public readonly removalPolicyOverride: RemovalPolicy;
```

- *Type:* aws-cdk-lib.RemovalPolicy

---


### CkTableV2 <a name="CkTableV2" id="@cloudkitect/components.CkTableV2"></a>

CloudKitect DynamoDB Table V2 component.

### Default Configuration
* Encryption: Keys managed by AWS in customer account

### Default Alarms
Available only in Enhanced components

### Logging and Monitoring
Available only in Enhanced components

### Backups
Available only in Enhanced components

### Examples
Default Usage
```ts
new CkTableV2(this, "LogicalId", {});
```

Custom Configuration
```ts
new CkTableV2(this, "LogicalId", {
   encryption: TableEncryption.AWS_MANAGED
});
```

### Compliance
It addresses the following compliance requirements
1. DynamoDB point in time recovery
   >  - Risk Level: High
   >  - Compliance: NIST4
   >  - Well Architected Pillar: Reliability
2. Encryption key in customer account
   >  - Risk Level: Medium
   >  - Compliance: NIST4
   >  - Well Architected Pillar: Security

   ![Compliance Check Report](http://cloudkitect.com/wp-content/uploads/2024/01/dynamodb-compliance.png)

#### Initializers <a name="Initializers" id="@cloudkitect/components.CkTableV2.Initializer"></a>

```typescript
import { CkTableV2 } from '@cloudkitect/components'

new CkTableV2(scope: Construct, id: string, props: CkTableV2Props)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cloudkitect/components.CkTableV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@cloudkitect/components.CkTableV2.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cloudkitect/components.CkTableV2.Initializer.parameter.props">props</a></code> | <code><a href="#@cloudkitect/components.CkTableV2Props">CkTableV2Props</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cloudkitect/components.CkTableV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@cloudkitect/components.CkTableV2.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@cloudkitect/components.CkTableV2.Initializer.parameter.props"></a>

- *Type:* <a href="#@cloudkitect/components.CkTableV2Props">CkTableV2Props</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cloudkitect/components.CkTableV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cloudkitect/components.CkTableV2.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#@cloudkitect/components.CkTableV2.grant">grant</a></code> | Adds an IAM policy statement associated with this table to an IAM principal's policy. |
| <code><a href="#@cloudkitect/components.CkTableV2.grantFullAccess">grantFullAccess</a></code> | Permits an IAM principal to all DynamoDB operations ('dynamodb:*') on this table. |
| <code><a href="#@cloudkitect/components.CkTableV2.grantReadData">grantReadData</a></code> | Permits an IAM principal all data read operations on this table. |
| <code><a href="#@cloudkitect/components.CkTableV2.grantReadWriteData">grantReadWriteData</a></code> | Permits an IAM principal to all data read/write operations on this table. |
| <code><a href="#@cloudkitect/components.CkTableV2.grantStream">grantStream</a></code> | Adds an IAM policy statement associated with this table to an IAM principal's policy. |
| <code><a href="#@cloudkitect/components.CkTableV2.grantStreamRead">grantStreamRead</a></code> | Adds an IAM policy statement associated with this table to an IAM principal's policy. |
| <code><a href="#@cloudkitect/components.CkTableV2.grantTableListStreams">grantTableListStreams</a></code> | Permits an IAM principal to list streams attached to this table. |
| <code><a href="#@cloudkitect/components.CkTableV2.grantWriteData">grantWriteData</a></code> | Permits an IAM principal all data write operations on this table. |
| <code><a href="#@cloudkitect/components.CkTableV2.metric">metric</a></code> | Return the given named metric for this table. |
| <code><a href="#@cloudkitect/components.CkTableV2.metricConditionalCheckFailedRequests">metricConditionalCheckFailedRequests</a></code> | Metric for the conditional check failed requests for this table. |
| <code><a href="#@cloudkitect/components.CkTableV2.metricConsumedReadCapacityUnits">metricConsumedReadCapacityUnits</a></code> | Metric for the consumed read capacity units for this table. |
| <code><a href="#@cloudkitect/components.CkTableV2.metricConsumedWriteCapacityUnits">metricConsumedWriteCapacityUnits</a></code> | Metric for the consumed write capacity units for this table. |
| <code><a href="#@cloudkitect/components.CkTableV2.metricSuccessfulRequestLatency">metricSuccessfulRequestLatency</a></code> | Metric for the successful request latency for this table. |
| <code><a href="#@cloudkitect/components.CkTableV2.metricSystemErrors">metricSystemErrors</a></code> | Metric for the system errors this table. |
| <code><a href="#@cloudkitect/components.CkTableV2.metricSystemErrorsForOperations">metricSystemErrorsForOperations</a></code> | Metric for the system errors for this table. This will sum errors across all possible operations. |
| <code><a href="#@cloudkitect/components.CkTableV2.metricThrottledRequests">metricThrottledRequests</a></code> | How many requests are throttled on this table. |
| <code><a href="#@cloudkitect/components.CkTableV2.metricThrottledRequestsForOperation">metricThrottledRequestsForOperation</a></code> | How many requests are throttled on this table for the given operation. |
| <code><a href="#@cloudkitect/components.CkTableV2.metricThrottledRequestsForOperations">metricThrottledRequestsForOperations</a></code> | How many requests are throttled on this table. This will sum errors across all possible operations. |
| <code><a href="#@cloudkitect/components.CkTableV2.metricUserErrors">metricUserErrors</a></code> | Metric for the user errors for this table. |
| <code><a href="#@cloudkitect/components.CkTableV2.addGlobalSecondaryIndex">addGlobalSecondaryIndex</a></code> | Add a global secondary index to the table. |
| <code><a href="#@cloudkitect/components.CkTableV2.addLocalSecondaryIndex">addLocalSecondaryIndex</a></code> | Add a local secondary index to the table. |
| <code><a href="#@cloudkitect/components.CkTableV2.addReplica">addReplica</a></code> | Add a replica table. |
| <code><a href="#@cloudkitect/components.CkTableV2.replica">replica</a></code> | Retrieve a replica table. |

---

##### `toString` <a name="toString" id="@cloudkitect/components.CkTableV2.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@cloudkitect/components.CkTableV2.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="@cloudkitect/components.CkTableV2.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `grant` <a name="grant" id="@cloudkitect/components.CkTableV2.grant"></a>

```typescript
public grant(grantee: IGrantable, actions: string): Grant
```

Adds an IAM policy statement associated with this table to an IAM principal's policy.

Note: If `encryptionKey` is present, appropriate grants to the key needs to be added
separately using the `table.encryptionKey.grant*` methods.

###### `grantee`<sup>Required</sup> <a name="grantee" id="@cloudkitect/components.CkTableV2.grant.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

the principal (no-op if undefined).

---

###### `actions`<sup>Required</sup> <a name="actions" id="@cloudkitect/components.CkTableV2.grant.parameter.actions"></a>

- *Type:* string

the set of actions to allow (i.e., 'dynamodb:PutItem', 'dynamodb:GetItem', etc.).

---

##### `grantFullAccess` <a name="grantFullAccess" id="@cloudkitect/components.CkTableV2.grantFullAccess"></a>

```typescript
public grantFullAccess(grantee: IGrantable): Grant
```

Permits an IAM principal to all DynamoDB operations ('dynamodb:*') on this table.

Note: Appropriate grants will also be added to the customer-managed KMS keys associated with this
table if one was configured.

###### `grantee`<sup>Required</sup> <a name="grantee" id="@cloudkitect/components.CkTableV2.grantFullAccess.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

the principal to grant access to.

---

##### `grantReadData` <a name="grantReadData" id="@cloudkitect/components.CkTableV2.grantReadData"></a>

```typescript
public grantReadData(grantee: IGrantable): Grant
```

Permits an IAM principal all data read operations on this table.

Actions: BatchGetItem, GetRecords, GetShardIterator, Query, GetItem, Scan, DescribeTable.

Note: Appropriate grants will also be added to the customer-managed KMS keys associated with this
table if one was configured.

###### `grantee`<sup>Required</sup> <a name="grantee" id="@cloudkitect/components.CkTableV2.grantReadData.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

the principal to grant access to.

---

##### `grantReadWriteData` <a name="grantReadWriteData" id="@cloudkitect/components.CkTableV2.grantReadWriteData"></a>

```typescript
public grantReadWriteData(grantee: IGrantable): Grant
```

Permits an IAM principal to all data read/write operations on this table.

Actions: BatchGetItem, GetRecords, GetShardIterator, Query, GetItem, Scan, BatchWriteItem, PutItem, UpdateItem,
DeleteItem, DescribeTable.

Note: Appropriate grants will also be added to the customer-managed KMS keys associated with this
table if one was configured.

###### `grantee`<sup>Required</sup> <a name="grantee" id="@cloudkitect/components.CkTableV2.grantReadWriteData.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

the principal to grant access to.

---

##### `grantStream` <a name="grantStream" id="@cloudkitect/components.CkTableV2.grantStream"></a>

```typescript
public grantStream(grantee: IGrantable, actions: string): Grant
```

Adds an IAM policy statement associated with this table to an IAM principal's policy.

Note: If `encryptionKey` is present, appropriate grants to the key needs to be added
separately using the `table.encryptionKey.grant*` methods.

###### `grantee`<sup>Required</sup> <a name="grantee" id="@cloudkitect/components.CkTableV2.grantStream.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

the principal (no-op if undefined).

---

###### `actions`<sup>Required</sup> <a name="actions" id="@cloudkitect/components.CkTableV2.grantStream.parameter.actions"></a>

- *Type:* string

the set of actions to allow (i.e., 'dynamodb:DescribeStream', 'dynamodb:GetRecords', etc.).

---

##### `grantStreamRead` <a name="grantStreamRead" id="@cloudkitect/components.CkTableV2.grantStreamRead"></a>

```typescript
public grantStreamRead(grantee: IGrantable): Grant
```

Adds an IAM policy statement associated with this table to an IAM principal's policy.

Actions: DescribeStream, GetRecords, GetShardIterator, ListStreams.

Note: Appropriate grants will also be added to the customer-managed KMS keys associated with this
table if one was configured.

###### `grantee`<sup>Required</sup> <a name="grantee" id="@cloudkitect/components.CkTableV2.grantStreamRead.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

the principal to grant access to.

---

##### `grantTableListStreams` <a name="grantTableListStreams" id="@cloudkitect/components.CkTableV2.grantTableListStreams"></a>

```typescript
public grantTableListStreams(grantee: IGrantable): Grant
```

Permits an IAM principal to list streams attached to this table.

###### `grantee`<sup>Required</sup> <a name="grantee" id="@cloudkitect/components.CkTableV2.grantTableListStreams.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

the principal to grant access to.

---

##### `grantWriteData` <a name="grantWriteData" id="@cloudkitect/components.CkTableV2.grantWriteData"></a>

```typescript
public grantWriteData(grantee: IGrantable): Grant
```

Permits an IAM principal all data write operations on this table.

Actions: BatchWriteItem, PutItem, UpdateItem, DeleteItem, DescribeTable.

Note: Appropriate grants will also be added to the customer-managed KMS keys associated with this
table if one was configured.

###### `grantee`<sup>Required</sup> <a name="grantee" id="@cloudkitect/components.CkTableV2.grantWriteData.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

the principal to grant access to.

---

##### `metric` <a name="metric" id="@cloudkitect/components.CkTableV2.metric"></a>

```typescript
public metric(metricName: string, props?: MetricOptions): Metric
```

Return the given named metric for this table.

By default, the metric will be calculated as a sum over a period of 5 minutes.
You can customize this by using the `statistic` and `period` properties.

###### `metricName`<sup>Required</sup> <a name="metricName" id="@cloudkitect/components.CkTableV2.metric.parameter.metricName"></a>

- *Type:* string

---

###### `props`<sup>Optional</sup> <a name="props" id="@cloudkitect/components.CkTableV2.metric.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricConditionalCheckFailedRequests` <a name="metricConditionalCheckFailedRequests" id="@cloudkitect/components.CkTableV2.metricConditionalCheckFailedRequests"></a>

```typescript
public metricConditionalCheckFailedRequests(props?: MetricOptions): Metric
```

Metric for the conditional check failed requests for this table.

By default, the metric will be calculated as a sum over a period of 5 minutes.
You can customize this by using the `statistic` and `period` properties.

###### `props`<sup>Optional</sup> <a name="props" id="@cloudkitect/components.CkTableV2.metricConditionalCheckFailedRequests.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricConsumedReadCapacityUnits` <a name="metricConsumedReadCapacityUnits" id="@cloudkitect/components.CkTableV2.metricConsumedReadCapacityUnits"></a>

```typescript
public metricConsumedReadCapacityUnits(props?: MetricOptions): Metric
```

Metric for the consumed read capacity units for this table.

By default, the metric will be calculated as a sum over a period of 5 minutes.
You can customize this by using the `statistic` and `period` properties.

###### `props`<sup>Optional</sup> <a name="props" id="@cloudkitect/components.CkTableV2.metricConsumedReadCapacityUnits.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricConsumedWriteCapacityUnits` <a name="metricConsumedWriteCapacityUnits" id="@cloudkitect/components.CkTableV2.metricConsumedWriteCapacityUnits"></a>

```typescript
public metricConsumedWriteCapacityUnits(props?: MetricOptions): Metric
```

Metric for the consumed write capacity units for this table.

By default, the metric will be calculated as a sum over a period of 5 minutes.
You can customize this by using the `statistic` and `period` properties.

###### `props`<sup>Optional</sup> <a name="props" id="@cloudkitect/components.CkTableV2.metricConsumedWriteCapacityUnits.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricSuccessfulRequestLatency` <a name="metricSuccessfulRequestLatency" id="@cloudkitect/components.CkTableV2.metricSuccessfulRequestLatency"></a>

```typescript
public metricSuccessfulRequestLatency(props?: MetricOptions): Metric
```

Metric for the successful request latency for this table.

By default, the metric will be calculated as an average over a period of 5 minutes.
You can customize this by using the `statistic` and `period` properties.

###### `props`<sup>Optional</sup> <a name="props" id="@cloudkitect/components.CkTableV2.metricSuccessfulRequestLatency.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### ~~`metricSystemErrors`~~ <a name="metricSystemErrors" id="@cloudkitect/components.CkTableV2.metricSystemErrors"></a>

```typescript
public metricSystemErrors(props?: MetricOptions): Metric
```

Metric for the system errors this table.

###### `props`<sup>Optional</sup> <a name="props" id="@cloudkitect/components.CkTableV2.metricSystemErrors.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricSystemErrorsForOperations` <a name="metricSystemErrorsForOperations" id="@cloudkitect/components.CkTableV2.metricSystemErrorsForOperations"></a>

```typescript
public metricSystemErrorsForOperations(props?: SystemErrorsForOperationsMetricOptions): IMetric
```

Metric for the system errors for this table. This will sum errors across all possible operations.

By default, each individual metric will be calculated as a sum over a period of 5 minutes.
You can customize this by using the `statistic` and `period` properties.

###### `props`<sup>Optional</sup> <a name="props" id="@cloudkitect/components.CkTableV2.metricSystemErrorsForOperations.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_dynamodb.SystemErrorsForOperationsMetricOptions

---

##### ~~`metricThrottledRequests`~~ <a name="metricThrottledRequests" id="@cloudkitect/components.CkTableV2.metricThrottledRequests"></a>

```typescript
public metricThrottledRequests(props?: MetricOptions): Metric
```

How many requests are throttled on this table.

By default, each individual metric will be calculated as a sum over a period of 5 minutes.
You can customize this by using the `statistic` and `period` properties.

###### `props`<sup>Optional</sup> <a name="props" id="@cloudkitect/components.CkTableV2.metricThrottledRequests.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricThrottledRequestsForOperation` <a name="metricThrottledRequestsForOperation" id="@cloudkitect/components.CkTableV2.metricThrottledRequestsForOperation"></a>

```typescript
public metricThrottledRequestsForOperation(operation: string, props?: OperationsMetricOptions): IMetric
```

How many requests are throttled on this table for the given operation.

By default, the metric will be calculated as an average over a period of 5 minutes.
You can customize this by using the `statistic` and `period` properties.

###### `operation`<sup>Required</sup> <a name="operation" id="@cloudkitect/components.CkTableV2.metricThrottledRequestsForOperation.parameter.operation"></a>

- *Type:* string

---

###### `props`<sup>Optional</sup> <a name="props" id="@cloudkitect/components.CkTableV2.metricThrottledRequestsForOperation.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_dynamodb.OperationsMetricOptions

---

##### `metricThrottledRequestsForOperations` <a name="metricThrottledRequestsForOperations" id="@cloudkitect/components.CkTableV2.metricThrottledRequestsForOperations"></a>

```typescript
public metricThrottledRequestsForOperations(props?: OperationsMetricOptions): IMetric
```

How many requests are throttled on this table. This will sum errors across all possible operations.

By default, each individual metric will be calculated as a sum over a period of 5 minutes.
You can customize this by using the `statistic` and `period` properties.

###### `props`<sup>Optional</sup> <a name="props" id="@cloudkitect/components.CkTableV2.metricThrottledRequestsForOperations.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_dynamodb.OperationsMetricOptions

---

##### `metricUserErrors` <a name="metricUserErrors" id="@cloudkitect/components.CkTableV2.metricUserErrors"></a>

```typescript
public metricUserErrors(props?: MetricOptions): Metric
```

Metric for the user errors for this table.

Note: This metric reports user errors across all the tables in the account and region the table
resides in.

By default, the metric will be calculated as a sum over a period of 5 minutes.
You can customize this by using the `statistic` and `period` properties.

###### `props`<sup>Optional</sup> <a name="props" id="@cloudkitect/components.CkTableV2.metricUserErrors.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `addGlobalSecondaryIndex` <a name="addGlobalSecondaryIndex" id="@cloudkitect/components.CkTableV2.addGlobalSecondaryIndex"></a>

```typescript
public addGlobalSecondaryIndex(props: GlobalSecondaryIndexPropsV2): void
```

Add a global secondary index to the table.

Note: Global secondary indexes will be inherited by all replica tables.

###### `props`<sup>Required</sup> <a name="props" id="@cloudkitect/components.CkTableV2.addGlobalSecondaryIndex.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_dynamodb.GlobalSecondaryIndexPropsV2

the properties of the global secondary index.

---

##### `addLocalSecondaryIndex` <a name="addLocalSecondaryIndex" id="@cloudkitect/components.CkTableV2.addLocalSecondaryIndex"></a>

```typescript
public addLocalSecondaryIndex(props: LocalSecondaryIndexProps): void
```

Add a local secondary index to the table.

Note: Local secondary indexes will be inherited by all replica tables.

###### `props`<sup>Required</sup> <a name="props" id="@cloudkitect/components.CkTableV2.addLocalSecondaryIndex.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_dynamodb.LocalSecondaryIndexProps

the properties of the local secondary index.

---

##### `addReplica` <a name="addReplica" id="@cloudkitect/components.CkTableV2.addReplica"></a>

```typescript
public addReplica(props: ReplicaTableProps): void
```

Add a replica table.

Note: Adding a replica table will allow you to use your table as a global table.

###### `props`<sup>Required</sup> <a name="props" id="@cloudkitect/components.CkTableV2.addReplica.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_dynamodb.ReplicaTableProps

the properties of the replica table to add.

---

##### `replica` <a name="replica" id="@cloudkitect/components.CkTableV2.replica"></a>

```typescript
public replica(region: string): ITableV2
```

Retrieve a replica table.

Note: Replica tables are not supported in a region agnostic stack.

###### `region`<sup>Required</sup> <a name="region" id="@cloudkitect/components.CkTableV2.replica.parameter.region"></a>

- *Type:* string

the region of the replica table.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cloudkitect/components.CkTableV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cloudkitect/components.CkTableV2.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#@cloudkitect/components.CkTableV2.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#@cloudkitect/components.CkTableV2.fromTableArn">fromTableArn</a></code> | Creates a Table construct that represents an external table via table ARN. |
| <code><a href="#@cloudkitect/components.CkTableV2.fromTableAttributes">fromTableAttributes</a></code> | Creates a Table construct that represents an external table. |
| <code><a href="#@cloudkitect/components.CkTableV2.fromTableName">fromTableName</a></code> | Creates a Table construct that represents an external table via table name. |

---

##### `isConstruct` <a name="isConstruct" id="@cloudkitect/components.CkTableV2.isConstruct"></a>

```typescript
import { CkTableV2 } from '@cloudkitect/components'

CkTableV2.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cloudkitect/components.CkTableV2.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="@cloudkitect/components.CkTableV2.isOwnedResource"></a>

```typescript
import { CkTableV2 } from '@cloudkitect/components'

CkTableV2.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="@cloudkitect/components.CkTableV2.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="@cloudkitect/components.CkTableV2.isResource"></a>

```typescript
import { CkTableV2 } from '@cloudkitect/components'

CkTableV2.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@cloudkitect/components.CkTableV2.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromTableArn` <a name="fromTableArn" id="@cloudkitect/components.CkTableV2.fromTableArn"></a>

```typescript
import { CkTableV2 } from '@cloudkitect/components'

CkTableV2.fromTableArn(scope: Construct, id: string, tableArn: string)
```

Creates a Table construct that represents an external table via table ARN.

###### `scope`<sup>Required</sup> <a name="scope" id="@cloudkitect/components.CkTableV2.fromTableArn.parameter.scope"></a>

- *Type:* constructs.Construct

the parent creating construct (usually `this`).

---

###### `id`<sup>Required</sup> <a name="id" id="@cloudkitect/components.CkTableV2.fromTableArn.parameter.id"></a>

- *Type:* string

the construct's name.

---

###### `tableArn`<sup>Required</sup> <a name="tableArn" id="@cloudkitect/components.CkTableV2.fromTableArn.parameter.tableArn"></a>

- *Type:* string

the table's ARN.

---

##### `fromTableAttributes` <a name="fromTableAttributes" id="@cloudkitect/components.CkTableV2.fromTableAttributes"></a>

```typescript
import { CkTableV2 } from '@cloudkitect/components'

CkTableV2.fromTableAttributes(scope: Construct, id: string, attrs: TableAttributesV2)
```

Creates a Table construct that represents an external table.

###### `scope`<sup>Required</sup> <a name="scope" id="@cloudkitect/components.CkTableV2.fromTableAttributes.parameter.scope"></a>

- *Type:* constructs.Construct

the parent creating construct (usually `this`).

---

###### `id`<sup>Required</sup> <a name="id" id="@cloudkitect/components.CkTableV2.fromTableAttributes.parameter.id"></a>

- *Type:* string

the construct's name.

---

###### `attrs`<sup>Required</sup> <a name="attrs" id="@cloudkitect/components.CkTableV2.fromTableAttributes.parameter.attrs"></a>

- *Type:* aws-cdk-lib.aws_dynamodb.TableAttributesV2

attributes of the table.

---

##### `fromTableName` <a name="fromTableName" id="@cloudkitect/components.CkTableV2.fromTableName"></a>

```typescript
import { CkTableV2 } from '@cloudkitect/components'

CkTableV2.fromTableName(scope: Construct, id: string, tableName: string)
```

Creates a Table construct that represents an external table via table name.

###### `scope`<sup>Required</sup> <a name="scope" id="@cloudkitect/components.CkTableV2.fromTableName.parameter.scope"></a>

- *Type:* constructs.Construct

the parent creating construct (usually `this`).

---

###### `id`<sup>Required</sup> <a name="id" id="@cloudkitect/components.CkTableV2.fromTableName.parameter.id"></a>

- *Type:* string

the construct's name.

---

###### `tableName`<sup>Required</sup> <a name="tableName" id="@cloudkitect/components.CkTableV2.fromTableName.parameter.tableName"></a>

- *Type:* string

the table's name.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cloudkitect/components.CkTableV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cloudkitect/components.CkTableV2.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@cloudkitect/components.CkTableV2.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@cloudkitect/components.CkTableV2.property.tableArn">tableArn</a></code> | <code>string</code> | The ARN of the table. |
| <code><a href="#@cloudkitect/components.CkTableV2.property.tableName">tableName</a></code> | <code>string</code> | The name of the table. |
| <code><a href="#@cloudkitect/components.CkTableV2.property.encryptionKey">encryptionKey</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | The KMS encryption key for the table. |
| <code><a href="#@cloudkitect/components.CkTableV2.property.tableId">tableId</a></code> | <code>string</code> | The ID of the table. |
| <code><a href="#@cloudkitect/components.CkTableV2.property.tableStreamArn">tableStreamArn</a></code> | <code>string</code> | The stream ARN of the table. |

---

##### `node`<sup>Required</sup> <a name="node" id="@cloudkitect/components.CkTableV2.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@cloudkitect/components.CkTableV2.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@cloudkitect/components.CkTableV2.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `tableArn`<sup>Required</sup> <a name="tableArn" id="@cloudkitect/components.CkTableV2.property.tableArn"></a>

```typescript
public readonly tableArn: string;
```

- *Type:* string

The ARN of the table.

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cloudkitect/components.CkTableV2.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

The name of the table.

---

##### `encryptionKey`<sup>Optional</sup> <a name="encryptionKey" id="@cloudkitect/components.CkTableV2.property.encryptionKey"></a>

```typescript
public readonly encryptionKey: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey

The KMS encryption key for the table.

---

##### `tableId`<sup>Optional</sup> <a name="tableId" id="@cloudkitect/components.CkTableV2.property.tableId"></a>

```typescript
public readonly tableId: string;
```

- *Type:* string

The ID of the table.

---

##### `tableStreamArn`<sup>Optional</sup> <a name="tableStreamArn" id="@cloudkitect/components.CkTableV2.property.tableStreamArn"></a>

```typescript
public readonly tableStreamArn: string;
```

- *Type:* string

The stream ARN of the table.

---


### CkVpc <a name="CkVpc" id="@cloudkitect/components.CkVpc"></a>

CloudKitect Virtual Private Cloud - VPC component.

### Default Configuration
Subnets: Public, Private, Isolated,

### Default Alarms
Available only in Enhanced components

### Logging and Monitoring
Available only in Enhanced components

### Examples
Default Usage
```ts
new CkVpc(this, "LogicalId", {});
```

Custom Configuration
```ts
new CkVpc(this, "LogicalId", {
   enableDnsHostnames: false
});
```

### Compliance
It addresses the following compliance requirements
1. Highly available NAT Gateway in use
   >  - Risk Level: Medium
   >  - Compliance: APRA, MAS, NIST4
   >  - Well Architected Pillar: Performance Efficiency
2. Restrict default security groups
   >  - Risk Level: Medium
   >  - Compliance: NIST4
   >  - Well Architected Pillar: Security
3. Create three subnets Public, Private and Isolated
   >  - Risk Level: Medium
   >  - Compliance: NIST4
   >  - Well Architected Pillar: Security

#### Initializers <a name="Initializers" id="@cloudkitect/components.CkVpc.Initializer"></a>

```typescript
import { CkVpc } from '@cloudkitect/components'

new CkVpc(scope: Construct, id: string, props: CkVpcProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cloudkitect/components.CkVpc.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@cloudkitect/components.CkVpc.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cloudkitect/components.CkVpc.Initializer.parameter.props">props</a></code> | <code><a href="#@cloudkitect/components.CkVpcProps">CkVpcProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cloudkitect/components.CkVpc.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@cloudkitect/components.CkVpc.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@cloudkitect/components.CkVpc.Initializer.parameter.props"></a>

- *Type:* <a href="#@cloudkitect/components.CkVpcProps">CkVpcProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cloudkitect/components.CkVpc.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cloudkitect/components.CkVpc.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#@cloudkitect/components.CkVpc.addClientVpnEndpoint">addClientVpnEndpoint</a></code> | Adds a new client VPN endpoint to this VPC. |
| <code><a href="#@cloudkitect/components.CkVpc.addFlowLog">addFlowLog</a></code> | Adds a new flow log to this VPC. |
| <code><a href="#@cloudkitect/components.CkVpc.addGatewayEndpoint">addGatewayEndpoint</a></code> | Adds a new gateway endpoint to this VPC. |
| <code><a href="#@cloudkitect/components.CkVpc.addInterfaceEndpoint">addInterfaceEndpoint</a></code> | Adds a new interface endpoint to this VPC. |
| <code><a href="#@cloudkitect/components.CkVpc.addVpnConnection">addVpnConnection</a></code> | Adds a new VPN connection to this VPC. |
| <code><a href="#@cloudkitect/components.CkVpc.enableVpnGateway">enableVpnGateway</a></code> | Adds a VPN Gateway to this VPC. |
| <code><a href="#@cloudkitect/components.CkVpc.selectSubnets">selectSubnets</a></code> | Returns IDs of selected subnets. |

---

##### `toString` <a name="toString" id="@cloudkitect/components.CkVpc.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@cloudkitect/components.CkVpc.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="@cloudkitect/components.CkVpc.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addClientVpnEndpoint` <a name="addClientVpnEndpoint" id="@cloudkitect/components.CkVpc.addClientVpnEndpoint"></a>

```typescript
public addClientVpnEndpoint(id: string, options: ClientVpnEndpointOptions): ClientVpnEndpoint
```

Adds a new client VPN endpoint to this VPC.

###### `id`<sup>Required</sup> <a name="id" id="@cloudkitect/components.CkVpc.addClientVpnEndpoint.parameter.id"></a>

- *Type:* string

---

###### `options`<sup>Required</sup> <a name="options" id="@cloudkitect/components.CkVpc.addClientVpnEndpoint.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_ec2.ClientVpnEndpointOptions

---

##### `addFlowLog` <a name="addFlowLog" id="@cloudkitect/components.CkVpc.addFlowLog"></a>

```typescript
public addFlowLog(id: string, options?: FlowLogOptions): FlowLog
```

Adds a new flow log to this VPC.

###### `id`<sup>Required</sup> <a name="id" id="@cloudkitect/components.CkVpc.addFlowLog.parameter.id"></a>

- *Type:* string

---

###### `options`<sup>Optional</sup> <a name="options" id="@cloudkitect/components.CkVpc.addFlowLog.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_ec2.FlowLogOptions

---

##### `addGatewayEndpoint` <a name="addGatewayEndpoint" id="@cloudkitect/components.CkVpc.addGatewayEndpoint"></a>

```typescript
public addGatewayEndpoint(id: string, options: GatewayVpcEndpointOptions): GatewayVpcEndpoint
```

Adds a new gateway endpoint to this VPC.

###### `id`<sup>Required</sup> <a name="id" id="@cloudkitect/components.CkVpc.addGatewayEndpoint.parameter.id"></a>

- *Type:* string

---

###### `options`<sup>Required</sup> <a name="options" id="@cloudkitect/components.CkVpc.addGatewayEndpoint.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_ec2.GatewayVpcEndpointOptions

---

##### `addInterfaceEndpoint` <a name="addInterfaceEndpoint" id="@cloudkitect/components.CkVpc.addInterfaceEndpoint"></a>

```typescript
public addInterfaceEndpoint(id: string, options: InterfaceVpcEndpointOptions): InterfaceVpcEndpoint
```

Adds a new interface endpoint to this VPC.

###### `id`<sup>Required</sup> <a name="id" id="@cloudkitect/components.CkVpc.addInterfaceEndpoint.parameter.id"></a>

- *Type:* string

---

###### `options`<sup>Required</sup> <a name="options" id="@cloudkitect/components.CkVpc.addInterfaceEndpoint.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_ec2.InterfaceVpcEndpointOptions

---

##### `addVpnConnection` <a name="addVpnConnection" id="@cloudkitect/components.CkVpc.addVpnConnection"></a>

```typescript
public addVpnConnection(id: string, options: VpnConnectionOptions): VpnConnection
```

Adds a new VPN connection to this VPC.

###### `id`<sup>Required</sup> <a name="id" id="@cloudkitect/components.CkVpc.addVpnConnection.parameter.id"></a>

- *Type:* string

---

###### `options`<sup>Required</sup> <a name="options" id="@cloudkitect/components.CkVpc.addVpnConnection.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_ec2.VpnConnectionOptions

---

##### `enableVpnGateway` <a name="enableVpnGateway" id="@cloudkitect/components.CkVpc.enableVpnGateway"></a>

```typescript
public enableVpnGateway(options: EnableVpnGatewayOptions): void
```

Adds a VPN Gateway to this VPC.

###### `options`<sup>Required</sup> <a name="options" id="@cloudkitect/components.CkVpc.enableVpnGateway.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_ec2.EnableVpnGatewayOptions

---

##### `selectSubnets` <a name="selectSubnets" id="@cloudkitect/components.CkVpc.selectSubnets"></a>

```typescript
public selectSubnets(selection?: SubnetSelection): SelectedSubnets
```

Returns IDs of selected subnets.

###### `selection`<sup>Optional</sup> <a name="selection" id="@cloudkitect/components.CkVpc.selectSubnets.parameter.selection"></a>

- *Type:* aws-cdk-lib.aws_ec2.SubnetSelection

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cloudkitect/components.CkVpc.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cloudkitect/components.CkVpc.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#@cloudkitect/components.CkVpc.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#@cloudkitect/components.CkVpc.fromLookup">fromLookup</a></code> | Import an existing VPC by querying the AWS environment this stack is deployed to. |
| <code><a href="#@cloudkitect/components.CkVpc.fromVpcAttributes">fromVpcAttributes</a></code> | Import a VPC by supplying all attributes directly. |

---

##### `isConstruct` <a name="isConstruct" id="@cloudkitect/components.CkVpc.isConstruct"></a>

```typescript
import { CkVpc } from '@cloudkitect/components'

CkVpc.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cloudkitect/components.CkVpc.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="@cloudkitect/components.CkVpc.isOwnedResource"></a>

```typescript
import { CkVpc } from '@cloudkitect/components'

CkVpc.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="@cloudkitect/components.CkVpc.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="@cloudkitect/components.CkVpc.isResource"></a>

```typescript
import { CkVpc } from '@cloudkitect/components'

CkVpc.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@cloudkitect/components.CkVpc.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromLookup` <a name="fromLookup" id="@cloudkitect/components.CkVpc.fromLookup"></a>

```typescript
import { CkVpc } from '@cloudkitect/components'

CkVpc.fromLookup(scope: Construct, id: string, options: VpcLookupOptions)
```

Import an existing VPC by querying the AWS environment this stack is deployed to.

This function only needs to be used to use VPCs not defined in your CDK
application. If you are looking to share a VPC between stacks, you can
pass the `Vpc` object between stacks and use it as normal.

Calling this method will lead to a lookup when the CDK CLI is executed.
You can therefore not use any values that will only be available at
CloudFormation execution time (i.e., Tokens).

The VPC information will be cached in `cdk.context.json` and the same VPC
will be used on future runs. To refresh the lookup, you will have to
evict the value from the cache using the `cdk context` command. See
https://docs.aws.amazon.com/cdk/latest/guide/context.html for more information.

###### `scope`<sup>Required</sup> <a name="scope" id="@cloudkitect/components.CkVpc.fromLookup.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@cloudkitect/components.CkVpc.fromLookup.parameter.id"></a>

- *Type:* string

---

###### `options`<sup>Required</sup> <a name="options" id="@cloudkitect/components.CkVpc.fromLookup.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_ec2.VpcLookupOptions

---

##### `fromVpcAttributes` <a name="fromVpcAttributes" id="@cloudkitect/components.CkVpc.fromVpcAttributes"></a>

```typescript
import { CkVpc } from '@cloudkitect/components'

CkVpc.fromVpcAttributes(scope: Construct, id: string, attrs: VpcAttributes)
```

Import a VPC by supplying all attributes directly.

NOTE: using `fromVpcAttributes()` with deploy-time parameters (like a `Fn.importValue()` or
`CfnParameter` to represent a list of subnet IDs) sometimes accidentally works. It happens
to work for constructs that need a list of subnets (like `AutoScalingGroup` and `eks.Cluster`)
but it does not work for constructs that need individual subnets (like
`Instance`). See https://github.com/aws/aws-cdk/issues/4118 for more
information.

Prefer to use `Vpc.fromLookup()` instead.

###### `scope`<sup>Required</sup> <a name="scope" id="@cloudkitect/components.CkVpc.fromVpcAttributes.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@cloudkitect/components.CkVpc.fromVpcAttributes.parameter.id"></a>

- *Type:* string

---

###### `attrs`<sup>Required</sup> <a name="attrs" id="@cloudkitect/components.CkVpc.fromVpcAttributes.parameter.attrs"></a>

- *Type:* aws-cdk-lib.aws_ec2.VpcAttributes

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cloudkitect/components.CkVpc.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cloudkitect/components.CkVpc.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@cloudkitect/components.CkVpc.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@cloudkitect/components.CkVpc.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | AZs for this VPC. |
| <code><a href="#@cloudkitect/components.CkVpc.property.dnsHostnamesEnabled">dnsHostnamesEnabled</a></code> | <code>boolean</code> | Indicates if instances launched in this VPC will have public DNS hostnames. |
| <code><a href="#@cloudkitect/components.CkVpc.property.dnsSupportEnabled">dnsSupportEnabled</a></code> | <code>boolean</code> | Indicates if DNS support is enabled for this VPC. |
| <code><a href="#@cloudkitect/components.CkVpc.property.internetConnectivityEstablished">internetConnectivityEstablished</a></code> | <code>constructs.IDependable</code> | Dependencies for internet connectivity. |
| <code><a href="#@cloudkitect/components.CkVpc.property.isolatedSubnets">isolatedSubnets</a></code> | <code>aws-cdk-lib.aws_ec2.ISubnet[]</code> | List of isolated subnets in this VPC. |
| <code><a href="#@cloudkitect/components.CkVpc.property.privateSubnets">privateSubnets</a></code> | <code>aws-cdk-lib.aws_ec2.ISubnet[]</code> | List of private subnets in this VPC. |
| <code><a href="#@cloudkitect/components.CkVpc.property.publicSubnets">publicSubnets</a></code> | <code>aws-cdk-lib.aws_ec2.ISubnet[]</code> | List of public subnets in this VPC. |
| <code><a href="#@cloudkitect/components.CkVpc.property.vpcArn">vpcArn</a></code> | <code>string</code> | Arn of this VPC. |
| <code><a href="#@cloudkitect/components.CkVpc.property.vpcCidrBlock">vpcCidrBlock</a></code> | <code>string</code> | CIDR range for this VPC. |
| <code><a href="#@cloudkitect/components.CkVpc.property.vpcCidrBlockAssociations">vpcCidrBlockAssociations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cloudkitect/components.CkVpc.property.vpcDefaultNetworkAcl">vpcDefaultNetworkAcl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cloudkitect/components.CkVpc.property.vpcDefaultSecurityGroup">vpcDefaultSecurityGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cloudkitect/components.CkVpc.property.vpcId">vpcId</a></code> | <code>string</code> | Identifier for this VPC. |
| <code><a href="#@cloudkitect/components.CkVpc.property.vpcIpv6CidrBlocks">vpcIpv6CidrBlocks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cloudkitect/components.CkVpc.property.internetGatewayId">internetGatewayId</a></code> | <code>string</code> | Internet Gateway for the VPC. |
| <code><a href="#@cloudkitect/components.CkVpc.property.vpnGatewayId">vpnGatewayId</a></code> | <code>string</code> | Returns the id of the VPN Gateway (if enabled). |

---

##### `node`<sup>Required</sup> <a name="node" id="@cloudkitect/components.CkVpc.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@cloudkitect/components.CkVpc.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@cloudkitect/components.CkVpc.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="@cloudkitect/components.CkVpc.property.availabilityZones"></a>

```typescript
public readonly availabilityZones: string[];
```

- *Type:* string[]

AZs for this VPC.

---

##### `dnsHostnamesEnabled`<sup>Required</sup> <a name="dnsHostnamesEnabled" id="@cloudkitect/components.CkVpc.property.dnsHostnamesEnabled"></a>

```typescript
public readonly dnsHostnamesEnabled: boolean;
```

- *Type:* boolean

Indicates if instances launched in this VPC will have public DNS hostnames.

---

##### `dnsSupportEnabled`<sup>Required</sup> <a name="dnsSupportEnabled" id="@cloudkitect/components.CkVpc.property.dnsSupportEnabled"></a>

```typescript
public readonly dnsSupportEnabled: boolean;
```

- *Type:* boolean

Indicates if DNS support is enabled for this VPC.

---

##### `internetConnectivityEstablished`<sup>Required</sup> <a name="internetConnectivityEstablished" id="@cloudkitect/components.CkVpc.property.internetConnectivityEstablished"></a>

```typescript
public readonly internetConnectivityEstablished: IDependable;
```

- *Type:* constructs.IDependable

Dependencies for internet connectivity.

---

##### `isolatedSubnets`<sup>Required</sup> <a name="isolatedSubnets" id="@cloudkitect/components.CkVpc.property.isolatedSubnets"></a>

```typescript
public readonly isolatedSubnets: ISubnet[];
```

- *Type:* aws-cdk-lib.aws_ec2.ISubnet[]

List of isolated subnets in this VPC.

---

##### `privateSubnets`<sup>Required</sup> <a name="privateSubnets" id="@cloudkitect/components.CkVpc.property.privateSubnets"></a>

```typescript
public readonly privateSubnets: ISubnet[];
```

- *Type:* aws-cdk-lib.aws_ec2.ISubnet[]

List of private subnets in this VPC.

---

##### `publicSubnets`<sup>Required</sup> <a name="publicSubnets" id="@cloudkitect/components.CkVpc.property.publicSubnets"></a>

```typescript
public readonly publicSubnets: ISubnet[];
```

- *Type:* aws-cdk-lib.aws_ec2.ISubnet[]

List of public subnets in this VPC.

---

##### `vpcArn`<sup>Required</sup> <a name="vpcArn" id="@cloudkitect/components.CkVpc.property.vpcArn"></a>

```typescript
public readonly vpcArn: string;
```

- *Type:* string

Arn of this VPC.

---

##### `vpcCidrBlock`<sup>Required</sup> <a name="vpcCidrBlock" id="@cloudkitect/components.CkVpc.property.vpcCidrBlock"></a>

```typescript
public readonly vpcCidrBlock: string;
```

- *Type:* string

CIDR range for this VPC.

---

##### `vpcCidrBlockAssociations`<sup>Required</sup> <a name="vpcCidrBlockAssociations" id="@cloudkitect/components.CkVpc.property.vpcCidrBlockAssociations"></a>

```typescript
public readonly vpcCidrBlockAssociations: string[];
```

- *Type:* string[]

---

##### `vpcDefaultNetworkAcl`<sup>Required</sup> <a name="vpcDefaultNetworkAcl" id="@cloudkitect/components.CkVpc.property.vpcDefaultNetworkAcl"></a>

```typescript
public readonly vpcDefaultNetworkAcl: string;
```

- *Type:* string

---

##### `vpcDefaultSecurityGroup`<sup>Required</sup> <a name="vpcDefaultSecurityGroup" id="@cloudkitect/components.CkVpc.property.vpcDefaultSecurityGroup"></a>

```typescript
public readonly vpcDefaultSecurityGroup: string;
```

- *Type:* string

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cloudkitect/components.CkVpc.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

Identifier for this VPC.

---

##### `vpcIpv6CidrBlocks`<sup>Required</sup> <a name="vpcIpv6CidrBlocks" id="@cloudkitect/components.CkVpc.property.vpcIpv6CidrBlocks"></a>

```typescript
public readonly vpcIpv6CidrBlocks: string[];
```

- *Type:* string[]

---

##### `internetGatewayId`<sup>Optional</sup> <a name="internetGatewayId" id="@cloudkitect/components.CkVpc.property.internetGatewayId"></a>

```typescript
public readonly internetGatewayId: string;
```

- *Type:* string

Internet Gateway for the VPC.

Note that in case the VPC is configured only
with ISOLATED subnets, this attribute will be `undefined`.

---

##### `vpnGatewayId`<sup>Optional</sup> <a name="vpnGatewayId" id="@cloudkitect/components.CkVpc.property.vpnGatewayId"></a>

```typescript
public readonly vpnGatewayId: string;
```

- *Type:* string

Returns the id of the VPN Gateway (if enabled).

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cloudkitect/components.CkVpc.property.DEFAULT_CIDR_RANGE">DEFAULT_CIDR_RANGE</a></code> | <code>string</code> | The default CIDR range used when creating VPCs. |
| <code><a href="#@cloudkitect/components.CkVpc.property.DEFAULT_SUBNETS">DEFAULT_SUBNETS</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetConfiguration[]</code> | The default subnet configuration. |
| <code><a href="#@cloudkitect/components.CkVpc.property.DEFAULT_SUBNETS_NO_NAT">DEFAULT_SUBNETS_NO_NAT</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetConfiguration[]</code> | The default subnet configuration if natGateways specified to be 0. |

---

##### `DEFAULT_CIDR_RANGE`<sup>Required</sup> <a name="DEFAULT_CIDR_RANGE" id="@cloudkitect/components.CkVpc.property.DEFAULT_CIDR_RANGE"></a>

```typescript
public readonly DEFAULT_CIDR_RANGE: string;
```

- *Type:* string

The default CIDR range used when creating VPCs.

This can be overridden using VpcProps when creating a VPCNetwork resource.
e.g. new VpcResource(this, { cidr: '192.168.0.0./16' })

Note this is specific to the IPv4 CIDR.

---

##### `DEFAULT_SUBNETS`<sup>Required</sup> <a name="DEFAULT_SUBNETS" id="@cloudkitect/components.CkVpc.property.DEFAULT_SUBNETS"></a>

```typescript
public readonly DEFAULT_SUBNETS: SubnetConfiguration[];
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetConfiguration[]

The default subnet configuration.

1 Public and 1 Private subnet per AZ evenly split

---

##### `DEFAULT_SUBNETS_NO_NAT`<sup>Required</sup> <a name="DEFAULT_SUBNETS_NO_NAT" id="@cloudkitect/components.CkVpc.property.DEFAULT_SUBNETS_NO_NAT"></a>

```typescript
public readonly DEFAULT_SUBNETS_NO_NAT: SubnetConfiguration[];
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetConfiguration[]

The default subnet configuration if natGateways specified to be 0.

1 Public and 1 Isolated Subnet per AZ evenly split

---

## Structs <a name="Structs" id="Structs"></a>

### CkBucketProps <a name="CkBucketProps" id="@cloudkitect/components.CkBucketProps"></a>

CloudKitect Bucket component properties.

#### Initializer <a name="Initializer" id="@cloudkitect/components.CkBucketProps.Initializer"></a>

```typescript
import { CkBucketProps } from '@cloudkitect/components'

const ckBucketProps: CkBucketProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cloudkitect/components.CkBucketProps.property.accessControl">accessControl</a></code> | <code>aws-cdk-lib.aws_s3.BucketAccessControl</code> | Specifies a canned ACL that grants predefined permissions to the bucket. |
| <code><a href="#@cloudkitect/components.CkBucketProps.property.autoDeleteObjects">autoDeleteObjects</a></code> | <code>boolean</code> | Whether all objects should be automatically deleted when the bucket is removed from the stack or when the stack is deleted. |
| <code><a href="#@cloudkitect/components.CkBucketProps.property.blockPublicAccess">blockPublicAccess</a></code> | <code>aws-cdk-lib.aws_s3.BlockPublicAccess</code> | The block public access configuration of this bucket. |
| <code><a href="#@cloudkitect/components.CkBucketProps.property.bucketKeyEnabled">bucketKeyEnabled</a></code> | <code>boolean</code> | Whether Amazon S3 should use its own intermediary key to generate data keys. |
| <code><a href="#@cloudkitect/components.CkBucketProps.property.bucketName">bucketName</a></code> | <code>string</code> | Physical name of this bucket. |
| <code><a href="#@cloudkitect/components.CkBucketProps.property.cors">cors</a></code> | <code>aws-cdk-lib.aws_s3.CorsRule[]</code> | The CORS configuration of this bucket. |
| <code><a href="#@cloudkitect/components.CkBucketProps.property.encryption">encryption</a></code> | <code>aws-cdk-lib.aws_s3.BucketEncryption</code> | The kind of server-side encryption to apply to this bucket. |
| <code><a href="#@cloudkitect/components.CkBucketProps.property.encryptionKey">encryptionKey</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | External KMS key to use for bucket encryption. |
| <code><a href="#@cloudkitect/components.CkBucketProps.property.enforceSSL">enforceSSL</a></code> | <code>boolean</code> | Enforces SSL for requests. |
| <code><a href="#@cloudkitect/components.CkBucketProps.property.eventBridgeEnabled">eventBridgeEnabled</a></code> | <code>boolean</code> | Whether this bucket should send notifications to Amazon EventBridge or not. |
| <code><a href="#@cloudkitect/components.CkBucketProps.property.intelligentTieringConfigurations">intelligentTieringConfigurations</a></code> | <code>aws-cdk-lib.aws_s3.IntelligentTieringConfiguration[]</code> | Inteligent Tiering Configurations. |
| <code><a href="#@cloudkitect/components.CkBucketProps.property.inventories">inventories</a></code> | <code>aws-cdk-lib.aws_s3.Inventory[]</code> | The inventory configuration of the bucket. |
| <code><a href="#@cloudkitect/components.CkBucketProps.property.lifecycleRules">lifecycleRules</a></code> | <code>aws-cdk-lib.aws_s3.LifecycleRule[]</code> | Rules that define how Amazon S3 manages objects during their lifetime. |
| <code><a href="#@cloudkitect/components.CkBucketProps.property.metrics">metrics</a></code> | <code>aws-cdk-lib.aws_s3.BucketMetrics[]</code> | The metrics configuration of this bucket. |
| <code><a href="#@cloudkitect/components.CkBucketProps.property.minimumTLSVersion">minimumTLSVersion</a></code> | <code>number</code> | Enforces minimum TLS version for requests. |
| <code><a href="#@cloudkitect/components.CkBucketProps.property.notificationsHandlerRole">notificationsHandlerRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The role to be used by the notifications handler. |
| <code><a href="#@cloudkitect/components.CkBucketProps.property.objectLockDefaultRetention">objectLockDefaultRetention</a></code> | <code>aws-cdk-lib.aws_s3.ObjectLockRetention</code> | The default retention mode and rules for S3 Object Lock. |
| <code><a href="#@cloudkitect/components.CkBucketProps.property.objectLockEnabled">objectLockEnabled</a></code> | <code>boolean</code> | Enable object lock on the bucket. |
| <code><a href="#@cloudkitect/components.CkBucketProps.property.objectOwnership">objectOwnership</a></code> | <code>aws-cdk-lib.aws_s3.ObjectOwnership</code> | The objectOwnership of the bucket. |
| <code><a href="#@cloudkitect/components.CkBucketProps.property.publicReadAccess">publicReadAccess</a></code> | <code>boolean</code> | Grants public read access to all objects in the bucket. |
| <code><a href="#@cloudkitect/components.CkBucketProps.property.removalPolicy">removalPolicy</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | Policy to apply when the bucket is removed from this stack. |
| <code><a href="#@cloudkitect/components.CkBucketProps.property.serverAccessLogsBucket">serverAccessLogsBucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | Destination bucket for the server access logs. |
| <code><a href="#@cloudkitect/components.CkBucketProps.property.serverAccessLogsPrefix">serverAccessLogsPrefix</a></code> | <code>string</code> | Optional log file prefix to use for the bucket's access logs. |
| <code><a href="#@cloudkitect/components.CkBucketProps.property.targetObjectKeyFormat">targetObjectKeyFormat</a></code> | <code>aws-cdk-lib.aws_s3.TargetObjectKeyFormat</code> | Optional key format for log objects. |
| <code><a href="#@cloudkitect/components.CkBucketProps.property.transferAcceleration">transferAcceleration</a></code> | <code>boolean</code> | Whether this bucket should have transfer acceleration turned on or not. |
| <code><a href="#@cloudkitect/components.CkBucketProps.property.versioned">versioned</a></code> | <code>boolean</code> | Whether this bucket should have versioning turned on or not. |
| <code><a href="#@cloudkitect/components.CkBucketProps.property.websiteErrorDocument">websiteErrorDocument</a></code> | <code>string</code> | The name of the error document (e.g. "404.html") for the website. `websiteIndexDocument` must also be set if this is set. |
| <code><a href="#@cloudkitect/components.CkBucketProps.property.websiteIndexDocument">websiteIndexDocument</a></code> | <code>string</code> | The name of the index document (e.g. "index.html") for the website. Enables static website hosting for this bucket. |
| <code><a href="#@cloudkitect/components.CkBucketProps.property.websiteRedirect">websiteRedirect</a></code> | <code>aws-cdk-lib.aws_s3.RedirectTarget</code> | Specifies the redirect behavior of all requests to a website endpoint of a bucket. |
| <code><a href="#@cloudkitect/components.CkBucketProps.property.websiteRoutingRules">websiteRoutingRules</a></code> | <code>aws-cdk-lib.aws_s3.RoutingRule[]</code> | Rules that define when a redirect is applied and the redirect behavior. |

---

##### `accessControl`<sup>Optional</sup> <a name="accessControl" id="@cloudkitect/components.CkBucketProps.property.accessControl"></a>

```typescript
public readonly accessControl: BucketAccessControl;
```

- *Type:* aws-cdk-lib.aws_s3.BucketAccessControl
- *Default:* BucketAccessControl.PRIVATE

Specifies a canned ACL that grants predefined permissions to the bucket.

---

##### `autoDeleteObjects`<sup>Optional</sup> <a name="autoDeleteObjects" id="@cloudkitect/components.CkBucketProps.property.autoDeleteObjects"></a>

```typescript
public readonly autoDeleteObjects: boolean;
```

- *Type:* boolean
- *Default:* false

Whether all objects should be automatically deleted when the bucket is removed from the stack or when the stack is deleted.

Requires the `removalPolicy` to be set to `RemovalPolicy.DESTROY`.

**Warning** if you have deployed a bucket with `autoDeleteObjects: true`,
switching this to `false` in a CDK version *before* `1.126.0` will lead to
all objects in the bucket being deleted. Be sure to update your bucket resources
by deploying with CDK version `1.126.0` or later **before** switching this value to `false`.

---

##### `blockPublicAccess`<sup>Optional</sup> <a name="blockPublicAccess" id="@cloudkitect/components.CkBucketProps.property.blockPublicAccess"></a>

```typescript
public readonly blockPublicAccess: BlockPublicAccess;
```

- *Type:* aws-cdk-lib.aws_s3.BlockPublicAccess
- *Default:* CloudFormation defaults will apply. New buckets and objects don't allow public access, but users can modify bucket policies or object permissions to allow public access

The block public access configuration of this bucket.

> [https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html](https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html)

---

##### `bucketKeyEnabled`<sup>Optional</sup> <a name="bucketKeyEnabled" id="@cloudkitect/components.CkBucketProps.property.bucketKeyEnabled"></a>

```typescript
public readonly bucketKeyEnabled: boolean;
```

- *Type:* boolean
- *Default:* false

Whether Amazon S3 should use its own intermediary key to generate data keys.

Only relevant when using KMS for encryption.

- If not enabled, every object GET and PUT will cause an API call to KMS (with the
  attendant cost implications of that).
- If enabled, S3 will use its own time-limited key instead.

Only relevant, when Encryption is set to `BucketEncryption.KMS` or `BucketEncryption.KMS_MANAGED`.

---

##### `bucketName`<sup>Optional</sup> <a name="bucketName" id="@cloudkitect/components.CkBucketProps.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string
- *Default:* Assigned by CloudFormation (recommended).

Physical name of this bucket.

---

##### `cors`<sup>Optional</sup> <a name="cors" id="@cloudkitect/components.CkBucketProps.property.cors"></a>

```typescript
public readonly cors: CorsRule[];
```

- *Type:* aws-cdk-lib.aws_s3.CorsRule[]
- *Default:* No CORS configuration.

The CORS configuration of this bucket.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-cors.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-cors.html)

---

##### `encryption`<sup>Optional</sup> <a name="encryption" id="@cloudkitect/components.CkBucketProps.property.encryption"></a>

```typescript
public readonly encryption: BucketEncryption;
```

- *Type:* aws-cdk-lib.aws_s3.BucketEncryption
- *Default:* `KMS` if `encryptionKey` is specified, or `UNENCRYPTED` otherwise. But if `UNENCRYPTED` is specified, the bucket will be encrypted as `S3_MANAGED` automatically.

The kind of server-side encryption to apply to this bucket.

If you choose KMS, you can specify a KMS key via `encryptionKey`. If
encryption key is not specified, a key will automatically be created.

---

##### `encryptionKey`<sup>Optional</sup> <a name="encryptionKey" id="@cloudkitect/components.CkBucketProps.property.encryptionKey"></a>

```typescript
public readonly encryptionKey: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey
- *Default:* If `encryption` is set to `KMS` and this property is undefined, a new KMS key will be created and associated with this bucket.

External KMS key to use for bucket encryption.

The `encryption` property must be either not specified or set to `KMS` or `DSSE`.
An error will be emitted if `encryption` is set to `UNENCRYPTED` or `S3_MANAGED`.

---

##### `enforceSSL`<sup>Optional</sup> <a name="enforceSSL" id="@cloudkitect/components.CkBucketProps.property.enforceSSL"></a>

```typescript
public readonly enforceSSL: boolean;
```

- *Type:* boolean
- *Default:* false

Enforces SSL for requests.

S3.5 of the AWS Foundational Security Best Practices Regarding S3.

> [https://docs.aws.amazon.com/config/latest/developerguide/s3-bucket-ssl-requests-only.html](https://docs.aws.amazon.com/config/latest/developerguide/s3-bucket-ssl-requests-only.html)

---

##### `eventBridgeEnabled`<sup>Optional</sup> <a name="eventBridgeEnabled" id="@cloudkitect/components.CkBucketProps.property.eventBridgeEnabled"></a>

```typescript
public readonly eventBridgeEnabled: boolean;
```

- *Type:* boolean
- *Default:* false

Whether this bucket should send notifications to Amazon EventBridge or not.

---

##### `intelligentTieringConfigurations`<sup>Optional</sup> <a name="intelligentTieringConfigurations" id="@cloudkitect/components.CkBucketProps.property.intelligentTieringConfigurations"></a>

```typescript
public readonly intelligentTieringConfigurations: IntelligentTieringConfiguration[];
```

- *Type:* aws-cdk-lib.aws_s3.IntelligentTieringConfiguration[]
- *Default:* No Intelligent Tiiering Configurations.

Inteligent Tiering Configurations.

> [https://docs.aws.amazon.com/AmazonS3/latest/userguide/intelligent-tiering.html](https://docs.aws.amazon.com/AmazonS3/latest/userguide/intelligent-tiering.html)

---

##### `inventories`<sup>Optional</sup> <a name="inventories" id="@cloudkitect/components.CkBucketProps.property.inventories"></a>

```typescript
public readonly inventories: Inventory[];
```

- *Type:* aws-cdk-lib.aws_s3.Inventory[]
- *Default:* No inventory configuration

The inventory configuration of the bucket.

> [https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-inventory.html](https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-inventory.html)

---

##### `lifecycleRules`<sup>Optional</sup> <a name="lifecycleRules" id="@cloudkitect/components.CkBucketProps.property.lifecycleRules"></a>

```typescript
public readonly lifecycleRules: LifecycleRule[];
```

- *Type:* aws-cdk-lib.aws_s3.LifecycleRule[]
- *Default:* No lifecycle rules.

Rules that define how Amazon S3 manages objects during their lifetime.

---

##### `metrics`<sup>Optional</sup> <a name="metrics" id="@cloudkitect/components.CkBucketProps.property.metrics"></a>

```typescript
public readonly metrics: BucketMetrics[];
```

- *Type:* aws-cdk-lib.aws_s3.BucketMetrics[]
- *Default:* No metrics configuration.

The metrics configuration of this bucket.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-metricsconfiguration.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-metricsconfiguration.html)

---

##### `minimumTLSVersion`<sup>Optional</sup> <a name="minimumTLSVersion" id="@cloudkitect/components.CkBucketProps.property.minimumTLSVersion"></a>

```typescript
public readonly minimumTLSVersion: number;
```

- *Type:* number
- *Default:* No minimum TLS version is enforced.

Enforces minimum TLS version for requests.

Requires `enforceSSL` to be enabled.

> [https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-tls-version](https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-tls-version)

---

##### `notificationsHandlerRole`<sup>Optional</sup> <a name="notificationsHandlerRole" id="@cloudkitect/components.CkBucketProps.property.notificationsHandlerRole"></a>

```typescript
public readonly notificationsHandlerRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole
- *Default:* a new role will be created.

The role to be used by the notifications handler.

---

##### `objectLockDefaultRetention`<sup>Optional</sup> <a name="objectLockDefaultRetention" id="@cloudkitect/components.CkBucketProps.property.objectLockDefaultRetention"></a>

```typescript
public readonly objectLockDefaultRetention: ObjectLockRetention;
```

- *Type:* aws-cdk-lib.aws_s3.ObjectLockRetention
- *Default:* no default retention period

The default retention mode and rules for S3 Object Lock.

Default retention can be configured after a bucket is created if the bucket already
has object lock enabled. Enabling object lock for existing buckets is not supported.

> [https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock-overview.html#object-lock-bucket-config-enable](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock-overview.html#object-lock-bucket-config-enable)

---

##### `objectLockEnabled`<sup>Optional</sup> <a name="objectLockEnabled" id="@cloudkitect/components.CkBucketProps.property.objectLockEnabled"></a>

```typescript
public readonly objectLockEnabled: boolean;
```

- *Type:* boolean
- *Default:* false, unless objectLockDefaultRetention is set (then, true)

Enable object lock on the bucket.

Enabling object lock for existing buckets is not supported. Object lock must be
enabled when the bucket is created.

> [https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock-overview.html#object-lock-bucket-config-enable](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock-overview.html#object-lock-bucket-config-enable)

---

##### `objectOwnership`<sup>Optional</sup> <a name="objectOwnership" id="@cloudkitect/components.CkBucketProps.property.objectOwnership"></a>

```typescript
public readonly objectOwnership: ObjectOwnership;
```

- *Type:* aws-cdk-lib.aws_s3.ObjectOwnership
- *Default:* No ObjectOwnership configuration, uploading account will own the object.

The objectOwnership of the bucket.

> [https://docs.aws.amazon.com/AmazonS3/latest/dev/about-object-ownership.html](https://docs.aws.amazon.com/AmazonS3/latest/dev/about-object-ownership.html)

---

##### `publicReadAccess`<sup>Optional</sup> <a name="publicReadAccess" id="@cloudkitect/components.CkBucketProps.property.publicReadAccess"></a>

```typescript
public readonly publicReadAccess: boolean;
```

- *Type:* boolean
- *Default:* false

Grants public read access to all objects in the bucket.

Similar to calling `bucket.grantPublicAccess()`

---

##### `removalPolicy`<sup>Optional</sup> <a name="removalPolicy" id="@cloudkitect/components.CkBucketProps.property.removalPolicy"></a>

```typescript
public readonly removalPolicy: RemovalPolicy;
```

- *Type:* aws-cdk-lib.RemovalPolicy
- *Default:* The bucket will be orphaned.

Policy to apply when the bucket is removed from this stack.

---

##### `serverAccessLogsBucket`<sup>Optional</sup> <a name="serverAccessLogsBucket" id="@cloudkitect/components.CkBucketProps.property.serverAccessLogsBucket"></a>

```typescript
public readonly serverAccessLogsBucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket
- *Default:* If "serverAccessLogsPrefix" undefined - access logs disabled, otherwise - log to current bucket.

Destination bucket for the server access logs.

---

##### `serverAccessLogsPrefix`<sup>Optional</sup> <a name="serverAccessLogsPrefix" id="@cloudkitect/components.CkBucketProps.property.serverAccessLogsPrefix"></a>

```typescript
public readonly serverAccessLogsPrefix: string;
```

- *Type:* string
- *Default:* No log file prefix

Optional log file prefix to use for the bucket's access logs.

If defined without "serverAccessLogsBucket", enables access logs to current bucket with this prefix.

---

##### `targetObjectKeyFormat`<sup>Optional</sup> <a name="targetObjectKeyFormat" id="@cloudkitect/components.CkBucketProps.property.targetObjectKeyFormat"></a>

```typescript
public readonly targetObjectKeyFormat: TargetObjectKeyFormat;
```

- *Type:* aws-cdk-lib.aws_s3.TargetObjectKeyFormat
- *Default:* the default key format is: [DestinationPrefix][YYYY]-[MM]-[DD]-[hh]-[mm]-[ss]-[UniqueString]

Optional key format for log objects.

---

##### `transferAcceleration`<sup>Optional</sup> <a name="transferAcceleration" id="@cloudkitect/components.CkBucketProps.property.transferAcceleration"></a>

```typescript
public readonly transferAcceleration: boolean;
```

- *Type:* boolean
- *Default:* false

Whether this bucket should have transfer acceleration turned on or not.

---

##### `versioned`<sup>Optional</sup> <a name="versioned" id="@cloudkitect/components.CkBucketProps.property.versioned"></a>

```typescript
public readonly versioned: boolean;
```

- *Type:* boolean
- *Default:* false (unless object lock is enabled, then true)

Whether this bucket should have versioning turned on or not.

---

##### `websiteErrorDocument`<sup>Optional</sup> <a name="websiteErrorDocument" id="@cloudkitect/components.CkBucketProps.property.websiteErrorDocument"></a>

```typescript
public readonly websiteErrorDocument: string;
```

- *Type:* string
- *Default:* No error document.

The name of the error document (e.g. "404.html") for the website. `websiteIndexDocument` must also be set if this is set.

---

##### `websiteIndexDocument`<sup>Optional</sup> <a name="websiteIndexDocument" id="@cloudkitect/components.CkBucketProps.property.websiteIndexDocument"></a>

```typescript
public readonly websiteIndexDocument: string;
```

- *Type:* string
- *Default:* No index document.

The name of the index document (e.g. "index.html") for the website. Enables static website hosting for this bucket.

---

##### `websiteRedirect`<sup>Optional</sup> <a name="websiteRedirect" id="@cloudkitect/components.CkBucketProps.property.websiteRedirect"></a>

```typescript
public readonly websiteRedirect: RedirectTarget;
```

- *Type:* aws-cdk-lib.aws_s3.RedirectTarget
- *Default:* No redirection.

Specifies the redirect behavior of all requests to a website endpoint of a bucket.

If you specify this property, you can't specify "websiteIndexDocument", "websiteErrorDocument" nor , "websiteRoutingRules".

---

##### `websiteRoutingRules`<sup>Optional</sup> <a name="websiteRoutingRules" id="@cloudkitect/components.CkBucketProps.property.websiteRoutingRules"></a>

```typescript
public readonly websiteRoutingRules: RoutingRule[];
```

- *Type:* aws-cdk-lib.aws_s3.RoutingRule[]
- *Default:* No redirection rules.

Rules that define when a redirect is applied and the redirect behavior.

---

### CkClusterProps <a name="CkClusterProps" id="@cloudkitect/components.CkClusterProps"></a>

CloudKitect Cluster component properties.

#### Initializer <a name="Initializer" id="@cloudkitect/components.CkClusterProps.Initializer"></a>

```typescript
import { CkClusterProps } from '@cloudkitect/components'

const ckClusterProps: CkClusterProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cloudkitect/components.CkClusterProps.property.capacity">capacity</a></code> | <code>aws-cdk-lib.aws_ecs.AddCapacityOptions</code> | The ec2 capacity to add to the cluster. |
| <code><a href="#@cloudkitect/components.CkClusterProps.property.clusterName">clusterName</a></code> | <code>string</code> | The name for the cluster. |
| <code><a href="#@cloudkitect/components.CkClusterProps.property.containerInsights">containerInsights</a></code> | <code>boolean</code> | If true CloudWatch Container Insights will be enabled for the cluster. |
| <code><a href="#@cloudkitect/components.CkClusterProps.property.defaultCloudMapNamespace">defaultCloudMapNamespace</a></code> | <code>aws-cdk-lib.aws_ecs.CloudMapNamespaceOptions</code> | The service discovery namespace created in this cluster. |
| <code><a href="#@cloudkitect/components.CkClusterProps.property.enableFargateCapacityProviders">enableFargateCapacityProviders</a></code> | <code>boolean</code> | Whether to enable Fargate Capacity Providers. |
| <code><a href="#@cloudkitect/components.CkClusterProps.property.executeCommandConfiguration">executeCommandConfiguration</a></code> | <code>aws-cdk-lib.aws_ecs.ExecuteCommandConfiguration</code> | The execute command configuration for the cluster. |
| <code><a href="#@cloudkitect/components.CkClusterProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | The VPC where your ECS instances will be running or your ENIs will be deployed. |

---

##### `capacity`<sup>Optional</sup> <a name="capacity" id="@cloudkitect/components.CkClusterProps.property.capacity"></a>

```typescript
public readonly capacity: AddCapacityOptions;
```

- *Type:* aws-cdk-lib.aws_ecs.AddCapacityOptions
- *Default:* no EC2 capacity will be added, you can use `addCapacity` to add capacity later.

The ec2 capacity to add to the cluster.

---

##### `clusterName`<sup>Optional</sup> <a name="clusterName" id="@cloudkitect/components.CkClusterProps.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string
- *Default:* CloudFormation-generated name

The name for the cluster.

---

##### `containerInsights`<sup>Optional</sup> <a name="containerInsights" id="@cloudkitect/components.CkClusterProps.property.containerInsights"></a>

```typescript
public readonly containerInsights: boolean;
```

- *Type:* boolean
- *Default:* Container Insights will be disabled for this cluster.

If true CloudWatch Container Insights will be enabled for the cluster.

---

##### `defaultCloudMapNamespace`<sup>Optional</sup> <a name="defaultCloudMapNamespace" id="@cloudkitect/components.CkClusterProps.property.defaultCloudMapNamespace"></a>

```typescript
public readonly defaultCloudMapNamespace: CloudMapNamespaceOptions;
```

- *Type:* aws-cdk-lib.aws_ecs.CloudMapNamespaceOptions
- *Default:* no service discovery namespace created, you can use `addDefaultCloudMapNamespace` to add a default service discovery namespace later.

The service discovery namespace created in this cluster.

---

##### `enableFargateCapacityProviders`<sup>Optional</sup> <a name="enableFargateCapacityProviders" id="@cloudkitect/components.CkClusterProps.property.enableFargateCapacityProviders"></a>

```typescript
public readonly enableFargateCapacityProviders: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to enable Fargate Capacity Providers.

---

##### `executeCommandConfiguration`<sup>Optional</sup> <a name="executeCommandConfiguration" id="@cloudkitect/components.CkClusterProps.property.executeCommandConfiguration"></a>

```typescript
public readonly executeCommandConfiguration: ExecuteCommandConfiguration;
```

- *Type:* aws-cdk-lib.aws_ecs.ExecuteCommandConfiguration
- *Default:* no configuration will be provided.

The execute command configuration for the cluster.

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="@cloudkitect/components.CkClusterProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc
- *Default:* creates a new VPC with two AZs

The VPC where your ECS instances will be running or your ENIs will be deployed.

---

### CkDistributionProps <a name="CkDistributionProps" id="@cloudkitect/components.CkDistributionProps"></a>

CloudKitect Cloudfront Distribution Component Properties.

#### Initializer <a name="Initializer" id="@cloudkitect/components.CkDistributionProps.Initializer"></a>

```typescript
import { CkDistributionProps } from '@cloudkitect/components'

const ckDistributionProps: CkDistributionProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cloudkitect/components.CkDistributionProps.property.defaultBehavior">defaultBehavior</a></code> | <code>aws-cdk-lib.aws_cloudfront.BehaviorOptions</code> | The default behavior for the distribution. |
| <code><a href="#@cloudkitect/components.CkDistributionProps.property.additionalBehaviors">additionalBehaviors</a></code> | <code>{[ key: string ]: aws-cdk-lib.aws_cloudfront.BehaviorOptions}</code> | Additional behaviors for the distribution, mapped by the pathPattern that specifies which requests to apply the behavior to. |
| <code><a href="#@cloudkitect/components.CkDistributionProps.property.certificate">certificate</a></code> | <code>aws-cdk-lib.aws_certificatemanager.ICertificate</code> | A certificate to associate with the distribution. |
| <code><a href="#@cloudkitect/components.CkDistributionProps.property.comment">comment</a></code> | <code>string</code> | Any comments you want to include about the distribution. |
| <code><a href="#@cloudkitect/components.CkDistributionProps.property.defaultRootObject">defaultRootObject</a></code> | <code>string</code> | The object that you want CloudFront to request from your origin (for example, index.html) when a viewer requests the root URL for your distribution. If no default object is set, the request goes to the origin's root (e.g., example.com/). |
| <code><a href="#@cloudkitect/components.CkDistributionProps.property.domainNames">domainNames</a></code> | <code>string[]</code> | Alternative domain names for this distribution. |
| <code><a href="#@cloudkitect/components.CkDistributionProps.property.enabled">enabled</a></code> | <code>boolean</code> | Enable or disable the distribution. |
| <code><a href="#@cloudkitect/components.CkDistributionProps.property.enableIpv6">enableIpv6</a></code> | <code>boolean</code> | Whether CloudFront will respond to IPv6 DNS requests with an IPv6 address. |
| <code><a href="#@cloudkitect/components.CkDistributionProps.property.enableLogging">enableLogging</a></code> | <code>boolean</code> | Enable access logging for the distribution. |
| <code><a href="#@cloudkitect/components.CkDistributionProps.property.errorResponses">errorResponses</a></code> | <code>aws-cdk-lib.aws_cloudfront.ErrorResponse[]</code> | How CloudFront should handle requests that are not successful (e.g., PageNotFound). |
| <code><a href="#@cloudkitect/components.CkDistributionProps.property.geoRestriction">geoRestriction</a></code> | <code>aws-cdk-lib.aws_cloudfront.GeoRestriction</code> | Controls the countries in which your content is distributed. |
| <code><a href="#@cloudkitect/components.CkDistributionProps.property.httpVersion">httpVersion</a></code> | <code>aws-cdk-lib.aws_cloudfront.HttpVersion</code> | Specify the maximum HTTP version that you want viewers to use to communicate with CloudFront. |
| <code><a href="#@cloudkitect/components.CkDistributionProps.property.logBucket">logBucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | The Amazon S3 bucket to store the access logs in. |
| <code><a href="#@cloudkitect/components.CkDistributionProps.property.logFilePrefix">logFilePrefix</a></code> | <code>string</code> | An optional string that you want CloudFront to prefix to the access log filenames for this distribution. |
| <code><a href="#@cloudkitect/components.CkDistributionProps.property.logIncludesCookies">logIncludesCookies</a></code> | <code>boolean</code> | Specifies whether you want CloudFront to include cookies in access logs. |
| <code><a href="#@cloudkitect/components.CkDistributionProps.property.minimumProtocolVersion">minimumProtocolVersion</a></code> | <code>aws-cdk-lib.aws_cloudfront.SecurityPolicyProtocol</code> | The minimum version of the SSL protocol that you want CloudFront to use for HTTPS connections. |
| <code><a href="#@cloudkitect/components.CkDistributionProps.property.priceClass">priceClass</a></code> | <code>aws-cdk-lib.aws_cloudfront.PriceClass</code> | The price class that corresponds with the maximum price that you want to pay for CloudFront service. |
| <code><a href="#@cloudkitect/components.CkDistributionProps.property.publishAdditionalMetrics">publishAdditionalMetrics</a></code> | <code>boolean</code> | Whether to enable additional CloudWatch metrics. |
| <code><a href="#@cloudkitect/components.CkDistributionProps.property.sslSupportMethod">sslSupportMethod</a></code> | <code>aws-cdk-lib.aws_cloudfront.SSLMethod</code> | The SSL method CloudFront will use for your distribution. |
| <code><a href="#@cloudkitect/components.CkDistributionProps.property.webAclId">webAclId</a></code> | <code>string</code> | Unique identifier that specifies the AWS WAF web ACL to associate with this CloudFront distribution. |

---

##### `defaultBehavior`<sup>Required</sup> <a name="defaultBehavior" id="@cloudkitect/components.CkDistributionProps.property.defaultBehavior"></a>

```typescript
public readonly defaultBehavior: BehaviorOptions;
```

- *Type:* aws-cdk-lib.aws_cloudfront.BehaviorOptions

The default behavior for the distribution.

---

##### `additionalBehaviors`<sup>Optional</sup> <a name="additionalBehaviors" id="@cloudkitect/components.CkDistributionProps.property.additionalBehaviors"></a>

```typescript
public readonly additionalBehaviors: {[ key: string ]: BehaviorOptions};
```

- *Type:* {[ key: string ]: aws-cdk-lib.aws_cloudfront.BehaviorOptions}
- *Default:* no additional behaviors are added.

Additional behaviors for the distribution, mapped by the pathPattern that specifies which requests to apply the behavior to.

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cloudkitect/components.CkDistributionProps.property.certificate"></a>

```typescript
public readonly certificate: ICertificate;
```

- *Type:* aws-cdk-lib.aws_certificatemanager.ICertificate
- *Default:* the CloudFront wildcard certificate (*.cloudfront.net) will be used.

A certificate to associate with the distribution.

The certificate must be located in N. Virginia (us-east-1).

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cloudkitect/components.CkDistributionProps.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string
- *Default:* no comment

Any comments you want to include about the distribution.

---

##### `defaultRootObject`<sup>Optional</sup> <a name="defaultRootObject" id="@cloudkitect/components.CkDistributionProps.property.defaultRootObject"></a>

```typescript
public readonly defaultRootObject: string;
```

- *Type:* string
- *Default:* no default root object

The object that you want CloudFront to request from your origin (for example, index.html) when a viewer requests the root URL for your distribution. If no default object is set, the request goes to the origin's root (e.g., example.com/).

---

##### `domainNames`<sup>Optional</sup> <a name="domainNames" id="@cloudkitect/components.CkDistributionProps.property.domainNames"></a>

```typescript
public readonly domainNames: string[];
```

- *Type:* string[]
- *Default:* The distribution will only support the default generated name (e.g., d111111abcdef8.cloudfront.net)

Alternative domain names for this distribution.

If you want to use your own domain name, such as www.example.com, instead of the cloudfront.net domain name,
you can add an alternate domain name to your distribution. If you attach a certificate to the distribution,
you must add (at least one of) the domain names of the certificate to this list.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cloudkitect/components.CkDistributionProps.property.enabled"></a>

```typescript
public readonly enabled: boolean;
```

- *Type:* boolean
- *Default:* true

Enable or disable the distribution.

---

##### `enableIpv6`<sup>Optional</sup> <a name="enableIpv6" id="@cloudkitect/components.CkDistributionProps.property.enableIpv6"></a>

```typescript
public readonly enableIpv6: boolean;
```

- *Type:* boolean
- *Default:* true

Whether CloudFront will respond to IPv6 DNS requests with an IPv6 address.

If you specify false, CloudFront responds to IPv6 DNS requests with the DNS response code NOERROR and with no IP addresses.
This allows viewers to submit a second request, for an IPv4 address for your distribution.

---

##### `enableLogging`<sup>Optional</sup> <a name="enableLogging" id="@cloudkitect/components.CkDistributionProps.property.enableLogging"></a>

```typescript
public readonly enableLogging: boolean;
```

- *Type:* boolean
- *Default:* false, unless `logBucket` is specified.

Enable access logging for the distribution.

---

##### `errorResponses`<sup>Optional</sup> <a name="errorResponses" id="@cloudkitect/components.CkDistributionProps.property.errorResponses"></a>

```typescript
public readonly errorResponses: ErrorResponse[];
```

- *Type:* aws-cdk-lib.aws_cloudfront.ErrorResponse[]
- *Default:* No custom error responses.

How CloudFront should handle requests that are not successful (e.g., PageNotFound).

---

##### `geoRestriction`<sup>Optional</sup> <a name="geoRestriction" id="@cloudkitect/components.CkDistributionProps.property.geoRestriction"></a>

```typescript
public readonly geoRestriction: GeoRestriction;
```

- *Type:* aws-cdk-lib.aws_cloudfront.GeoRestriction
- *Default:* No geographic restrictions

Controls the countries in which your content is distributed.

---

##### `httpVersion`<sup>Optional</sup> <a name="httpVersion" id="@cloudkitect/components.CkDistributionProps.property.httpVersion"></a>

```typescript
public readonly httpVersion: HttpVersion;
```

- *Type:* aws-cdk-lib.aws_cloudfront.HttpVersion
- *Default:* HttpVersion.HTTP2

Specify the maximum HTTP version that you want viewers to use to communicate with CloudFront.

For viewers and CloudFront to use HTTP/2, viewers must support TLS 1.2 or later, and must support server name identification (SNI).

---

##### `logBucket`<sup>Optional</sup> <a name="logBucket" id="@cloudkitect/components.CkDistributionProps.property.logBucket"></a>

```typescript
public readonly logBucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket
- *Default:* A bucket is created if `enableLogging` is true

The Amazon S3 bucket to store the access logs in.

Make sure to set `objectOwnership` to `s3.ObjectOwnership.OBJECT_WRITER` in your custom bucket.

---

##### `logFilePrefix`<sup>Optional</sup> <a name="logFilePrefix" id="@cloudkitect/components.CkDistributionProps.property.logFilePrefix"></a>

```typescript
public readonly logFilePrefix: string;
```

- *Type:* string
- *Default:* no prefix

An optional string that you want CloudFront to prefix to the access log filenames for this distribution.

---

##### `logIncludesCookies`<sup>Optional</sup> <a name="logIncludesCookies" id="@cloudkitect/components.CkDistributionProps.property.logIncludesCookies"></a>

```typescript
public readonly logIncludesCookies: boolean;
```

- *Type:* boolean
- *Default:* false

Specifies whether you want CloudFront to include cookies in access logs.

---

##### `minimumProtocolVersion`<sup>Optional</sup> <a name="minimumProtocolVersion" id="@cloudkitect/components.CkDistributionProps.property.minimumProtocolVersion"></a>

```typescript
public readonly minimumProtocolVersion: SecurityPolicyProtocol;
```

- *Type:* aws-cdk-lib.aws_cloudfront.SecurityPolicyProtocol
- *Default:* SecurityPolicyProtocol.TLS_V1_2_2021 if the '@aws-cdk/aws-cloudfront:defaultSecurityPolicyTLSv1.2_2021' feature flag is set; otherwise, SecurityPolicyProtocol.TLS_V1_2_2019.

The minimum version of the SSL protocol that you want CloudFront to use for HTTPS connections.

CloudFront serves your objects only to browsers or devices that support at
least the SSL version that you specify.

---

##### `priceClass`<sup>Optional</sup> <a name="priceClass" id="@cloudkitect/components.CkDistributionProps.property.priceClass"></a>

```typescript
public readonly priceClass: PriceClass;
```

- *Type:* aws-cdk-lib.aws_cloudfront.PriceClass
- *Default:* PriceClass.PRICE_CLASS_ALL

The price class that corresponds with the maximum price that you want to pay for CloudFront service.

If you specify PriceClass_All, CloudFront responds to requests for your objects from all CloudFront edge locations.
If you specify a price class other than PriceClass_All, CloudFront serves your objects from the CloudFront edge location
that has the lowest latency among the edge locations in your price class.

---

##### `publishAdditionalMetrics`<sup>Optional</sup> <a name="publishAdditionalMetrics" id="@cloudkitect/components.CkDistributionProps.property.publishAdditionalMetrics"></a>

```typescript
public readonly publishAdditionalMetrics: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to enable additional CloudWatch metrics.

> [https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/viewing-cloudfront-metrics.html](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/viewing-cloudfront-metrics.html)

---

##### `sslSupportMethod`<sup>Optional</sup> <a name="sslSupportMethod" id="@cloudkitect/components.CkDistributionProps.property.sslSupportMethod"></a>

```typescript
public readonly sslSupportMethod: SSLMethod;
```

- *Type:* aws-cdk-lib.aws_cloudfront.SSLMethod
- *Default:* SSLMethod.SNI

The SSL method CloudFront will use for your distribution.

Server Name Indication (SNI) - is an extension to the TLS computer networking protocol by which a client indicates
which hostname it is attempting to connect to at the start of the handshaking process. This allows a server to present
multiple certificates on the same IP address and TCP port number and hence allows multiple secure (HTTPS) websites
(or any other service over TLS) to be served by the same IP address without requiring all those sites to use the same certificate.

CloudFront can use SNI to host multiple distributions on the same IP - which a large majority of clients will support.

If your clients cannot support SNI however - CloudFront can use dedicated IPs for your distribution - but there is a prorated monthly charge for
using this feature. By default, we use SNI - but you can optionally enable dedicated IPs (VIP).

See the CloudFront SSL for more details about pricing : https://aws.amazon.com/cloudfront/custom-ssl-domains/

---

##### `webAclId`<sup>Optional</sup> <a name="webAclId" id="@cloudkitect/components.CkDistributionProps.property.webAclId"></a>

```typescript
public readonly webAclId: string;
```

- *Type:* string
- *Default:* No AWS Web Application Firewall web access control list (web ACL).

Unique identifier that specifies the AWS WAF web ACL to associate with this CloudFront distribution.

To specify a web ACL created using the latest version of AWS WAF, use the ACL ARN, for example
`arn:aws:wafv2:us-east-1:123456789012:global/webacl/ExampleWebACL/473e64fd-f30b-4765-81a0-62ad96dd167a`.
To specify a web ACL created using AWS WAF Classic, use the ACL ID, for example `473e64fd-f30b-4765-81a0-62ad96dd167a`.

> [https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateDistribution.html#API_CreateDistribution_RequestParameters.](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateDistribution.html#API_CreateDistribution_RequestParameters.)

---

### CkDnsValidatedCertificateProps <a name="CkDnsValidatedCertificateProps" id="@cloudkitect/components.CkDnsValidatedCertificateProps"></a>

CloudKitect DnsValidatedCertificate Component Properties.

#### Initializer <a name="Initializer" id="@cloudkitect/components.CkDnsValidatedCertificateProps.Initializer"></a>

```typescript
import { CkDnsValidatedCertificateProps } from '@cloudkitect/components'

const ckDnsValidatedCertificateProps: CkDnsValidatedCertificateProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cloudkitect/components.CkDnsValidatedCertificateProps.property.domainName">domainName</a></code> | <code>string</code> | Fully-qualified domain name to request a certificate for. |
| <code><a href="#@cloudkitect/components.CkDnsValidatedCertificateProps.property.certificateName">certificateName</a></code> | <code>string</code> | The Certificate name. |
| <code><a href="#@cloudkitect/components.CkDnsValidatedCertificateProps.property.keyAlgorithm">keyAlgorithm</a></code> | <code>aws-cdk-lib.aws_certificatemanager.KeyAlgorithm</code> | Specifies the algorithm of the public and private key pair that your certificate uses to encrypt data. |
| <code><a href="#@cloudkitect/components.CkDnsValidatedCertificateProps.property.subjectAlternativeNames">subjectAlternativeNames</a></code> | <code>string[]</code> | Alternative domain names on your certificate. |
| <code><a href="#@cloudkitect/components.CkDnsValidatedCertificateProps.property.transparencyLoggingEnabled">transparencyLoggingEnabled</a></code> | <code>boolean</code> | Enable or disable transparency logging for this certificate. |
| <code><a href="#@cloudkitect/components.CkDnsValidatedCertificateProps.property.validation">validation</a></code> | <code>aws-cdk-lib.aws_certificatemanager.CertificateValidation</code> | How to validate this certificate. |
| <code><a href="#@cloudkitect/components.CkDnsValidatedCertificateProps.property.ckHostedZone">ckHostedZone</a></code> | <code>aws-cdk-lib.aws_route53.IHostedZone</code> | Hosted zone. |

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cloudkitect/components.CkDnsValidatedCertificateProps.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

Fully-qualified domain name to request a certificate for.

May contain wildcards, such as ``*.domain.com``.

---

##### `certificateName`<sup>Optional</sup> <a name="certificateName" id="@cloudkitect/components.CkDnsValidatedCertificateProps.property.certificateName"></a>

```typescript
public readonly certificateName: string;
```

- *Type:* string
- *Default:* the full, absolute path of this construct

The Certificate name.

Since the Certificate resource doesn't support providing a physical name, the value provided here will be recorded in the `Name` tag

---

##### `keyAlgorithm`<sup>Optional</sup> <a name="keyAlgorithm" id="@cloudkitect/components.CkDnsValidatedCertificateProps.property.keyAlgorithm"></a>

```typescript
public readonly keyAlgorithm: KeyAlgorithm;
```

- *Type:* aws-cdk-lib.aws_certificatemanager.KeyAlgorithm
- *Default:* KeyAlgorithm.RSA_2048

Specifies the algorithm of the public and private key pair that your certificate uses to encrypt data.

> [https://docs.aws.amazon.com/acm/latest/userguide/acm-certificate.html#algorithms.title](https://docs.aws.amazon.com/acm/latest/userguide/acm-certificate.html#algorithms.title)

---

##### `subjectAlternativeNames`<sup>Optional</sup> <a name="subjectAlternativeNames" id="@cloudkitect/components.CkDnsValidatedCertificateProps.property.subjectAlternativeNames"></a>

```typescript
public readonly subjectAlternativeNames: string[];
```

- *Type:* string[]
- *Default:* No additional FQDNs will be included as alternative domain names.

Alternative domain names on your certificate.

Use this to register alternative domain names that represent the same site.

---

##### `transparencyLoggingEnabled`<sup>Optional</sup> <a name="transparencyLoggingEnabled" id="@cloudkitect/components.CkDnsValidatedCertificateProps.property.transparencyLoggingEnabled"></a>

```typescript
public readonly transparencyLoggingEnabled: boolean;
```

- *Type:* boolean
- *Default:* true

Enable or disable transparency logging for this certificate.

Once a certificate has been logged, it cannot be removed from the log.
Opting out at that point will have no effect. If you opt out of logging
when you request a certificate and then choose later to opt back in,
your certificate will not be logged until it is renewed.
If you want the certificate to be logged immediately, we recommend that you issue a new one.

> [https://docs.aws.amazon.com/acm/latest/userguide/acm-bestpractices.html#best-practices-transparency](https://docs.aws.amazon.com/acm/latest/userguide/acm-bestpractices.html#best-practices-transparency)

---

##### `validation`<sup>Optional</sup> <a name="validation" id="@cloudkitect/components.CkDnsValidatedCertificateProps.property.validation"></a>

```typescript
public readonly validation: CertificateValidation;
```

- *Type:* aws-cdk-lib.aws_certificatemanager.CertificateValidation
- *Default:* CertificateValidation.fromEmail()

How to validate this certificate.

---

##### `ckHostedZone`<sup>Required</sup> <a name="ckHostedZone" id="@cloudkitect/components.CkDnsValidatedCertificateProps.property.ckHostedZone"></a>

```typescript
public readonly ckHostedZone: IHostedZone;
```

- *Type:* aws-cdk-lib.aws_route53.IHostedZone

Hosted zone.

---

### CkFargateClusterProps <a name="CkFargateClusterProps" id="@cloudkitect/components.CkFargateClusterProps"></a>

CloudKitect Fargate Cluster component properties.

#### Initializer <a name="Initializer" id="@cloudkitect/components.CkFargateClusterProps.Initializer"></a>

```typescript
import { CkFargateClusterProps } from '@cloudkitect/components'

const ckFargateClusterProps: CkFargateClusterProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cloudkitect/components.CkFargateClusterProps.property.capacity">capacity</a></code> | <code>aws-cdk-lib.aws_ecs.AddCapacityOptions</code> | The ec2 capacity to add to the cluster. |
| <code><a href="#@cloudkitect/components.CkFargateClusterProps.property.clusterName">clusterName</a></code> | <code>string</code> | The name for the cluster. |
| <code><a href="#@cloudkitect/components.CkFargateClusterProps.property.containerInsights">containerInsights</a></code> | <code>boolean</code> | If true CloudWatch Container Insights will be enabled for the cluster. |
| <code><a href="#@cloudkitect/components.CkFargateClusterProps.property.defaultCloudMapNamespace">defaultCloudMapNamespace</a></code> | <code>aws-cdk-lib.aws_ecs.CloudMapNamespaceOptions</code> | The service discovery namespace created in this cluster. |
| <code><a href="#@cloudkitect/components.CkFargateClusterProps.property.enableFargateCapacityProviders">enableFargateCapacityProviders</a></code> | <code>boolean</code> | Whether to enable Fargate Capacity Providers. |
| <code><a href="#@cloudkitect/components.CkFargateClusterProps.property.executeCommandConfiguration">executeCommandConfiguration</a></code> | <code>aws-cdk-lib.aws_ecs.ExecuteCommandConfiguration</code> | The execute command configuration for the cluster. |
| <code><a href="#@cloudkitect/components.CkFargateClusterProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | The VPC where your ECS instances will be running or your ENIs will be deployed. |

---

##### `capacity`<sup>Optional</sup> <a name="capacity" id="@cloudkitect/components.CkFargateClusterProps.property.capacity"></a>

```typescript
public readonly capacity: AddCapacityOptions;
```

- *Type:* aws-cdk-lib.aws_ecs.AddCapacityOptions
- *Default:* no EC2 capacity will be added, you can use `addCapacity` to add capacity later.

The ec2 capacity to add to the cluster.

---

##### `clusterName`<sup>Optional</sup> <a name="clusterName" id="@cloudkitect/components.CkFargateClusterProps.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string
- *Default:* CloudFormation-generated name

The name for the cluster.

---

##### `containerInsights`<sup>Optional</sup> <a name="containerInsights" id="@cloudkitect/components.CkFargateClusterProps.property.containerInsights"></a>

```typescript
public readonly containerInsights: boolean;
```

- *Type:* boolean
- *Default:* Container Insights will be disabled for this cluster.

If true CloudWatch Container Insights will be enabled for the cluster.

---

##### `defaultCloudMapNamespace`<sup>Optional</sup> <a name="defaultCloudMapNamespace" id="@cloudkitect/components.CkFargateClusterProps.property.defaultCloudMapNamespace"></a>

```typescript
public readonly defaultCloudMapNamespace: CloudMapNamespaceOptions;
```

- *Type:* aws-cdk-lib.aws_ecs.CloudMapNamespaceOptions
- *Default:* no service discovery namespace created, you can use `addDefaultCloudMapNamespace` to add a default service discovery namespace later.

The service discovery namespace created in this cluster.

---

##### `enableFargateCapacityProviders`<sup>Optional</sup> <a name="enableFargateCapacityProviders" id="@cloudkitect/components.CkFargateClusterProps.property.enableFargateCapacityProviders"></a>

```typescript
public readonly enableFargateCapacityProviders: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to enable Fargate Capacity Providers.

---

##### `executeCommandConfiguration`<sup>Optional</sup> <a name="executeCommandConfiguration" id="@cloudkitect/components.CkFargateClusterProps.property.executeCommandConfiguration"></a>

```typescript
public readonly executeCommandConfiguration: ExecuteCommandConfiguration;
```

- *Type:* aws-cdk-lib.aws_ecs.ExecuteCommandConfiguration
- *Default:* no configuration will be provided.

The execute command configuration for the cluster.

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="@cloudkitect/components.CkFargateClusterProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc
- *Default:* creates a new VPC with two AZs

The VPC where your ECS instances will be running or your ENIs will be deployed.

---

### CkFargateServiceProps <a name="CkFargateServiceProps" id="@cloudkitect/components.CkFargateServiceProps"></a>

CloudKitect Fargate Service component properties.

#### Initializer <a name="Initializer" id="@cloudkitect/components.CkFargateServiceProps.Initializer"></a>

```typescript
import { CkFargateServiceProps } from '@cloudkitect/components'

const ckFargateServiceProps: CkFargateServiceProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cloudkitect/components.CkFargateServiceProps.property.cluster">cluster</a></code> | <code>aws-cdk-lib.aws_ecs.ICluster</code> | The name of the cluster that hosts the service. |
| <code><a href="#@cloudkitect/components.CkFargateServiceProps.property.capacityProviderStrategies">capacityProviderStrategies</a></code> | <code>aws-cdk-lib.aws_ecs.CapacityProviderStrategy[]</code> | A list of Capacity Provider strategies used to place a service. |
| <code><a href="#@cloudkitect/components.CkFargateServiceProps.property.circuitBreaker">circuitBreaker</a></code> | <code>aws-cdk-lib.aws_ecs.DeploymentCircuitBreaker</code> | Whether to enable the deployment circuit breaker. |
| <code><a href="#@cloudkitect/components.CkFargateServiceProps.property.cloudMapOptions">cloudMapOptions</a></code> | <code>aws-cdk-lib.aws_ecs.CloudMapOptions</code> | The options for configuring an Amazon ECS service to use service discovery. |
| <code><a href="#@cloudkitect/components.CkFargateServiceProps.property.deploymentAlarms">deploymentAlarms</a></code> | <code>aws-cdk-lib.aws_ecs.DeploymentAlarmConfig</code> | The alarm(s) to monitor during deployment, and behavior to apply if at least one enters a state of alarm during the deployment or bake time. |
| <code><a href="#@cloudkitect/components.CkFargateServiceProps.property.deploymentController">deploymentController</a></code> | <code>aws-cdk-lib.aws_ecs.DeploymentController</code> | Specifies which deployment controller to use for the service. |
| <code><a href="#@cloudkitect/components.CkFargateServiceProps.property.desiredCount">desiredCount</a></code> | <code>number</code> | The desired number of instantiations of the task definition to keep running on the service. |
| <code><a href="#@cloudkitect/components.CkFargateServiceProps.property.enableECSManagedTags">enableECSManagedTags</a></code> | <code>boolean</code> | Specifies whether to enable Amazon ECS managed tags for the tasks within the service. |
| <code><a href="#@cloudkitect/components.CkFargateServiceProps.property.enableExecuteCommand">enableExecuteCommand</a></code> | <code>boolean</code> | Whether to enable the ability to execute into a container. |
| <code><a href="#@cloudkitect/components.CkFargateServiceProps.property.healthCheckGracePeriod">healthCheckGracePeriod</a></code> | <code>aws-cdk-lib.Duration</code> | The period of time, in seconds, that the Amazon ECS service scheduler ignores unhealthy Elastic Load Balancing target health checks after a task has first started. |
| <code><a href="#@cloudkitect/components.CkFargateServiceProps.property.maxHealthyPercent">maxHealthyPercent</a></code> | <code>number</code> | The maximum number of tasks, specified as a percentage of the Amazon ECS service's DesiredCount value, that can run in a service during a deployment. |
| <code><a href="#@cloudkitect/components.CkFargateServiceProps.property.minHealthyPercent">minHealthyPercent</a></code> | <code>number</code> | The minimum number of tasks, specified as a percentage of the Amazon ECS service's DesiredCount value, that must continue to run and remain healthy during a deployment. |
| <code><a href="#@cloudkitect/components.CkFargateServiceProps.property.propagateTags">propagateTags</a></code> | <code>aws-cdk-lib.aws_ecs.PropagatedTagSource</code> | Specifies whether to propagate the tags from the task definition or the service to the tasks in the service. |
| <code><a href="#@cloudkitect/components.CkFargateServiceProps.property.serviceConnectConfiguration">serviceConnectConfiguration</a></code> | <code>aws-cdk-lib.aws_ecs.ServiceConnectProps</code> | Configuration for Service Connect. |
| <code><a href="#@cloudkitect/components.CkFargateServiceProps.property.serviceName">serviceName</a></code> | <code>string</code> | The name of the service. |
| <code><a href="#@cloudkitect/components.CkFargateServiceProps.property.taskDefinitionRevision">taskDefinitionRevision</a></code> | <code>aws-cdk-lib.aws_ecs.TaskDefinitionRevision</code> | Revision number for the task definition or `latest` to use the latest active task revision. |
| <code><a href="#@cloudkitect/components.CkFargateServiceProps.property.volumeConfigurations">volumeConfigurations</a></code> | <code>aws-cdk-lib.aws_ecs.ServiceManagedVolume[]</code> | Configuration details for a volume used by the service. |
| <code><a href="#@cloudkitect/components.CkFargateServiceProps.property.taskDefinition">taskDefinition</a></code> | <code>aws-cdk-lib.aws_ecs.TaskDefinition</code> | The task definition to use for tasks in the service. |
| <code><a href="#@cloudkitect/components.CkFargateServiceProps.property.assignPublicIp">assignPublicIp</a></code> | <code>boolean</code> | Specifies whether the task's elastic network interface receives a public IP address. |
| <code><a href="#@cloudkitect/components.CkFargateServiceProps.property.platformVersion">platformVersion</a></code> | <code>aws-cdk-lib.aws_ecs.FargatePlatformVersion</code> | The platform version on which to run your service. |
| <code><a href="#@cloudkitect/components.CkFargateServiceProps.property.securityGroups">securityGroups</a></code> | <code>aws-cdk-lib.aws_ec2.ISecurityGroup[]</code> | The security groups to associate with the service. |
| <code><a href="#@cloudkitect/components.CkFargateServiceProps.property.vpcSubnets">vpcSubnets</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetSelection</code> | The subnets to associate with the service. |

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cloudkitect/components.CkFargateServiceProps.property.cluster"></a>

```typescript
public readonly cluster: ICluster;
```

- *Type:* aws-cdk-lib.aws_ecs.ICluster

The name of the cluster that hosts the service.

---

##### `capacityProviderStrategies`<sup>Optional</sup> <a name="capacityProviderStrategies" id="@cloudkitect/components.CkFargateServiceProps.property.capacityProviderStrategies"></a>

```typescript
public readonly capacityProviderStrategies: CapacityProviderStrategy[];
```

- *Type:* aws-cdk-lib.aws_ecs.CapacityProviderStrategy[]
- *Default:* undefined

A list of Capacity Provider strategies used to place a service.

---

##### `circuitBreaker`<sup>Optional</sup> <a name="circuitBreaker" id="@cloudkitect/components.CkFargateServiceProps.property.circuitBreaker"></a>

```typescript
public readonly circuitBreaker: DeploymentCircuitBreaker;
```

- *Type:* aws-cdk-lib.aws_ecs.DeploymentCircuitBreaker
- *Default:* disabled

Whether to enable the deployment circuit breaker.

If this property is defined, circuit breaker will be implicitly
enabled.

---

##### `cloudMapOptions`<sup>Optional</sup> <a name="cloudMapOptions" id="@cloudkitect/components.CkFargateServiceProps.property.cloudMapOptions"></a>

```typescript
public readonly cloudMapOptions: CloudMapOptions;
```

- *Type:* aws-cdk-lib.aws_ecs.CloudMapOptions
- *Default:* AWS Cloud Map service discovery is not enabled.

The options for configuring an Amazon ECS service to use service discovery.

---

##### `deploymentAlarms`<sup>Optional</sup> <a name="deploymentAlarms" id="@cloudkitect/components.CkFargateServiceProps.property.deploymentAlarms"></a>

```typescript
public readonly deploymentAlarms: DeploymentAlarmConfig;
```

- *Type:* aws-cdk-lib.aws_ecs.DeploymentAlarmConfig
- *Default:* No alarms will be monitored during deployment.

The alarm(s) to monitor during deployment, and behavior to apply if at least one enters a state of alarm during the deployment or bake time.

---

##### `deploymentController`<sup>Optional</sup> <a name="deploymentController" id="@cloudkitect/components.CkFargateServiceProps.property.deploymentController"></a>

```typescript
public readonly deploymentController: DeploymentController;
```

- *Type:* aws-cdk-lib.aws_ecs.DeploymentController
- *Default:* Rolling update (ECS)

Specifies which deployment controller to use for the service.

For more information, see
[Amazon ECS Deployment Types](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html)

---

##### `desiredCount`<sup>Optional</sup> <a name="desiredCount" id="@cloudkitect/components.CkFargateServiceProps.property.desiredCount"></a>

```typescript
public readonly desiredCount: number;
```

- *Type:* number
- *Default:* When creating the service, default is 1; when updating the service, default uses the current task number.

The desired number of instantiations of the task definition to keep running on the service.

---

##### `enableECSManagedTags`<sup>Optional</sup> <a name="enableECSManagedTags" id="@cloudkitect/components.CkFargateServiceProps.property.enableECSManagedTags"></a>

```typescript
public readonly enableECSManagedTags: boolean;
```

- *Type:* boolean
- *Default:* false

Specifies whether to enable Amazon ECS managed tags for the tasks within the service.

For more information, see
[Tagging Your Amazon ECS Resources](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-using-tags.html)

---

##### `enableExecuteCommand`<sup>Optional</sup> <a name="enableExecuteCommand" id="@cloudkitect/components.CkFargateServiceProps.property.enableExecuteCommand"></a>

```typescript
public readonly enableExecuteCommand: boolean;
```

- *Type:* boolean
- *Default:* undefined

Whether to enable the ability to execute into a container.

---

##### `healthCheckGracePeriod`<sup>Optional</sup> <a name="healthCheckGracePeriod" id="@cloudkitect/components.CkFargateServiceProps.property.healthCheckGracePeriod"></a>

```typescript
public readonly healthCheckGracePeriod: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* defaults to 60 seconds if at least one load balancer is in-use and it is not already set

The period of time, in seconds, that the Amazon ECS service scheduler ignores unhealthy Elastic Load Balancing target health checks after a task has first started.

---

##### `maxHealthyPercent`<sup>Optional</sup> <a name="maxHealthyPercent" id="@cloudkitect/components.CkFargateServiceProps.property.maxHealthyPercent"></a>

```typescript
public readonly maxHealthyPercent: number;
```

- *Type:* number
- *Default:* 100 if daemon, otherwise 200

The maximum number of tasks, specified as a percentage of the Amazon ECS service's DesiredCount value, that can run in a service during a deployment.

---

##### `minHealthyPercent`<sup>Optional</sup> <a name="minHealthyPercent" id="@cloudkitect/components.CkFargateServiceProps.property.minHealthyPercent"></a>

```typescript
public readonly minHealthyPercent: number;
```

- *Type:* number
- *Default:* 0 if daemon, otherwise 50

The minimum number of tasks, specified as a percentage of the Amazon ECS service's DesiredCount value, that must continue to run and remain healthy during a deployment.

---

##### `propagateTags`<sup>Optional</sup> <a name="propagateTags" id="@cloudkitect/components.CkFargateServiceProps.property.propagateTags"></a>

```typescript
public readonly propagateTags: PropagatedTagSource;
```

- *Type:* aws-cdk-lib.aws_ecs.PropagatedTagSource
- *Default:* PropagatedTagSource.NONE

Specifies whether to propagate the tags from the task definition or the service to the tasks in the service.

Valid values are: PropagatedTagSource.SERVICE, PropagatedTagSource.TASK_DEFINITION or PropagatedTagSource.NONE

---

##### `serviceConnectConfiguration`<sup>Optional</sup> <a name="serviceConnectConfiguration" id="@cloudkitect/components.CkFargateServiceProps.property.serviceConnectConfiguration"></a>

```typescript
public readonly serviceConnectConfiguration: ServiceConnectProps;
```

- *Type:* aws-cdk-lib.aws_ecs.ServiceConnectProps
- *Default:* No ports are advertised via Service Connect on this service, and the service cannot make requests to other services via Service Connect.

Configuration for Service Connect.

---

##### `serviceName`<sup>Optional</sup> <a name="serviceName" id="@cloudkitect/components.CkFargateServiceProps.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string
- *Default:* CloudFormation-generated name.

The name of the service.

---

##### `taskDefinitionRevision`<sup>Optional</sup> <a name="taskDefinitionRevision" id="@cloudkitect/components.CkFargateServiceProps.property.taskDefinitionRevision"></a>

```typescript
public readonly taskDefinitionRevision: TaskDefinitionRevision;
```

- *Type:* aws-cdk-lib.aws_ecs.TaskDefinitionRevision
- *Default:* Uses the revision of the passed task definition deployed by CloudFormation

Revision number for the task definition or `latest` to use the latest active task revision.

---

##### `volumeConfigurations`<sup>Optional</sup> <a name="volumeConfigurations" id="@cloudkitect/components.CkFargateServiceProps.property.volumeConfigurations"></a>

```typescript
public readonly volumeConfigurations: ServiceManagedVolume[];
```

- *Type:* aws-cdk-lib.aws_ecs.ServiceManagedVolume[]
- *Default:* undefined

Configuration details for a volume used by the service.

This allows you to specify
details about the EBS volume that can be attched to ECS tasks.

---

##### `taskDefinition`<sup>Required</sup> <a name="taskDefinition" id="@cloudkitect/components.CkFargateServiceProps.property.taskDefinition"></a>

```typescript
public readonly taskDefinition: TaskDefinition;
```

- *Type:* aws-cdk-lib.aws_ecs.TaskDefinition

The task definition to use for tasks in the service.

[disable-awslint:ref-via-interface]

---

##### `assignPublicIp`<sup>Optional</sup> <a name="assignPublicIp" id="@cloudkitect/components.CkFargateServiceProps.property.assignPublicIp"></a>

```typescript
public readonly assignPublicIp: boolean;
```

- *Type:* boolean
- *Default:* false

Specifies whether the task's elastic network interface receives a public IP address.

If true, each task will receive a public IP address.

---

##### `platformVersion`<sup>Optional</sup> <a name="platformVersion" id="@cloudkitect/components.CkFargateServiceProps.property.platformVersion"></a>

```typescript
public readonly platformVersion: FargatePlatformVersion;
```

- *Type:* aws-cdk-lib.aws_ecs.FargatePlatformVersion
- *Default:* Latest

The platform version on which to run your service.

If one is not specified, the LATEST platform version is used by default. For more information, see
[AWS Fargate Platform Versions](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/platform_versions.html)
in the Amazon Elastic Container Service Developer Guide.

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@cloudkitect/components.CkFargateServiceProps.property.securityGroups"></a>

```typescript
public readonly securityGroups: ISecurityGroup[];
```

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup[]
- *Default:* A new security group is created.

The security groups to associate with the service.

If you do not specify a security group, a new security group is created.

---

##### `vpcSubnets`<sup>Optional</sup> <a name="vpcSubnets" id="@cloudkitect/components.CkFargateServiceProps.property.vpcSubnets"></a>

```typescript
public readonly vpcSubnets: SubnetSelection;
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetSelection
- *Default:* Public subnets if `assignPublicIp` is set, otherwise the first available one of Private, Isolated, Public, in that order.

The subnets to associate with the service.

---

### CkFargateTaskDefinitionProps <a name="CkFargateTaskDefinitionProps" id="@cloudkitect/components.CkFargateTaskDefinitionProps"></a>

Well Architected Fargate Task Definition properties.

#### Initializer <a name="Initializer" id="@cloudkitect/components.CkFargateTaskDefinitionProps.Initializer"></a>

```typescript
import { CkFargateTaskDefinitionProps } from '@cloudkitect/components'

const ckFargateTaskDefinitionProps: CkFargateTaskDefinitionProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cloudkitect/components.CkFargateTaskDefinitionProps.property.executionRole">executionRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The name of the IAM task execution role that grants the ECS agent permission to call AWS APIs on your behalf. |
| <code><a href="#@cloudkitect/components.CkFargateTaskDefinitionProps.property.family">family</a></code> | <code>string</code> | The name of a family that this task definition is registered to. |
| <code><a href="#@cloudkitect/components.CkFargateTaskDefinitionProps.property.proxyConfiguration">proxyConfiguration</a></code> | <code>aws-cdk-lib.aws_ecs.ProxyConfiguration</code> | The configuration details for the App Mesh proxy. |
| <code><a href="#@cloudkitect/components.CkFargateTaskDefinitionProps.property.taskRole">taskRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The name of the IAM role that grants containers in the task permission to call AWS APIs on your behalf. |
| <code><a href="#@cloudkitect/components.CkFargateTaskDefinitionProps.property.volumes">volumes</a></code> | <code>aws-cdk-lib.aws_ecs.Volume[]</code> | The list of volume definitions for the task. |
| <code><a href="#@cloudkitect/components.CkFargateTaskDefinitionProps.property.cpu">cpu</a></code> | <code>number</code> | The number of cpu units used by the task. |
| <code><a href="#@cloudkitect/components.CkFargateTaskDefinitionProps.property.ephemeralStorageGiB">ephemeralStorageGiB</a></code> | <code>number</code> | The amount (in GiB) of ephemeral storage to be allocated to the task. |
| <code><a href="#@cloudkitect/components.CkFargateTaskDefinitionProps.property.memoryLimitMiB">memoryLimitMiB</a></code> | <code>number</code> | The amount (in MiB) of memory used by the task. |
| <code><a href="#@cloudkitect/components.CkFargateTaskDefinitionProps.property.runtimePlatform">runtimePlatform</a></code> | <code>aws-cdk-lib.aws_ecs.RuntimePlatform</code> | The operating system that your task definitions are running on. |

---

##### `executionRole`<sup>Optional</sup> <a name="executionRole" id="@cloudkitect/components.CkFargateTaskDefinitionProps.property.executionRole"></a>

```typescript
public readonly executionRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole
- *Default:* An execution role will be automatically created if you use ECR images in your task definition.

The name of the IAM task execution role that grants the ECS agent permission to call AWS APIs on your behalf.

The role will be used to retrieve container images from ECR and create CloudWatch log groups.

---

##### `family`<sup>Optional</sup> <a name="family" id="@cloudkitect/components.CkFargateTaskDefinitionProps.property.family"></a>

```typescript
public readonly family: string;
```

- *Type:* string
- *Default:* Automatically generated name.

The name of a family that this task definition is registered to.

A family groups multiple versions of a task definition.

---

##### `proxyConfiguration`<sup>Optional</sup> <a name="proxyConfiguration" id="@cloudkitect/components.CkFargateTaskDefinitionProps.property.proxyConfiguration"></a>

```typescript
public readonly proxyConfiguration: ProxyConfiguration;
```

- *Type:* aws-cdk-lib.aws_ecs.ProxyConfiguration
- *Default:* No proxy configuration.

The configuration details for the App Mesh proxy.

---

##### `taskRole`<sup>Optional</sup> <a name="taskRole" id="@cloudkitect/components.CkFargateTaskDefinitionProps.property.taskRole"></a>

```typescript
public readonly taskRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole
- *Default:* A task role is automatically created for you.

The name of the IAM role that grants containers in the task permission to call AWS APIs on your behalf.

---

##### `volumes`<sup>Optional</sup> <a name="volumes" id="@cloudkitect/components.CkFargateTaskDefinitionProps.property.volumes"></a>

```typescript
public readonly volumes: Volume[];
```

- *Type:* aws-cdk-lib.aws_ecs.Volume[]
- *Default:* No volumes are passed to the Docker daemon on a container instance.

The list of volume definitions for the task.

For more information, see
[Task Definition Parameter Volumes](https://docs.aws.amazon.com/AmazonECS/latest/developerguide//task_definition_parameters.html#volumes).

---

##### `cpu`<sup>Optional</sup> <a name="cpu" id="@cloudkitect/components.CkFargateTaskDefinitionProps.property.cpu"></a>

```typescript
public readonly cpu: number;
```

- *Type:* number
- *Default:* 256

The number of cpu units used by the task.

For tasks using the Fargate launch type,
this field is required and you must use one of the following values,
which determines your range of valid values for the memory parameter:

256 (.25 vCPU) - Available memory values: 512 (0.5 GB), 1024 (1 GB), 2048 (2 GB)

512 (.5 vCPU) - Available memory values: 1024 (1 GB), 2048 (2 GB), 3072 (3 GB), 4096 (4 GB)

1024 (1 vCPU) - Available memory values: 2048 (2 GB), 3072 (3 GB), 4096 (4 GB), 5120 (5 GB), 6144 (6 GB), 7168 (7 GB), 8192 (8 GB)

2048 (2 vCPU) - Available memory values: Between 4096 (4 GB) and 16384 (16 GB) in increments of 1024 (1 GB)

4096 (4 vCPU) - Available memory values: Between 8192 (8 GB) and 30720 (30 GB) in increments of 1024 (1 GB)

8192 (8 vCPU) - Available memory values: Between 16384 (16 GB) and 61440 (60 GB) in increments of 4096 (4 GB)

16384 (16 vCPU) - Available memory values: Between 32768 (32 GB) and 122880 (120 GB) in increments of 8192 (8 GB)

---

##### `ephemeralStorageGiB`<sup>Optional</sup> <a name="ephemeralStorageGiB" id="@cloudkitect/components.CkFargateTaskDefinitionProps.property.ephemeralStorageGiB"></a>

```typescript
public readonly ephemeralStorageGiB: number;
```

- *Type:* number
- *Default:* 20

The amount (in GiB) of ephemeral storage to be allocated to the task.

The maximum supported value is 200 GiB.

NOTE: This parameter is only supported for tasks hosted on AWS Fargate using platform version 1.4.0 or later.

---

##### `memoryLimitMiB`<sup>Optional</sup> <a name="memoryLimitMiB" id="@cloudkitect/components.CkFargateTaskDefinitionProps.property.memoryLimitMiB"></a>

```typescript
public readonly memoryLimitMiB: number;
```

- *Type:* number
- *Default:* 512

The amount (in MiB) of memory used by the task.

For tasks using the Fargate launch type,
this field is required and you must use one of the following values, which determines your range of valid values for the cpu parameter:

512 (0.5 GB), 1024 (1 GB), 2048 (2 GB) - Available cpu values: 256 (.25 vCPU)

1024 (1 GB), 2048 (2 GB), 3072 (3 GB), 4096 (4 GB) - Available cpu values: 512 (.5 vCPU)

2048 (2 GB), 3072 (3 GB), 4096 (4 GB), 5120 (5 GB), 6144 (6 GB), 7168 (7 GB), 8192 (8 GB) - Available cpu values: 1024 (1 vCPU)

Between 4096 (4 GB) and 16384 (16 GB) in increments of 1024 (1 GB) - Available cpu values: 2048 (2 vCPU)

Between 8192 (8 GB) and 30720 (30 GB) in increments of 1024 (1 GB) - Available cpu values: 4096 (4 vCPU)

Between 16384 (16 GB) and 61440 (60 GB) in increments of 4096 (4 GB) - Available cpu values: 8192 (8 vCPU)

Between 32768 (32 GB) and 122880 (120 GB) in increments of 8192 (8 GB) - Available cpu values: 16384 (16 vCPU)

---

##### `runtimePlatform`<sup>Optional</sup> <a name="runtimePlatform" id="@cloudkitect/components.CkFargateTaskDefinitionProps.property.runtimePlatform"></a>

```typescript
public readonly runtimePlatform: RuntimePlatform;
```

- *Type:* aws-cdk-lib.aws_ecs.RuntimePlatform
- *Default:* Undefined.

The operating system that your task definitions are running on.

A runtimePlatform is supported only for tasks using the Fargate launch type.

---

### CkPublicApplicationLoadBalancerProps <a name="CkPublicApplicationLoadBalancerProps" id="@cloudkitect/components.CkPublicApplicationLoadBalancerProps"></a>

CloudKitect  Public Application Load Balancer component properties.

#### Initializer <a name="Initializer" id="@cloudkitect/components.CkPublicApplicationLoadBalancerProps.Initializer"></a>

```typescript
import { CkPublicApplicationLoadBalancerProps } from '@cloudkitect/components'

const ckPublicApplicationLoadBalancerProps: CkPublicApplicationLoadBalancerProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cloudkitect/components.CkPublicApplicationLoadBalancerProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | The VPC network to place the load balancer in. |
| <code><a href="#@cloudkitect/components.CkPublicApplicationLoadBalancerProps.property.crossZoneEnabled">crossZoneEnabled</a></code> | <code>boolean</code> | Indicates whether cross-zone load balancing is enabled. |
| <code><a href="#@cloudkitect/components.CkPublicApplicationLoadBalancerProps.property.deletionProtection">deletionProtection</a></code> | <code>boolean</code> | Indicates whether deletion protection is enabled. |
| <code><a href="#@cloudkitect/components.CkPublicApplicationLoadBalancerProps.property.denyAllIgwTraffic">denyAllIgwTraffic</a></code> | <code>boolean</code> | Indicates whether the load balancer blocks traffic through the Internet Gateway (IGW). |
| <code><a href="#@cloudkitect/components.CkPublicApplicationLoadBalancerProps.property.internetFacing">internetFacing</a></code> | <code>boolean</code> | Whether the load balancer has an internet-routable address. |
| <code><a href="#@cloudkitect/components.CkPublicApplicationLoadBalancerProps.property.loadBalancerName">loadBalancerName</a></code> | <code>string</code> | Name of the load balancer. |
| <code><a href="#@cloudkitect/components.CkPublicApplicationLoadBalancerProps.property.vpcSubnets">vpcSubnets</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetSelection</code> | Which subnets place the load balancer in. |
| <code><a href="#@cloudkitect/components.CkPublicApplicationLoadBalancerProps.property.clientKeepAlive">clientKeepAlive</a></code> | <code>aws-cdk-lib.Duration</code> | The client keep alive duration. |
| <code><a href="#@cloudkitect/components.CkPublicApplicationLoadBalancerProps.property.desyncMitigationMode">desyncMitigationMode</a></code> | <code>aws-cdk-lib.aws_elasticloadbalancingv2.DesyncMitigationMode</code> | Determines how the load balancer handles requests that might pose a security risk to your application. |
| <code><a href="#@cloudkitect/components.CkPublicApplicationLoadBalancerProps.property.dropInvalidHeaderFields">dropInvalidHeaderFields</a></code> | <code>boolean</code> | Indicates whether HTTP headers with invalid header fields are removed by the load balancer (true) or routed to targets (false). |
| <code><a href="#@cloudkitect/components.CkPublicApplicationLoadBalancerProps.property.http2Enabled">http2Enabled</a></code> | <code>boolean</code> | Indicates whether HTTP/2 is enabled. |
| <code><a href="#@cloudkitect/components.CkPublicApplicationLoadBalancerProps.property.idleTimeout">idleTimeout</a></code> | <code>aws-cdk-lib.Duration</code> | The load balancer idle timeout, in seconds. |
| <code><a href="#@cloudkitect/components.CkPublicApplicationLoadBalancerProps.property.ipAddressType">ipAddressType</a></code> | <code>aws-cdk-lib.aws_elasticloadbalancingv2.IpAddressType</code> | The type of IP addresses to use. |
| <code><a href="#@cloudkitect/components.CkPublicApplicationLoadBalancerProps.property.preserveHostHeader">preserveHostHeader</a></code> | <code>boolean</code> | Indicates whether the Application Load Balancer should preserve the host header in the HTTP request and send it to the target without any change. |
| <code><a href="#@cloudkitect/components.CkPublicApplicationLoadBalancerProps.property.preserveXffClientPort">preserveXffClientPort</a></code> | <code>boolean</code> | Indicates whether the X-Forwarded-For header should preserve the source port that the client used to connect to the load balancer. |
| <code><a href="#@cloudkitect/components.CkPublicApplicationLoadBalancerProps.property.securityGroup">securityGroup</a></code> | <code>aws-cdk-lib.aws_ec2.ISecurityGroup</code> | Security group to associate with this load balancer. |
| <code><a href="#@cloudkitect/components.CkPublicApplicationLoadBalancerProps.property.wafFailOpen">wafFailOpen</a></code> | <code>boolean</code> | Indicates whether to allow a WAF-enabled load balancer to route requests to targets if it is unable to forward the request to AWS WAF. |
| <code><a href="#@cloudkitect/components.CkPublicApplicationLoadBalancerProps.property.xAmznTlsVersionAndCipherSuiteHeaders">xAmznTlsVersionAndCipherSuiteHeaders</a></code> | <code>boolean</code> | Indicates whether the two headers (x-amzn-tls-version and x-amzn-tls-cipher-suite), which contain information about the negotiated TLS version and cipher suite, are added to the client request before sending it to the target. |
| <code><a href="#@cloudkitect/components.CkPublicApplicationLoadBalancerProps.property.xffHeaderProcessingMode">xffHeaderProcessingMode</a></code> | <code>aws-cdk-lib.aws_elasticloadbalancingv2.XffHeaderProcessingMode</code> | Enables you to modify, preserve, or remove the X-Forwarded-For header in the HTTP request before the Application Load Balancer sends the request to the target. |

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@cloudkitect/components.CkPublicApplicationLoadBalancerProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

The VPC network to place the load balancer in.

---

##### `crossZoneEnabled`<sup>Optional</sup> <a name="crossZoneEnabled" id="@cloudkitect/components.CkPublicApplicationLoadBalancerProps.property.crossZoneEnabled"></a>

```typescript
public readonly crossZoneEnabled: boolean;
```

- *Type:* boolean
- *Default:* false for Network Load Balancers and true for Application Load Balancers.

Indicates whether cross-zone load balancing is enabled.

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@cloudkitect/components.CkPublicApplicationLoadBalancerProps.property.deletionProtection"></a>

```typescript
public readonly deletionProtection: boolean;
```

- *Type:* boolean
- *Default:* false

Indicates whether deletion protection is enabled.

---

##### `denyAllIgwTraffic`<sup>Optional</sup> <a name="denyAllIgwTraffic" id="@cloudkitect/components.CkPublicApplicationLoadBalancerProps.property.denyAllIgwTraffic"></a>

```typescript
public readonly denyAllIgwTraffic: boolean;
```

- *Type:* boolean
- *Default:* false for internet-facing load balancers and true for internal load balancers

Indicates whether the load balancer blocks traffic through the Internet Gateway (IGW).

---

##### `internetFacing`<sup>Optional</sup> <a name="internetFacing" id="@cloudkitect/components.CkPublicApplicationLoadBalancerProps.property.internetFacing"></a>

```typescript
public readonly internetFacing: boolean;
```

- *Type:* boolean
- *Default:* false

Whether the load balancer has an internet-routable address.

---

##### `loadBalancerName`<sup>Optional</sup> <a name="loadBalancerName" id="@cloudkitect/components.CkPublicApplicationLoadBalancerProps.property.loadBalancerName"></a>

```typescript
public readonly loadBalancerName: string;
```

- *Type:* string
- *Default:* Automatically generated name.

Name of the load balancer.

---

##### `vpcSubnets`<sup>Optional</sup> <a name="vpcSubnets" id="@cloudkitect/components.CkPublicApplicationLoadBalancerProps.property.vpcSubnets"></a>

```typescript
public readonly vpcSubnets: SubnetSelection;
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetSelection
- *Default:* the Vpc default strategy.

Which subnets place the load balancer in.

---

##### `clientKeepAlive`<sup>Optional</sup> <a name="clientKeepAlive" id="@cloudkitect/components.CkPublicApplicationLoadBalancerProps.property.clientKeepAlive"></a>

```typescript
public readonly clientKeepAlive: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* Duration.seconds(3600)

The client keep alive duration.

The valid range is 60 to 604800 seconds (1 minute to 7 days).

---

##### `desyncMitigationMode`<sup>Optional</sup> <a name="desyncMitigationMode" id="@cloudkitect/components.CkPublicApplicationLoadBalancerProps.property.desyncMitigationMode"></a>

```typescript
public readonly desyncMitigationMode: DesyncMitigationMode;
```

- *Type:* aws-cdk-lib.aws_elasticloadbalancingv2.DesyncMitigationMode
- *Default:* DesyncMitigationMode.DEFENSIVE

Determines how the load balancer handles requests that might pose a security risk to your application.

---

##### `dropInvalidHeaderFields`<sup>Optional</sup> <a name="dropInvalidHeaderFields" id="@cloudkitect/components.CkPublicApplicationLoadBalancerProps.property.dropInvalidHeaderFields"></a>

```typescript
public readonly dropInvalidHeaderFields: boolean;
```

- *Type:* boolean
- *Default:* false

Indicates whether HTTP headers with invalid header fields are removed by the load balancer (true) or routed to targets (false).

---

##### `http2Enabled`<sup>Optional</sup> <a name="http2Enabled" id="@cloudkitect/components.CkPublicApplicationLoadBalancerProps.property.http2Enabled"></a>

```typescript
public readonly http2Enabled: boolean;
```

- *Type:* boolean
- *Default:* true

Indicates whether HTTP/2 is enabled.

---

##### `idleTimeout`<sup>Optional</sup> <a name="idleTimeout" id="@cloudkitect/components.CkPublicApplicationLoadBalancerProps.property.idleTimeout"></a>

```typescript
public readonly idleTimeout: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* 60

The load balancer idle timeout, in seconds.

---

##### `ipAddressType`<sup>Optional</sup> <a name="ipAddressType" id="@cloudkitect/components.CkPublicApplicationLoadBalancerProps.property.ipAddressType"></a>

```typescript
public readonly ipAddressType: IpAddressType;
```

- *Type:* aws-cdk-lib.aws_elasticloadbalancingv2.IpAddressType
- *Default:* IpAddressType.IPV4

The type of IP addresses to use.

---

##### `preserveHostHeader`<sup>Optional</sup> <a name="preserveHostHeader" id="@cloudkitect/components.CkPublicApplicationLoadBalancerProps.property.preserveHostHeader"></a>

```typescript
public readonly preserveHostHeader: boolean;
```

- *Type:* boolean
- *Default:* false

Indicates whether the Application Load Balancer should preserve the host header in the HTTP request and send it to the target without any change.

---

##### `preserveXffClientPort`<sup>Optional</sup> <a name="preserveXffClientPort" id="@cloudkitect/components.CkPublicApplicationLoadBalancerProps.property.preserveXffClientPort"></a>

```typescript
public readonly preserveXffClientPort: boolean;
```

- *Type:* boolean
- *Default:* false

Indicates whether the X-Forwarded-For header should preserve the source port that the client used to connect to the load balancer.

---

##### `securityGroup`<sup>Optional</sup> <a name="securityGroup" id="@cloudkitect/components.CkPublicApplicationLoadBalancerProps.property.securityGroup"></a>

```typescript
public readonly securityGroup: ISecurityGroup;
```

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup
- *Default:* A security group is created

Security group to associate with this load balancer.

---

##### `wafFailOpen`<sup>Optional</sup> <a name="wafFailOpen" id="@cloudkitect/components.CkPublicApplicationLoadBalancerProps.property.wafFailOpen"></a>

```typescript
public readonly wafFailOpen: boolean;
```

- *Type:* boolean
- *Default:* false

Indicates whether to allow a WAF-enabled load balancer to route requests to targets if it is unable to forward the request to AWS WAF.

---

##### `xAmznTlsVersionAndCipherSuiteHeaders`<sup>Optional</sup> <a name="xAmznTlsVersionAndCipherSuiteHeaders" id="@cloudkitect/components.CkPublicApplicationLoadBalancerProps.property.xAmznTlsVersionAndCipherSuiteHeaders"></a>

```typescript
public readonly xAmznTlsVersionAndCipherSuiteHeaders: boolean;
```

- *Type:* boolean
- *Default:* false

Indicates whether the two headers (x-amzn-tls-version and x-amzn-tls-cipher-suite), which contain information about the negotiated TLS version and cipher suite, are added to the client request before sending it to the target.

The x-amzn-tls-version header has information about the TLS protocol version negotiated with the client,
and the x-amzn-tls-cipher-suite header has information about the cipher suite negotiated with the client.

Both headers are in OpenSSL format.

---

##### `xffHeaderProcessingMode`<sup>Optional</sup> <a name="xffHeaderProcessingMode" id="@cloudkitect/components.CkPublicApplicationLoadBalancerProps.property.xffHeaderProcessingMode"></a>

```typescript
public readonly xffHeaderProcessingMode: XffHeaderProcessingMode;
```

- *Type:* aws-cdk-lib.aws_elasticloadbalancingv2.XffHeaderProcessingMode
- *Default:* XffHeaderProcessingMode.APPEND

Enables you to modify, preserve, or remove the X-Forwarded-For header in the HTTP request before the Application Load Balancer sends the request to the target.

---

### CkRepositoryProps <a name="CkRepositoryProps" id="@cloudkitect/components.CkRepositoryProps"></a>

CloudKitect ECR Repository component properties.

#### Initializer <a name="Initializer" id="@cloudkitect/components.CkRepositoryProps.Initializer"></a>

```typescript
import { CkRepositoryProps } from '@cloudkitect/components'

const ckRepositoryProps: CkRepositoryProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cloudkitect/components.CkRepositoryProps.property.autoDeleteImages">autoDeleteImages</a></code> | <code>boolean</code> | Whether all images should be automatically deleted when the repository is removed from the stack or when the stack is deleted. |
| <code><a href="#@cloudkitect/components.CkRepositoryProps.property.emptyOnDelete">emptyOnDelete</a></code> | <code>boolean</code> | If true, deleting the repository force deletes the contents of the repository. |
| <code><a href="#@cloudkitect/components.CkRepositoryProps.property.encryption">encryption</a></code> | <code>aws-cdk-lib.aws_ecr.RepositoryEncryption</code> | The kind of server-side encryption to apply to this repository. |
| <code><a href="#@cloudkitect/components.CkRepositoryProps.property.encryptionKey">encryptionKey</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | External KMS key to use for repository encryption. |
| <code><a href="#@cloudkitect/components.CkRepositoryProps.property.imageScanOnPush">imageScanOnPush</a></code> | <code>boolean</code> | Enable the scan on push when creating the repository. |
| <code><a href="#@cloudkitect/components.CkRepositoryProps.property.imageTagMutability">imageTagMutability</a></code> | <code>aws-cdk-lib.aws_ecr.TagMutability</code> | The tag mutability setting for the repository. |
| <code><a href="#@cloudkitect/components.CkRepositoryProps.property.lifecycleRegistryId">lifecycleRegistryId</a></code> | <code>string</code> | The AWS account ID associated with the registry that contains the repository. |
| <code><a href="#@cloudkitect/components.CkRepositoryProps.property.lifecycleRules">lifecycleRules</a></code> | <code>aws-cdk-lib.aws_ecr.LifecycleRule[]</code> | Life cycle rules to apply to this registry. |
| <code><a href="#@cloudkitect/components.CkRepositoryProps.property.removalPolicy">removalPolicy</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | Determine what happens to the repository when the resource/stack is deleted. |
| <code><a href="#@cloudkitect/components.CkRepositoryProps.property.repositoryName">repositoryName</a></code> | <code>string</code> | Name for this repository. |

---

##### ~~`autoDeleteImages`~~<sup>Optional</sup> <a name="autoDeleteImages" id="@cloudkitect/components.CkRepositoryProps.property.autoDeleteImages"></a>

- *Deprecated:* Use `emptyOnDelete` instead.

```typescript
public readonly autoDeleteImages: boolean;
```

- *Type:* boolean
- *Default:* false

Whether all images should be automatically deleted when the repository is removed from the stack or when the stack is deleted.

Requires the `removalPolicy` to be set to `RemovalPolicy.DESTROY`.

---

##### `emptyOnDelete`<sup>Optional</sup> <a name="emptyOnDelete" id="@cloudkitect/components.CkRepositoryProps.property.emptyOnDelete"></a>

```typescript
public readonly emptyOnDelete: boolean;
```

- *Type:* boolean
- *Default:* false

If true, deleting the repository force deletes the contents of the repository.

If false, the repository must be empty before attempting to delete it.

---

##### `encryption`<sup>Optional</sup> <a name="encryption" id="@cloudkitect/components.CkRepositoryProps.property.encryption"></a>

```typescript
public readonly encryption: RepositoryEncryption;
```

- *Type:* aws-cdk-lib.aws_ecr.RepositoryEncryption
- *Default:* `KMS` if `encryptionKey` is specified, or `AES256` otherwise.

The kind of server-side encryption to apply to this repository.

If you choose KMS, you can specify a KMS key via `encryptionKey`. If
encryptionKey is not specified, an AWS managed KMS key is used.

---

##### `encryptionKey`<sup>Optional</sup> <a name="encryptionKey" id="@cloudkitect/components.CkRepositoryProps.property.encryptionKey"></a>

```typescript
public readonly encryptionKey: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey
- *Default:* If encryption is set to `KMS` and this property is undefined, an AWS managed KMS key is used.

External KMS key to use for repository encryption.

The 'encryption' property must be either not specified or set to "KMS".
An error will be emitted if encryption is set to "AES256".

---

##### `imageScanOnPush`<sup>Optional</sup> <a name="imageScanOnPush" id="@cloudkitect/components.CkRepositoryProps.property.imageScanOnPush"></a>

```typescript
public readonly imageScanOnPush: boolean;
```

- *Type:* boolean
- *Default:* false

Enable the scan on push when creating the repository.

---

##### `imageTagMutability`<sup>Optional</sup> <a name="imageTagMutability" id="@cloudkitect/components.CkRepositoryProps.property.imageTagMutability"></a>

```typescript
public readonly imageTagMutability: TagMutability;
```

- *Type:* aws-cdk-lib.aws_ecr.TagMutability
- *Default:* TagMutability.MUTABLE

The tag mutability setting for the repository.

If this parameter is omitted, the default setting of MUTABLE will be used which will allow image tags to be overwritten.

---

##### `lifecycleRegistryId`<sup>Optional</sup> <a name="lifecycleRegistryId" id="@cloudkitect/components.CkRepositoryProps.property.lifecycleRegistryId"></a>

```typescript
public readonly lifecycleRegistryId: string;
```

- *Type:* string
- *Default:* The default registry is assumed.

The AWS account ID associated with the registry that contains the repository.

> [https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_PutLifecyclePolicy.html](https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_PutLifecyclePolicy.html)

---

##### `lifecycleRules`<sup>Optional</sup> <a name="lifecycleRules" id="@cloudkitect/components.CkRepositoryProps.property.lifecycleRules"></a>

```typescript
public readonly lifecycleRules: LifecycleRule[];
```

- *Type:* aws-cdk-lib.aws_ecr.LifecycleRule[]
- *Default:* No life cycle rules

Life cycle rules to apply to this registry.

---

##### `removalPolicy`<sup>Optional</sup> <a name="removalPolicy" id="@cloudkitect/components.CkRepositoryProps.property.removalPolicy"></a>

```typescript
public readonly removalPolicy: RemovalPolicy;
```

- *Type:* aws-cdk-lib.RemovalPolicy
- *Default:* RemovalPolicy.Retain

Determine what happens to the repository when the resource/stack is deleted.

---

##### `repositoryName`<sup>Optional</sup> <a name="repositoryName" id="@cloudkitect/components.CkRepositoryProps.property.repositoryName"></a>

```typescript
public readonly repositoryName: string;
```

- *Type:* string
- *Default:* Automatically generated name.

Name for this repository.

The repository name must start with a letter and can only contain lowercase letters, numbers, hyphens, underscores, and forward slashes.

> If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.

---

### CkStackProps <a name="CkStackProps" id="@cloudkitect/components.CkStackProps"></a>

CloudKitect Stack Component Properties.

#### Initializer <a name="Initializer" id="@cloudkitect/components.CkStackProps.Initializer"></a>

```typescript
import { CkStackProps } from '@cloudkitect/components'

const ckStackProps: CkStackProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cloudkitect/components.CkStackProps.property.analyticsReporting">analyticsReporting</a></code> | <code>boolean</code> | Include runtime versioning information in this Stack. |
| <code><a href="#@cloudkitect/components.CkStackProps.property.crossRegionReferences">crossRegionReferences</a></code> | <code>boolean</code> | Enable this flag to allow native cross region stack references. |
| <code><a href="#@cloudkitect/components.CkStackProps.property.description">description</a></code> | <code>string</code> | A description of the stack. |
| <code><a href="#@cloudkitect/components.CkStackProps.property.env">env</a></code> | <code>aws-cdk-lib.Environment</code> | The AWS environment (account/region) where this stack will be deployed. |
| <code><a href="#@cloudkitect/components.CkStackProps.property.permissionsBoundary">permissionsBoundary</a></code> | <code>aws-cdk-lib.PermissionsBoundary</code> | Options for applying a permissions boundary to all IAM Roles and Users created within this Stage. |
| <code><a href="#@cloudkitect/components.CkStackProps.property.stackName">stackName</a></code> | <code>string</code> | Name to deploy the stack with. |
| <code><a href="#@cloudkitect/components.CkStackProps.property.suppressTemplateIndentation">suppressTemplateIndentation</a></code> | <code>boolean</code> | Enable this flag to suppress indentation in generated CloudFormation templates. |
| <code><a href="#@cloudkitect/components.CkStackProps.property.synthesizer">synthesizer</a></code> | <code>aws-cdk-lib.IStackSynthesizer</code> | Synthesis method to use while deploying this stack. |
| <code><a href="#@cloudkitect/components.CkStackProps.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Stack tags that will be applied to all the taggable resources and the stack itself. |
| <code><a href="#@cloudkitect/components.CkStackProps.property.terminationProtection">terminationProtection</a></code> | <code>boolean</code> | Whether to enable termination protection for this stack. |
| <code><a href="#@cloudkitect/components.CkStackProps.property.ckAccountType">ckAccountType</a></code> | <code><a href="#@cloudkitect/components.CkAccountType">CkAccountType</a></code> | AccountType where the stack will be deployed. |
| <code><a href="#@cloudkitect/components.CkStackProps.property.ckApplication">ckApplication</a></code> | <code>string</code> | Name of the application deployed by the stack. |
| <code><a href="#@cloudkitect/components.CkStackProps.property.ckCompany">ckCompany</a></code> | <code>string</code> | Company the application is associated with. |
| <code><a href="#@cloudkitect/components.CkStackProps.property.ckPrefix">ckPrefix</a></code> | <code>string</code> | Any prefix for the stack name to avoid conflicts. |
| <code><a href="#@cloudkitect/components.CkStackProps.property.ckRemovalPolicyOverride">ckRemovalPolicyOverride</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | Flag to control the removalPolicy override for the components. |

---

##### `analyticsReporting`<sup>Optional</sup> <a name="analyticsReporting" id="@cloudkitect/components.CkStackProps.property.analyticsReporting"></a>

```typescript
public readonly analyticsReporting: boolean;
```

- *Type:* boolean
- *Default:* `analyticsReporting` setting of containing `App`, or value of 'aws:cdk:version-reporting' context key

Include runtime versioning information in this Stack.

---

##### `crossRegionReferences`<sup>Optional</sup> <a name="crossRegionReferences" id="@cloudkitect/components.CkStackProps.property.crossRegionReferences"></a>

```typescript
public readonly crossRegionReferences: boolean;
```

- *Type:* boolean
- *Default:* false

Enable this flag to allow native cross region stack references.

Enabling this will create a CloudFormation custom resource
in both the producing stack and consuming stack in order to perform the export/import

This feature is currently experimental

---

##### `description`<sup>Optional</sup> <a name="description" id="@cloudkitect/components.CkStackProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* No description.

A description of the stack.

---

##### `env`<sup>Optional</sup> <a name="env" id="@cloudkitect/components.CkStackProps.property.env"></a>

```typescript
public readonly env: Environment;
```

- *Type:* aws-cdk-lib.Environment
- *Default:* The environment of the containing `Stage` if available, otherwise create the stack will be environment-agnostic.

The AWS environment (account/region) where this stack will be deployed.

Set the `region`/`account` fields of `env` to either a concrete value to
select the indicated environment (recommended for production stacks), or to
the values of environment variables
`CDK_DEFAULT_REGION`/`CDK_DEFAULT_ACCOUNT` to let the target environment
depend on the AWS credentials/configuration that the CDK CLI is executed
under (recommended for development stacks).

If the `Stack` is instantiated inside a `Stage`, any undefined
`region`/`account` fields from `env` will default to the same field on the
encompassing `Stage`, if configured there.

If either `region` or `account` are not set nor inherited from `Stage`, the
Stack will be considered "*environment-agnostic*"". Environment-agnostic
stacks can be deployed to any environment but may not be able to take
advantage of all features of the CDK. For example, they will not be able to
use environmental context lookups such as `ec2.Vpc.fromLookup` and will not
automatically translate Service Principals to the right format based on the
environment's AWS partition, and other such enhancements.

---

*Example*

```typescript
// Use a concrete account and region to deploy this stack to:
// `.account` and `.region` will simply return these values.
new Stack(app, 'Stack1', {
  env: {
    account: '123456789012',
    region: 'us-east-1'
  },
});

// Use the CLI's current credentials to determine the target environment:
// `.account` and `.region` will reflect the account+region the CLI
// is configured to use (based on the user CLI credentials)
new Stack(app, 'Stack2', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION
  },
});

// Define multiple stacks stage associated with an environment
const myStage = new Stage(app, 'MyStage', {
  env: {
    account: '123456789012',
    region: 'us-east-1'
  }
});

// both of these stacks will use the stage's account/region:
// `.account` and `.region` will resolve to the concrete values as above
new MyStack(myStage, 'Stack1');
new YourStack(myStage, 'Stack2');

// Define an environment-agnostic stack:
// `.account` and `.region` will resolve to `{ "Ref": "AWS::AccountId" }` and `{ "Ref": "AWS::Region" }` respectively.
// which will only resolve to actual values by CloudFormation during deployment.
new MyStack(app, 'Stack1');
```


##### `permissionsBoundary`<sup>Optional</sup> <a name="permissionsBoundary" id="@cloudkitect/components.CkStackProps.property.permissionsBoundary"></a>

```typescript
public readonly permissionsBoundary: PermissionsBoundary;
```

- *Type:* aws-cdk-lib.PermissionsBoundary
- *Default:* no permissions boundary is applied

Options for applying a permissions boundary to all IAM Roles and Users created within this Stage.

---

##### `stackName`<sup>Optional</sup> <a name="stackName" id="@cloudkitect/components.CkStackProps.property.stackName"></a>

```typescript
public readonly stackName: string;
```

- *Type:* string
- *Default:* Derived from construct path.

Name to deploy the stack with.

---

##### `suppressTemplateIndentation`<sup>Optional</sup> <a name="suppressTemplateIndentation" id="@cloudkitect/components.CkStackProps.property.suppressTemplateIndentation"></a>

```typescript
public readonly suppressTemplateIndentation: boolean;
```

- *Type:* boolean
- *Default:* the value of `@aws-cdk/core:suppressTemplateIndentation`, or `false` if that is not set.

Enable this flag to suppress indentation in generated CloudFormation templates.

If not specified, the value of the `@aws-cdk/core:suppressTemplateIndentation`
context key will be used. If that is not specified, then the
default value `false` will be used.

---

##### `synthesizer`<sup>Optional</sup> <a name="synthesizer" id="@cloudkitect/components.CkStackProps.property.synthesizer"></a>

```typescript
public readonly synthesizer: IStackSynthesizer;
```

- *Type:* aws-cdk-lib.IStackSynthesizer
- *Default:* The synthesizer specified on `App`, or `DefaultStackSynthesizer` otherwise.

Synthesis method to use while deploying this stack.

The Stack Synthesizer controls aspects of synthesis and deployment,
like how assets are referenced and what IAM roles to use. For more
information, see the README of the main CDK package.

If not specified, the `defaultStackSynthesizer` from `App` will be used.
If that is not specified, `DefaultStackSynthesizer` is used if
`@aws-cdk/core:newStyleStackSynthesis` is set to `true` or the CDK major
version is v2. In CDK v1 `LegacyStackSynthesizer` is the default if no
other synthesizer is specified.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cloudkitect/components.CkStackProps.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* {}

Stack tags that will be applied to all the taggable resources and the stack itself.

---

##### `terminationProtection`<sup>Optional</sup> <a name="terminationProtection" id="@cloudkitect/components.CkStackProps.property.terminationProtection"></a>

```typescript
public readonly terminationProtection: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to enable termination protection for this stack.

---

##### `ckAccountType`<sup>Required</sup> <a name="ckAccountType" id="@cloudkitect/components.CkStackProps.property.ckAccountType"></a>

```typescript
public readonly ckAccountType: CkAccountType;
```

- *Type:* <a href="#@cloudkitect/components.CkAccountType">CkAccountType</a>

AccountType where the stack will be deployed.

---

##### `ckApplication`<sup>Required</sup> <a name="ckApplication" id="@cloudkitect/components.CkStackProps.property.ckApplication"></a>

```typescript
public readonly ckApplication: string;
```

- *Type:* string

Name of the application deployed by the stack.

---

##### `ckCompany`<sup>Required</sup> <a name="ckCompany" id="@cloudkitect/components.CkStackProps.property.ckCompany"></a>

```typescript
public readonly ckCompany: string;
```

- *Type:* string

Company the application is associated with.

---

##### `ckPrefix`<sup>Optional</sup> <a name="ckPrefix" id="@cloudkitect/components.CkStackProps.property.ckPrefix"></a>

```typescript
public readonly ckPrefix: string;
```

- *Type:* string
- *Default:* empty

Any prefix for the stack name to avoid conflicts.

---

##### `ckRemovalPolicyOverride`<sup>Optional</sup> <a name="ckRemovalPolicyOverride" id="@cloudkitect/components.CkStackProps.property.ckRemovalPolicyOverride"></a>

```typescript
public readonly ckRemovalPolicyOverride: RemovalPolicy;
```

- *Type:* aws-cdk-lib.RemovalPolicy
- *Default:* undefined, meaning it will use environment specific removal policy

Flag to control the removalPolicy override for the components.

---

### CkTableV2Props <a name="CkTableV2Props" id="@cloudkitect/components.CkTableV2Props"></a>

CloudKitect DynamodDB Table Component Properties.

#### Initializer <a name="Initializer" id="@cloudkitect/components.CkTableV2Props.Initializer"></a>

```typescript
import { CkTableV2Props } from '@cloudkitect/components'

const ckTableV2Props: CkTableV2Props = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cloudkitect/components.CkTableV2Props.property.contributorInsights">contributorInsights</a></code> | <code>boolean</code> | Whether CloudWatch contributor insights is enabled. |
| <code><a href="#@cloudkitect/components.CkTableV2Props.property.deletionProtection">deletionProtection</a></code> | <code>boolean</code> | Whether deletion protection is enabled. |
| <code><a href="#@cloudkitect/components.CkTableV2Props.property.kinesisStream">kinesisStream</a></code> | <code>aws-cdk-lib.aws_kinesis.IStream</code> | Kinesis Data Stream to capture item level changes. |
| <code><a href="#@cloudkitect/components.CkTableV2Props.property.pointInTimeRecovery">pointInTimeRecovery</a></code> | <code>boolean</code> | Whether point-in-time recovery is enabled. |
| <code><a href="#@cloudkitect/components.CkTableV2Props.property.tableClass">tableClass</a></code> | <code>aws-cdk-lib.aws_dynamodb.TableClass</code> | The table class. |
| <code><a href="#@cloudkitect/components.CkTableV2Props.property.tags">tags</a></code> | <code>aws-cdk-lib.CfnTag[]</code> | Tags to be applied to the table or replica table. |
| <code><a href="#@cloudkitect/components.CkTableV2Props.property.partitionKey">partitionKey</a></code> | <code>aws-cdk-lib.aws_dynamodb.Attribute</code> | Partition key attribute definition. |
| <code><a href="#@cloudkitect/components.CkTableV2Props.property.billing">billing</a></code> | <code>aws-cdk-lib.aws_dynamodb.Billing</code> | The billing mode and capacity settings to apply to the table. |
| <code><a href="#@cloudkitect/components.CkTableV2Props.property.dynamoStream">dynamoStream</a></code> | <code>aws-cdk-lib.aws_dynamodb.StreamViewType</code> | When an item in the table is modified, StreamViewType determines what information is written to the stream. |
| <code><a href="#@cloudkitect/components.CkTableV2Props.property.encryption">encryption</a></code> | <code>aws-cdk-lib.aws_dynamodb.TableEncryptionV2</code> | The server-side encryption. |
| <code><a href="#@cloudkitect/components.CkTableV2Props.property.globalSecondaryIndexes">globalSecondaryIndexes</a></code> | <code>aws-cdk-lib.aws_dynamodb.GlobalSecondaryIndexPropsV2[]</code> | Global secondary indexes. |
| <code><a href="#@cloudkitect/components.CkTableV2Props.property.localSecondaryIndexes">localSecondaryIndexes</a></code> | <code>aws-cdk-lib.aws_dynamodb.LocalSecondaryIndexProps[]</code> | Local secondary indexes. |
| <code><a href="#@cloudkitect/components.CkTableV2Props.property.removalPolicy">removalPolicy</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | The removal policy applied to the table. |
| <code><a href="#@cloudkitect/components.CkTableV2Props.property.replicas">replicas</a></code> | <code>aws-cdk-lib.aws_dynamodb.ReplicaTableProps[]</code> | Replica tables to deploy with the primary table. |
| <code><a href="#@cloudkitect/components.CkTableV2Props.property.sortKey">sortKey</a></code> | <code>aws-cdk-lib.aws_dynamodb.Attribute</code> | Sort key attribute definition. |
| <code><a href="#@cloudkitect/components.CkTableV2Props.property.tableName">tableName</a></code> | <code>string</code> | The name of the table. |
| <code><a href="#@cloudkitect/components.CkTableV2Props.property.timeToLiveAttribute">timeToLiveAttribute</a></code> | <code>string</code> | The name of the TTL attribute. |

---

##### `contributorInsights`<sup>Optional</sup> <a name="contributorInsights" id="@cloudkitect/components.CkTableV2Props.property.contributorInsights"></a>

```typescript
public readonly contributorInsights: boolean;
```

- *Type:* boolean
- *Default:* false

Whether CloudWatch contributor insights is enabled.

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@cloudkitect/components.CkTableV2Props.property.deletionProtection"></a>

```typescript
public readonly deletionProtection: boolean;
```

- *Type:* boolean
- *Default:* false

Whether deletion protection is enabled.

---

##### `kinesisStream`<sup>Optional</sup> <a name="kinesisStream" id="@cloudkitect/components.CkTableV2Props.property.kinesisStream"></a>

```typescript
public readonly kinesisStream: IStream;
```

- *Type:* aws-cdk-lib.aws_kinesis.IStream
- *Default:* no Kinesis Data Stream

Kinesis Data Stream to capture item level changes.

---

##### `pointInTimeRecovery`<sup>Optional</sup> <a name="pointInTimeRecovery" id="@cloudkitect/components.CkTableV2Props.property.pointInTimeRecovery"></a>

```typescript
public readonly pointInTimeRecovery: boolean;
```

- *Type:* boolean
- *Default:* false

Whether point-in-time recovery is enabled.

---

##### `tableClass`<sup>Optional</sup> <a name="tableClass" id="@cloudkitect/components.CkTableV2Props.property.tableClass"></a>

```typescript
public readonly tableClass: TableClass;
```

- *Type:* aws-cdk-lib.aws_dynamodb.TableClass
- *Default:* TableClass.STANDARD

The table class.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cloudkitect/components.CkTableV2Props.property.tags"></a>

```typescript
public readonly tags: CfnTag[];
```

- *Type:* aws-cdk-lib.CfnTag[]
- *Default:* no tags

Tags to be applied to the table or replica table.

---

##### `partitionKey`<sup>Required</sup> <a name="partitionKey" id="@cloudkitect/components.CkTableV2Props.property.partitionKey"></a>

```typescript
public readonly partitionKey: Attribute;
```

- *Type:* aws-cdk-lib.aws_dynamodb.Attribute

Partition key attribute definition.

---

##### `billing`<sup>Optional</sup> <a name="billing" id="@cloudkitect/components.CkTableV2Props.property.billing"></a>

```typescript
public readonly billing: Billing;
```

- *Type:* aws-cdk-lib.aws_dynamodb.Billing
- *Default:* Billing.onDemand()

The billing mode and capacity settings to apply to the table.

---

##### `dynamoStream`<sup>Optional</sup> <a name="dynamoStream" id="@cloudkitect/components.CkTableV2Props.property.dynamoStream"></a>

```typescript
public readonly dynamoStream: StreamViewType;
```

- *Type:* aws-cdk-lib.aws_dynamodb.StreamViewType
- *Default:* streams are disabled if replicas are not configured and this property is not specified. If this property is not specified when replicas are configured, then NEW_AND_OLD_IMAGES will be the StreamViewType for all replicas

When an item in the table is modified, StreamViewType determines what information is written to the stream.

---

##### `encryption`<sup>Optional</sup> <a name="encryption" id="@cloudkitect/components.CkTableV2Props.property.encryption"></a>

```typescript
public readonly encryption: TableEncryptionV2;
```

- *Type:* aws-cdk-lib.aws_dynamodb.TableEncryptionV2
- *Default:* TableEncryptionV2.dynamoOwnedKey()

The server-side encryption.

---

##### `globalSecondaryIndexes`<sup>Optional</sup> <a name="globalSecondaryIndexes" id="@cloudkitect/components.CkTableV2Props.property.globalSecondaryIndexes"></a>

```typescript
public readonly globalSecondaryIndexes: GlobalSecondaryIndexPropsV2[];
```

- *Type:* aws-cdk-lib.aws_dynamodb.GlobalSecondaryIndexPropsV2[]
- *Default:* no global secondary indexes

Global secondary indexes.

Note: You can provide a maximum of 20 global secondary indexes.

---

##### `localSecondaryIndexes`<sup>Optional</sup> <a name="localSecondaryIndexes" id="@cloudkitect/components.CkTableV2Props.property.localSecondaryIndexes"></a>

```typescript
public readonly localSecondaryIndexes: LocalSecondaryIndexProps[];
```

- *Type:* aws-cdk-lib.aws_dynamodb.LocalSecondaryIndexProps[]
- *Default:* no local secondary indexes

Local secondary indexes.

Note: You can only provide a maximum of 5 local secondary indexes.

---

##### `removalPolicy`<sup>Optional</sup> <a name="removalPolicy" id="@cloudkitect/components.CkTableV2Props.property.removalPolicy"></a>

```typescript
public readonly removalPolicy: RemovalPolicy;
```

- *Type:* aws-cdk-lib.RemovalPolicy
- *Default:* RemovalPolicy.RETAIN

The removal policy applied to the table.

---

##### `replicas`<sup>Optional</sup> <a name="replicas" id="@cloudkitect/components.CkTableV2Props.property.replicas"></a>

```typescript
public readonly replicas: ReplicaTableProps[];
```

- *Type:* aws-cdk-lib.aws_dynamodb.ReplicaTableProps[]
- *Default:* no replica tables

Replica tables to deploy with the primary table.

Note: Adding replica tables allows you to use your table as a global table. You
cannot specify a replica table in the region that the primary table will be deployed
to. Replica tables will only be supported if the stack deployment region is defined.

---

##### `sortKey`<sup>Optional</sup> <a name="sortKey" id="@cloudkitect/components.CkTableV2Props.property.sortKey"></a>

```typescript
public readonly sortKey: Attribute;
```

- *Type:* aws-cdk-lib.aws_dynamodb.Attribute
- *Default:* no sort key

Sort key attribute definition.

---

##### `tableName`<sup>Optional</sup> <a name="tableName" id="@cloudkitect/components.CkTableV2Props.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string
- *Default:* generated by CloudFormation

The name of the table.

---

##### `timeToLiveAttribute`<sup>Optional</sup> <a name="timeToLiveAttribute" id="@cloudkitect/components.CkTableV2Props.property.timeToLiveAttribute"></a>

```typescript
public readonly timeToLiveAttribute: string;
```

- *Type:* string
- *Default:* TTL is disabled

The name of the TTL attribute.

---

### CkTag <a name="CkTag" id="@cloudkitect/components.CkTag"></a>

Interface for tags.

#### Initializer <a name="Initializer" id="@cloudkitect/components.CkTag.Initializer"></a>

```typescript
import { CkTag } from '@cloudkitect/components'

const ckTag: CkTag = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cloudkitect/components.CkTag.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cloudkitect/components.CkTag.property.value">value</a></code> | <code>string</code> | *No description.* |

---

##### `key`<sup>Required</sup> <a name="key" id="@cloudkitect/components.CkTag.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cloudkitect/components.CkTag.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

### CkVpcProps <a name="CkVpcProps" id="@cloudkitect/components.CkVpcProps"></a>

CloudKitect VPC Component properties.

#### Initializer <a name="Initializer" id="@cloudkitect/components.CkVpcProps.Initializer"></a>

```typescript
import { CkVpcProps } from '@cloudkitect/components'

const ckVpcProps: CkVpcProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cloudkitect/components.CkVpcProps.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | Availability zones this VPC spans. |
| <code><a href="#@cloudkitect/components.CkVpcProps.property.cidr">cidr</a></code> | <code>string</code> | The CIDR range to use for the VPC, e.g. '10.0.0.0/16'. |
| <code><a href="#@cloudkitect/components.CkVpcProps.property.createInternetGateway">createInternetGateway</a></code> | <code>boolean</code> | If set to false then disable the creation of the default internet gateway. |
| <code><a href="#@cloudkitect/components.CkVpcProps.property.defaultInstanceTenancy">defaultInstanceTenancy</a></code> | <code>aws-cdk-lib.aws_ec2.DefaultInstanceTenancy</code> | The default tenancy of instances launched into the VPC. |
| <code><a href="#@cloudkitect/components.CkVpcProps.property.enableDnsHostnames">enableDnsHostnames</a></code> | <code>boolean</code> | Indicates whether the instances launched in the VPC get public DNS hostnames. |
| <code><a href="#@cloudkitect/components.CkVpcProps.property.enableDnsSupport">enableDnsSupport</a></code> | <code>boolean</code> | Indicates whether the DNS resolution is supported for the VPC. |
| <code><a href="#@cloudkitect/components.CkVpcProps.property.flowLogs">flowLogs</a></code> | <code>{[ key: string ]: aws-cdk-lib.aws_ec2.FlowLogOptions}</code> | Flow logs to add to this VPC. |
| <code><a href="#@cloudkitect/components.CkVpcProps.property.gatewayEndpoints">gatewayEndpoints</a></code> | <code>{[ key: string ]: aws-cdk-lib.aws_ec2.GatewayVpcEndpointOptions}</code> | Gateway endpoints to add to this VPC. |
| <code><a href="#@cloudkitect/components.CkVpcProps.property.ipAddresses">ipAddresses</a></code> | <code>aws-cdk-lib.aws_ec2.IIpAddresses</code> | The Provider to use to allocate IPv4 Space to your VPC. |
| <code><a href="#@cloudkitect/components.CkVpcProps.property.ipProtocol">ipProtocol</a></code> | <code>aws-cdk-lib.aws_ec2.IpProtocol</code> | The protocol of the vpc. |
| <code><a href="#@cloudkitect/components.CkVpcProps.property.ipv6Addresses">ipv6Addresses</a></code> | <code>aws-cdk-lib.aws_ec2.IIpv6Addresses</code> | The Provider to use to allocate IPv6 Space to your VPC. |
| <code><a href="#@cloudkitect/components.CkVpcProps.property.maxAzs">maxAzs</a></code> | <code>number</code> | Define the maximum number of AZs to use in this region. |
| <code><a href="#@cloudkitect/components.CkVpcProps.property.natGatewayProvider">natGatewayProvider</a></code> | <code>aws-cdk-lib.aws_ec2.NatProvider</code> | What type of NAT provider to use. |
| <code><a href="#@cloudkitect/components.CkVpcProps.property.natGateways">natGateways</a></code> | <code>number</code> | The number of NAT Gateways/Instances to create. |
| <code><a href="#@cloudkitect/components.CkVpcProps.property.natGatewaySubnets">natGatewaySubnets</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetSelection</code> | Configures the subnets which will have NAT Gateways/Instances. |
| <code><a href="#@cloudkitect/components.CkVpcProps.property.reservedAzs">reservedAzs</a></code> | <code>number</code> | Define the number of AZs to reserve. |
| <code><a href="#@cloudkitect/components.CkVpcProps.property.restrictDefaultSecurityGroup">restrictDefaultSecurityGroup</a></code> | <code>boolean</code> | If set to true then the default inbound & outbound rules will be removed from the default security group. |
| <code><a href="#@cloudkitect/components.CkVpcProps.property.subnetConfiguration">subnetConfiguration</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetConfiguration[]</code> | Configure the subnets to build for each AZ. |
| <code><a href="#@cloudkitect/components.CkVpcProps.property.vpcName">vpcName</a></code> | <code>string</code> | The VPC name. |
| <code><a href="#@cloudkitect/components.CkVpcProps.property.vpnConnections">vpnConnections</a></code> | <code>{[ key: string ]: aws-cdk-lib.aws_ec2.VpnConnectionOptions}</code> | VPN connections to this VPC. |
| <code><a href="#@cloudkitect/components.CkVpcProps.property.vpnGateway">vpnGateway</a></code> | <code>boolean</code> | Indicates whether a VPN gateway should be created and attached to this VPC. |
| <code><a href="#@cloudkitect/components.CkVpcProps.property.vpnGatewayAsn">vpnGatewayAsn</a></code> | <code>number</code> | The private Autonomous System Number (ASN) for the VPN gateway. |
| <code><a href="#@cloudkitect/components.CkVpcProps.property.vpnRoutePropagation">vpnRoutePropagation</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetSelection[]</code> | Where to propagate VPN routes. |

---

##### `availabilityZones`<sup>Optional</sup> <a name="availabilityZones" id="@cloudkitect/components.CkVpcProps.property.availabilityZones"></a>

```typescript
public readonly availabilityZones: string[];
```

- *Type:* string[]
- *Default:* a subset of AZs of the stack

Availability zones this VPC spans.

Specify this option only if you do not specify `maxAzs`.

---

##### ~~`cidr`~~<sup>Optional</sup> <a name="cidr" id="@cloudkitect/components.CkVpcProps.property.cidr"></a>

- *Deprecated:* Use ipAddresses instead

```typescript
public readonly cidr: string;
```

- *Type:* string
- *Default:* Vpc.DEFAULT_CIDR_RANGE

The CIDR range to use for the VPC, e.g. '10.0.0.0/16'.

Should be a minimum of /28 and maximum size of /16. The range will be
split across all subnets per Availability Zone.

---

##### `createInternetGateway`<sup>Optional</sup> <a name="createInternetGateway" id="@cloudkitect/components.CkVpcProps.property.createInternetGateway"></a>

```typescript
public readonly createInternetGateway: boolean;
```

- *Type:* boolean
- *Default:* true

If set to false then disable the creation of the default internet gateway.

---

##### `defaultInstanceTenancy`<sup>Optional</sup> <a name="defaultInstanceTenancy" id="@cloudkitect/components.CkVpcProps.property.defaultInstanceTenancy"></a>

```typescript
public readonly defaultInstanceTenancy: DefaultInstanceTenancy;
```

- *Type:* aws-cdk-lib.aws_ec2.DefaultInstanceTenancy
- *Default:* DefaultInstanceTenancy.Default (shared) tenancy

The default tenancy of instances launched into the VPC.

By setting this to dedicated tenancy, instances will be launched on
hardware dedicated to a single AWS customer, unless specifically specified
at instance launch time. Please note, not all instance types are usable
with Dedicated tenancy.

---

##### `enableDnsHostnames`<sup>Optional</sup> <a name="enableDnsHostnames" id="@cloudkitect/components.CkVpcProps.property.enableDnsHostnames"></a>

```typescript
public readonly enableDnsHostnames: boolean;
```

- *Type:* boolean
- *Default:* true

Indicates whether the instances launched in the VPC get public DNS hostnames.

If this attribute is true, instances in the VPC get public DNS hostnames,
but only if the enableDnsSupport attribute is also set to true.

---

##### `enableDnsSupport`<sup>Optional</sup> <a name="enableDnsSupport" id="@cloudkitect/components.CkVpcProps.property.enableDnsSupport"></a>

```typescript
public readonly enableDnsSupport: boolean;
```

- *Type:* boolean
- *Default:* true

Indicates whether the DNS resolution is supported for the VPC.

If this attribute is false, the Amazon-provided DNS server in the VPC that
resolves public DNS hostnames to IP addresses is not enabled. If this
attribute is true, queries to the Amazon provided DNS server at the
169.254.169.253 IP address, or the reserved IP address at the base of the
VPC IPv4 network range plus two will succeed.

---

##### `flowLogs`<sup>Optional</sup> <a name="flowLogs" id="@cloudkitect/components.CkVpcProps.property.flowLogs"></a>

```typescript
public readonly flowLogs: {[ key: string ]: FlowLogOptions};
```

- *Type:* {[ key: string ]: aws-cdk-lib.aws_ec2.FlowLogOptions}
- *Default:* No flow logs.

Flow logs to add to this VPC.

---

##### `gatewayEndpoints`<sup>Optional</sup> <a name="gatewayEndpoints" id="@cloudkitect/components.CkVpcProps.property.gatewayEndpoints"></a>

```typescript
public readonly gatewayEndpoints: {[ key: string ]: GatewayVpcEndpointOptions};
```

- *Type:* {[ key: string ]: aws-cdk-lib.aws_ec2.GatewayVpcEndpointOptions}
- *Default:* None.

Gateway endpoints to add to this VPC.

---

##### `ipAddresses`<sup>Optional</sup> <a name="ipAddresses" id="@cloudkitect/components.CkVpcProps.property.ipAddresses"></a>

```typescript
public readonly ipAddresses: IIpAddresses;
```

- *Type:* aws-cdk-lib.aws_ec2.IIpAddresses
- *Default:* ec2.IpAddresses.cidr

The Provider to use to allocate IPv4 Space to your VPC.

Options include static allocation or from a pool.

Note this is specific to IPv4 addresses.

---

##### `ipProtocol`<sup>Optional</sup> <a name="ipProtocol" id="@cloudkitect/components.CkVpcProps.property.ipProtocol"></a>

```typescript
public readonly ipProtocol: IpProtocol;
```

- *Type:* aws-cdk-lib.aws_ec2.IpProtocol
- *Default:* IpProtocol.IPV4_ONLY

The protocol of the vpc.

Options are IPv4 only or dual stack.

---

##### `ipv6Addresses`<sup>Optional</sup> <a name="ipv6Addresses" id="@cloudkitect/components.CkVpcProps.property.ipv6Addresses"></a>

```typescript
public readonly ipv6Addresses: IIpv6Addresses;
```

- *Type:* aws-cdk-lib.aws_ec2.IIpv6Addresses
- *Default:* Ipv6Addresses.amazonProvided

The Provider to use to allocate IPv6 Space to your VPC.

Options include amazon provided CIDR block.

Note this is specific to IPv6 addresses.

---

##### `maxAzs`<sup>Optional</sup> <a name="maxAzs" id="@cloudkitect/components.CkVpcProps.property.maxAzs"></a>

```typescript
public readonly maxAzs: number;
```

- *Type:* number
- *Default:* 3

Define the maximum number of AZs to use in this region.

If the region has more AZs than you want to use (for example, because of
EIP limits), pick a lower number here. The AZs will be sorted and picked
from the start of the list.

If you pick a higher number than the number of AZs in the region, all AZs
in the region will be selected. To use "all AZs" available to your
account, use a high number (such as 99).

Be aware that environment-agnostic stacks will be created with access to
only 2 AZs, so to use more than 2 AZs, be sure to specify the account and
region on your stack.

Specify this option only if you do not specify `availabilityZones`.

---

##### `natGatewayProvider`<sup>Optional</sup> <a name="natGatewayProvider" id="@cloudkitect/components.CkVpcProps.property.natGatewayProvider"></a>

```typescript
public readonly natGatewayProvider: NatProvider;
```

- *Type:* aws-cdk-lib.aws_ec2.NatProvider
- *Default:* NatProvider.gateway()

What type of NAT provider to use.

Select between NAT gateways or NAT instances. NAT gateways
may not be available in all AWS regions.

---

##### `natGateways`<sup>Optional</sup> <a name="natGateways" id="@cloudkitect/components.CkVpcProps.property.natGateways"></a>

```typescript
public readonly natGateways: number;
```

- *Type:* number
- *Default:* One NAT gateway/instance per Availability Zone

The number of NAT Gateways/Instances to create.

The type of NAT gateway or instance will be determined by the
`natGatewayProvider` parameter.

You can set this number lower than the number of Availability Zones in your
VPC in order to save on NAT cost. Be aware you may be charged for
cross-AZ data traffic instead.

---

##### `natGatewaySubnets`<sup>Optional</sup> <a name="natGatewaySubnets" id="@cloudkitect/components.CkVpcProps.property.natGatewaySubnets"></a>

```typescript
public readonly natGatewaySubnets: SubnetSelection;
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetSelection
- *Default:* All public subnets.

Configures the subnets which will have NAT Gateways/Instances.

You can pick a specific group of subnets by specifying the group name;
the picked subnets must be public subnets.

Only necessary if you have more than one public subnet group.

---

##### `reservedAzs`<sup>Optional</sup> <a name="reservedAzs" id="@cloudkitect/components.CkVpcProps.property.reservedAzs"></a>

```typescript
public readonly reservedAzs: number;
```

- *Type:* number
- *Default:* 0

Define the number of AZs to reserve.

When specified, the IP space is reserved for the azs but no actual
resources are provisioned.

---

##### `restrictDefaultSecurityGroup`<sup>Optional</sup> <a name="restrictDefaultSecurityGroup" id="@cloudkitect/components.CkVpcProps.property.restrictDefaultSecurityGroup"></a>

```typescript
public readonly restrictDefaultSecurityGroup: boolean;
```

- *Type:* boolean
- *Default:* true if '@aws-cdk/aws-ec2:restrictDefaultSecurityGroup' is enabled, false otherwise

If set to true then the default inbound & outbound rules will be removed from the default security group.

---

##### `subnetConfiguration`<sup>Optional</sup> <a name="subnetConfiguration" id="@cloudkitect/components.CkVpcProps.property.subnetConfiguration"></a>

```typescript
public readonly subnetConfiguration: SubnetConfiguration[];
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetConfiguration[]
- *Default:* The VPC CIDR will be evenly divided between 1 public and 1 private subnet per AZ.

Configure the subnets to build for each AZ.

Each entry in this list configures a Subnet Group; each group will contain a
subnet for each Availability Zone.

For example, if you want 1 public subnet, 1 private subnet, and 1 isolated
subnet in each AZ provide the following:

```ts
new ec2.Vpc(this, 'VPC', {
  subnetConfiguration: [
     {
       cidrMask: 24,
       name: 'ingress',
       subnetType: ec2.SubnetType.PUBLIC,
     },
     {
       cidrMask: 24,
       name: 'application',
       subnetType: ec2.SubnetType.PRIVATE_WITH_EGRESS,
     },
     {
       cidrMask: 28,
       name: 'rds',
       subnetType: ec2.SubnetType.PRIVATE_ISOLATED,
     }
  ]
});
```

---

##### `vpcName`<sup>Optional</sup> <a name="vpcName" id="@cloudkitect/components.CkVpcProps.property.vpcName"></a>

```typescript
public readonly vpcName: string;
```

- *Type:* string
- *Default:* this.node.path

The VPC name.

Since the VPC resource doesn't support providing a physical name, the value provided here will be recorded in the `Name` tag

---

##### `vpnConnections`<sup>Optional</sup> <a name="vpnConnections" id="@cloudkitect/components.CkVpcProps.property.vpnConnections"></a>

```typescript
public readonly vpnConnections: {[ key: string ]: VpnConnectionOptions};
```

- *Type:* {[ key: string ]: aws-cdk-lib.aws_ec2.VpnConnectionOptions}
- *Default:* No connections.

VPN connections to this VPC.

---

##### `vpnGateway`<sup>Optional</sup> <a name="vpnGateway" id="@cloudkitect/components.CkVpcProps.property.vpnGateway"></a>

```typescript
public readonly vpnGateway: boolean;
```

- *Type:* boolean
- *Default:* true when vpnGatewayAsn or vpnConnections is specified

Indicates whether a VPN gateway should be created and attached to this VPC.

---

##### `vpnGatewayAsn`<sup>Optional</sup> <a name="vpnGatewayAsn" id="@cloudkitect/components.CkVpcProps.property.vpnGatewayAsn"></a>

```typescript
public readonly vpnGatewayAsn: number;
```

- *Type:* number
- *Default:* Amazon default ASN.

The private Autonomous System Number (ASN) for the VPN gateway.

---

##### `vpnRoutePropagation`<sup>Optional</sup> <a name="vpnRoutePropagation" id="@cloudkitect/components.CkVpcProps.property.vpnRoutePropagation"></a>

```typescript
public readonly vpnRoutePropagation: SubnetSelection[];
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetSelection[]
- *Default:* On the route tables associated with private subnets. If no private subnets exists, isolated subnets are used. If no isolated subnets exists, public subnets are used.

Where to propagate VPN routes.

---

## Classes <a name="Classes" id="Classes"></a>

### CkRegionUtil <a name="CkRegionUtil" id="@cloudkitect/components.CkRegionUtil"></a>

#### Initializers <a name="Initializers" id="@cloudkitect/components.CkRegionUtil.Initializer"></a>

```typescript
import { CkRegionUtil } from '@cloudkitect/components'

new CkRegionUtil()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cloudkitect/components.CkRegionUtil.allRegions">allRegions</a></code> | *No description.* |
| <code><a href="#@cloudkitect/components.CkRegionUtil.apRegions">apRegions</a></code> | *No description.* |
| <code><a href="#@cloudkitect/components.CkRegionUtil.caRegions">caRegions</a></code> | *No description.* |
| <code><a href="#@cloudkitect/components.CkRegionUtil.euRegions">euRegions</a></code> | *No description.* |
| <code><a href="#@cloudkitect/components.CkRegionUtil.usRegions">usRegions</a></code> | *No description.* |

---

##### `allRegions` <a name="allRegions" id="@cloudkitect/components.CkRegionUtil.allRegions"></a>

```typescript
import { CkRegionUtil } from '@cloudkitect/components'

CkRegionUtil.allRegions()
```

##### `apRegions` <a name="apRegions" id="@cloudkitect/components.CkRegionUtil.apRegions"></a>

```typescript
import { CkRegionUtil } from '@cloudkitect/components'

CkRegionUtil.apRegions()
```

##### `caRegions` <a name="caRegions" id="@cloudkitect/components.CkRegionUtil.caRegions"></a>

```typescript
import { CkRegionUtil } from '@cloudkitect/components'

CkRegionUtil.caRegions()
```

##### `euRegions` <a name="euRegions" id="@cloudkitect/components.CkRegionUtil.euRegions"></a>

```typescript
import { CkRegionUtil } from '@cloudkitect/components'

CkRegionUtil.euRegions()
```

##### `usRegions` <a name="usRegions" id="@cloudkitect/components.CkRegionUtil.usRegions"></a>

```typescript
import { CkRegionUtil } from '@cloudkitect/components'

CkRegionUtil.usRegions()
```



### CkUtils <a name="CkUtils" id="@cloudkitect/components.CkUtils"></a>

Utility class, provides several reusable methods.

#### Initializers <a name="Initializers" id="@cloudkitect/components.CkUtils.Initializer"></a>

```typescript
import { CkUtils } from '@cloudkitect/components'

new CkUtils()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cloudkitect/components.CkUtils.domainNameToPascalCase">domainNameToPascalCase</a></code> | Method to convert domainName to pascal case. |
| <code><a href="#@cloudkitect/components.CkUtils.toPascalCase">toPascalCase</a></code> | *No description.* |

---

##### `domainNameToPascalCase` <a name="domainNameToPascalCase" id="@cloudkitect/components.CkUtils.domainNameToPascalCase"></a>

```typescript
import { CkUtils } from '@cloudkitect/components'

CkUtils.domainNameToPascalCase(domainName: string)
```

Method to convert domainName to pascal case.

###### `domainName`<sup>Required</sup> <a name="domainName" id="@cloudkitect/components.CkUtils.domainNameToPascalCase.parameter.domainName"></a>

- *Type:* string

---

##### `toPascalCase` <a name="toPascalCase" id="@cloudkitect/components.CkUtils.toPascalCase"></a>

```typescript
import { CkUtils } from '@cloudkitect/components'

CkUtils.toPascalCase(str: string)
```

###### `str`<sup>Required</sup> <a name="str" id="@cloudkitect/components.CkUtils.toPascalCase.parameter.str"></a>

- *Type:* string

---



### CkVendorTags <a name="CkVendorTags" id="@cloudkitect/components.CkVendorTags"></a>

Class to add CloudKitect specific tags to all constructs.

#### Initializers <a name="Initializers" id="@cloudkitect/components.CkVendorTags.Initializer"></a>

```typescript
import { CkVendorTags } from '@cloudkitect/components'

new CkVendorTags()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cloudkitect/components.CkVendorTags.addTagsTo">addTagsTo</a></code> | *No description.* |

---

##### `addTagsTo` <a name="addTagsTo" id="@cloudkitect/components.CkVendorTags.addTagsTo"></a>

```typescript
import { CkVendorTags } from '@cloudkitect/components'

CkVendorTags.addTagsTo(scope: Construct)
```

###### `scope`<sup>Required</sup> <a name="scope" id="@cloudkitect/components.CkVendorTags.addTagsTo.parameter.scope"></a>

- *Type:* constructs.Construct

---




## Enums <a name="Enums" id="Enums"></a>

### CkAccountType <a name="CkAccountType" id="@cloudkitect/components.CkAccountType"></a>

Well Architected Stack supports the following environments.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cloudkitect/components.CkAccountType.DEVELOPMENT">DEVELOPMENT</a></code> | *No description.* |
| <code><a href="#@cloudkitect/components.CkAccountType.TEST">TEST</a></code> | *No description.* |
| <code><a href="#@cloudkitect/components.CkAccountType.UAT">UAT</a></code> | *No description.* |
| <code><a href="#@cloudkitect/components.CkAccountType.PRODUCTION">PRODUCTION</a></code> | *No description.* |

---

##### `DEVELOPMENT` <a name="DEVELOPMENT" id="@cloudkitect/components.CkAccountType.DEVELOPMENT"></a>

---


##### `TEST` <a name="TEST" id="@cloudkitect/components.CkAccountType.TEST"></a>

---


##### `UAT` <a name="UAT" id="@cloudkitect/components.CkAccountType.UAT"></a>

---


##### `PRODUCTION` <a name="PRODUCTION" id="@cloudkitect/components.CkAccountType.PRODUCTION"></a>

---


### CkRegion <a name="CkRegion" id="@cloudkitect/components.CkRegion"></a>

AWS Regions.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cloudkitect/components.CkRegion.US_EAST_1">US_EAST_1</a></code> | *No description.* |
| <code><a href="#@cloudkitect/components.CkRegion.US_EAST_2">US_EAST_2</a></code> | *No description.* |
| <code><a href="#@cloudkitect/components.CkRegion.US_WEST_1">US_WEST_1</a></code> | *No description.* |
| <code><a href="#@cloudkitect/components.CkRegion.US_WEST_2">US_WEST_2</a></code> | *No description.* |
| <code><a href="#@cloudkitect/components.CkRegion.AF_SOUTH_1">AF_SOUTH_1</a></code> | *No description.* |
| <code><a href="#@cloudkitect/components.CkRegion.AP_EAST_1">AP_EAST_1</a></code> | *No description.* |
| <code><a href="#@cloudkitect/components.CkRegion.AP_SOUTH_1">AP_SOUTH_1</a></code> | *No description.* |
| <code><a href="#@cloudkitect/components.CkRegion.AP_SOUTH_2">AP_SOUTH_2</a></code> | *No description.* |
| <code><a href="#@cloudkitect/components.CkRegion.AP_SOUTHEAST_1">AP_SOUTHEAST_1</a></code> | *No description.* |
| <code><a href="#@cloudkitect/components.CkRegion.AP_SOUTHEAST_2">AP_SOUTHEAST_2</a></code> | *No description.* |
| <code><a href="#@cloudkitect/components.CkRegion.AP_SOUTHEAST_3">AP_SOUTHEAST_3</a></code> | *No description.* |
| <code><a href="#@cloudkitect/components.CkRegion.AP_SOUTHEAST_4">AP_SOUTHEAST_4</a></code> | *No description.* |
| <code><a href="#@cloudkitect/components.CkRegion.AP_NORTHEAST_1">AP_NORTHEAST_1</a></code> | *No description.* |
| <code><a href="#@cloudkitect/components.CkRegion.AP_NORTHEAST_2">AP_NORTHEAST_2</a></code> | *No description.* |
| <code><a href="#@cloudkitect/components.CkRegion.AP_NORTHEAST_3">AP_NORTHEAST_3</a></code> | *No description.* |
| <code><a href="#@cloudkitect/components.CkRegion.CA_CENTRAL_1">CA_CENTRAL_1</a></code> | *No description.* |
| <code><a href="#@cloudkitect/components.CkRegion.EU_SOUTH_1">EU_SOUTH_1</a></code> | *No description.* |
| <code><a href="#@cloudkitect/components.CkRegion.EU_WEST_1">EU_WEST_1</a></code> | *No description.* |
| <code><a href="#@cloudkitect/components.CkRegion.EU_WEST_2">EU_WEST_2</a></code> | *No description.* |
| <code><a href="#@cloudkitect/components.CkRegion.EU_WEST_3">EU_WEST_3</a></code> | *No description.* |
| <code><a href="#@cloudkitect/components.CkRegion.EU_SOUTH_2">EU_SOUTH_2</a></code> | *No description.* |
| <code><a href="#@cloudkitect/components.CkRegion.EU_NORTH_1">EU_NORTH_1</a></code> | *No description.* |
| <code><a href="#@cloudkitect/components.CkRegion.EU_CENTRAL_1">EU_CENTRAL_1</a></code> | *No description.* |
| <code><a href="#@cloudkitect/components.CkRegion.EU_CENTRAL_2">EU_CENTRAL_2</a></code> | *No description.* |
| <code><a href="#@cloudkitect/components.CkRegion.ME_SOUTH_1">ME_SOUTH_1</a></code> | *No description.* |
| <code><a href="#@cloudkitect/components.CkRegion.ME_CENTRAL">ME_CENTRAL</a></code> | *No description.* |
| <code><a href="#@cloudkitect/components.CkRegion.SA_EAST_1">SA_EAST_1</a></code> | *No description.* |

---

##### `US_EAST_1` <a name="US_EAST_1" id="@cloudkitect/components.CkRegion.US_EAST_1"></a>

---


##### `US_EAST_2` <a name="US_EAST_2" id="@cloudkitect/components.CkRegion.US_EAST_2"></a>

---


##### `US_WEST_1` <a name="US_WEST_1" id="@cloudkitect/components.CkRegion.US_WEST_1"></a>

---


##### `US_WEST_2` <a name="US_WEST_2" id="@cloudkitect/components.CkRegion.US_WEST_2"></a>

---


##### `AF_SOUTH_1` <a name="AF_SOUTH_1" id="@cloudkitect/components.CkRegion.AF_SOUTH_1"></a>

---


##### `AP_EAST_1` <a name="AP_EAST_1" id="@cloudkitect/components.CkRegion.AP_EAST_1"></a>

---


##### `AP_SOUTH_1` <a name="AP_SOUTH_1" id="@cloudkitect/components.CkRegion.AP_SOUTH_1"></a>

---


##### `AP_SOUTH_2` <a name="AP_SOUTH_2" id="@cloudkitect/components.CkRegion.AP_SOUTH_2"></a>

---


##### `AP_SOUTHEAST_1` <a name="AP_SOUTHEAST_1" id="@cloudkitect/components.CkRegion.AP_SOUTHEAST_1"></a>

---


##### `AP_SOUTHEAST_2` <a name="AP_SOUTHEAST_2" id="@cloudkitect/components.CkRegion.AP_SOUTHEAST_2"></a>

---


##### `AP_SOUTHEAST_3` <a name="AP_SOUTHEAST_3" id="@cloudkitect/components.CkRegion.AP_SOUTHEAST_3"></a>

---


##### `AP_SOUTHEAST_4` <a name="AP_SOUTHEAST_4" id="@cloudkitect/components.CkRegion.AP_SOUTHEAST_4"></a>

---


##### `AP_NORTHEAST_1` <a name="AP_NORTHEAST_1" id="@cloudkitect/components.CkRegion.AP_NORTHEAST_1"></a>

---


##### `AP_NORTHEAST_2` <a name="AP_NORTHEAST_2" id="@cloudkitect/components.CkRegion.AP_NORTHEAST_2"></a>

---


##### `AP_NORTHEAST_3` <a name="AP_NORTHEAST_3" id="@cloudkitect/components.CkRegion.AP_NORTHEAST_3"></a>

---


##### `CA_CENTRAL_1` <a name="CA_CENTRAL_1" id="@cloudkitect/components.CkRegion.CA_CENTRAL_1"></a>

---


##### `EU_SOUTH_1` <a name="EU_SOUTH_1" id="@cloudkitect/components.CkRegion.EU_SOUTH_1"></a>

---


##### `EU_WEST_1` <a name="EU_WEST_1" id="@cloudkitect/components.CkRegion.EU_WEST_1"></a>

---


##### `EU_WEST_2` <a name="EU_WEST_2" id="@cloudkitect/components.CkRegion.EU_WEST_2"></a>

---


##### `EU_WEST_3` <a name="EU_WEST_3" id="@cloudkitect/components.CkRegion.EU_WEST_3"></a>

---


##### `EU_SOUTH_2` <a name="EU_SOUTH_2" id="@cloudkitect/components.CkRegion.EU_SOUTH_2"></a>

---


##### `EU_NORTH_1` <a name="EU_NORTH_1" id="@cloudkitect/components.CkRegion.EU_NORTH_1"></a>

---


##### `EU_CENTRAL_1` <a name="EU_CENTRAL_1" id="@cloudkitect/components.CkRegion.EU_CENTRAL_1"></a>

---


##### `EU_CENTRAL_2` <a name="EU_CENTRAL_2" id="@cloudkitect/components.CkRegion.EU_CENTRAL_2"></a>

---


##### `ME_SOUTH_1` <a name="ME_SOUTH_1" id="@cloudkitect/components.CkRegion.ME_SOUTH_1"></a>

---


##### `ME_CENTRAL` <a name="ME_CENTRAL" id="@cloudkitect/components.CkRegion.ME_CENTRAL"></a>

---


##### `SA_EAST_1` <a name="SA_EAST_1" id="@cloudkitect/components.CkRegion.SA_EAST_1"></a>

---

