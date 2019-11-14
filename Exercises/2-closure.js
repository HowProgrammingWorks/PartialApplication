'use strict';

const coffee = (volume, strength) =>
  (`Coffee volume: ${volume}ml, strength: ${strength}`);

const defineCoffeeType = volume => strength => coffee(volume, strength);

// Use function defineCoffeeType to define new coffee types.
// Define coffee type espresso which volume should equal 50ml.
// Define coffee type americano which volume should equal 150ml.

const espresso = null;
const americano = null;

// Set names for anonymous functions (for tests).
if (typeof espresso === 'function') {
  Object.defineProperty(espresso, 'name',
    { value: 'espresso', configurable: true });
}
if (typeof americano === 'function') {
  Object.defineProperty(americano, 'name',
    { value: 'americano', configurable: true });
}

module.exports = { espresso, americano };
