
showPrimes(100);


function showPrimes(limit) {
    for (let num = 2; num <= limit; num++) 
        if (isPrime(num)) console.log(num);
}

function isPrime(number) {
    if (number <= 1 ) return false;
    if (number <= 3) return true;
    if (number % 2 === 0 || number % 3 === 0) return false;

    const integerSqrt = Math.trunc(Math.sqrt(number));

    for (let divisor = 5; divisor <= integerSqrt; divisor += 2)
        if (number % divisor === 0) 
            return false;

    return true;
}
