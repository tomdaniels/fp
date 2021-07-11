const Identity = value => ({
  map: fn => Identity(fn(value))
});

const trace = x => {
  console.log(x);
  return x;
};

// any datatype is now mappable like an array..
const i = Identity(2);

// Identity law
const r1 = i;
const r2 = i.map(x => x);

r1.map(trace);
r2.map(trace);

const f = n => n + 1;
const g = n => n * 2;

// Composition law
const r3 = i.map(x => f(g(x)));
const r4 = i.map(g).map(f);

r3.map(trace);
r4.map(trace);