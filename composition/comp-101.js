// Composition

const d = x => x + 2
const e = x => x * 3

// console.log(f(g(5))) 17

// Composition

const f = x => x + 2
const g = x => x * 3

const scream = str => str.toUpperCase()
const exclaim = str => `${str}!`
const repeat = str => `${str} ${str}`

// console.log(
//   repeat(exclaim(scream('I love egghead')))
// )

const compose = (...fns) => x =>
  fns.reduceRight((acc, fn) => fn(acc), x);

const withExuberance = compose(
  repeat, 
  exclaim, 
  scream
);

// console.log(withExuberance('nice socks, man'));

const { pipe } = require('rxjs');

const double = x => x * 2;
const tripple = x => x * 3;

const composition1 = pipe(
  double,
  tripple
);

// console.log(composition1(3))

module.exports = {
  compose,
  scream,
  exclaim,
  repeat,
};
