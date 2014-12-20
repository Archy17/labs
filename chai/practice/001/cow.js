( function( exports ) {

  'use strict';

  function Cow( name ) {
    this.name = name || 'Anon Cow';
  }
  exports.Cow = Cow;

  Cow.prototype = {
    greets : function( target ) {
      if ( !target )
        throw new Error( 'Missing target' );
      return this.name + ' greets ' + target + '!';
    }
  };

}( this ));
