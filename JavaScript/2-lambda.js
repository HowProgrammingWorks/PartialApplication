'use strict';

let log = function(base, n) {
  return Math.log(n) / Math.log(base);
};

let lg = n => log(10, n);
let ln = n => log(Math.E, n);
