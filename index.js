
const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

for (let key in circle) {
    console.log(key, circle[key]);
}

for (let key of Object.keys(circle)) {  // Object is not iterable
    console.log(key);
}

for (let entry of Object.entries(circle)) { 
    console.log(entry);
}

if ('color' in circle) console.log('yes'); // verify if a given object has a property

// function Object() {}
// const x = {value: 1}; // internally is translated to 
// const y = new Object();
