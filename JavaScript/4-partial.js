'use strict';

const partial = (fn, x) => (...args) => fn(x, ...args);

// Usage

const sum4 = (a, b, c, d) => (a + b + c + d);

const f11 = partial(sum4, 1);
const f12 = partial(f11, 2);
const f13 = partial(f12, 3);
const y1 = f13(4);
console.log(y1);
