const multiplier = (factor) => (number) => number * factor;
const twice      = multiplier(2);

console.log(twice(2)); // 4
console.log(twice(3)); // 6
console.log(twice(4)); // 8
