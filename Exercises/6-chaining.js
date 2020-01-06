'use strict';

// Check 4 digit pin.
const checkPin = (ch1, ch2, ch3, ch4) =>
  [ch1, ch2, ch3, ch4].join('') === '4967';

// Impement function press
// that allows to enter pin code by one character,
// e.g. press('3').press('4').press('5').press('6')
//
// For hint use https://github.com/HowProgrammingWorks/Cheatsheet

const press = null;

module.exports = { press };
