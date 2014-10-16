(function() {
  'use strict';

  var bandFactory = function( $http ) {
    var factory = {};

    factory.getBands = function() {
      return $http.get( '/bands' );
    };
     
    factory.getBand = function( bandId ) {
      return $http.get( '/bands/' + bandId );
    };
    return factory;
  };
  
  bandFactory.$inject = [ '$http' ];

  angular.module( 'bandApp' )
    .factory( 'bandFactory', bandFactory );

})();
