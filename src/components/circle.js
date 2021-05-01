// import using require

// declare class
import Shape from "./shape";
export class Circle extends Shape {
  constructor(name, pi, radius, color) {
    super();
  }
  calculateArea() {
    console.log(` ${this.pi} * ${this.radius} * ${this.radius}`);
  }
}
let object1 = new Circle("newCircle", 3.14, 5, "brown");
object1.calculateArea();
// export class using module.exports
