var fs = require( 'fs' );

var data = fs.readFileSync( './data.json' );
var dataObj = JSON.parse( data );

console.log( dataObj );

/****************************************************/

var i = 0;
var len = dataObj.Bands.length;

for ( i; i < len; i += 1 ) {
  for ( prop in dataObj.Bands[ i ] ) {
    console.log( prop + ' ~> ' + dataObj.Bands[ i ][ prop ] );
  }
}