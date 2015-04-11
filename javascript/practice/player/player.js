(function() {
  
  'use strict';

  ///////////// Properties
  var playlist      = [ new Music( 'a' ), new Music( 'b' ), new Music( 'c' )];
  var actualMusic   = 0;

  ///////////// Methods
  var init   = init;
  var player = player;

  ///////////// Methods Declaration
  function Music( name ) {
    this.name = name;
  }

  Music
    .prototype
    .play = function() {   
      console.log( '>', this.name, new Date());
    };

  Music
    .prototype
    .stop = function() {
      console.log( '|', this.name, new Date());
    };

  function player ( array ) {
  
    var size = array.length;

    if ( array[ actualMusic ] instanceof Music && actualMusic < size ) {

      array[ actualMusic ]
        .play();      

      setTimeout( function() {

        array[ actualMusic ]
          .stop();

        actualMusic += 1;

        player( array );

      }, 1000 );

    } else {
      console.log( '<<< End >>>' );
    }
  
  };

  function init() {
    player( playlist ); 
  }

  ///////////// Start
  init();

}());
