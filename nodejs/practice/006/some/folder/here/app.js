var path = require( 'path-to' );
var data = require( path( 3, 'config.json' ));
var sum  = require( path( 3, 'sum' ) );

console.log( data );
console.log( sum( 10, 3 ));

console.log( sum( data.a, data.b ));
