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
        scope : {
          stockData : '=',
          stockTitle : '@',
          whenSelect : '&'
        },
        link : function( $scope, $element, $attrs ) {
          $scope.getChange = function( stock ) {
            return Math.ceil((( stock.price - stock.previous ) / stock.previous ) * 100 );
          };

          $scope.onSelect = function() {
            $scope.whenSelect({
              stockName : $scope.stockData.name,
              stockPrice : $scope.stockData.price,
              stockPrevious : $scope.stockData.previous
            });
          };
        }
    };

  }

}());