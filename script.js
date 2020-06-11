const max = 600;
const min = 0;
const canvas = document.querySelector('.canvas');
const circleBtn = document.querySelector('#circle-btn');
circleBtn.addEventListener('click', (e) => {
  e.preventDefault();
  return new Circle();
});
const rectangleBtn = document.querySelector('#rectangle-btn');
rectangleBtn.addEventListener('click', (e) => {
  e.preventDefault();
  return new Rectangle();
});
const squareBtn = document.querySelector('#square-btn');
squareBtn.addEventListener('click', (e) => {
  e.preventDefault();
  return new Square();
});

const rectWidth = document.querySelector('#rectWidth');
const rectHeight = document.querySelector('#rectHeight');
console.log(rectWidth.value);
console.log(rectHeight.value);

function randomVal(max, min) {
  return Math.floor(Math.random() * (max - min)) + min;
}

class Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.div = document.createElement('div');
    this.div.style.top = `${randomVal(max, min)}px`;
    this.div.style.left = `${randomVal(max, min)}px`;
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

    this.div.className = 'circle';
    // this.div.width = `${2 * radius}px`;
    // this.div.height = `${2 * radius}px`;
    canvas.appendChild(this.div);
  }

  describe() {
    this.div.addEventListener('click', () => {});
  }

  remove() {
    this.div.addEventListener('dblclick', () => {});
  }

  calculateArea() {
    const radius = this.width / 2;
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

    this.div.className = 'rectangle';
    this.div.style.width = `${rectWidth.value}px`;
    this.div.style.height = `${rectHeight.value}px`;
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
    super();
    this.sideLength = sideLength;

    this.div.className = 'square';
    // this.div.width = `${width}px`;
    // this.div.height = `${width}px`;
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
