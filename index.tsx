let byId = document.getElementById;

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
    this.type = "rect";
    this.direction = rotation
  }
  render() {
    return (<rect width={this.width} height={this.height} fill={this.color} {!!this.direction ? transform=`rotate(${this.direction}` : ""}/>);
  }
}

class Circle extends Shape {
  constructor(width: number, height: number, color: string) {
    super(width, height, color);
    this.type = "circ"
    this.x = 0
    this.y = 0
  }
  render() {
    return (<ellipse rx={this.width} ry={this.height} fill={this.color} />);
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
    return (<image width={this.width} height={this.height} transform={`rotate(${this.direction})`} xlink:href={this.src}/>);
  }
}

function drawScreen(bg: string) {
  toRender.forEach((obj) => {
    global var renderObject;
    renderObject = renderObject + obj.render()
  })
}
