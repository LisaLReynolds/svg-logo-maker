const questions = [
  {
    type: "input",
    name: "text",
    message: "Enter text for the logo (must not be more than 3 characters):",
  },
  {
    type: "input",
    name: "text color",
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
    name: "shape color",
    message: "Enter a shape color:",
  },
];
