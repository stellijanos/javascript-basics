
function sum() {
    let total = 0;

    for (let value of arguments) // can use of in any object with iterator
        total += value;
    return total;
}

console.log(sum(1, 2, 3, 4, 5));
