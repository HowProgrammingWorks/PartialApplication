'use strict';
const customCurry = (func, required, parameters = {}) => (obj) => {
  const params = Object.assign({}, parameters, obj);
  let full = true;
  required.forEach((element) => {
    if (params[element] === undefined) full = false;
  });
  if (full) return func(params);
  return customCurry(func, required, params);
};
//usage
const logABC = ({ A, B, C }) => { console.log(A, B, C); };
const a = customCurry(logABC, ['A', 'B', 'C']);
const b = a({ A: 'core', C: 'duo' });
b({ C: 'quad', B: 2 });
//pow
const pow = ({ x, y }) => Math.pow(x, y);
const powCurried = customCurry(pow, ['x', 'y']);
const pow2 = powCurried({ y: 2 });
console.log(pow2({ x: 10 }));
console.log(pow2({ x: 16 }));
console.log(powCurried({ x: 5, y: 4 }));
