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
  .route([
    {
      method  : 'GET',
      path    : '/',
      handler : function( request, reply ) {
        reply( 'Hello Hapi 8!' );
      }
    },
    {
      method  : 'GET',
      path    : '/login',
      handler : function( request, reply ) {
        reply( 'Login' );
      }
    }
  ]);

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

// starting the server
server
  .start( function( err ) {
    if ( err ) {
      throw err;
    }

    console.log( 'Running at:', server.info.uri );
  });
