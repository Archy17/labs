var Hapi = require( 'hapi' );

var server = new Hapi.Server();

server
  .connection({
    port : Number( process.argv[ 2 ] || 3000 ),
    host : 'localhost'
  });

server
  .route({
    method  : [ 'GET' ],
    path    : '/',
    handler : function( request, reply ) {
      reply( 'Hello Hapi' );
    }
  });

server
  .start();
