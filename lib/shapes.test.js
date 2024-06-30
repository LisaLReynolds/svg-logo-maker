const shape = new Circle();
shape.setColor("blue");
expect(shape.render()).toEqual(//insert circle code here)

  const shape = new Square();
  shape.setColor("blue");
  expect(shape.render()).toEqual(//insert square code here)

const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual(
  '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
);
