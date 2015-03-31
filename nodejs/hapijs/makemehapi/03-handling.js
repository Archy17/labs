var Hapi = require( 'hapi' );
var Path = require( 'path' );

var server = new Hapi.Server({
  connections : {
    routes : {
      files : {
        relativeTo : Path.join( __dirname, 'public' )
      }
    }
  },
  });

server
  .connection({
    host : 'localhost',
    port : Number( process.argv[ 2 ] || 3000 )
  });

server
  .route({
    method  : [ 'GET' ],
    path    : '/',
    handler : {
      file : 'index.html'
    }
  });

server
  .start( function() {
    console.log( 'Server running at:', server.info.uri );
  });
