import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";
import { Shape } from "./Shape";

let myCircle = new Circle(5, 10, 20);
let myRectangle = new Rectangle(0, 0, 10, 15);

// declare an array of shape ... initially empty
let theShapes: Shape[] = [];

// add the shape to the array
theShapes.push(myCircle);
theShapes.push(myRectangle);

for (let tempShape of theShapes) {
    console.log(tempShape.getInfo());
    console.log(tempShape.calculateArea());
    console.log();
}