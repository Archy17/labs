(function() {
  'use strict';

  angular
    .module( 'app' )
    .factory( 'ItemService', ItemService );

  function ItemService() {
    var items = [
      { id : 1, label : 'Item 0' },
      { id : 2, label : 'Item 1' }
    ];

    var service = {
      list : list,
      add : add
    };

    return service;
    /////////////////////////

    function list() {
      return items;
    }

    function add( item ) {
      items.push( item );
    }
  }
}());