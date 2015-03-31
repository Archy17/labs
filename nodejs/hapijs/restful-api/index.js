var Hapi = require( 'hapi' );

var server = new Hapi.Server();

server
  .connection({
    host : 'localhost',
    port : 3000
  });

// Declare plugins
var plugins = [
  { register : require( './routes/tasks' )}
];

// Register plugins, and start the server if none of them fail
server
  .register( plugins, function( err ) {
    if ( err ) {
      throw err;
    }

    server
      .start( function() {
        server
          .log( 'info', 'Server running at: ' + server.info.uri );
      });
  });

server
  .start();
