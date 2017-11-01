'use strict';

const sum3 = (a, b, c) => (a + b + c);

const curry = (fn, ...par) => {
  const curried = (...args) => (
    fn.length > args.length ?
      curry(fn.bind(null, ...args)) :
      fn(...args)
  );
  return par.length ? curried(...par) : curried;
};

const f = curry(sum3);
const y = f(1)(2)(3);
console.log(y);
