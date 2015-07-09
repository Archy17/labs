// How to use this program:
// 1. file.txt | node process.js
// 2. node process.js <input text> <OUTPUT TEXT>
// start to read input data
process.stdin.resume();
// encode data to utf8
process.stdin.setEncoding( 'utf8' );
// listen to the 'data' event
process.stdin.on( 'data', function( text ) {
  // print the inputed data transformed to the console
  process.stdout.write( text.toUpperCase() );
});
