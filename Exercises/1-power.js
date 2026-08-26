'use strict';

const { pow: expow } = Math;
const power = (exp, n) => expow(n, exp);

const square = (n) => power(2, n);

const cube = power.bind(null, 3);

module.exports = { power, square, cube };
