'use strict';

let log = function(base, n) {
  return Math.log(n) / Math.log(base);
};

let lg = log.bind(null, 10);
let ln = log.bind(null, Math.E);
