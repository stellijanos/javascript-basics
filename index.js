
const numbers = [2, 3, -1, 1];

// every() -> every element
const allPositive = numbers.every(value => value >= 0);
console.log(allPositive);

// some() -> at least 1 element
const atLeast1Positive = numbers.some(value => value >= 0);
console.log(atLeast1Positive);
