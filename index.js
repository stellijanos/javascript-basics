
// Function declaration
function walk() {
    console.log('walk');
}

// Anonymous Function Expression 
let run = function() {
    console.log('run');
};

// Named Function Expression 
let swim = function walk() {
    console.log('swim');
};

let move = run;

run();
move();
