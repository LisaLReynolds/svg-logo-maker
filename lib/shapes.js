//prompt user for questions, building out classes and methods

//switch() {
//case "circle":
//const shape = new Circle()
//break;

//case 'square':
//const shape = new Square()
//}

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
    return `
          <svg width="100" height="100">
            <circle cx="50" cy="50" r="40" fill="${this.color}" />
            <text x="50" y="50" fill="${this.textColor}" text-anchor="middle">${this.text}</text>
          </svg>
        `;
  }
}

class Square extends Shape {
  render() {
    return `
          <svg width="100" height="100">
            <rect x="10" y="10" width="80" height="80" fill="${this.color}" />
            <text x="50" y="50" fill="${this.textColor}" text-anchor="middle">${this.text}</text>
          </svg>
        `;
  }
}

class Triangle extends Shape {
  render() {
    return `
          <svg width="100" height="100">
            <polygon points="50,10 10,90 90,90" fill="${this.color}" />
            <text x="50" y="50" fill="${this.textColor}" text-anchor="middle">${this.text}</text>
          </svg>
        `;
  }
}
