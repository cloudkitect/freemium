import { CkAccountType, CkStack, CkStackProps } from '@cloudkitect/components';
import { App } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as ecr from 'aws-cdk-lib/aws-ecr';
import * as ecs from 'aws-cdk-lib/aws-ecs';
import { CkServerlessContainerApps } from '../../src';

let app: App;
let stack: CkStack;
let apiRepo: ecr.IRepository;

const stackProps: CkStackProps = {
  ckAccountType: CkAccountType.PRODUCTION,
  ckApplication: 'Test',
  ckCompany: 'CloudKitect',
  env: { account: '123', region: 'us-east-1' },
};

describe('Well Architected Serverless Container', () => {
  beforeEach(() => {
    app = new App();
    stack = new CkStack(app, 'TestStack', stackProps);
    apiRepo = ecr.Repository.fromRepositoryAttributes(stack, 'ApiRepo', {
      repositoryArn: 'arn:aws:ecr:us-east-1:326613709743:repository/api',
      repositoryName: 'api',
    });
  });

  it('CP-73: Default container app', () => {
    const container = new CkServerlessContainerApps(stack, 'Container', {
      ckDomainName: 'cloudkitect.com',
    });
    container.addService({
      ckServiceName: 'TestService',
      ckImage: ecs.ContainerImage.fromEcrRepository(apiRepo, '1.0'),
    });

    const template = Template.fromStack(stack);
    expect(template.toJSON()).toMatchSnapshot();
  });

});
