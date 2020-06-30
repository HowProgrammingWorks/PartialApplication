# Exercises

## [1. Call more general function inside a function or bind() it](Exercises/1-power.js)

You can often use more general functions to define more specific functions.

- Define function `power()` which is an alias to `Math.pow()`.
- Implement function `square()` which returns a number to the power of two.
- `bind()` function `power(base, power)` to obtain function `powerOfThree(power)`.

## [2. Closure](Exercises/2-closure.js)

Use constructor-like function that returns a function to define different specific functions.

## [3. Lambda](Exercises/3-lambda.js)

Use a function inside a new function.

## [4. Bind](Exercises/4-bind.js)

Use method bind() to existing function to apply preceding arguments and obtain a new function.

## [5. Curry](Exercises/5-curry.js)

Given function `someFunc()` which accepts `n` arguments (e.g. 3 arguments).
Implement function `curry()` that generates other function which accepts `someFunc()` arguments partially and supplies them to `someFunc()`:

```js
const func = curry(3, someFunc);

func(a)(b)(c) == someFunc(a, b, c) //=> true

func(a, b)(c) == someFunc(a, b, c) //=> true

func(a)(b, c) == someFunc(a, b, c) //=> true
```

## [6. Chaining](Exercises/6-chaining.js)

Implement one-argument function that passes its argument to another function and returns an object which has the same function:

```js
func(a).func(b).func(c) == someFunc(a, b, c) //=> true
```
