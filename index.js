
console.log(sum(10));

function sum(limit) {
    let sum = 0;
    
    for (let number = 0; number <= limit; number++)
        if (number % 3 === 0 || number % 5 === 0 ) 
            sum+= number;

    return sum;
}
