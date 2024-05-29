
const numbers = [1, 2, 3, 4];

console.log(includes(numbers, -1));

function includes(array, searchElement) {
    for(let elem of array) 
        if (elem === searchElement)
            return true;
    return false;
}
