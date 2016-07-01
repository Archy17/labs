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
    vm.title = 'Angular Autocomplete - angucomplete-alt';
    vm.guitar = { name: 'Anyone' };
    vm.guitars = [
      {
        name: 'JP100',
        brand: 'Ibanez',
        price: 2560
      },
      {
        name: 'Majesty',
        brand: 'Music Man',
        price: 3100
      },
      {
        name: 'Custom 24',
        brand: 'PRS',
        price: 760
      },
      {
        name: 'JPXIII',
        brand: 'Music Man',
        price: 2920
      }
    ];

    ///////////// Private Properties

    ///////////// Public Methods
    vm.print = print;

    ///////////// Private Methods

    ///////////// Events

    ///////////// Bootstrap

    ///////////// Function Declarations
    function print(txt) {
      $log.log(JSON.stringify(txt, null, 2));
    }
  }
})();
