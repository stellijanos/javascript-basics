// sum(1, 2, 3, 4) => 10

function sum(...items) {
    if(items.length === 1 && Array.isArray(items[0])) {
        return items[0].reduce((acc, curr) => acc + curr);
    }
    return items.reduce((acc, curr) => acc + curr);
}

console.log(sum([1,2,3,4]));
