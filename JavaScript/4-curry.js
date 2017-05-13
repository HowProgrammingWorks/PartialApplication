'use strict';

const sum3 = function(a, b, c) {
  return a + b + c;
};

// const sum3 = (a, b, c) => (a + b + c);

function curry(fn, x) {
  return function(...args) {
    return fn(x, ...args);
  };
}

// const curry = (fn, x) => (...args) => fn(x, ...args);

const f1 = curry(sum3, 10);
const f2 = curry(f1, 5);
const y = f2(1);
console.log(y);
