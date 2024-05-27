
// street
// city 
// zipCode 
// showAddress(address)

const address =  createAddress('a', 'b', 'c');
const another = new Address('a', 'b', 'c');

// factory Function
function createAddress(street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    }
}

// Constructor Function 
function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}
