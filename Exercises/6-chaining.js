'use strict';

const EXPECTED_PIN = '4967';
const checkPin = (...code) => code.join('') === EXPECTED_PIN;

const press = value => ({
  code: [value],
  press(value) {
    this.code.push(value);
    if (this.code.length >= 4) {
      return checkPin(...this.code);
    }
    return this;
  }
});

module.exports = { press };
