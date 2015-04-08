var hapi = require( 'hapi' );

var server = new hapi.Server();

server
  .connection({
    host : 'localhost',
    port : Number( process.argv[ 2 ] || 3000 )
  });

server
  .connection({
    host : 'localhost',
    port : Number( process.argv[ 2 ] || 8000 )
  });

server
  .app
  .key = 'value';

server
  .method( 'hello', function( person ) {
    return next( null, 'Hello ' + person + '!' );
  });

server
  .route({
    path    : '/',
    method  : 'GET',
    handler : function( request, reply ) {
      console.log( server.listener );
      server
        .methods
        .hello( 'Eric', function( err, result ) {
          reply( result );
        });
    }
  });

server
  .start( function() {
    console.log( 'Server running at:', server.info.uri );
  });
