const compare = require('./comparing-two-objects');

const a = { prop1: 'property 1', prop2: 'property 2' };
const b = { prop1: 'property 1', prop2: 'property 2' };

const c = { prop1: a, prop2: b };
const d = { prop1: a, prop2: { empty: false }};

console.log(compare(a, b)); // true
console.log(compare(b, a)); // true
console.log(compare(a, c)); // false
console.log(compare(b, d)); // false
console.log(compare(c, d)); // true ?! BREAK THE CODE! ;D
