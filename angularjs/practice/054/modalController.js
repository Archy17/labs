(function() {
  
  'use strict';

  angular
    .module( 'ModalApp' )
    .controller( 'ModalController', ModalController );

  ModalController.$inject = [
    'ngDialog'
  ];

  function ModalController( ngDialog ) {

    var vm = this;

    ///////////// Properties

    ///////////// Methods
    vm.openModal1 = openModal1;
    vm.openModal2 = openModal2;

    /////////////
    function openModal1() {
      ngDialog.open({
        template : 'popup.html'
      });
    }

    function openModal2() {
      ngDialog.open({
        template : 'internalTemplate'
      });
    }

  }

}());