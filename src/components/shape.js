//import React from "react";
class Shape {
  constructor(props) {
    super(props);
    this.color = "blue";
  }
  drawShape() {
    console.log("drawing shape");
  }
  calculateArea() {
    console.log("cal in shape");
  }
}
// export class using module.exports
module.exports = Shape;
