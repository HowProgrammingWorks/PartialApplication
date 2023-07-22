'use strict';

// Check 4 digit pin.
const EXPECTED_PIN = '4967';
const checkPin = (...code) => code.join('') === EXPECTED_PIN;

// Implement function press
// that allows to enter pin code by one character,
// e.g. press('3').press('4').press('5').press('6')
//
// For hint use https://github.com/HowProgrammingWorks/Cheatsheet

const press = (n) => {
  const pin = [n];
  const data = {};
  data.press = (n) => {
    pin.push(n);
    return pin.length === 4 ? checkPin(...pin) : data;
  };
  return data;
};

module.exports = { press };
