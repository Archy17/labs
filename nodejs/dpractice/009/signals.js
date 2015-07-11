process.stdin.resume();
process.on( 'SIGHUP', function() {
  console.log( 'Reloading configuration...' );
});

console.log( 'PID:', process.pid );

// run the program
// in another terminal, you could type:
// 
// > kill -HUP <pid> (will display the message on the console)
// > kill <pid> (will exit the program)
