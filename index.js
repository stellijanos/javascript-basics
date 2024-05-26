
// Falsy
// undefined
// null
// ''
// false
// 0
// NaN

const array = [0, undefined, 1, 2, 3, 0];

console.log(countTruthy(array));


function countTruthy(array) {
    let count = 0;
    for (let elem of array) {
        if (elem) count++;
    }
    return count;
}
