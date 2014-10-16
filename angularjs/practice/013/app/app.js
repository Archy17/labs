(function() {
  'use strict';

  var app = angular.module( 'bandApp', [ 'ngRoute' ] );

  app.config(function( $routeProvider ) {
    $routeProvider
      .when( '/', {
        controller: 'BandsController',
        templateUrl: 'app/views/bands.html'
      })
      .when( '/albums/:bandId', {
        controller: 'AlbumsController',
        templateUrl: 'app/views/albums.html'
      })
      .when( '/albums/', {
        controller: 'AllAlbumsController',
        templateUrl: 'app/views/allalbums.html'
      })
      .otherwise( { redirectTo: '/' } );
  });

})();
