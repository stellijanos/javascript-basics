
const person = {
    firstname: 'Janos',
    lastname: 'Stelli',
    get fullname() {
        return `${person.firstname} ${person.lastname}`;
    },
    set fullname(value) {
        const parts = value.split(' ');
        this.firstname = parts[0];
        this.lastname = parts[1];
    }
};

// getters => access properties
// setters => change (mutate) them

person.fullname = 'John Smith';
console.log(person);
