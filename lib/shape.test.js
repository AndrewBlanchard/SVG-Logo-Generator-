const {Circle, Square, Triangle} = require("./shapes")
// Circle Shape
describe('Circle', () => {
    test('renders correctly', () => {
      const circle = new Circle('blue', 100);
      expect(circle.render()).toEqual(`<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="blue">`);
    });
  });

  // Square Shape
describe('Square', () => {
    test('renders correctly', () => {
      const square = new Square('red', 100);
      expect(square.render()).toEqual(`<rect x="0" y="0" width="100" height="100" fill="red" />`);
    });
  });
  
  // Triangle Shape (assuming right triangle)
  describe('Triangle', () => {
    test('renders correctly', () => {
      const triangle = new Triangle('green', 100, 100);
      expect(triangle.render()).toEqual(`<polygon points="0,0 100,0 50,100" fill="green" />`);
    });
  });
