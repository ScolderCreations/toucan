if (!ReactDOM.render) import ReactDOM from 'react-dom'

function getScreen() {document.getElementById("toucan");}

var toRender = []
var renderObject = ""

class Shape {
  constructor(width: number, height: number, color: string) {
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
  constructor(width: number, height: number, color: string, rotation: number) {
    super(width, height, color);
    this.direction = rotation
  }
  render() {
    return (
      <rect width={this.width} height={this.height} fill={this.color} transform={this.direction || ''}/>
    );
  }
}

class Circle extends Shape {
  constructor(width: number, height: number, color: string) {
    super(width, height, color);
    this.x = 0
    this.y = 0
  }
  render() {
    return (
      <ellipse rx={this.width} ry={this.height} fill={this.color} transform={this.direction || ''}/>
    );
  }
}

class Image {
  constructor(src: string, width: number, height: number, rotation: number) {
    if (!!src) {
      this.src = src
    } else {
      throw new Error ("Image cannot have no source: please provide URL")
    }
    this.direction = rotation;
    this.width = width || 50;
    this.height = height || width || 50;
    this.view = true
  }
  render() {
    return React.createElement("image",
      {
      width:this.width,
      height:this.height, 
      transform:this.direction, 
      'xlink:href':this.src
    );
  }
}

function drawScreen() {
  renderObject = renderObject + (
    <svg version="1.1" 
      width="1440"
      height="1080" 
      xmlns="http://www.w3.org/2000/svg">
      );
  toRender.forEach((obj) => {
    renderObject = renderObject + obj.render()
  });
  renderObject = renderObject + (
    </svg>
  );
  if (!(getScreen() == renderObject)) {
    ReactDOM.render(element, document.getElementById('root'));
  }
}
