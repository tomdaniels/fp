// Immutable Data

// Mutable = can be changed after creation
// Immutable - can't be changed after creation

const a = [1, 2, 3];
const b = a; // this is a new reference to the same variable, only one array still exists
// console.log(a === b); => true
b.push(4);
// console.log('a: ', a); => a: [1, 2, 3, 4]

const c = { foo: 'bar' };
const d = c;
// console.log(d.foo); => bar
d.foo = 'baz';
// console.log(c.foo); => baz

// .push() will mutate your array, BUT we can make an immutable function..
const push = value => array => {
  const clone = [...array];
  clone.push(value);
  return clone;
};

const e = [1, 2, 3];
const f = push(4)(e);
// console.log(e); => [1, 2, 3];
// console.log(e === f); => false

class MutableGlass {
  constructor(content, amount) {
    this.content = content;
    this.amount = amount;
  };

  takeDrink(value) {
    this.amount = Math.max(this.amount - value, 0);
    return this;
  }  
}

const mg1 = new MutableGlass('water', 100);
const mg2 = mg1.takeDrink(20);
// console.log(mg1 === mg2); => true
// console.log(mg1.amount === mg2.amount); => true

class ImmutableGlass {
  constructor(content, amount) {
    this.content = content;
    this.amount = amount;
  }

  takeDrink(value) {
    return new ImmutableGlass(this.content, Math.max(this.amount - value, 0))
  }

}
const ig1 = new ImmutableGlass('water', 100);
const ig2 = ig1.takeDrink(20);
// console.log(ig1 === ig2); => false
// console.log(ig1.amount === ig2.amount); => false
