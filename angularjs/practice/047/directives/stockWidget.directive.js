(function() {

  'use strict';

  angular
    .module( 'StockMarketApp' )
    .directive( 'stockWidget', stockWidget );

  stockWidget.$inject = [];

  function stockWidget() {

    return {
      template: '<div class="stock-dash">' +
        'Name: ' +
        '<span class="stock-name"' +
        'ng-bind="stock.name">' +
        '</span>' +
        'Price: ' +
        '<span class="stock-price"' +
        'ng-bind="stock.price | currency">' +
        '</span>' +
        'Percentage Change: ' +
        '<span class="stock-change"' +
        'ng-bind="mainCtrl.getChange(stock) + \'%\'">' +
        '</span>' +
        '</div>'
    };

  }

}());