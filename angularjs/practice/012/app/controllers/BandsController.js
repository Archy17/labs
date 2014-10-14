(function() {
  'use strict';

  var BandsController = function( $scope, $log, bandFactory ) {
    $scope.searchBy = 'name';
    $scope.reverse = false;
    $scope.bands = [];

    function start() {
      bandFactory.getBands()
        .success( function( bands ) {
          $scope.bands = bands;
        })
        .error( function( data, status, headers, config ) {
          $log.log( data.error + ' ' + status );
        });
    }

    start();

    $scope.bandSort = function( param ) {
      $scope.searchBy = param;
      $scope.reverse = !$scope.reverse;
    };
  }

  BandsController.$inject = [ '$scope', '$log', 'bandFactory' ];

  angular.module( 'bandApp' )
    .controller( 'BandsController', BandsController );
})();
