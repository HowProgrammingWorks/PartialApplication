'use strict';

const curry = fn => (...args) => (
  fn.length > args.length ? curry(
    ((fn, ...args1) => (...args2) => (
      fn(...args1.concat(args2))
    ))(fn, ...args)
  ) : fn(...args)
);

// Usage

const sum3 = (a, b, c) => (a + b + c);

const f = curry(sum3);
const y1 = sum3(1, 2, 3);
const y2 = f(1, 2, 3);
const y3 = f(1, 2)(3);
const y4 = f(1)(2, 3);
// const y5 = f(1)(2)(3);
console.log(y1, y2, y3, y4);
