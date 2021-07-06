/**
 * composition offers readable code, but can come at the cost of difficult debugging. - Eric Elliot
 * a composable logger can splip into any composition  
 */

export const trace = label => value => {
  console.log(label, value);
  return value;
}

const compose = (...fns) => args =>
  // pass the accumulating value to each function recieved
  fns.reduce((previous, item) => item(previous), args);

const increment = val => val+1;
const dubble = val => val*2;

const envokeWith = compose(
  trace('before increment :'),
  increment,
  trace('before double: '),
  dubble,
  trace('after: ')
);

envokeWith(5);