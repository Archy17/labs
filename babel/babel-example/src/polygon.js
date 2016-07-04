class Polygon {
  constructor(height, width) {
    this.height = height;
    this.width  = width;
  }

  get area() {
    return this.calcArea();
  }

  // calculate polygon area
  calcArea() {
    return this.height * this.width;
  }
}
