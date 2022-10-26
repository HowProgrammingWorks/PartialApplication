'use strict';

const coffee = (volume, strength) =>
  `Coffee volume: ${volume}ml, strength: ${strength}`;

const defineCoffeeType = (volume) => (strength) => coffee(volume, strength);

const espresso = defineCoffeeType('50');
const americano = defineCoffeeType('150');

module.exports = { espresso, americano };
