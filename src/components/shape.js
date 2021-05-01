// declare class

// export class using module.exports
import React from "react";
class Shape extends React.Component {
  constructor(props) {
    super(props);
    this.color = "color";
  }
  drawShape() {}
  calculateArea() {}
}
module.exports = Shape;
