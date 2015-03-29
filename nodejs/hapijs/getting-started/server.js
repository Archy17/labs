var Hapi   = require( 'hapi' );
var server = new Hapi.Server();

server.connection({ port : 3000 });

server.route({
  method  : 'GET',
  path    : '/',
  handler : function( request, reply ) {
    reply( 'Hello Hapi.js' );
  }
});

server.route({
  method  : 'GET',
  path    : '/{name}',
  handler : function( request, reply ) {
    reply( 'Hello, ' + encodeURIComponent( request.params.name ) + '!' );
    console.log( request.params );
  }
});

server.start( function() {
  console.log( 'Server running at: ', server.info.uri );
  console.log( server.info );
});
