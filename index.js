
const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};


// for (let key in circle) {
//     another[key] = circle[key];
// }

// const assign = Object.assign({
//     color:'yellow'
// }, circle); // cloning circle properties and methods into another


const another = {...circle}; // spread the circle Object

console.log(another);
