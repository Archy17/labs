var app = angular.module( 'app', [] );

app.controller( 'ClassController', function( $scope ) {

    $scope.check = true;
    $scope.node = 'node';
    $scope.array = [ 's2', 'big' ];

    $scope.change = function() {
      $scope.check = !$scope.check;
    };  

});