(function() {
  'use strict';

  var bandFactory = function() {
    var bands = [ 
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

    var factory = {};

    factory.getBands = function() {
      return bands;
    };
    // Find in bands for the bandId
    var len = bands.length;
     
    factory.getBand = function( bandId ) {
      for ( var i = 0; i < len; i += 1 ) {
        if ( bands[ i ].id === parseInt( bandId ) ) {
          return bands[ i ];
        }
      }
      return {};
    };
    return factory;
  };
  
  angular.module( 'bandApp' )
    .factory( 'bandFactory', bandFactory );

})();
