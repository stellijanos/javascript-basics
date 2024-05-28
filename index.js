
const numbers = [2, 3, 1];

numbers.sort(); // converts into string, then sorts them
// console.log(numbers);

numbers.reverse();
// console.log(numbers);


const courses = [
    {id: 1, name: 'Node.js'},
    {id: 2, name: 'JavaScript'},
];

courses.sort((a, b) => a.id - b.id); // sort asceding
courses.sort((a, b) => b.id - a.id); // sort desceding
console.log(courses);

courses.sort((a,b) => a.name.toLowerCase() - b.name.toLowerCase());
console.log(courses);
