class Customer {
    private _firstName: string;
    private _lastName: string;

    constructor(theFirstName: string, theLastName: string) {
        this._firstName = theFirstName;
        this._lastName = theLastName;
    }

    public get firstName(): string {
        return this._firstName;
    }

    public set firstName(value: string) {
        this._firstName = value;
    }

    public get lastName(): string {
        return this._lastName;
    }
    public set lastName(value: string) {
        this._lastName = value;
    }
}

// let's create an instance
let myCustomer = new Customer("David", "Geraldo");

console.log(`${myCustomer.firstName} ${myCustomer.lastName}`);