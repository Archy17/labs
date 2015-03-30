var Hapi = require( 'hapi' );

var server = new Hapi.Server();

server.connection({
  port : Number( process.argv[ 2 ] || 3000 ),
  host : 'localhost'
});

server.views({
  engines : {
    html : require( 'handlebars' )
  },
  relativeTo : __dirname,
  path : 'templates',
  helpersPath :  'helpers'
});

server.route({
  method : [ 'GET' ],
  path : '/',
  handler : function( request, reply ) {
    reply.view( 'index' );
  }
});

server.start( function() {
    console.log( 'Running at: ', server.info.uri );
});
