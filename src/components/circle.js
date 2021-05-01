// import using require

// declare class
var Shape = require("./shape.js");
class Circle extends Shape {
  constructor(color = "green") {
    super();
  }
  calculateArea() {}
}
module.exports = Circle;
// export class using module.exports
