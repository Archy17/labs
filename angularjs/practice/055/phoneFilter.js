(function() {
  
  'use strict';

  angular
    .module( 'app' )
    .filter( 'phoneFilter', phoneFilter );

  phoneFilter.$inject = [];

  function phoneFilter() {

    return function( input ) {
      var length = input.length;

      if ( length > 11 ) {
        input = input.substring( length - 11, length );
      }

      return input
                .replace( /\D/g, "" )
                .replace( /^(\d{2})(\d)/g, "($1) $2" )
                .replace( /(\d)(\d{4})$/,"$1-$2" );
    }

  }

}());