(function() {

  'use strict';

  angular
    .module('directives')
    .controller('MainController', MainController);

  MainController.$inject = [
    '$log'
  ];

  function MainController($log) {
    var vm = this;

    ///////////// Public Properties
    vm.message = 'Hey, you!';

    ///////////// Private Properties

    ///////////// Public Methods
    vm.logChore = logChore;
    vm.callHome = callHome;

    ///////////// Private Methods

    ///////////// Events

    ///////////// Bootstrap

    ///////////// Function Declarations
    function logChore(chore) {
      $log.log(chore + ' is done!');
    }

    function callHome(text) {
      $log.log('Phone message:', text);
    }
  }
})();
