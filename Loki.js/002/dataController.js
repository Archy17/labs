(function() {
  
  'use strict';

  angular
    .module( 'lokiApp' )
    .controller( 'DataController', DataController );

  DataController.$inject = [ 'dataService' ];

  function DataController( dataService ) {

    var vm = this;
    var data = dataService.getData();

    var db = new loki( 'loki.json' );
    var collection = db.addCollection( 'guitars' );

    ///////////// Properties
    vm.viewData = '';

    ///////////// Methods
    vm.storeData = storeData;
    vm.showData = showData;

    /////////////
    function storeData() {
      console.log( JSON.stringify( data, null, 2 ) );
      collection.insert( data );
      db.save();
    }

    function showData() {
      var dbData = db.getCollection( 'guitars' );
      vm.viewData = dbData;
    }

  }

}());