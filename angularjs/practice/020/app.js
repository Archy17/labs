var app = angular.module( 'app', [] );

app.controller( 'WatchController', function( $scope ) {
  
  $scope.user = '';
  $scope.user.name = '';

  $scope.$watch( 'user.name', function( newValue ) {
    $scope.user.maxSize = newValue.length > 13;
  });

});

// https://docs.angularjs.org/api/ng/type/$rootScope.Scope - ctrl + f > $watch