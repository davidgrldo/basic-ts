var found = true;
var grade = 88.6;
var firstName = "David";
var lastName = "Geraldo";
found = false;
grade = 99;
firstName = "John";
lastName = "Doe";
// datatype any
var myData = 50.0;
// we can assigm different values of any type
myData = "David";
myData = false;
myData = 22;
// this is okay but be careful.. you lose type-safety
console.log(found);
console.log("The grade is " + grade);
console.log("Hi, ".concat(firstName, " ").concat(lastName));
