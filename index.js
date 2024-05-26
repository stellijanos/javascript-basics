
let name = 'Janos'; // String Literal
let age = 20; // Number Literal
let isApproved = false; // Boolean Literal 
let firstName = undefined; // by default every unassigned variable has undefined value
let selectedColor = null; // we use null, if we want to clear the value of a variable

// static language - type of variable remains the same during runtime
// dynamic typing (language) - type of variable can change during the runtime
 
// undefined is a type but also a value
// null value has type 'object'

// Primitives/ Value Types: string, number, boolean, undefined, null
// Reference Types : Object, Array, Function

// Object
let person = {   // curly braces - Object Literal
    name: 'Janos',
    age: 20
}


// Dot Notation 
person.name = 'John';

// Bracket Notation 
let selection = 'name';
person[selection] = 'Mary';

console.log(person.name);

