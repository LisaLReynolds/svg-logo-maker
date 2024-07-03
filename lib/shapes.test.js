const { Triangle, Circle, Square } = require("./shapes");

test("should render a blue circle", () => {
  const shape = new Circle();
  shape.setColor("blue");
  shape.setText("SVG");
  shape.setTextColor("green");
  expect(shape.render()).toEqual(
    `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="40" fill="blue" /><text x="50" y="50" fill="green" text-anchor="middle">SVG</text></svg>`
  );
});

test("should render a blue square", () => {
  const shape = new Square();
  shape.setColor("blue");
  shape.setText("SVG");
  shape.setTextColor("green");
  expect(shape.render()).toEqual(
    `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="80" height="80" fill="blue" /><text x="50" y="50" fill="green" text-anchor="middle">SVG</text></svg>`
  );
});

test("should render a blue triangle", () => {
  const shape = new Triangle();
  shape.setColor("blue");
  shape.setText("SVG");
  shape.setTextColor("green");
  expect(shape.render()).toEqual(
    `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="50,10 10,90 90,90" fill="blue" /><text x="50" y="50" fill="green" text-anchor="middle">SVG</text></svg>`
  );
});
