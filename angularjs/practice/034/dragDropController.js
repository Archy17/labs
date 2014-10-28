(function() {
  'use strict';

  angular
    .module( 'dragDrop' )
    .controller( 'DragDropController', DragDropController );

  function DragDropController() {
    var vm = this;
    vm.handleDrop = handleDrop;

    function handleDrop() {
      console.log( 'Item has been dropped' );
    }
  }

}());