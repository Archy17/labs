(function() {

  'use strict';

  angular
    .module('ui.bootstrap.demo')
    .controller('ModalController', ModalController);

  ModalController.$inject = [
    '$log',
    '$uibModalInstance'
  ];

  function ModalController($log, $uibModalInstance) {
    var vm = this;

    ///////////// Public Properties
    vm.modalTitle = 'UI Modal - Guitar Shop';

    vm.guitars = [
      { name: 'MusicMan', id: 1 },
      { name: 'Ibanez', id: 2 },
      { name: 'PRS', id: 3 }
    ];

    ///////////// Private Properties

    ///////////// Public Methods
    vm.open  = open;
    vm.buy   = buy;
    vm.close = close;

    ///////////// Private Methods

    ///////////// Events

    ///////////// Bootstrap

    ///////////// Function Declarations
    function buy() {
      $log.log('Guitar acquired!');
      $uibModalInstance.dismiss('cancel');
    }

    function close() {
      $log.log('Modal closed');
      $uibModalInstance.dismiss('cancel');
    }
  }
})();
