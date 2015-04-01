var Hapi  = require( 'hapi' );
var Path  = require( 'path' );
var fs    = require( 'fs' );
var Rot13 = require( 'rot13-transform' );

var server = new Hapi.Server();

server
  .connection({
    host : 'localhost',
    port : Number( process.argv[ 2 ] || 3000 )
  });

server
  .route({
    method  : [ 'GET' ],
    path    : '/',
    handler : function( request, reply ) {
      
      var thisFile = fs.createReadStream( Path.join( __dirname, '/txt/input.txt' ));
      
      reply( thisFile.pipe( Rot13()));

    }
  });

server
  .start();
