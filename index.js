
const person = {
    firstname: 'Janos',
    lastname: 'Stelli',
    get fullname() {
        return `${person.firstname} ${person.lastname}`;
    },
    set fullname(value) {

        if (typeof value !== 'string') 
            throw new Error('Value is not a string');

        const parts = value.split(' ');
        if (parts.length !== 2) 
            throw new Error('Enter a first and last name');
        this.firstname = parts[0];
        this.lastname = parts[1];
    }
};

// defensive programming = error handling at the beginning
// ensuring that the values are valid
// throwing error is an exception
// consoling error is error

try {
    person.fullname = '';
} 
catch (e) {
    alert(e);
}

console.log(person);
