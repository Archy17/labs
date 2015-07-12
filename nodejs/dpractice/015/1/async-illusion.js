// require EventEmitter and fs
var EventEmitter = require( 'events' ).EventEmitter;
var fs = require( 'fs' );
// create a variable to store the cached content of the read file
var content;
/*
 * @desc read a file and call a callback passing the content read
 * @param {Function} cb - args passed: first: error, second: content
 */
function readFileIfRequired( cb ) {
  if ( !content ) {
    fs.readFile( __filename, 'utf8', function( err, data ) {
      content = data;
      console.log( 'readFileIfRequired: readFile' );
      cb( err, content );
    });
  } else {
    console.log( 'readFileIfRequired: cached' );
    cb( null, content );
  }
}
// call the readFileIfRequired function, and inside of the callback passed call it again
readFileIfRequired( function( err, data ) {
  console.log( '1. Length:', data.length );

  readFileIfRequired( function( err, data2 ) {
    console.log( '2. Length:', data2.length );
  });

  console.log( 'Reading file again...' );
});
// print a message to show that you're reading a file
console.log( 'Reading file...' );
