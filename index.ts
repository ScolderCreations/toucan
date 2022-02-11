let byId = document.getElementById;

class Shape {
  constructor(width, height, color) {
    this.width = width || 50;
    this.height = height || width || 50;
    this.color = color || "#ffffff";
    this.view = true
  }
  show() {this.view = true}
  hide() {this.view = false}
  change(width, height, color) {
    if (width)  this.width = width;
    if (height) this.height = height;
    if (color)  this.color = color;
  }
}

class Rectangle extends Shape {
  constructor(width, height, color) {
    this.type = "rect"; 
    super(width, height, color)
  }
}

class Circle extends Shape {
  constructor(width, height, color) {
    this.type = "circ";
    super(width, height, color)
  }
}
