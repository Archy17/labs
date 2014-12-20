( function( exports ) {

  'use strict';

  function Cow( name ) {
    this.name = name || 'Anon cow';
  }
  exports.Cow = Cow;

  Cow.prototype = {
    greets : function( target ) {
      if ( !target )
        throw new Error( 'Missing target' );
      return this.name + ' greets ' + target;
    }
  };

}( this ));
