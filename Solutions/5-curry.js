'use strict';

// Check 4 digit pin.
const EXPECTED_PIN = '4967';
const checkPin = (...code) =>  code.join('') === EXPECTED_PIN;


const curry = (length, fn) => (...args) => (
  length > args.length ? curry(
    length - args.length,
    ((fn, ...args1) => (...args2) => (
      fn(...args1.concat(args2))
    ))(fn, ...args)
  ) : fn(...args)
);

const press = curry(4, checkPin);

module.exports = { press };
