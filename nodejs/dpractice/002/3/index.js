// Modules
var myClass = require( './myclass' );
var module2 = require( './module-2' );

// Print the logs from inherited modules
console.log( myClass.method() );
console.log( module2.method() );
console.log( module2.method2() );
