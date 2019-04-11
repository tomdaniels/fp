// Currying

function add(x) {
  return function(y) {
    return x + y
  }
}

const addThree = add(3);
// console.log(addThree(4)); => 7
// console.log(addThree(6)); => 9
// console.log(addThree(56)); => 59

const add2 = x => y => x + y;

const addFour = add2(3);
// console.log(addFour(4)); => 7
// console.log(addFour(6)); => 9
// console.log(addFour(56)); => 56