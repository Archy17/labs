var controllers = angular.module( 'controllers', [] );

controllers.controller( 'FirstController', function( $scope ) {

  $scope.hello = "AngularJS is cool!";

  $scope.add = function( a, b ) {
    return parseInt( a ) + parseInt( b );
  };

});