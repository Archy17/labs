(function() {

  'use strict';

  angular
    .module('storage')
    .controller('MainController', MainController);

  MainController.$inject = [
    'MainService',
    '$log',
    '$rootScope',
    'EVENTS',
    '$scope'
  ];

  function MainController(MainService, $log, $rootScope, EVENTS, $scope) {
    var vm = this;

    ///////////// Public Properties
    vm.title = 'IndexedDB - localforage';
    vm.list  = [];

    ///////////// Private Properties

    ///////////// Public Methods

    ///////////// Private Methods

    ///////////// Events
    $rootScope.$on(EVENTS.DB_READY, function() {
      vm.list = MainService.data;
      $scope.$digest();
    });

    ///////////// Bootstrap
    _init();

    ///////////// Function Declarations
    function _init() {
      MainService.getData();
    }
  }
})();
