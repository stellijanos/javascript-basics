
const marks = [80, 90, 50];

// Average = 70
// 0- 59 : F
// 60- 69: D
// 70-79: C
// 80-89: B
// 90-100: A

console.log(calculateGrade(marks));



function calculateGrade(marks) {
    
    const average = calculateAverage(marks);
    if (average < 60) return 'F';
    if (average < 70) return 'D';
    if (average < 80) return 'C';
    if (average < 90) return 'B';
    return 'A';
}

function calculateAverage(array) {
    let sum = 0;
    for (let num of array) 
        sum += num;
    return sum / array.length;
}
