import ReactDOM from 'react-dom'

function getScreen(a) {document.getElementById(a);}

var toRender = []
var renderObject = ""

class Shape {
  constructor(opt) {
    this.width = opt.width || 50;
    this.height = opt.height || opt.width || 50;
    this.color = opt.color || "#ffffff";
    this.view = true
    this.x = opt.x||0
    this.y = opt.y||0
  }
  show() {this.view = true}
  hide() {this.view = false}
  change(whc) {
    if (whc.width)  this.width = whc.width;
    if (whc.height) this.height = whc.height;
    if (whc.color)  this.color = whc.color;
  }
}

class Rectangle extends Shape {
  constructor(opt) {
    super(opt);
    this.direction = opt.rotation
  }
  render() {
    return (
      <rect width={this.width} height={this.height} fill={this.color} transform={this.direction}/>
    );
  }
}

class Circle extends Shape {
  constructor(width, height, color) {
    super(width, height, color);
    this.x = 0
    this.y = 0
  }
  render() {
    return (
      <ellipse rx={this.width} ry={this.height} fill={this.color} transform={this.direction}/>
    );
  }
}

class Image {
  constructor(opt) {
    if (!!opt.src) {
      this.src = opt.src
    } else {
      throw new Error ("Image cannot have no source: please provide URL")
    }
    this.direction = opt.rotation;
    this.width = opt.width || 50;
    this.height = opt.height || opt.width || 50;
    this.view = true
  }
  show() {this.view = true}
  hide() {this.view = false}
  render() {
    return React.createElement("image",
      {
      width:this.width,
      height:this.height, 
      transform:this.direction, 
      'xlink:href':this.src
    }
    );
  }
}

function drawScreen(a) {
  renderObject = renderObject + (
    <svg version="1.1" 
      width=$`{a.width}`
      height="1080" 
      xmlns="http://www.w3.org/2000/svg">
      );
  toRender.forEach(function(obj) {
    renderObject = renderObject + obj.render()
  });
  renderObject = renderObject + (
    </svg>
  );
  if (!(getScreen(a.src) == renderObject)) {
    ReactDOM.render(element, getScreen(a.src));
  }
}
