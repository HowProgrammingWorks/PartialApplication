'use strict';

const sum3 = (a, b, c) => (a + b + c);

const curry = fn => (...args) => (
  fn.length > args.length ? curry(
    ((fn, ...args1) => (...args2) => (
      fn(...args1.concat(args2))
    ))(fn, ...args)
  ) : fn(...args)
);

const f = curry(sum3);
const y = f(1)(2)(3);
console.log(y);
