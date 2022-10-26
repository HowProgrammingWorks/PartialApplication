'use strict';

// Check 4 digit pin.
const EXPECTED_PIN = '4967';
const checkPin = (...code) => {
  console.log(code instanceof Array);
  console.log(code.join(''));
  return code.join('') === EXPECTED_PIN;
};
// Define function curry that accepts the length of the function
// (amount of function arguments) and the function.

const curry = (length, fn) => (...args) => {
  if (length > args.length) {
    const f = fn.bind(null, ...args);
    return curry(length - args.length, f);
  } else {
    return fn(...args);
  }
};

// Allows to enter pin code by one character,
// Usage: press('3')('4')('5')('6')
const press = curry(4, checkPin);
console.dir(press('4', '9')('6')('7'));
module.exports = { press };
