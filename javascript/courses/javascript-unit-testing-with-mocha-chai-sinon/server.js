var express = require( 'express' );
var app = express();

app.set( 'view engine', 'jade' );

app.get( '/', function( req, res ) {
  res.render( 'index', { palette : [ '#ccc', '#900455', '#0055ff' ] });
});

app.listen( 3000 );