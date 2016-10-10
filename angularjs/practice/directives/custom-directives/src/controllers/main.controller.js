(function() {

  'use strict';

  angular
    .module('app')
    .controller('MainController', MainController);

  MainController.$inject = [
    '$log'
  ];

  function MainController($log) {
    var vm = this;

    ///////////// Public Properties
    vm.customer = { name: 'Eric Douglas', id: 1, age: 25 };
    vm.guitars = [
      { model: 'JP6', brand: 'Music Man', price: 1600 },
      { model: 'Majesty', brand: 'Music Man', price: 3500 },
      { model: 'JP100', brand: 'Ibanez', price: 1300 },
      { model: 'Custom 24', brand: 'PRS', price: 760 }
    ];

    ///////////// Private Properties

    ///////////// Public Methods
    vm.print = print;

    ///////////// Private Methods

    ///////////// Events

    ///////////// Bootstrap

    ///////////// Function Declarations
    function print(text) {
      $log.log('Showing log:', text);
    }
  }
})();
