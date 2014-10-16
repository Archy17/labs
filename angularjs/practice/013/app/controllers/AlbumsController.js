(function() {
  'use strict';

  var AlbumsController = function( $scope, $routeParams, bandFactory ) {

   var bandId = $routeParams.bandId;
   $scope.band = {};

   function start() {
     bandFactory.getBand( bandId )
       .success( function( band ) {
         $scope.band = band;
       })
       .error( function( data, status, headers, config ) {
         // do something
       });
   }
    
    start();

  }

  AlbumsController.$inject = [ '$scope', '$routeParams', 'bandFactory' ];

  angular.module( 'bandApp' )
    .controller( 'AlbumsController', AlbumsController );
})();
