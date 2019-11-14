'use strict';

// Check 4 digit pin.
const checkPin = (ch1, ch2, ch3, ch4) =>
  ([ch1, ch2, ch3, ch4].join('') === '4967');

const curry = fn => (...args) =>
  (fn.length > args.length ?
    (...args2) =>
      curry(fn)(...args, ...args2) :
    fn(...args));

// Use function curry to define function press
// that allows to enter pin code by one character,
// e.g. press('3')('4')('5')('6')

const press = null;

// Set name for anonymous function (for tests).
if (typeof press === 'function') {
  Object.defineProperty(press, 'name', { value: 'press', configurable: true });
}

module.exports = { press };
