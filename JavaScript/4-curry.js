'use strict';

const sum3 = function(a, b, c) {
  return a + b + c;
};

function curry(fn, x) {
  return function(...args) {
    args.push(x);
    return fn(...args);
  };
}

const f1 = curry(sum3, 10);
const f2 = curry(f1, 5);
const y = f2(1);
console.log(y);
