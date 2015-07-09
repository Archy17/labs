// Pipe text to this app, that will return all string in uppercase
// Ex: file.txt | app.js

// Start to read the input
process.stdin.resume();
// Encode data inputted data
process.stdin.setEncoding( 'utf8' );

// Listener: when data are input, process that chunk of data
process.stdin.on( 'data', function( text ) {
  process.stdout.write( text.toUpperCase() );
});
