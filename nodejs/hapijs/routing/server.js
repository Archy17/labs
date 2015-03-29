var Hapi = require( 'hapi' );

var server = new Hapi.Server();

server.connection({ port : 3000 });

// Routes
server.route({
  method : 'GET',
  path : '/hello/{user*2}',
  handler : function( request, reply ) {
    var userParts = request.params.user.split( '/' );
    reply( 
      'Hello ' 
      + encodeURIComponent( userParts[ 0 ]) 
      + ' ' 
      + encodeURIComponent( userParts[ 1 ]) 
      + '!' 
    );
  }
});

server.start( function() {
  console.log( 'Server running at: ', server.info.uri );
});
