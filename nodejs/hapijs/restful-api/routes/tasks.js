// Options can be passed to plugins on registration
exports
  .register = register;

// Required for all plugins
// If this were a npm module, one could do this:
// exports.register.attributes = require( 'package.json' );
exports
  .register
  .attributes = {
    name    : 'tasks-route', // must be unique
    version : '1.0.0'
  };

///////////// Methods Declaration
function register( server, options, next ) {
  
  var tasks = [];

  server
    .route([
      {
        method  : 'GET',
        path    : '/tasks',
        handler : function( request, reply ) {
          reply( 'Do all the things!' );
        }
      },
      {
        method  : 'POST',
        path    : '/tasks',
        handler : function( request, reply ) {
          // Get the task
          var task = request.payload.task;
          // Let's store the class
          var key = tasks.push( task );

          console.log( task );
          console.log( tasks );

          reply({
            key : key - 1,
            task : task 
          });
        }
      }
    ]);

  // Callback, complete the registration process
  next();

}
