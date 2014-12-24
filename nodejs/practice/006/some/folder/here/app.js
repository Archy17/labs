var path = require( 'path-to' );

// or you could use just the "../../" abstraction
// naming in the way you feel confortable
var p3   = require( 'path-to' )( 3 );

// using path-to module
var data = require( path( 3, 'config.json' ));
var sum  = require( p3 + 'sum' );

console.log( data );
console.log( sum( 10, 3 ));

console.log( sum( data.a, data.b ));
