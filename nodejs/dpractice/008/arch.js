for ( key in process ) {
  if ( process.hasOwnProperty( key )) {
    console.log( 'key:', process[ key ]);
  }
}

console.log( '-------\n');

console.log( process.arch );
console.log( process.platform );
console.log( process.memoryUsage() );
