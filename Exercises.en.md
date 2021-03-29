# Exercises

## Use partial or bind

You can often use more general functions to define more specific functions.

- Define function `power(exp, n)`, the same as `Math.pow(n, exp)` but with
reverse order of argumants.
- Implement function `square(n)` which returns a number to the power of two.
- `bind()` function `power(exp, n)` to obtain function `cube(n)`.

## Use closure

Use constructor-like function that returns a function to define different
specific functions.

## Use lambdas (arrow functions)

Use nested functions for functional inheritance.

## Use bind

Use method bind() to existing function to apply preceding arguments and obtain
a new function.

## Use curry

Given function `someFunc()` which accepts `n` arguments (e.g. 3 arguments).
Implement function `curry()` that generates other function which accepts
`someFunc()` arguments partially and supplies them to `someFunc()`:

```js
const func = curry(3, someFunc);

func(a)(b)(c) === someFunc(a, b, c) // true

func(a, b)(c) === someFunc(a, b, c) // true

func(a)(b, c) === someFunc(a, b, c) // true
```

## Exercises

Implement one-argument function that passes its argument to another function and
returns an object which has the same function:

```js
func(a).func(b).func(c) === someFunc(a, b, c) // true
```
