class Customer {
    firstName: string;
    lastName: string;

    constructor(theFirstName: string, theLastName: string) {
        this.firstName = theFirstName;
        this.lastName = theLastName;
    }
}

// let's create an instance
let myCustomer = new Customer("David", "Geraldo");

console.log(`${myCustomer.firstName} ${myCustomer.lastName}`);