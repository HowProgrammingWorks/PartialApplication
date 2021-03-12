'use strict';

const H = (exp, ...args) => {
  const sum = args.reduce((s, a) => (s + Math.pow(a, exp)), 0);
  const avg = sum / args.length;
  return Math.pow(avg, (1 / exp));
};

const average = H.bind(null, 1);

const rootMeanSquare = H.bind(null, 2);

module.exports = { average, rootMeanSquare };
