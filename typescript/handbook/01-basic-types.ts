////////// Basic Types
// Boolean
let isDone: boolean = false

// Number
let decimal: number = 13
let hex: number = 0xf00d
let binary: number = 0b1010
let octal: number = 0o744

// String
let color: string = 'blue' // or "blue"
let fullName: string = 'Bob Bobbington'
let age: number = 62
let sentence: string = `Hello, my name is ${fullName}.
I'll be ${age + 1} years old next month`

// Array
let list: number[] = [1, 2, 3]
let anotherList: Array<number> = [1, 2, 3]

// Tuple
let x: [string, number]
x = ['hello', 10]

// When accessing an element outside the set of known indices
// a `union type` is used instead
x[3] = 'world' // OK, 'string' can be assigned to 'string | number'
// x[6] = true // Error, 'boolean' isn't 'string | number'

// Enum
// An Enum is a way of giving more friendly names to sets of numeric values.
enum Color {red = 3, green, blue}

let c: Color = Color.green // 4
let undefName: string = Color[2] // "undefined"
let colorName: string = Color[5] // "blue"

// Any
let notSure: any = 4
notSure = 'maybe a string instead'
notSure = false

let someList: any[] = [1, true, 'free']
let otherList: [any] = [3, false, 'free']

// Void
// void is a like the opposite of any: the absence of having any type at all
function warnUser(): void {
  alert('Warning message')
}

// Null and Undefined
let u: undefined = undefined
let n: null = null

// Never
// Function returning never must have unreachable end point
function error(message: string): never {
  throw new Error(message)
}

// Inferred return type is never
function fail() {
  return error("Something failed")
}

// Function returning never must have unreachable end point
function infiniteLoop(): never {
  while (true) {}
}

// Type Assertions
let someValue: any = 'this is a string'
let strLength: number = (<string>someValue).length

let anotherValue: any = 'this is another string'
let anotherStrLength: number = (anotherValue as string).length
