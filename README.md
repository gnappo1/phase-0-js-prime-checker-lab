# Prime Number Checker Lab

### Objective

In this lab, you'll practice working with statements, including selection and repetition, in JavaScript. Your task is to implement a script that checks whether a given number is prime or not.

### Instructions

1. Fork and clone this repository.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install the necessary dependencies.
4. Open the `index.js` file in your text editor. This is where you'll write your code.
5. Implement the code to check whether a given number is prime or not.
    - Remember that **a prime number is a number greater than 1 that has no positive divisors other than 1 and itself**. That means that every number between 1 and the number before the input given will produce a remainder when doing the division between them. Make sure to handle edge cases, such as negative numbers, 0, and 1.
6. As you progress, make sure to run the tests with `npm test` to check your implementation against the provided test cases.
7. Once you've implemented the code successfully and all the tests pass, feel free to come up with your own starter numbers and run the script typing `node index.js` in your terminal.

### Initial Tests

Two tests are provided initially to ensure that you do not hardcode your solutions. These tests check whether the variables isNum1Prime and isNum2Prime are initially undefined and are set to the correct boolean values only after your implementation.


### Starter Variables

Use the following variables provided in the `index.js` file:

```javascript
const num1 = 79;
let isNum1Prime;

const num2 = 123;
let isNum2Prime;
```

### Reminders

To complete this lab, you will need to use while loops to iterate over the possible divisor numbers and conditionals to check whether each number is prime. You may also find the remainder operator `%` helpful in determining whether a number is divisible by another number.

### Resources

- [MDN Web Docs: let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
- [MDN Web Docs: const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)
- [MDN Web Docs: Control Flow](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)
- [Wikipedia: Prime Numbers](https://en.wikipedia.org/wiki/Prime_number)