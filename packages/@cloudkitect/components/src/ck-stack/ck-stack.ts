/*
 * Copyright (c) CloudKitect Inc. All Rights Reserved.
 */
import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';

/**
 * Well Architected Stack supports the following environments.
 */
export enum CkAccountType {
  DEVELOPMENT = 'Dev',
  TEST = 'Test',
  UAT = 'Uat',
  PRODUCTION = 'Prod',
}

/**
 * CloudKitect Stack Component Properties
 */
export interface CkStackProps extends cdk.StackProps {
  /**
     * Name of the application deployed by the stack
     */
  readonly ckApplication: string;
  /**
     * Company the application is associated with
     */
  readonly ckCompany: string;
  /**
     * AccountType where the stack will be deployed.
     */
  readonly ckAccountType: CkAccountType;
  /**
     * Any prefix for the stack name to avoid conflicts.
     * @defaultValue empty
     */
  readonly ckPrefix?: string;

  /**
   * Flag to control the removalPolicy override for the components
   * @default undefined, meaning it will use environment specific removal policy
   */
  readonly ckRemovalPolicyOverride?: cdk.RemovalPolicy;
}


/**
 * CloudKitect stack component that is environment aware and provides several methods
 * to find out the account type it is deployed so that other constructs can make decisions based on environments.
 *
 * ### Examples
 * Default Usage
 * ```ts
 * const stackProps = {
 *     ckApplication: 'ExampleApp',
 *     ckCompany: 'CloudKitect',
 *     ckAccountType: AccountType.UAT,
 *     env: {account: "ACCOUNT_ID", region: "us-east-1"}
 * }
 * new CkStack(app, "StackId", {
 *     ...stackProps
 * });
 * ```
 *
 * ### Compliance
 * It addresses the following compliance requirements
 * * 1. Cloudformation stacks in use for defining infrastructure
 *    >  - Risk Level: Medium
 *    >  - Compliance: APRA, MAS
 *    >  - Well Architected Pillar: Reliability, Operational Excellence
 */
export class CkStack extends cdk.Stack {
  // CC-8:  Well Architected Stack

  /**
     * Get stack where the construct is deployed
     * @param construct
     */
  public static findStackOf(construct: Construct): CkStack {
    if (construct instanceof CkStack) return construct as CkStack;
    else return cdk.Stack.of(construct) as CkStack;
  }

  static createStackId(id: string, prefix?: string): string {
    return `${prefix ?? ''}${id}`;
  }

  readonly removalPolicyOverride?: cdk.RemovalPolicy;

  constructor(scope: Construct, id: string, props: CkStackProps) {
    super(scope, CkStack.createStackId(id, props.ckPrefix), props);

    this.tags.setTag('CkApplication', props.ckApplication, 50);
    this.tags.setTag('CkCompany', props.ckCompany, 51);
    this.tags.setTag('CkAccountType', props.ckAccountType, 52);

    this.removalPolicyOverride = props.ckRemovalPolicyOverride;
  }

  /**
   * Removal policy is based on stack termination protection
   */
  public removalPolicy(): cdk.RemovalPolicy {
    return this.removalPolicyOverride ? this.removalPolicyOverride : this.envRemovalPolicy();
  }

  private envRemovalPolicy(): cdk.RemovalPolicy {
    return this.isNonProduction() ? cdk.RemovalPolicy.DESTROY : cdk.RemovalPolicy.RETAIN;
  }

  /**
     * Account type where the stack is deployed
     */
  public accountType(): CkAccountType {
    return this.tags.tagValues().CkAccountType as CkAccountType;
  }

  /**
     * Company name.
     */
  public company(): string {
    return this.tags.tagValues().CkCompany;
  }

  /**
     * Application name.
     */
  public applicationName(): string {
    return this.tags.tagValues().CkApplication;
  }

  /**
     * Find out if the stack is running in production account.
     */
  public isProduction(): boolean {
    return this.accountType() == CkAccountType.PRODUCTION;
  }

  /**
     * Find out if the stack is running in development account.
     */
  public isDevelopment(): boolean {
    return this.accountType() == CkAccountType.DEVELOPMENT;
  }

  /**
     * Find out if the stack is running in test account.
     */
  public isTest(): boolean {
    return this.accountType() == CkAccountType.TEST;
  }

  /**
     * Find out if the stack is running in a non production account such as dev, test, uat
     */
  public isNonProduction(): boolean {
    return !this.isProduction();
  }

  /**
     * Find out if the stack is running in uat account
     */
  public isUAT(): boolean {
    return this.accountType() == CkAccountType.UAT;
  }

  /**
     * Find out if the stack is running in a production like environment such as uat and prod
     */
  public isProductionLike(): boolean {
    return this.isProduction() || this.isUAT();
  }

  /**
     * Find out if the stack is running in a development like environment such as dev or test
     */
  public isDevelopmentLike(): boolean {
    return this.isDevelopment() || this.isTest();
  }
}
