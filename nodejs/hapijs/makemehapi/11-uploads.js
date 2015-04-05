var Hapi = require( 'hapi' );

var server = new Hapi.Server();

server
  .connection({
    port : Number( process.argv[ 2 ] || 8080 ),
    host : 'localhost'
  });

server
  .route({
    method : 'POST',
    path   : '/upload',
    config : {
      handler : function( request, reply ) {
        var body = '';

        request
          .payload
          .file
          .on( 'data', function( data ) {
            body += data;
          });

        request
          .payload
          .file
          .on( 'end', function() {
            file : {
              data     : body,
              filename : request.payload.file.hapi.filename,
              headers  : request.payload.file.hapi.hapi.headers
            }
          });
          reply( JSON.stringify( result ));
      }
    }
  });

  server
    .start();
