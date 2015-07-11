/*
 * - Program that read a file and print it to the console
 * - User can pass args
 *   - if any argument is passed, print the list of all arguments
 *   - if an argument is passed incomplete, print an error and exit the program normally (standard output)
 */

///////////// Public Properties
var args = {
  '-h' : [ _displayHelp, 'Display all flags' ],
  '-r' : [ _readFile, 'Read a file and print to the console' ],
  '-v' : [ _showVersion, 'Show the current version of the application' ]
};

///////////// Private Properties
var _config = {
  "versions" : "0.0.1"
};

///////////// Private Methods
var _displayHelp = _displayHelp;
var _readFile    = _readFile;
var _showVersion = _showVersion;

///////////// Initialization
// no arguments passed
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

///////////// Functions Declarations
function _displayHelp() {
  var keys = Object.keys( args );

  console.log( '============= Flags ============' );

  keys
    .forEach( function( key ) {
      console.log( key + ': ' + args[ key ][ 1 ]);
    });
}

function _readFile( file ) {
  if ( file && file.length ) {
    console.log( 'Start to read', file );
    console.time( 'read' );
    var stream = require( 'fs' ).createReadStream( file );
    stream.on( 'end', function() {
      console.timeEnd( 'read' );
    });
    stream.pipe( process.stdout );
  } else {
    console.error( 'You must pass a name of the file to be read' );
    process.exit( 1 );
  }
}

function _showVersion() {
  console.log( 'Benchmark a read file app.\nVersion:', _config.version );
}

