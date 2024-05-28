
const numbers = [2, 3, 0, -1, 1];

const filtered = numbers.filter(n => n > 0);

const items = filtered.map(n => '<li>' + n + '</li>');

const html = '<ul>' + items.join('') + '</ul>';
// console.log(html);

// const objects = filtered.map(n =>  {value: n}); // undefined elements array
// js engine thinks that we are defining a function with {}
const objects = filtered.map(n =>  ({value: n}));

console.log(objects);


const result = numbers
            .filter(n => n > 0)
            .map(n =>  ({value: n}))
            .filter(obj => obj.value > 1)
            .map(obj => obj.value);

console.log(result);