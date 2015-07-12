// require EventEmitter
var EventEmitter = require( 'events' ).EventEmitter;

/*
 * @desc return an instance of EventEmitter and emit an success event using process.nextTick()
 * @return {Object} events
 */
function complexOperations() {
  var events = new EventEmitter();

  process.nextTick( function() {
    events.emit( 'success' );
  });

  return events;
}

// call complexOperations function and listen to the "success" event
// printing to the console when this event is emitted
complexOperations().on( 'success', function() {
  console.log( 'Success!!!' );
});

