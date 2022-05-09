let found: boolean = true;
let grade: number = 88.6;
let firstName: string = "David";
let lastName: string = "Geraldo";

found = false;
grade = 99;
firstName = "John";
lastName = "Doe";

// datatype any
let myData: any = 50.0;

// we can assigm different values of any type
myData = "David";
myData = false;
myData = 22;
// this is okay but be careful.. you lose type-safety

console.log(found);
console.log("The grade is " + grade);
console.log(`Hi, ${firstName} ${lastName}`);