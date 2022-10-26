'use strict';

// Check 4 digit pin.
const EXPECTED_PIN = '4967';
const checkPin = (...code) => code.join('') === EXPECTED_PIN;

const press = (n) => {
  const data = [n];
  Object.defineProperty(data, 'press', {
    value(n) {
      data.push(n);
      return data.length === 4 ? checkPin(...data) : data;
    }
  });
  return data;
};

module.exports = { press };
