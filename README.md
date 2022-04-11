# JS practice questions

## Objects

1. Create an object which will have a date key,

Here is the [solution](./date.js)

## Functions

1. Return the sum of all arguments passed to function.

Example: f(1,2,3,4) => 24, f(4,7) => 28, f(4) => 4

Here is the [solution](./sum.js)

2. Create function that will return all the most repeated element.

Here is the [solution](./mostRepeated.js)

3. Let’s say we have an object with linked props

```javascript
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};
```

Print all the values with recursion.

Here is the [solution](./rec.js)

4. Reduce, Map…..

Here is the [solution](./implementation.js)

5. Write a function which will remove all repeated items of array.

Here is the [solution](./repeated.js)

6. Write a JavaScript function that checks if the given string includes the given substring.

- EX: str = “Hello” substr = “ell” => returned value is true
- EX: str = “Kill” substr = “lolo” => returned value is false

Here is the [solution](./includes.js)

7. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in the upper case.

   - EX: ‘i love you’ => ‘I Love You’, (use str.split function)

Here is the [solution](./upperCase.js)

8. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.

- Example string : 'Web Development Tutorial'
- Expected Output : 'Development'

Here is the [solution](./longestWord.js)

## Extra Exercise 1

Write a JS function, which will work as a calculator.
It will accept 3 arguments, first number, second number and the sign

EX:

- calc(1, 2, ‘+’) =>3
- calc(1, 2, ‘-’) =>-1
- calc(1, 2, ‘\*’) =>2
- calc(1, 2, ‘/’) =>½

Here is the [solution](./calc.js)
