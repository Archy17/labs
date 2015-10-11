import * as test from './export-all';
import * as greet from './export-all-destructuring';

console.log(test.prop);
test.method();

greet.sayHello('Eric');
greet.sayBye('Douglas');
