'use strict';

const { log: ln } = Math;
const log = (base, n) => ln(n) / ln(base);

const createLog = (base) => (n) => log(base, n);

// Usage
{
  const lg = createLog(10);
  const ln = createLog(Math.E);

  console.log('lg(5) =', lg(5));
  console.log('ln(5) =', ln(5));
}
