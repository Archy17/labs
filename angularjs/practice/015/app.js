var app = angular.module( 'app', [] );

app.controller( 'EvenController', function( $scope ) {

  $scope.count = 0;
  $scope.even = true;

  $scope.oddEven = function() {
    
    $scope.count += 1;
    $scope.even = $scope.count % 2 === 0;

  };

});