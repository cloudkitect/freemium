import {javascript, ReleasableCommits} from "projen";
import { monorepo } from "@aws/pdk";
import {NpmAccess} from "projen/lib/javascript";
import {AwsCdkConstructLibrary} from "projen/lib/awscdk";

const packagesDir = 'packages';
const scope = '@cloudkitect';
const packagesPath = `${packagesDir}/${scope}`;


const project = new monorepo.MonorepoTsProject({
  devDeps: ["@aws/pdk"],
  name: "freemium",
  packageManager: javascript.NodePackageManager.PNPM,
  projenrcTs: true,
  github: true,
  githubOptions: {
    mergify: false
  },
  pnpmVersion: "8",
  workspaceConfig: {
    linkLocalWorkspaceBins: true,
  },
});

const subProjectSettings = {
  authorAddress: 'support@cloudkitect.com',
  parent: project,
  defaultReleaseBranch: 'main',
  cdkVersion: '2.137.0',
  constructsVersion: '10.3.0',
  author: 'CloudKitect Inc',
  authorOrganization: true,
  repositoryUrl: 'https://github.com/cloudkitect/freemium',
  jsiiVersion: '~5.3.0',
  packageManager: project.package.packageManager,
  github: true,
  release: true,
  buildWorkflow: true,
  githubOptions: {
    mergify: false,
  },
  majorVersion: 1,
  releasableCommits: ReleasableCommits.featuresAndFixes(),
  pnpmVersion: "8",
  npmAccess: NpmAccess.PUBLIC,
  npmProvenance: false,
}

const components = new AwsCdkConstructLibrary({
  ...subProjectSettings,
  name: `${scope}/components`,
  outdir: `${packagesPath}/components`,
  keywords: ["cloudkitect", "cdk", "freemium", "infrastructure as code", "aws",
    "cloud components", "cdk constructs", "components", "terraform", "cloud compliance", "well architected"],
});
components.synth()

const releaseYaml = project.tryFindObjectFile('.github/workflows/release_cloudkitect-components.yml');
releaseYaml!.addOverride('jobs.release_npm.steps.5.run', 'cd .repo && pnpm i --no-frozen-lockfile')

const patterns = new AwsCdkConstructLibrary({
  ...subProjectSettings,
  name: `${scope}/patterns`,
  outdir: `${packagesPath}/patterns`,
  keywords: ["cloudkitect", "cdk", "freemium", "infrastructure as code", "aws",
    "cloud components", "cdk constructs", "patterns", "terraform", "cloud compliance", "well architected"]
});

patterns.addDeps(`${scope}/components@1.2.0`)
patterns.addPeerDeps(`${scope}/components@1.2.0`)
patterns.addDevDeps(`${scope}/components@1.2.0`)
patterns.synth();

const patternReleaseYaml = project.tryFindObjectFile('.github/workflows/release_cloudkitect-patterns.yml');
patternReleaseYaml!.addOverride('jobs.release_npm.steps.5.run', 'cd .repo && pnpm i --no-frozen-lockfile')

const exclusions = ['.DS_Store', '.idea', '*.iml']
project.gitignore.exclude(...exclusions)

project.synth();