import { CkAccountType, CkStack, CkStackProps } from '@cloudkitect/components';
import { App } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { CkServerlessWebsite } from '../../src';

let app: App;
let stack: CkStack;
const stackProps: CkStackProps = {
  ckAccountType: CkAccountType.PRODUCTION,
  ckApplication: 'Test',
  ckCompany: 'CloudKitect',
  env: { account: '123', region: 'us-east-1' },
};

describe('Well Architected Serverless Website', () => {
  beforeEach(() => {
    app = new App();
    stack = new CkStack(app, 'TestStack', stackProps);
  });

  it('CP-73: Default website configuration', () => {
    new CkServerlessWebsite(stack, 'Website', {
      ckPathToContent: './test/site-content',
      ckDomainName: 'cloudkitect.com',
    });

    const template = Template.fromStack(stack);
    expect(template.toJSON()).toMatchSnapshot();
  });

});
