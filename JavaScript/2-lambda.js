'use strict';

const log = function(base, n) {
  return Math.log(n) / Math.log(base);
};

const lg = n => log(10, n);
const ln = n => log(Math.E, n);
