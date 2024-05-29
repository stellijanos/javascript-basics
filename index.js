
function start() {
    for (var i = 0; i< 5; i++) {
        if (true) {
            let color = 'red';
        }
    }
    console.log(color);
}

// var
// ES6 (ES2015: let, const => block-scoped)

// start();

var color = 'red'; // outside of a function, creates a global variable and attaches to the window object of the browser
let age = 30;


function sayHi() {
    console.log('hi');
}

// avoid using var keyword, because it creates variables that are function scope, not block scope.
