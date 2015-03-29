var Hapi   = require( 'hapi' );
var Good   = require( 'good' );

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
  }
});

server.register({
  register : Good,
  options  : {
    reporters : [{
      reporter : require( 'good-console' ),
      args : [{ log : '*', response : '*' }]
    }]
  }
}, function( err ) {
  if ( err ) {
    throw err; // something bad happened loading the plugin
  }

  server.start( function() {
    console.log( 'Server running at: ', server.info.uri );
  });
});
