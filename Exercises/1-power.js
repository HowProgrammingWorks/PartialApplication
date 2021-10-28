'use strict';

const power = (exp, n) => Math.pow.bind(null, n, exp)();

const square = (n) => power(2, n);

const cube = (n) => Math.pow.bind(null, n, 3)();

module.exports = { power, square, cube };
