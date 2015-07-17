var path = require( 'path' );

global.rootRequire = function( pathTo ) {
  var splitBy = '/';
  var args;

  if ( pathTo.search( /\\/ ) >= 0 ) {
    pathTo = pathTo.replace( /\\/g, splitBy );
  }

  args = pathTo.split( splitBy );
  args.unshift( __dirname );

  console.log(args);

  return path.join.apply( this, args );  
};
