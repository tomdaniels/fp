const Identity = value => ({
  map: fn => Identity(fn(value))
});

const trace = x => {
  console.log(x);
  return x;
};

// any datatype is now mappable like an array..
const i = Identity(2);

// Identity law - same same
const r1 = i;
const r2 = i.map(x => x);

r1.map(trace); // 2
r2.map(trace); // 2

const f = n => n + 1;
const g = n => n * 2;

// Composition law - same same
const r3 = i.map(x => f(g(x)));
const r4 = i.map(g).map(f);

r3.map(trace); // 5
r4.map(trace); // 5