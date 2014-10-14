(function() {
  'use strict';

  var BandsController = function( $scope ) {
    $scope.searchBy = 'name';
    $scope.reverse = false;

    $scope.bands = [ 
      {name: 'Dream Theater', origin: 1989, albums: 13, genre: 'Progressive Metal'},
      {name: 'Symphony X', origin: 1992, albums: 7, genre: 'Progressive Metal'},
      {name: 'Karmakanic', origin: 2006, albums: 4, genre: 'Progressive Fusion'},
      {name: 'Circus Maximus', origin: 2004, albums: 5, genre: 'Progressive Metal'}
    ];

    $scope.bandSort = function( param ) {
      $scope.searchBy = param;
      $scope.reverse = !$scope.reverse;
    };
  }

  BandsController.$inject = [ '$scope' ];

  angular.module( 'bandApp' )
    .controller( 'BandsController', BandsController );
})();
