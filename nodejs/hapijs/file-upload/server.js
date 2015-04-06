var fs   = require( 'fs' );
var hapi = require( 'hapi' );

var server = new hapi.Server();

server
  .connection({
    host : 'localhost',
    port : Number( process.argv[ 2 ] || 8080 )
  });

server
  .route({
    method : 'POST',
    path   : '/submit',
    config : {
      payload : {
        output : 'stream',
        parse : true,
        allow : 'multipart/form-data'
      },
      handler : function( request, reply ) {
        var data = request.payload;
        console.log( data );

        if ( data.file ) {
          var name = data.file.hapi.filename;
          var path = __dirname + '/uploads/' + name;
          var file = fs.createWriteStream( path );

          file
            .on( 'error', function( err ) {
              console.log( err );
            });

          data
            .file
            .pipe( file );

          data
            .file
            .on( 'end', function( err ) {
              var ret = {
                filename : data.file.hapi.filename,
                headers : data.file.hapi.headers
              };

              reply( JSON.stringify( ret ));
            });
        }
      }
    }
  });

server
  .start( function() {
    console.log( 'Server running at:', server.info.uri );
  });
