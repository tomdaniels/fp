### Objective

For services that aren't considered "packages" as in, we don't need to publish the code to NPM..
semantic-release is often still used to handle automatic CHANGELOG management...
getting semantic-release to skip its core functionality (publishing new versions to NPM) like this, has proven to be very tedious and error prone in the past, and directly affects production deployments.


I'm trying to get a simple node script that will grab the `package.json['version']` and pseudo update the version as a patch, meaning that the existing libraries out there like [`version-changelog`](https://github.com/jesstelford/version-changelog) can be used to make sure the CHANGELOG.md file still meets the expected semver format.

_It seems to be a common theme for these libraries to rely on np or npm-release to have already changed this version.. this is what I am trying to solve with JS..._ :thinking: