const { Triangle, Circle, Square } = require("./lib/shapes");

function generateSVG(answers) {
  const triangle = new Triangle();
  triangle.setColor(answers.triangleColor);

  const circle = new Circle();
  circle.setColor(answers.circleColor);

  const square = new Square();
  square.setColor(answers.squareColor);

  const svgContent = `
        <svg width="500" height="500" xmlns="http://www.w3.org/2000/svg">
            ${triangle.render()}
            ${circle.render()}
            ${square.render()}
        </svg>
    `;

  return svgContent;
}

module.exports = generateSVG;

// function generateSVG(answers) {
//   return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
//         <${answers.shape} cx="150" cy="100" r="80" fill="${answers.shapeColor}" />
//         <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>
//     </svg>`;
// }
