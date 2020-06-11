const max = 600;
const min = 0;
const canvas = document.querySelector('.canvas');

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
    this.div.width = `${2 * radius}px`;
    this.div.height = `${2 * radius}px`;
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
    return this.width * this.height;
  }
}

class Square extends Shape {
  constructor(sideLength) {
    super(width);
    this.width = sideLength;

    this.div.className = 'square';
    this.div.width = `${width}px`;
    this.div.height = `${width}px`;
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
