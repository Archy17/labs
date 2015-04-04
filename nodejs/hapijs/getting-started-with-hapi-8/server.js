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

// exploring request lifecycle
server
  .ext( 'onRequest', function( request, reply ) {
   // console.log( request.info );
   // console.log( request.url );
   if ( request.url.path === '/home' ) {
     request.setUrl( '/login' );
     return reply.continue();
   }
  });

// registering plugins
server
  .register([
    {
      register : require( './my-plugin' ),
      options  : {
        message : 'Hello!'
      }
    }
  ], function( err ) {
    if ( err ) {
      throw err;
    }

    // starting the server
    server
      .start( function( err ) {
        if ( err ) {
          throw err;
        }

        console.log( 'Running at:', server.info.uri );
      });
        
  });

