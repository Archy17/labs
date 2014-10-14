(function() {
  'use strict';

  var bandFactory = function() {
        var factory = {};

    factory.getBands = function() {
      return bands;
    };
    // Find in bands for the bandId
    var len = bands.length;
     
    factory.getBand = function( bandId ) {
      for ( var i = 0; i < len; i += 1 ) {
        if ( bands[ i ].id === parseInt( bandId ) ) {
          return bands[ i ];
        }
      }
      return {};
    };
    return factory;
  };
  
  angular.module( 'bandApp' )
    .factory( 'bandFactory', bandFactory );

})();
