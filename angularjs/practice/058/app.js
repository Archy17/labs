(function() {
  
  'use strict';

  angular
    .module( 'app', [ 'angularMoment' ] )
    .run( function( amMoment ) {
      amMoment.changeLocale( 'pt-br' );
    });

}());