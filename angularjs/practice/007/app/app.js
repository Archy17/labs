(function() {
  'use strict';

  var app = angular.module( 'bandApp', [ 'ngRoute' ] );

  app.config(function( $routeProvider ) {
    $routeProvider
      .when( '/', {
        controller: 'BandsController',
        templateUrl: 'app/views/bands.html'
      })
      .otherwise( { redirectTo: '/' } );
  });

})();
