// require EventEmitter
var EventEmitter = require( 'events' ).EventEmitter;

/*
 * @desc ihnerit from EventEmitter and emit a success event with process.nextTick
 * @return events (instance of EventEmitter)
 */
function complexOperations() {
  var events = new EventEmitter();

  process.nextTick( function() {
    events.emit( 'success' );
  });

  return events;
}

// listen the 'success' event and print a message to the console
complexOperations().on( 'success', function() {
  console.log( 'Success!');
});
