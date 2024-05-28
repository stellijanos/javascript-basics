
const numbers = [1, -1, 2, 3];

// with defining initial value for accumlator
// a = 0, c = 1 => a = 1
// a = 1, c = -1 => a = 0
// a = 0, c = 2 => a = 2
// a = 2, c = 3 => a = 5


// after eliminatig initial value for accumlator
// a = 1, c = -1 => a = 0
// a = 0, c = 2 => a = 2
// a = 2, c = 3 => a = 5
const sum = numbers.reduce((accumlator, currentValue) => accumlator + currentValue);

console.log(sum);
