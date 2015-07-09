// Placeholders:
//   %s String
//   %d Number
//   %j JSON
//
// Console
//   .log
//   .info similiar to .log
//   .error write to process.stderr stream
//   .warn similar to .error
//   .trace
//
// Standard Streams
//   0 standard input
//   1 standard ouput
//   2 standard error
//
// Write errors log into a file
//   node filename.js 2> error-file.log

var name = 'eric';
var user = { name : 'eric' };
var num  = 13;
var json = { "user" : "Eric" };

console.log( 'Log: Hello %s', name );
console.log( 'Log: Number %d', num );
console.log( 'Log: JSON %j', json );
console.log( 'Log: Obj %j', user );

console.info( 'info: Hello %s', name );
console.info( 'info: Number %d', num );
console.info( 'info: JSON %j', json );
console.info( 'info: Obj %j', user );

console.error( 'error: Hello %s', name );
console.error( 'error: Number %d', num );
console.error( 'error: JSON %j', json );
console.error( 'error: Obj %j', user );

console.warn( 'warn: Hello %s', name );
console.warn( 'warn: Number %d', num );
console.warn( 'warn: JSON %j', json );
console.warn( 'warn: Obj %j', user );
