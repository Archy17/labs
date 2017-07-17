function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var myObj = {
    size: 10,
    label: 'Size 10 object'
};
printLabel(myObj);
function createSquare(config) {
    var newSquare = {
        color: 'white',
        area: 100
    };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = Math.pow(config.width, 2);
    }
    return newSquare;
}
var mySquare = createSquare({ color: 'blue' });
var p1 = { x: 10, y: 20 };
// p1.x = 5; // error
var a = [1, 2, 3, 4];
var ro = a;
var squareOptions = { colour: "red", width: 100 };
var mySquare2 = createSquare(squareOptions);
var mySearch;
mySearch = function (src, sub) {
    var result = src.search(sub);
    return result > -1;
};
var square = {};
square.color = 'blue';
square.sideLength = 10;
var square2 = {};
square2.color = 'blue';
square2.sideLength = 10;
square2.penWidth = 5.0;
