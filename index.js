
// Camel Notation: oneTwoThreeFour
// Pascal Notation: OnwTwoThreeFour

// Factory function 
function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('draw');
        }
    };
}


const myCircle = createCircle(1);

// Constructor Function  (naming convention with Pascal Notation)

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const circle = new Circle(1);
