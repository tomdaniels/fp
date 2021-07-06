const { set, version } = require('edit-package-json');
const { trace } = require('../composition/trace'); // curryable logger for comp debugging.
const pkg = require('./package.json');
const pkgVersion = pkg['version'];


const flow = (...fns) => (x) => fns.reduce((v, f) => f(v), x);

const splitParts = array => array.split('.'); // '1.0.2' into ['1', '0', '2']
const findPatch = array => array.pop(); // grab patch version ('2')
const converToNumber = str => parseInt(str); // '2' into 2
const increment = number => number + 1;

const newPatchVersion = flow(
  splitParts,
  trace('after split: '),
  findPatch,
  trace('patch value: '),
  converToNumber,
  increment,
  trace('after: '),
);

const versionToUse = pkgVersion.replace(
  splitParts(pkgVersion).pop(),
  newPatchVersion(pkgVersion)
);

// console.log(JSON.stringify(pkg));

if (versionToUse) {
  console.log(versionToUse);

  // How do we programatically edit the pkg.json??
  // the below fuinction doesn't seem to add the diff to the physcal file.. 
  // may need require('fs') to do it manually..  :thinking:
  set(JSON.stringify(pkg),
    pkg.version, // path to amend
    versionToUse, // new value
  );
}

return;
