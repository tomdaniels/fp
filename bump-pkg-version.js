const { set, version } = require('edit-package-json');
const { exec } = require('child_process');

const pkg = require('./package.json');
const pkgVersion = pkg['version'];

// const trace = label => val => {
//   console.log(label, val);
//   return val;
// }

const flow = (...fns) => (x) => fns.reduce((v, f) => f(v), x);

const splitParts = array => array.split('.'); // '1.0.2' into ['1', '0', '2']
const findPatch = array => array.pop(); // grab patch version ('2')
const converToNumber = str => parseInt(str); // '2' into 2
const increment = number => number + 1;

const newPatchVersion = flow(
  splitParts,
  findPatch,
  converToNumber,
  increment,
);

const versionToUse = pkgVersion.replace(
  splitParts(pkgVersion).pop(),
  newPatchVersion(pkgVersion)
);

console.log(JSON.stringify(pkg));

if (versionToUse) {
  console.log(versionToUse);

  exec(
    `version-changelog CHANGELOG.md && changelog-verify CHANGELOG.md && git add CHANGELOG.md`,
    (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`);
        return;
      }
      if (stderr) {
          console.log(`stderr: ${stderr}`);
          return;
      }
      console.log(`stdout: ${stdout}`, stderr);
  });

  // set(JSON.stringify(pkg),
  //   pkg.version, // path to amend
  //   versionToUse, // new value
  // );
}

return;
