// for 
// while 
// do-while

// for-in - to iterate over the properties of an object
const person = {
    name: 'Janos',
    age: 30
}

for (let key in person) {
    console.log(key, person[key]);
}

// for-of to iterate over the elements in an array
const colors = ['red', 'green', 'blue'];

for (let color of colors) 
    console.log(color);

