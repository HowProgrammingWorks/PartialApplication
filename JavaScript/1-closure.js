'use strict';

const log = function(base, n) {
  return Math.log(n) / Math.log(base);
};

// const log = (base, n) => Math.log(n) / Math.log(base);

function createLog(base) {
  return function(n) {
    return log(base, n);
  };
}

// const createLog = (base) => (n) => log(base, n);

const lg = createLog(10);
const ln = createLog(Math.E);

// const lg = n => log(10, n);

console.log('lg(5) = ' + lg(5));
console.log('ln(5) = ' + ln(5));
