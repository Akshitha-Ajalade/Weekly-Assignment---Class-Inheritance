// declare class

// export class using module.exports
class Shape {
  constructor(color = "green") {
    this.color = color;
  }
  drawShape() {}
  calculateArea() {}
}
module.exports = Shape;
