'use strict';

const EXPECTED_PIN = '4967';
const checkPin = (...code) => code.join('') === EXPECTED_PIN;

const curry = (length, fn) => (...args) => {
  if (length > args.length) {
    const press = fn.bind(null, ...args);
    return curry(length - args.length, press);
  } else {
    return fn(...args);
  }
};

const press = curry(4, checkPin);

module.exports = { press };
