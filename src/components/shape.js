// declare class

// export class using module.exports
export class Shape {
  constructor(name, pi, radius, color = "green") {
    this.name = name;
    this.pi = pi;
    this.radius = radius;
    this.color = color;
  }
  drawShape() {
    console.log(`${this.name}`);
  }
  calculateArea() {
    console.log(` ${this.pi} * ${this.radius} * ${this.radius}`);
  }
}

let object = new Shape("circle", 3.14, 4, "green");
object.drawShape();
object.calculateArea();
