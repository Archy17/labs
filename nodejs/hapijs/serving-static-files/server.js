var Hapi = require( 'hapi' );

var server = new Hapi.Server();

server.connection({ port : 3000 });

// Routes
server.route({
  method : 'GET',
  path : '/hapi.png',
  handler : function( request, reply ) {
    reply.file( 'public/hapi.png' );
  }
});

server.start( function() {
  console.log( 'Running at: ', server.info.uri );
});
