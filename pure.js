// Pure functions

// f(x) = x + 1
const f = x => x +1

// Global state
const cost_of_item = 19;
const cartTotal = quantiy =>
  cost_of_item * quantiy;


// console.log(cartTotal(2)); => 38
// console.log(cartTotal(2)); => 38
// Same input, different output
const generateId = () =>
  Math.floor(Math.random() * 10000);

const createUserFactory = (name, age) => ({
  id: generateId(),
  name,
  age
});

// console.log(createUserFactory('Tom', 24)); => { id: 8538, name: 'Tom', age: 24 }
// console.log(createUserFactory('Tom', 24)); => { id: 1585, name: 'Tom', age: 24 }
// console.log(createUserFactory('Tom', 24)); => { id: 4606, name: 'Tom', age: 24 }

// Side effects
let id = 0;
const createFoodItem = name => ({
  id: ++id,
  name
});

// console.log(createFoodItem('Cheesburgers')); => { id: 1, name: 'Cheesburgers' }
// console.log(createFoodItem('Fries')); => { id: 2, name: 'Fries' }
// console.log(createFoodItem('Milkshakes')); => { id: 3, name: 'Milkshakes' }
// console.log(id); => 3

// console.log is an impure function (effects the terminal
const logger = msg => console.log(msg);
// logger("don't use console man");