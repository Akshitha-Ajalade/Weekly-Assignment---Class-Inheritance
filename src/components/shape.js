import React from "react";
class Shape extends React.Component {
  constructor(props) {
    super(props);
    this.color = "red";
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
