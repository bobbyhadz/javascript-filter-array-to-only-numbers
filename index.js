// EXAMPLE 1 - Filter an Array to only Numbers in JavaScript

const arr = [1, 'test', 3, null];

const onlyNumbers = arr.filter(
  element => typeof element === 'number',
);
console.log(onlyNumbers); // 👉️ [1, 3]

// ------------------------------------------------------------------

// // EXAMPLE 2 - Dealing with string elements that are valid numbers

// const arr = ['1', 'test', '3', 5];
// const validNumbers = arr.filter(Number);

// // 👇️ ['1', '3', 5]
// console.log(validNumbers);

// ------------------------------------------------------------------

// // EXAMPLE 3 - Converting the results to numbers

// const arr = ['1', 'test', '3', 5];
// const validNumbers = arr.filter(Number);

// // 👇️ ['1', '3', 5]
// console.log(validNumbers);

// const toNumbers = validNumbers.map(Number);
// console.log(toNumbers); // 👉️ [1, 3, 5]

// ------------------------------------------------------------------

// // EXAMPLE 4 - Filter an Array to only Integers in JavaScript

// const arr = [1.1, 6, 'test', undefined, 5, 14, 0];

// const validNumbers = arr.filter(Number.isInteger);

// // 👇️ [ 6, 5, 14, 0 ]
// console.log(validNumbers);
