

try {
    const numbers = [1, 2, 3, 4, 1];
    const count = countOccurencies(true, 1);
    console.log(count);
} 
catch (e) {
    console.log(e.message);
}

function countOccurencies(array, searchElement) {

    if (!Array.isArray(array)) {
        throw new Error('Provide an array!');
    }

    return array.reduce((accumlator, current) => {
        const occurence = (current === searchElement) ? 1 : 0;
        return accumlator + occurence;
    }, 0)
}
