'use strict';

// Check 4 digit pin.
const EXPECTED_PIN = '4967';
const checkPin = (...code) => code.join('') === EXPECTED_PIN;

// Define function curry that accepts the length of the function
// (amount of function arguments) and the function.

const curry = (length, fn) => (...args) => null;

// Allows to enter pin code by one character,
// Usage: press('3')('4')('5')('6')
const press = curry(4, checkPin);

module.exports = { press };
