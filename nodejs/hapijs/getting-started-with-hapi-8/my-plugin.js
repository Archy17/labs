var myPlugin = {
  register : function( server, options, next ) {
    // defining our routes
    server
      .route([
        {
          method  : 'GET',
          path    : '/',
          handler : function( request, reply ) {
            reply( 'Hello Hapi 8!' );
          }
        },
        {
          method  : 'GET',
          path    : '/login',
          handler : function( request, reply ) {
            reply( 'Login' );
          }
        }
      ]),
    next();
  }
};

myPlugin
  .register
  .attributes = {
    name    : 'myPlugin',
    version : '1.0.0'
  }

module.exports = myPlugin;
