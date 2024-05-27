
let address1 =  new Address('a', 'b', 'c');
let address2 = new Address('a', 'b', 'c');
let address3 = address1;

console.log(areEqual(address1, address2));
console.log(areSame(address1, address2));
console.log(areSame(address1, address3));



// Constructor Function 
function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}


function areEqual(address1, address2) {
    for (key in address1) 
        if (address1[key] !== address2[key])
            return false;
    return true;
}

// OR
// function areEqual(add1, add2) {
//     return address1.street === add2.street &&
//         add1.city === add2.city && 
//         add1.zipCode === add2.zipCode;
// }



function areSame(address1, address2) {
    return address1 === address2;
}
