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
        link : function( $scope, $element, $attrs ) {
          $scope.getChage = function( stock ) {
            return Math.ceil((( stock.price - stock.previous ) / stock.previous ) * 100 );
          };
        }
    };

  }

}());