
const numbers = [1, 2, 5, 3, 4, 1];

const max = getMax(numbers);

console.log(max);

function getMax(array) {
    // let max = array[0];
    // array.forEach(element => {
    //     if (max < element)
    //         max = element;
    // });
    // return max;
    if (array.length === 0) return undefined;
    return array.reduce((max, current) => (current > max) ? current : max);
}
