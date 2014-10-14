(function() {
  'use strict';

  var AlbumsController = function( $scope, $routeParams, bandFactory ) {

   var bandId = $routeParams.bandId;
   $scope.band = {};

   function start() {
     $scope.band = bandFactory.getBand( bandId );
   }
    
    start();

  }

  AlbumsController.$inject = [ '$scope', '$routeParams', 'bandFactory' ];

  angular.module( 'bandApp' )
    .controller( 'AlbumsController', AlbumsController );
})();
