(function() {

  'use strict';

  angular
    .module( 'StockMarketApp' )
    .directive( 'stockWidget', stockWidget );

  stockWidget.$inject = [];

  function stockWidget() {

    return {
      restrict : 'A',
      transclude : 'element',
      link : function( $scope, $element, $attrs, ctrl, $transclude ) {
        var myArray = $scope.$eval( $attrs.simpleStockRepeat );
        var container = angular.element( '<div class="container"></div>' );
        for ( var i = 0; i < myArray.length; i += 1 ) {
          var instance = $transclude( $scope.$new(), function( clonedElement, newScope ) {
            newScope.currentIndex = i;
            newScope.stock = myArray[ i ];
          });
          container.append( instance );
        }
        $element.after( container );
      }
    };

  }

}());
