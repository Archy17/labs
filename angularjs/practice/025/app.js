(function() {
  'use strict';

  var app = angular.module( 'PassApp', [] );

  // Controllers
  function passController( $scope ) {
    $scope.pass1 = 'pass';
  }
  app.controller( 'passController', passController);

  // Directives
  function checkPass() {
    return {
      require: 'ngModel'
    };
  }
  app.directive( 'checkPass', checkPass);


})();