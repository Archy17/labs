var app = angular.module( 'MyApp', [] );

app.controller( 'CloakController', function( $scope ) {
  
  $scope.user = {};
  $scope.user.name = 'Eric Douglas';

  $scope.print = function() {
    console.log( $scope.user.name );
  };

});

// https://docs.angularjs.org/api/ng/directive/ngCloak