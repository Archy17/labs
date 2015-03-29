var Hapi = require( 'hapi' );

var server = new Hapi.Server();

server.connection({ port : 3000 });

// Routes
server.route({
  method : 'GET',
  path : '/hello/{user?}',
  handler : function( request, reply ) {
    var user = request.params.user ? encodeURIComponent( request.params.user ) : 'Stranger';
    reply( 'Hello ' + user + '!' );
  }
});

server.start( function() {
  console.log( 'Server running at: ', server.info.uri );
});
