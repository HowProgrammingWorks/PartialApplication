'use strict';

const power = Math.pow;

const square = x => power(x, 2);

const cube = power.bind(null, 3);

module.exports = { power, square, cube };
