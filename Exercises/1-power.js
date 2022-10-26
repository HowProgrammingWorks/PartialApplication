'use strict';

const power = (exp, n) => (exp < 0 ?
  1 / (n * power((-exp) - 1, n)) :
  exp === 1 ? n :
    exp === 0 ? 1 :
      n * power(exp - 1, n));

const square = (n) => power(2, n);

const cube = power.bind(null, 3);

module.exports = { power, square, cube };
