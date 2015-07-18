var fs = require( 'fs' );

fs.readFile( './names.txt', function( err, buffer ) {
  console.log( buffer );
  console.log( buffer.toString() );
  console.log( buffer.toString( 'ascii' ) );
});
