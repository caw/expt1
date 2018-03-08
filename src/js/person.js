class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFirstName() {
        return this.firstName;
    }

    getLastName() {
        return this.lastName;
    }
}

function adder(x, y) { return x + y };
const mult = (x, y) => x * y;

export { Person, adder, mult }