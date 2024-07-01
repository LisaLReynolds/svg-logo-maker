const generateSVG = require("./lib/generateSVG.js");
const inquirer = require("inquirer");
const fs = require("fs");

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
  inquirer.prompt(questions)
  .then(({shape}) => switch())
  .then((answers) => {
    fs.writeFile("logo.svg", generateSVG(answers), (err) => {
      if (err) console.log(err);
      else console.log("Your logo was generated successfully!");
    });
  });
}

init();
