const compare = require('./comparing-two-objects');

const a = { prop1: 'property 1', prop2: 'property 2' };
const b = { prop1: 'property 1', prop2: 'property 2' };
const c = { prop1: 'property 1' };
const d = {};

console.log(compare(a, b)); // true
console.log(compare(b, a)); // true
console.log(compare(a, c)); // false
console.log(compare(b, d)); // false
