let counter = 1;
const max = 600;
const min = 0;
const canvas = document.querySelector('.canvas');
// Circle
const circleRadius = document.querySelector('#circleRadius');
const circleBtn = document.querySelector('#circle-btn');
circleBtn.addEventListener('click', (e) => {
  e.preventDefault();
  return new Circle();
});
// Rectangle
const rectWidth = document.querySelector('#rectWidth');
const rectHeight = document.querySelector('#rectHeight');
const rectangleBtn = document.querySelector('#rectangle-btn');
rectangleBtn.addEventListener('click', (e) => {
  e.preventDefault();
  return new Rectangle();
});
// Square
const squareLength = document.querySelector('#squareLength');
const squareBtn = document.querySelector('#square-btn');
squareBtn.addEventListener('click', (e) => {
  e.preventDefault();
  return new Square();
});
// Triangle

// Side Panel
const shapeName = document.querySelector('#shapeName');
const shapeWidth = document.querySelector('#shapeWidth');
const shapeHeight = document.querySelector('#shapeHeight');
const shapeRadius = document.querySelector('#shapeRadius');
const shapeArea = document.querySelector('#shapeArea');
const shapePerimeter = document.querySelector('#shapePerimeter');

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
  }

  get describe() {
    return this.describe();
  }

  get remove() {
    return this.remove();
  }
}

class Circle extends Shape {
  constructor(radius) {
    super(2 * radius, 2 * radius);
    this.radius = circleRadius;
    this.circleBtn = circleBtn;
    this.div.className = 'circle';
    this.div.style.width = `${2 * this.radius.value}px`;
    this.div.style.height = `${2 * this.radius.value}px`;
    canvas.appendChild(this.div);
  }

  describe() {
    this.div.addEventListener('click', () => {
      this.shapeName.placeholder = this.circleBtn.innerHTML;
      this.shapeWidth.placeholder = 'n/a';
      this.shapeHeight.placeholder = 'n/a';
      this.shapeRadius.placeholder = this.radius.value;
      this.shapeArea.placeholder = '~' + this.calculateArea().toFixed(2) + '';
      this.shapePerimeter.placeholder = 'n/a';
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

class Triangle extends Shape {
  constructor(height) {
    super(width, height);

    this.div.className = 'triangle';
    this.div.width = `${width}px`;
    this.div.height = `${height}px`;
    canvas.appendChild(this.div);
  }

  describe() {
    this.div.addEventListener('click', () => {});
  }

  remove() {
    this.div.addEventListener('dblclick', () => {});
  }

  calculateArea() {
    return (this.width * this.height) / 2;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super(width, height);
    this.width = rectWidth;
    this.height = rectHeight;
    this.div.className = 'rectangle';
    this.div.style.width = `${this.width.value}px`;
    this.div.style.height = `${this.height.value}px`;
    canvas.appendChild(this.div);
  }

  describe() {
    this.div.addEventListener('click', () => {});
  }

  remove() {
    this.div.addEventListener('dblclick', () => {});
  }

  calculateArea() {
    return this.width * this.height;
  }
}

class Square extends Shape {
  constructor(sideLength) {
    super(sideLength, sideLength);
    this.sideLength = squareLength;
    this.div.className = 'square';
    this.div.style.width = `${this.sideLength.value}px`;
    this.div.style.height = `${this.sideLength.value}px`;
    canvas.appendChild(this.div);
  }

  describe() {
    this.div.addEventListener('click', () => {});
  }

  remove() {
    this.div.addEventListener('dblclick', () => {});
  }

  calculateArea() {
    return this.width * this.width;
  }
}

//  Function Declarations
function randomVal(max, min) {
  return Math.floor(Math.random() * (max - min)) + min;
}
