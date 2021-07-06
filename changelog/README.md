### Objective

For services that aren't considered "packages" as in, we don't need to publish the code to NPM..
semantic-release is often still used to handle automatic CHANGELOG management...
this can be very tedious, asking semantic-release to skip its core functionality.


I'm trying to get a simple node script that will grab the package.json['version'] and update it to a patch. 
so the existing libraries like [`version-changelog`](https://github.com/jesstelford/version-changelog) to keepo the cahngelog in it's expected semver format. (seems a common theme for these libraries is relying on np or npm-release to have already changed this value.. I just can't come up with a way to do it with JS :thinking:)