(function() {
  
  'use strict';

  angular
    .module( 'app' )
    .directive( 'phoneValidator', phoneValidator );

  phoneValidator.$inject = [];

  function phoneValidator() {

    return {
      require: 'ngModel',
      link: function( scope, element, attrs, modelCtrl ) {

        modelCtrl.$parsers.push( function ( input ) {

          var length = input.length;
          var maxSize = 14;

          if ( length > maxSize ) {
            input = input.substring( length - maxSize, length );
          }

          var transformedInput = input
                                    .replace( /\D/g, "" )
                                    .replace( /^(\d{2})(\d)/g, "($1) $2" )
                                    .replace( /(\d)(\d{4})$/,"$1-$2" );

          if ( transformedInput != input ) {
            modelCtrl.$setViewValue( transformedInput );
            modelCtrl.$render();
          }         

          return transformedInput;         
        });
      }
    };
  }

}());