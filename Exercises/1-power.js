'use strict';

// Define function power(exp, n), the same as Math.pow(n, exp)
// but with reverse order of arguments.
const power = (...args) => args[1] ** args[0];

// Implement function `square(n)`, which returns square of its argument.
// The function may or may not reuse function `power`.
const square = power.bind(this, 2);

// Implement function `cube(n)` using partial application
// The function should return cube of argument (to the power of three).
const cube = power.bind(this, 3);


module.exports = { power, square, cube };
