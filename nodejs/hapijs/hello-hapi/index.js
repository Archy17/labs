var Hapi = require( 'hapi' );

// create a server with a host and port
var server = new Hapi.Server();

server.connection({
  host : 'localhost',
  port : 8000
});

// Add the route
server.route({
  method  : 'GET',
  path    : '/hello',
  handler : function( request, reply ) {
    reply( 'hello hapi' );
  }
});

// Start the server
server.start();
