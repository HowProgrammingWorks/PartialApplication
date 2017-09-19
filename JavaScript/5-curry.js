'use strict';

const sum3 = (a, b, c) => (a + b + c);

const curry = (fn) => (...args) => {
  if (fn.length > args.length) {
    const f = fn.bind(null, ...args);
    return curry(f);
  } else {
    return fn(...args);
  }
};

const f = curry(sum3);
const y = f(1)(2)(3);
console.log(y);
