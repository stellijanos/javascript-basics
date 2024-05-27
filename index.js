// Value Types
// Number, String, Boolea, Symbol, undefined, null

// Reference Types
// Object Function Array

let x = {value: 10};
let y = x;

x.value = 20;
// the object name (address) is passed by reference
// x and y are pointing to the same object in the memory

// Primitives are copied by their VALUE
// Objects are copied by their REFERENCE

let obj = {value: 10};

function increase(number) { // 2 independent copies
    number.value++;
} 

increase(obj);

console.log(obj);
