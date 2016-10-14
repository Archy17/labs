var numbers = [];

for (var i = 0; i < 10; i += 1) {
  numbers.push(i);
}

console.log(numbers);
// [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

var fn = [];

for (var j = 0; j < 5; j += 1) {
  fn.push(function() {
    console.log(j);
  });
}

fn.forEach(function(f) {
  f();
});
// 5
// 5
// 5
// 5
// 5

///////////// LET
var fn2 = [];
for (let j = 0; j < 5; j += 1) {
  fn2.push(function() {
    console.log(j);
  });
}

fn2.forEach(function(f) {
  f();
});
// 0
// 1
// 2
// 3
// 4
