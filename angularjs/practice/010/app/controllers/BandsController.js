(function() {
  'use strict';

  var BandsController = function( $scope, bandFactory ) {
    $scope.searchBy = 'name';
    $scope.reverse = false;
    $scope.bands = [];

    function init() {
      $scope.bands = bandFactory.getBands();
    }

    init();

    $scope.bandSort = function( param ) {
      $scope.searchBy = param;
      $scope.reverse = !$scope.reverse;
    };
  }

  BandsController.$inject = [ '$scope', 'bandFactory' ];

  angular.module( 'bandApp' )
    .controller( 'BandsController', BandsController );
})();
