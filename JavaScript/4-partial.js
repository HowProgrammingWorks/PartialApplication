'use strict';

const partial = (fn, x) => (...args) => fn(x, ...args);

// function partial(fn, x) {
//   return function(...args) {
//     return fn(x, ...args);
//   };
// }

// Usage

const sum3 = (a, b, c) => (a + b + c);

const f1 = partial(sum3, 10);
const f2 = partial(f1, 5);
const y = f2(1);
console.log(y);
