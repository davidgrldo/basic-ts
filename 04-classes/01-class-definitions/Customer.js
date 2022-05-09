var Customer = /** @class */ (function () {
    function Customer(theFirstName, theLastName) {
        this.firstName = theFirstName;
        this.lastName = theLastName;
    }
    return Customer;
}());
// let's create an instance
var myCustomer = new Customer("David", "Geraldo");
console.log("".concat(myCustomer.firstName, " ").concat(myCustomer.lastName));
