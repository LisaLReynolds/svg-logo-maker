const Shapes = require("./shapes.js");

class Triangle extends Shapes {
  render() {
    constructor(color = "black") {
        this.color = color;
    }

    setColor(color) {
        this.color = color;
    }
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
  }
}
