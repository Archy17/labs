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
}

///////////// Private Methods
var _displayHelp = _displayHelp;
var _readFile    = _readFile;
var _showVersion = _showVersion;

///////////// Initialization
// no arguments passed
if ( process.argv.length <= 2 ) {
  _displayHelp();
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

}

function _showVersion() {
  console.log( 'Benchmark a read file app.\nVersion:', _config.version );
}

