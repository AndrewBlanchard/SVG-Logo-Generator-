class Shape {
    constructor(color) {
      this.color = color;
    }
  
    getColor() {
      return this.color;
    }
    
  }
  
  class Circle extends Shape {
    constructor(color, radius) {
        super(color); 
        this.radius = radius;
    }
    render() {
      return `<circle cx="150" cy="100" r="100" fill="${this.color}" />`;
  }
  }
  
  class Square extends Shape {
    constructor(color, sideLength) {
        super(color);
        this.sideLength = sideLength;
    }
    render() {
        return `<rect width="100" height="100" fill="${this.color}" />`;
    }
  }
  
  class Triangle extends Shape {
    constructor(color, base, height) {
        super(color);
        this.base = base;
        this.height = height;
    }
    render() {
      return `<polygon points="150,50 50,150 250,150" fill="${this.color}" />`;
    }
  }
  
  export { Shape, Circle, Square, Triangle };