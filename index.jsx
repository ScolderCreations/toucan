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
  constructor(width, height, color, rotation) {
    super(width, height, color);
    this.type = "rect";
    this.direction = rotation
  }
  render() {
    return (<svg version="1.1" width={this.width} height={this.height} xmlns="http://www.w3.org/2000/svg">
           <rect width="100%" height="100%" fill={this.color} />
           </svg>);
  }
}

class Circle extends Shape {
  constructor(width, height, color) {
    super(width, height, color);
    this.type = "circ"
  }
}

class Image {
  constructor(src, width, height, rotation) {
    if (!!src) {
      this.src = src
    } else {
      throw new Error ("Image cannot have no source: please provide URL")
    }
    this.direction = rotation
    this.width = width || 50;
    this.height = height || width || 50;
    this.view = true
  }
}
