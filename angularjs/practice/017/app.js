var app = angular.module( 'app', [] );

app.controller( 'ClassController', function( $scope ) {

    $scope.check = true;
    $scope.node = 'node';

    $scope.change = function() {
      $scope.check = !$scope.check;
    };  

});