(function() {

  'use strict';

  angular
    .module('ui.bootstrap.demo')
    .controller('MainController', MainController);

  MainController.$inject = [
    '$log',
    '$uibModal'
  ];

  function MainController($log, $uibModal) {
    var vm = this;

    ///////////// Public Properties
    vm.title      = 'UI Bootstrap Modal';
    vm.modalTitle = 'UI Modal - Guitar Shop';

    vm.guitars = [
      { name: 'MusicMan', id: 1 },
      { name: 'Ibanez', id: 2 },
      { name: 'PRS', id: 3 }
    ];

    ///////////// Private Properties

    ///////////// Public Methods
    vm.open  = open;

    ///////////// Private Methods

    ///////////// Events

    ///////////// Bootstrap

    ///////////// Function Declarations
    function open() {
      $log.log('Modal opened');
      var modalInstance = $uibModal.open({
        templateUrl: 'modal.html',
        controller: 'ModalController',
        controllerAs: 'vm'
      });
    }
  }
})();
