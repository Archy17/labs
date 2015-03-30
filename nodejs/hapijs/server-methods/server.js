var Hapi = require( 'hapi' );

var server = new Hapi.Server();

server.connection({
  port : 3000,
  host : 'localhost'
});

// Methods
function add( x, y, next ) {
  // the next callback is used to return values
  next( null, x + y );
}

function multiply( x, y, next ) {
  next( null, x * y );
}

// Server methods
server.method( 'add', add, {});
server.method([{
  name    : 'multiply',
  method  : multiply,
  options : {}
}]);

// Routes
server.route({
  method  : 'GET',
  path    : '/',
  handler : function( request, reply ) {
    server
      .methods
      .add( 2, 3, reply );
  }
});

server.route({
  method  : 'GET',
  path    : '/add/{num*2}',
  handler : function( request, reply ) {

    var values = request.params.num.split( '/' );

    server
      .methods
      .add( 
        parseInt( encodeURIComponent( values[ 0 ]), 10 ),
        parseInt( encodeURIComponent( values[ 1 ]), 10 ),
        reply
      );
  }
});

server.route({
  method  : 'GET',
  path    : '/multiply/{num*2}',
  handler : function( request, reply ) {
    
    var values = request.params.num.split( '/' );

    server
      .methods
      .multiply(
        parseInt( encodeURIComponent( values[ 0 ]), 10 ),
        parseInt( encodeURIComponent( values[ 1 ]), 10 ),
        reply
      );
  }
});

server.start( function() {
  console.log( 'Running at:', server.info.uri );
});
