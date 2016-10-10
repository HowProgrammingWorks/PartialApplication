'use strict';

let log = function(base, n) {
  return Math.log(n) / Math.log(base);
};

function createLog(base) {
  return function (n) {
    return log(base, n);
  };
}

let lg = createLog(10);
let ln = createLog(Math.E);
