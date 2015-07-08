var CountStream = require( './countstream' );
var countStream = new CountStream( 'javascript' );
var http        = require( 'http' );

http.get( 'http://ericdouglas.github.io/', function( res ) {
  res.pipe( countStream );
});

countStream.on( 'total', function( count ) {
  console.log( 'Total matchers:', count );
});
