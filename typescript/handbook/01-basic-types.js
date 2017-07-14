////////// Basic Types
// Boolean
var isDone = false;
// Number
var decimal = 13;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
// String
var color = 'blue'; // or "blue"
var fullName = 'Bob Bobbington';
var age = 62;
var sentence = "Hello, my name is " + fullName + ".\nI'll be " + (age + 1) + " years old next month";
// Array
var list = [1, 2, 3];
var anotherList = [1, 2, 3];
// Tuple
var x;
x = ['hello', 10];
// When accessing an element outside the set of known indices
// a `union type` is used instead
x[3] = 'world'; // OK, 'string' can be assigned to 'string | number'
// x[6] = true // Error, 'boolean' isn't 'string | number'
// Enum
// An Enum is a way of giving more friendly names to sets of numeric values.
var Color;
(function (Color) {
    Color[Color["red"] = 3] = "red";
    Color[Color["green"] = 4] = "green";
    Color[Color["blue"] = 5] = "blue";
})(Color || (Color = {}));
var c = Color.green; // 4
var undefName = Color[2]; // "undefined"
var colorName = Color[5]; // "blue"
// Any
var notSure = 4;
notSure = 'maybe a string instead';
notSure = false;
var someList = [1, true, 'free'];
var otherList = [3, false, 'free'];
// Void
// void is a like the opposite of any: the absence of having any type at all
function warnUser() {
    alert('Warning message');
}
// Null and Undefined
var u = undefined;
var n = null;
// Never
// Function returning never must have unreachable end point
function error(message) {
    throw new Error(message);
}
// Inferred return type is never
function fail() {
    return error("Something failed");
}
// Function returning never must have unreachable end point
function infiniteLoop() {
    while (true) { }
}
// Type Assertions
var someValue = 'this is a string';
var strLength = someValue.length;
var anotherValue = 'this is another string';
var anotherStrLength = anotherValue.length;
