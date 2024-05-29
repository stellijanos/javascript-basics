
const numbers = [1, 2, 3, 4];

const output = except(numbers, [1, 2]);

console.log(output);

function except(array, excluded) {
    return array.filter(number => !excluded.includes(number));
}
