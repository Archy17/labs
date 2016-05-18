(function() {
  'use strict';

  angular
    .module('app', [])
    .controller('mainController', function() {
      var vm = this;

      vm.title = 'Angular Dynamic Class';
      vm.color = '';

      vm.toggleColor = function() {
        if (!vm.color) {
          vm.color = 'blue';
        } else if (vm.color === 'blue') {
          vm.color = 'red';
        } else if (vm.color === 'red') {
          vm.color = 'blue';
        }
      };
    });
})();
