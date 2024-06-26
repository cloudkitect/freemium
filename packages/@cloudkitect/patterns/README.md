# About CloudKitect
[CloudKitect](https://cloudkitect.com) revolutionizes the way technology organizations adopt cloud computing by providing innovative, secure,
and cost-effective turnkey solution that fast-tracks the AWS Adoption.
Think of CloudKitect as Cloud Architect as a Service.

# About CloudKitect Patterns.
CloudKitect Patterns offer turnkey architecture using pre-built patterns for
frequently used infrastructures such as website hosting, REST APIs, and container based applications, etc.
Premium version of CloudKitect Patterns utilized enhanced components, that offer out of the box compliance and monitoring at every
level of your infrastructure. In addition to the freemium patterns, enterprise patterns offer virous other patterns
such as serverless virus scanner, event sourcing pattern, GenAI pipelines etc. You can view details and demos by visiting our 
website [cloudkitect.com](https://cloudkitect.com)


## Developer Workstation Setup
Primarily, CloudKitect prioritizes enhancing the developer experience,
thus all our products are designed with the developer community at the forefront.
Consequently, to utilize the product, developers need to initially set up their workstations
with the necessary development tools.
You can either follow the steps below or watch this [Video](https://youtu.be/EoF-_U-Cyrg)

### Step 1: Install NPM
NPM is a package manager for javascript and typescript based projects.
Depending on your OS, install NPM.

#### Step 1a: Mac Users
Mac users can use homebrew to install node which will also install npm
```shell
brew upgrade
brew install node
```

#### Step 1b: Windows Users
Windows users can download the installer from [Here](https://nodejs.org/en/download/)

After the download of the installer package, follow these steps.
* Double-click on the downloaded file (.msi file).
* During installation, make sure to check the option "Add Node.js to Path". This will allow you to access npm commands from any directory in your command prompt.
* Make sure you choose npm package manager , not the default of Node.js runtime.
* This way, we can install Node and NPM simultaneously. Finally, click on install

Windows users can also use Chocolatey package manager, and install using the following command
```shell
chco install nodejs
```

For other Operating Systems follow the instructions [Here](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

#### Step 1c: Verify Installation

Open a new terminal on your workstation and run the following commands to verify the installation:
```shell
node -v
npm -v
```

### Step 2: Install NVM (Optional)
It is recommended to install nvm, for managing various versions of nodejs.
For Mac
```shell
brew install nvm
```
For other OS
```shell
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
OR
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

#### Step 2a: Install Node via nvm
Install node version 18 or later, using nvm
```shell
nvm install 18
nvm use 18
```

### Step 3: Install AWS CLI
Install AWS cli to interact with your AWS account using terminal

#### Step 3a: Mac Users
Mac users can use homebrew to install node which will also install npm
```shell
brew upgrade
brew install awscli
```

#### Step 3b: Windows Users
* Visit the AWS CLI to download the installer [Download Page](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)
* Double-click the downloaded .msi file and follow the instructions.

Follow other OS follow instructions [Here](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)

#### Step 3c: Verify Installation
Open a new terminal on your workstation and run the following commands to verify the installation:
```shell
aws --version
```

### Step 4: Install AWS CDK

#### Step 4a: Mac and Windows Users
Run the following command in your terminal.
```shell
npm install -g aws-cdk
```

#### Step 4b: Verify Installation
Open a new terminal on your workstation and run the following commands to verify the installation:
```shell
cdk --version
```

### Step 5: Install typescript

#### Step 5a: Mac and Windows Users
Run the following command in your terminal.
```shell
npm -g install typescript
```

#### Step 5b: Verify Installation
Open a new terminal on your workstation and run the following commands to verify the installation:
```shell
tsc --version
```

## Step 6: AWS Account Setup
Your AWS account needs to be setup and bootstrapped for CDK deployment

#### Step 6a: Create a user with Admin privileges
Create a user named "deployer" (you can give it any name) with Admin permissions in the AWS account where
application will be deployed.

#### 6b: Create Access key
Create Access Keys for the deployer user.

#### 6c: Configure AWS CLI
Run the following command and follow the instructions by providing your access key and secret key
```shell
aws configure --profile deployer
```

#### 6d: Route53 Hosted Zone
These components assume that there is a Route53 Hosted zone present in the AWS account
where the application is deployed. So create a hosted zone for a domain you own.
e.g. example.com and update the nameservers to point to this hosted zone.


#### 6e: Bootstrap AWS Account for CDK Deployment
```shell
cdk bootstrap aws://ACCOUNT_ID/us-east-1 --profile deployer
```

## Step 7: Create CDK project
NOTE: DEPLOYING THESE APPLICATIONS IN YOUR AWS ACCOUNT WILL INCUR COST THAT YOU WILL BE RESPONSIBLE FOR, SO MAKE SURE YOU
SHUT DOWN YOUR APPLICATION ONCE YOU ARE DONE.

### Step 7a: Create and initialize CDK project
Run the following commands to scaffold a CDK project
```shell
mkdir my-project
cd my-project
cdk init app --language typescript 
```

### Step 7b: Open Project in IDE of your choice
For example Visual Studio or IntelliJ etc.

### Step 7c: Add CloudKitect Dependencies
Open package.json file in your project and under dependencies add the following two dependencies, check for the current released
version and use that version instead of "0.0.0"
```json
{
  "dependencies": {
    "@cloudkitect/components": "0.0.0", 
    "@cloudkitect/patterns": "0.0.0",
    ...
  }
}
```

### Step 7d: Install dependencies
```shell
npm install
```

##  Step 8: Build Your App

### Step 8a:
Open the my-project.ts file under lib directory, and add the following lines to it, replace 'AWS_ACCOUNT_ID' with your AWS
account Id. You can also change the 'ckApplication' and 'ckCompany' names.
```ts
#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { MyProjectStack } from '../lib/my-project-stack';
import {CkAccountType} from "@cloudkitect/components";

const app = new cdk.App();

const devEnv = { account: "AWS_ACCOUNT_ID", region: "us-east-1" };

const stackProps = {
    ckAccountType: CkAccountType.DEVELOPMENT,
    ckApplication: "TestApp",
    ckCompany: "CloudKitect",
};

new MyProjectStack(app, 'MyProjectStack', {
    ...stackProps,
    env: devEnv
});
```

## Step 8b: Create Website Infrastructure
Under lib directory, open the  file named. my-project-stack.ts. Then copy and paste the following code
Change 'ckDomainName' to match the domain name that is currently setup in Route53.
.
```ts
import { Construct } from 'constructs';
import {CkStack, CkStackProps} from "@cloudkitect/components";
import {CkServerlessWebsite} from "@cloudkitect/patterns"

export class MyProjectStack extends CkStack {
    constructor(scope: Construct, id: string, props: CkStackProps) {
        super(scope, id, props);

        new CkServerlessWebsite(this, 'TestSite', {
            ckDomainName: 'socalstartups.net',
            ckPathToContent: './site-content',
        });

    }
}
```

### Step 8c: Create website code.
Create a directory site-content under the directory my-project and add index.html. In real project this directory
will contain your angular, reactjs etc. app. You can also change 'ckPathToContent' to point to the location where
your existing web application artifacts are present, such as react/angular app dist folder

```shell
cd my-project
mkdir site-content
cd site-content
echo "CloudKitect is Awesome" >> index.html
```

### Step 8d: Deploy the stack.
Let's deploy the stack to our AWS account.
```shell
cdk deploy --require-approval never --profile deployer
```

### Step 8e: Verify Deployment
Once the deployment completes it will output the url for your website, copy and paste it in your browser. The website
should display the message "CloudKitect is Awesome".


## Step 9: Container App Deployment
Next we will deploy a containerized app.

### Step 9a: Create an ECR Repository
Login to your AWS account, goto ECR repository and create a new repository. You can name anything but in this example
we are using name "addressbook"

### Step 9b: Push your docker image to ecr
Login to ecr repository, replace AWS_ACCOUNT_ID with your aws account id.
```shell
aws ecr get-login-password --region us-east-1 --profile deployer | docker login --username AWS --password-stdin AWS_ACCOUNT_ID.dkr.ecr.us-east-1.amazonaws.com
```

### Step9c: Build your docker images
```shell
docker build -t APP_NAME . 
```

Tag your image and give it a version 1.0
```shell
docker tag APP_NAME:latest AWS_ACCOUNT_ID.dkr.ecr.us-east-1.amazonaws.com/APP_NAME:1.0
```

Push your image
```shell
docker push AWS_ACCOUNT_ID.dkr.ecr.us-east-1.amazonaws.com/APP_NAME:1.0
```

### Step 9d: Update your stack
Add the following code to your stack. Change the 'ckDomainName' to match your Route53 Hosted zone
```ts
import { Construct } from 'constructs';
import {CkStack, CkStackProps} from "@cloudkitect/components";
import {CkServerlessContainerApps, CkServerlessWebsite} from "@cloudkitect/patterns"
import {Repository} from "aws-cdk-lib/aws-ecr";
import {Aws} from "aws-cdk-lib";
import {ContainerImage} from "aws-cdk-lib/aws-ecs";

export class MyProjectStack extends CkStack {
    constructor(scope: Construct, id: string, props: CkStackProps) {
        super(scope, id, props);

        new CkServerlessWebsite(this, 'TestSite', {
            ckDomainName: 'socalstartups.net',
            ckSubdomain: 'test',
            ckPathToContent: './site-content',
        });

        const repo = Repository.fromRepositoryAttributes(this, 'Repo', {
            repositoryArn: `arn:aws:ecr:${Aws.REGION}:${Aws.ACCOUNT_ID}:repository/addressbook`,
            repositoryName: 'addressbook',
        });

        const container = new CkServerlessContainerApps(this, 'NodeApp', {
            ckDomainName: 'socalstartups.net',
            ckSubDomain: 'app',
        });

        container.addService({
            ckServiceName: 'NodeAppService',
            ckImage: ContainerImage.fromEcrRepository(repo, '1.0'),
            ckContainerPort: 8080,
        });

    }
}

```

### Step 9e: Deploy our updated stack
Let's deploy the updated stack to our AWS account.
```shell
cdk deploy --require-approval never --profile deployer
```

### Step 9f: Verify Application
Once deployed it will output the endpoint of your application. Copy and paste it in your browser.

## Step 10: Destroy Application
Once you have verified clean up resources by destroying your stack and avoid further cost.

```shell
cdk destroy --profile deployer
```




