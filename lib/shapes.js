//prompt user for questions, building out classes and methods

class Shape {
  constructor() {
    this.color = "blue"; // Default color
    this.text = "";
    this.textColor = "white";
    //prototype {}
  }

  setColor(color) {
    this.color = color;
  }

  setText(text) {
    this.text = text.substring(0, 3); // Limit text to 3 characters
  }

  setTextColor(color) {
    this.textColor = color;
  }

  render() {
    // Abstract method to be implemented by child classes
    return "";
  }
}

class Circle extends Shape {
  render() {
    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="40" fill="${this.color}" /><text x="50" y="50" fill="${this.textColor}" text-anchor="middle">${this.text}</text></svg>`;
  }
}

class Square extends Shape {
  render() {
    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="80" height="80" fill="${this.color}" /><text x="50" y="50" fill="${this.textColor}" text-anchor="middle">${this.text}</text></svg>`;
  }
}

class Triangle extends Shape {
  render() {
    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="50,10 10,90 90,90" fill="${this.color}" /><text x="50" y="50" fill="${this.textColor}" text-anchor="middle">${this.text}</text></svg>`;
  }
}

module.exports = { Triangle, Circle, Square };
