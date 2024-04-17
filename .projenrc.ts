import {javascript, ReleasableCommits} from "projen";
import { monorepo } from "@aws/pdk";
import {NpmAccess} from "projen/lib/javascript";
import {AwsCdkConstructLibrary} from "projen/lib/awscdk";

const releaseBranch = 'main'
const packagesDir = 'packages';
const scope = '@cloudkitect';
const packagesPath = `${packagesDir}/${scope}`;
const cdkVersion = '2.137.0';
const constructVersion = '10.3.0'
const authorAddress = 'support@cloudkitect.com';
const author = 'CloudKitect Inc'
const repoUrl = 'https://github.com/cloudkitect/freemium';
const jsiiVersion = '~5.3.0';
const majorVersion = 1
const pnpmVersion = "8"

const project = new monorepo.MonorepoTsProject({
  devDeps: ["@aws/pdk"],
  name: "freemium",
  packageManager: javascript.NodePackageManager.PNPM,
  projenrcTs: true,
  github: true,
  githubOptions: {
    mergify: false
  },
  pnpmVersion: pnpmVersion,
  workspaceConfig: {
    linkLocalWorkspaceBins: true,
  },
});

const components = new AwsCdkConstructLibrary({
  authorAddress: authorAddress,
  parent: project,
  defaultReleaseBranch: releaseBranch,
  cdkVersion: cdkVersion,
  constructsVersion: constructVersion,
  author: author,
  authorOrganization: true,
  repositoryUrl: repoUrl,
  jsiiVersion: jsiiVersion,
  name: `${scope}/components`,
  outdir: `${packagesPath}/components`,
  packageManager: project.package.packageManager,
  github: true,
  release: true,
  buildWorkflow: true,
  githubOptions: {
    mergify: false,
  },
  majorVersion: majorVersion,
  releasableCommits: ReleasableCommits.featuresAndFixes(),
  pnpmVersion: pnpmVersion,
  npmAccess: NpmAccess.PUBLIC,
  npmProvenance: false,
  keywords: ["cloudkitect", "cdk", "freemium", "infrastructure as code", "aws",
    "cloud components", "cdk constructs", "components", "terraform", "cloud compliance", "well architected"],
});
components.synth()

const releaseYaml = project.tryFindObjectFile('.github/workflows/release_cloudkitect-components.yml');
releaseYaml!.addOverride('jobs.release_npm.steps.5.run', 'cd .repo && pnpm i --no-frozen-lockfile')

const exclusions = ['.DS_Store', '.idea', '*.iml']
project.gitignore.exclude(...exclusions)

project.synth();