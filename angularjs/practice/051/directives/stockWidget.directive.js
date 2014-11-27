(function() {

  'use strict';

  angular
    .module( 'StockMarketApp' )
    .directive( 'stockWidget', stockWidget );

  stockWidget.$inject = [];

  function stockWidget() {

    return {
      templateUrl : 'stock.html',
      restrict : 'AE',
      transclude : true,
      scope : {
        stockData : '='
      },
      link : function( $scope, $element, $attrs ) {
        $scope.getChange = function( stock ) {
          return Math.ceil((( stock.price - stock.previous ) / stock.previous ) * 100 );
        };
      }
    };

  }

}());