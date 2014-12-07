var canvasApp = (function() {

  'use strict';

  ///////////// Properties

    return {
     print : print
    };

    ///////////// Methods
    function print() {
      console.log( 'teste' );
    }

}());

// how to use Revealing Module Pattern
canvasApp.print();