
const numbers = [1, 2, 3, 4, 1, -1];

const count = countOccurencies(numbers, 2);

console.log(count);

function countOccurencies(array, seachElement) {
    // return array.filter(number => number === seachElement).length;
    return array.reduce((acc, currentElement) => 
        currentElement === seachElement ? acc+1 : acc, 0);
}
