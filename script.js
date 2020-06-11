let counter = 1;
const max = 600;
const min = 0;
const canvas = document.querySelector('.canvas');

// Circle
const circleRadius = document.querySelector('#circleRadius');
const circleBtn = document.querySelector('#circle-btn');
circleBtn.addEventListener('click', (e) => {
  e.preventDefault();
  return new Circle(circleRadius);
});
// Rectangle
const rectWidth = document.querySelector('#rectWidth');
const rectHeight = document.querySelector('#rectHeight');
const rectangleBtn = document.querySelector('#rectangle-btn');
rectangleBtn.addEventListener('click', (e) => {
  e.preventDefault();
  return new Rectangle(rectWidth, rectHeight);
});
// Square
const squareLength = document.querySelector('#squareLength');
const squareBtn = document.querySelector('#square-btn');
squareBtn.addEventListener('click', (e) => {
  e.preventDefault();
  return new Square(squareLength);
});
// Triangle
const triangleSides = document.querySelector('#triangleSides');
const triangleBtn = document.querySelector('#triangle-btn');
triangleBtn.addEventListener('click', (e) => {
  e.preventDefault();
  return new Triangle(triangleSides);
});

// Side Panel
const shapeName = document.querySelector('#shapeName');
const shapeWidth = document.querySelector('#shapeWidth');
const shapeHeight = document.querySelector('#shapeHeight');
const shapeRadius = document.querySelector('#shapeRadius');
const shapeArea = document.querySelector('#shapeArea');
const shapePerimeter = document.querySelector('#shapePerimeter');

// Shape class
class Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.div = document.createElement('div');
    this.div.id = 'shape' + counter;
    counter++;
    this.div.style.top = `${randomVal(max, min)}px`;
    this.div.style.left = `${randomVal(max, min)}px`;
    this.shapeName = shapeName;
    this.shapeWidth = shapeWidth;
    this.shapeHeight = shapeHeight;
    this.shapeRadius = shapeRadius;
    this.shapeArea = shapeArea;
    this.shapePerimeter = shapePerimeter;
    this.describe();
    this.div.addEventListener('dblclick', () => this.removeShape())
    this.appendToDOM();
  }

  appendToDOM() {
    canvas.appendChild(this.div);
  }
  
  removeShape() {
      
        canvas.removeChild(this.div)
    
  }

  get describe() {
    return this.describe();
  }

}

// Circle class
class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
    this.circleBtn = circleBtn;
    this.div.className = 'circle';
    this.div.style.width = `${this.diameter()}px`;
    this.div.style.height = `${this.diameter()}px`;
  }

  diameter() {
    return 2 * this.radius.value;
  }

  describe() {
    this.div.addEventListener('click', () => {
      this.shapeName.value = this.circleBtn.name;
      this.shapeWidth.value = 'n/a';
      this.shapeHeight.value = 'n/a';
      this.shapeRadius.value = this.radius.value;
      this.shapeArea.value = '~' + this.calculateArea().toFixed(2) + '';
      this.shapePerimeter.value = 'n/a';
    });
  }

  remove() {
    this.div.addEventListener('dblclick', () => {});
  }

  calculateArea() {
    const radius = this.radius.value;
    return Math.PI * radius * radius;
  }
}

// Triangle class
class Triangle extends Shape {
  constructor(height) {
    super();
    this.height = height;
    this.triangleBtn = triangleBtn;
    this.div.className = 'triangle';
    this.div.style.borderTopWidth = `${this.height.value}px`;
    this.div.style.borderRightWidth = `${this.height.value}px`;
  }

  describe() {
    this.div.addEventListener('click', () => {
        this.shapeName.value = this.triangleBtn.name;
        this.shapeWidth.value = `${this.height.value}px`;
        this.shapeHeight.value = `${this.height.value}px`;
        this.shapeRadius.value = `n/a`;
        this.shapeArea.value = '~' + this.calculateArea().toFixed(2) + '';
        this.shapePerimeter.value = `${
          2 * (this.height.value + this.height.value)
        }`;
    });
  }

  remove() {
    this.div.addEventListener('dblclick', () => {});
  }

  calculateArea() {
    return (this.height.value * this.height.value) / 2;
  }
}

// Rectangle class
class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
    this.rectangleBtn = rectangleBtn;
    this.div.className = 'rectangle';
    this.div.style.width = `${this.width.value}px`;
    this.div.style.height = `${this.height.value}px`;
  }

  describe() {
    this.div.addEventListener('click', () => {
        this.shapeName.value = this.rectangleBtn.name;
        this.shapeWidth.value = `${this.width.value}px`;
        this.shapeHeight.value = `${this.height.value}px`;
        this.shapeRadius.value = `n/a`;
        this.shapeArea.value = '~' + this.calculateArea().toFixed(2) + '';
        this.shapePerimeter.value = `${2 * (this.width.value + this.height.value)}`;
    });
  }

  remove() {
    this.div.addEventListener('dblclick', () => {});
  }

  calculateArea() {
    return this.width.value * this.height.value;
  }
}

// Square class
class Square extends Shape {
  constructor(sideLength) {
    super();
    this.squareBtn = squareBtn;
    this.sideLength = squareLength;
    this.div.className = 'square';
    this.div.style.width = `${this.sideLength.value}px`;
    this.div.style.height = `${this.sideLength.value}px`;
  }

  describe() {
    this.div.addEventListener('click', () => {
        this.shapeName.value = this.squareBtn.name;
        this.shapeWidth.value = `${this.sideLength.value}px`;
        this.shapeHeight.value = `${this.sideLength.value}px`;
        this.shapeRadius.value = `n/a`;
        this.shapeArea.value = '~' + this.calculateArea().toFixed(2) + '';
        this.shapePerimeter.value = 'n/a';
    });
  }

  remove() {
    this.div.addEventListener('dblclick', () => {});
  }

  calculateArea() {
    return this.sideLength.value * this.sideLength.value;
  }
}

//  Function Declarations
function randomVal(max, min) {
  return Math.floor(Math.random() * (max - min)) + min;
}
