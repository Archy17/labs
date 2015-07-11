///////////// Public Properties
/*
 * @object
 * @desc possible arguments/flags to be used with this program
 */
var args = {
  '-h' : [ _displayHelp, 'Display help' ],
  '-r' : [ _readFile, 'Pass a file name to be read' ]
};
/////////////// Public Methods

///////////// Private Methods
var _displayHelp = _displayHelp;
var _readFile = _readFile;

///////////// Initialization
// if a flag is not passed, print the possible flags and their descriptions
// if a flag is passed, execute that/those flag(s)
if ( process.argv.length <= 2 ) {
  _displayHelp(); 
} else {
  var argsPassed = process.argv.slice( 2 );

  argsPassed
    .forEach( function( arg, index, array ) {
      if ( args[ arg ]) {
        args[ arg ][ 0 ].apply( this, array.slice( index + 1 ));
      }
    });
}

///////////// Functions Declaration
/*
 * @desc Function to display possible flags/functionalities of the program
 */
function _displayHelp() {
  var keys = Object.keys( args );

  console.log( '============= Flags =============');

  keys
    .forEach( function( arg ) {
      console.log( arg + ': ' + args[ arg ][ 1 ] );
    });
}
/*
 * @desc read a file passed through the arguments
 * @desc print out the read file
 * @desc print how much time was spent to read the file
 * @param {String} file - name of the file
 */
function _readFile( file ) {
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
