/* 
 * @object
 * @desc possible arguments/flags to be used with this program
 */
var args = {
  '-h' : displayHelp,
  '-r' : readFile
};

/*
 * @desc Function to display possible flags/functionalities of the program
 */
function displayHelp() {
  console.log( 'Argument processor:', args );
}

/*
 * @desc read a file passed through the arguments
 * @desc print out the read file
 * @desc print how much time was spent to read the file
 * @param {String} file - name of the file
 */
function readFile( file ) {
  if ( file && file.length ) {
    console.log( 'Reading:', file );
    console.time( 'read' );
    var stream = require( 'fs' ).createReadStream( file );
    stream.on( 'end', function() {
      console.timeEnd( 'read' );
    });
    stream.pipe( process.stdout );
  } else {
    console.error( 'A file must be provided with the -r option' );
    process.exit( 1 );
  }
}

if ( process.argv.length > 0 ) {
  process.argv.forEach( function( arg, index ) {
    if ( args[ arg ]) {
      args[ arg ].apply( this, process.argv.slice( index + 1 ));
    }
  });
}
