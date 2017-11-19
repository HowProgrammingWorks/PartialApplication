'use strict';

const curry = (fn, ...par) => {
  const curried = (...args) => (
    fn.length > args.length ?
      curry(fn.bind(null, ...args)) :
      fn(...args)
  );
  return par.length ? curried(...par) : curried;
};

// Usage

const sum3 = (a, b, c) => (a + b + c);

const f = curry(sum3);
const y1 = sum3(1, 2, 3);
const y2 = f(1, 2, 3);
const y3 = f(1, 2)(3);
const y4 = f(1)(2, 3);
const y5 = f(1)(2)(3);
console.log(y1, y2, y3, y4, y5);
