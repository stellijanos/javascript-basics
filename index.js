
let i = 0; 
while (i <= 10) {

    // if ( i === 5) break; // jump out of a loop

    if (i % 2 === 0) {
        i++;
        continue; // jump to the next iteration
    }

    console.log(i);
    i++;
}