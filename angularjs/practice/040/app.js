(function(){
  'use strict';

  angular
    .module( 'app', [] )
    .controller( 'MainController', MainController )
    .controller( 'SubController', SubController );

  // 1st controller
  function MainController() {
    var vm = this;
    vm.tab = 'first';
    vm.open = open;

    function open( tab ) {
      vm.tab = tab;
    }
  }

  // 2nd Controller
  SubController.$inject = [ 'ItemService' ];

  function SubController( ItemService ) {
    var vm = this;
    vm.list = list;
    vm.add = add;

    function list() {
      return ItemService.list();
    }

    function add() {
      ItemService.add({
        id : vm.list().length + 1,
        label : 'Item ' + vm.list().length
      });
    }
  }
  
}());