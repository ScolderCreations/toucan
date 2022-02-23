function getScreen(a) {
  document.getElementById(a);
}

var toRender = [];
var renderObject = "";

class Shape {
  constructor(opt) {
    this.width = opt.width || 50;
    this.height = opt.height || opt.width || 50;
    this.color = opt.color || "#ffffff";
    this.view = true;
    this.direction = opt.rotation || 0;
    this.x = opt.x || 0;
    this.y = opt.y || 0;
  }

  show() {
    this.view = true;
  }

  hide() {
    this.view = false;
  }

  change(whc) {
    if (whc.width) this.width = whc.width;
    if (whc.height) this.height = whc.height;
    if (whc.color) this.color = whc.color;
  }

}

class Rectangle extends Shape {
  constructor(opt) {
    super(opt);
  }

  render() {
    return `<rect width=${this.width} height=${this.height} fill=${this.color} ${this.direction ? `transform=${this.direction}` : ''}/>`;
  }

}

class Circle extends Shape {
  constructor(opt) {
    super(opt);
  }

  render() {
    return `<ellipse x="${this.x}" rx="${this.width}" ry="${this.height}" fill="${this.color}" ${this.direction ? `transform="${this.direction}"` : ''}/>`;
  }

}

class Image {
  constructor(opt) {
    if (!opt.src.includes('/')) {
      this.src = opt.src;
    } else {
      throw new ReferenceError("Image cannot have no source: please provide URL. \
      (This error will also show up if you linked a file using \
        'file.extension', without a ./ or ../)");
    }

    this.direction = opt.rotation;
    this.width = opt.width || 50;
    this.height = opt.height || opt.width || 50;
    this.view = true;
  }

  show() {
    this.view = true;
  }

  hide() {
    this.view = false;
  }

  change(whc) {
    if (whc.width) this.width = whc.width;
    if (whc.height) this.height = whc.height;
    if (whc.color) this.color = whc.color;
  }

  render() {
    return `<image width="${this.width}" height="${this.height}" ${this.direction ? `transform="${this.direction}"` : ''} xlink:href="${this.src}"`;
  }

}

class Text {
  constructor(opt) {
    this.c = opt.text || String();
    this.x = opt.x || 0;
    this.y = opt.y || 0;
  }

  render() {
    return `<text x="${this.x}" y="10">${this.c}</text>`;
  }

}

function drawScreen(a) {
  renderObject = renderObject + `<svg version="1.1" width=${a.width || 500} height="${a.height || 500}" xmlns="http://www.w3.org/2000/svg">`;
  toRender.forEach(function (obj) {
    renderObject = renderObject + obj.render();
  });
  renderObject = renderObject + '</svg>';

  if (!(getScreen(a.src).innerHTML == renderObject)) {
    getScreen(a.src).innerHTML = renderObject;
  }
}