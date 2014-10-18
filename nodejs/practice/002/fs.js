var fs = require( 'fs' );

console.log( 'Start at: ' + new Date() );

fs.readFile( '002/file.txt', function( error, data ) {
  if ( error ) throw err;
  console.log( '---------->' + data );
});

console.log( 'Printed at: ' + new Date() );

fs.rename( '002/file.txt', '002/file-changed.txt', function (err) {
  if (err) throw err;
  fs.stat('002/file-changed.txt', function (err, stats) {
    if (err) throw err;
    console.log('stats: ' + JSON.stringify(stats));
  });
});
