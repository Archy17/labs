var hapi = require( 'hapi' );

// creating the hapi server instance
var server = new hapi.Server();

// adding a new connection that can be listened on
server
  .connection({
    port   : 3000,
    host   : 'localhost',
    labels : [ 'web' ]
  });

// defining our routes
server
  .route({
    method  : 'GET',
    path    : '/',
    handler : function( request, reply ) {
      reply( 'Hello Hapi 8!' );
    }
  });

// starting the server
server
  .start( function( err ) {
    if ( err ) {
      throw err;
    }

    console.log( 'Running at:', server.info.uri );
  });
