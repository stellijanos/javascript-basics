
function sum(discount, ...prices) { // ... the rest operator here (not/ opposite of the spread operator)

    const total = prices.reduce((a,b) => a + b);
    return total * (1 - discount);
}

console.log(sum(0.1, 20, 30));


// A rest (of the) parameter must be last in a parameter list.
