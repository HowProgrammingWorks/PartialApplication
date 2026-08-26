'use strict';

/*
  Generalized mean (Hölder mean)
  Given n numbers a₁, a₂, ... an
  Define Hk (for k != 0) as the k-th root of the arithmetic mean
  of the k-th power of a set of numbers
         ____________________________
  Hk = ᵏ√ (a₁ᵏ + a₂ᵏ + ... + anᵏ) / n
*/

const H = (exp, ...args) => {
  const sum = args.reduce((s, a) => (s + Math.pow(a, exp)), 0);
  const avg = sum / args.length;
  return Math.pow(avg, (1 / exp));
};

// Use method bind() to create new functions from function H.
// Create function `average` that returns arithmetic mean (H₁) of the arguments.
// Create function `rootMeanSquare` that returns quadratic mean (H₂).

const average = H.bind(null, 1);
const rootMeanSquare = H.bind(null, 2);

module.exports = { average, rootMeanSquare };
