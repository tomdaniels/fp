// Higher order function

// 1. accepts a function as an argument
// 2. returns a new function

const withCount = fn => {
  let count = 0;

  return (...args) => {
    console.log(`call count: ${++count}`);
    return fn(...args)
  }
}

const add = (x, y) => x + y;

const countedAdd = withCount(add);

console.log(countedAdd(1, 2))
console.log(countedAdd(2, 2))
console.log(countedAdd(3, 2))

const sum = (a, b) => a + b;
const subtraction = (a, b) => a - b;

const doubleOperator = (f, a, b) => f(a, b) * 2;

doubleOperator(sum, 1, 3); // => 8
doubleOperator(subtraction, 3, 1); // => 4