////////// Interfaces
// Our First Interface
interface LabelledValue {
  label: string;
}

function printLabel(labelledObj: LabelledValue) {
  console.log(labelledObj.label)
}

let myObj = {
  size: 10,
  label: 'Size 10 object',
}

printLabel(myObj)

// Optional Properties
interface SquareConfig {
  color?: string;
  width?: number;
}

interface Square {
  color: string;
  area: number;
}

function createSquare(config: SquareConfig): Square {
  let newSquare = {
    color: 'white',
    area: 100,
  }

  if (config.color) {
    newSquare.color = config.color
  }

  if (config.width) {
    newSquare.area = Math.pow(config.width, 2)
  }

  return newSquare
}

let mySquare = createSquare({ color: 'blue' })

// Readonly properties
interface Point {
  readonly x: number;
  readonly y: number;
}

let p1: Point = { x: 10, y: 20 }
// p1.x = 5; // error

let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
// ro[0] = 12; // error!
// ro.push(5); // error!
// ro.length = 100; // error!
// a = ro; // error!

// Excess Property Checks
interface SquareConfig2 {
  color?: string;
  width?: number;
  [propName: string]: any;
}

let squareOptions = { colour: "red", width: 100 }
let mySquare2 = createSquare(squareOptions)

// Function Types
interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(src: string, sub: string) {
  let result = src.search(sub)

  return result > -1
}

// Extending Interfaces
interface Shape {
  color: string;
}

interface Square1 extends Shape {
  sideLength: number;
}

let square = <Square1>{}

square.color = 'blue'
square.sideLength = 10

// An interface can extend multiple interfaces
// creating a combination of all of the interfaces.
interface PenStroke {
  penWidth: number
}

interface Square2 extends Shape, PenStroke {
  sideLength: number
}

let square2 = <Square2>{};
square2.color = 'blue'
square2.sideLength = 10
square2.penWidth = 5.0

// Hybrid Types
interface Counter {
  (start: number): string
  interval: number
  reset(): void
}

function getCounter(): Counter {
  let counter = <Counter>function(start: number) {}

  counter.interval = 123
  counter.reset = function() {}

  return counter
}

let c = getCounter()

c(10)
c.reset()
c.interval = 5.0
