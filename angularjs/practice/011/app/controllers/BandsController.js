(function() {
  'use strict';

  var BandsController = function( $scope, bandFactory ) {
    $scope.searchBy = 'name';
    $scope.reverse = false;
    $scope.bands = [];

    function start() {
      bandFactory.getBands()
        .success( function( bands ) {
          $scope.bands = bands;
        })
        .error( function( data, status, headers, config ) {
          // do something
        });
    }

    start();

    $scope.bandSort = function( param ) {
      $scope.searchBy = param;
      $scope.reverse = !$scope.reverse;
    };
  }

  BandsController.$inject = [ '$scope', 'bandFactory' ];

  angular.module( 'bandApp' )
    .controller( 'BandsController', BandsController );
})();
