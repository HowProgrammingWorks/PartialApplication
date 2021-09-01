'use strict';

const { log: ln } = Math;
const log = (base, n) => ln(n) / ln(base);

// Usage
{
  const lg = (n) => log(10, n);
  const ln = (n) => log(Math.E, n);

  console.log('lg(5) =', lg(5));
  console.log('ln(5) =', ln(5));
}
