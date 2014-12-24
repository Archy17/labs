var path = require( 'path-to' );
var data = require( path( 3, 'config.json' ));
var sum  = require( path( 3, 'sum' ) );

console.log( sum( data.a + data.b ));
