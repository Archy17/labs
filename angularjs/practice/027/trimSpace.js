(function() {

  'use strict';

  angular
    .module( 'ownFilter' )
    .filter( 'trimSpace', trimSpace );

  function trimSpace() {
    return function( input ) {
      return input.replace( /\s+/g, '' );
    };
  }

}());