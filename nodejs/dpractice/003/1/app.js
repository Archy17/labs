// load all modules at greet.say. folder at once
var greet = require( './greet' );

// use the greet methods
console.log( greet.say.hi( 'Eric' ));
console.log( greet.say.bye( 'Douglas' ));

