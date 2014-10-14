(function() {
  'use strict';

  var AlbumsController = function( $scope, $routeParams ) {

   var bandId = $routeParams.bandId;
   $scope.albums = {};

   function start() {
     // Find in bands for the bandId
     var len = $scope.bands.length;
     
     for ( var i = 0; i < len; i += 1 ) {
       if ( $scope.bands[ i ].id === parseInt( bandId ) ) {
         $scope.albums = $scope.bands[ i ].stdio;
       }
     }
   }

    $scope.bands = [ 
      { 
        id: 1, 
        name: 'Dream Theater', 
        origin: 1989, 
        albums: 13, 
        genre: 'Progressive Metal', 
        stdio: [
          { album: 'one', year: 1989 },
          { album: 'two', year: 1990 },
          { album: 'three', year: 1992 },
          { album: 'four', year: 1994 },
          { album: 'five', year: 1995 },
          { album: 'six', year: 1996 },
          { album: 'seven', year: 1997 },
          { album: 'eight', year: 1999 },
          { album: 'nine', year: 2013},
        ]
      },
      { 
        id: 2, 
        name: 'Symphony X', 
        origin: 1993, 
        albums: 9, 
        genre: 'Progressive Metal', 
        stdio: [
          { album: 'one', year: 1989 },
          { album: 'two', year: 1990 },
          { album: 'three', year: 1992 },
          { album: 'four', year: 1994 },
          { album: 'five', year: 1995 },
          { album: 'six', year: 1996 },
          { album: 'seven', year: 1997 },
          { album: 'eight', year: 1999 },
          { album: 'nine', year: 2013},
        ]
      },
      { 
        id: 3, 
        name: 'Karmakanic', 
        origin: 1999, 
        albums: 3, 
        genre: 'Progressive Fusion', 
        stdio: [
          { album: 'one', year: 1989 },
          { album: 'two', year: 1990 },
          { album: 'three', year: 1992 },
          { album: 'four', year: 1994 },
          { album: 'five', year: 1995 },
          { album: 'six', year: 1996 },
          { album: 'seven', year: 1997 },
          { album: 'eight', year: 1999 },
          { album: 'nine', year: 2013},
        ]
      },
      { 
        id: 4, 
        name: 'Circus Maximus', 
        origin: 2000, 
        albums: 4, 
        genre: 'Progressive Metal', 
        stdio: [
          { album: 'one', year: 1989 },
          { album: 'two', year: 1990 },
          { album: 'three', year: 1992 },
          { album: 'four', year: 1994 },
          { album: 'five', year: 1995 },
          { album: 'six', year: 1996 },
          { album: 'seven', year: 1997 },
          { album: 'eight', year: 1999 },
          { album: 'nine', year: 2013},
        ]
      }
    ];

    start();

  }

  AlbumsController.$inject = [ '$scope', '$routeParams' ];

  angular.module( 'bandApp' )
    .controller( 'AlbumsController', AlbumsController );
})();
