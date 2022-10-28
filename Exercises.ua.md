# Вправи

## Використання часткового застосування чи bind

Часто можна використовувати більш загальні функції для визначення більш конкретних функцій.

- Реалізуйте `power(exp, n)`, те ж саме що і `Math.pow(n, exp)` але з оберненим порядком аргументів
- Реалізуйте функцію `square(n)`, яка повертає куб числа.
- `bind()` функцію `power(exp, n)`, щоб отримати функцію `cube(n)`.

## Використання замикання

Використайте функцію схожу на конструктор, яка повертає функцію для визначення різних
специфічні функції.

## Використання стрілкових функцій

Використайте вкладені функції для функціонального успадкування.

## Юзання bind

Використайте метод bind() до існуючої функції для застосування попередніх аргументів та отримання
нової функції.

## Застосування curry

Дана функція `someFunc()`, яка прймає `n` аргументів (наприклад, 3 аргументи).
Реалізуйте функцію `curry()`, яка породжує іншу функцію, що приймає приймає аргументи функції
`someFunc()` частково та передає їх до `someFunc()`:

```js
const func = curry(3, someFunc);

func(a)(b)(c) === someFunc(a, b, c) // true

func(a, b)(c) === someFunc(a, b, c) // true

func(a)(b, c) === someFunc(a, b, c) // true
```

## Вправи

Реалізуйте функцію одного аргументу, яка передає свій аргумент іншій функції і
повертає об'єкт, який має таку саму функцію:

```js
func(a).func(b).func(c) === someFunc(a, b, c) // true
```