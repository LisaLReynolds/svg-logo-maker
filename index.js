const inquirer = require("inquirer");
const fs = require("fs");
const { Triangle, Circle, Square } = require("./lib/shapes");

const questions = [
  {
    type: "input",
    name: "text",
    message: "Enter text for the logo (must not be more than 3 characters):",
  },
  {
    type: "input",
    name: "textColor",
    message: "Enter a text color:",
  },
  {
    type: "list",
    name: "shape",
    message: "Select a shape for the logo:",
    choices: ["Circle", "Square", "Triangle"],
  },
  {
    type: "input",
    name: "shapeColor",
    message: "Enter a shape color:",
  },
];

function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      let shape;
      switch (answers.shape) {
        case "Circle":
          shape = new Circle();
          break;
        case "Square":
          shape = new Square();
          break;
        case "Triangle":
          shape = new Triangle();
          break;
      }
      shape.setText(answers.text);
      shape.setTextColor(answers.textColor);
      shape.setColor(answers.shapeColor);
      fs.writeFile("logo.svg", shape.render(), (err) => {
        if (err) console.log(err);
        else console.log("Generated logo.svg");
      });
    })
    .catch((error) => {
      console.log(error);
    });
}

init();
