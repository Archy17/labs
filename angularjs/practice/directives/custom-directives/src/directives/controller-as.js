(function() {

  'use strict';

  angular
    .module('app')
    .directive('controllerAs', controllerAs);

  controllerAs.$inject = [];

  function controllerAs() {
    return {
      restrict: 'E',
      scope: {
        data: '='
      },
      templateUrl: 'src/directives/controller-as.html',
      controller: controller,
      controllerAs: 'vm',
      bindToController: true
    };
  }

  function controller() {
    var vm = this;

    vm.items = angular.copy(vm.data);

    vm.addItem = function() {
      var len = vm.items.length;

      vm.items.push({
        model: 'Model X' + len,
        brand: 'Brand XYZ',
        price: len * 250
      });
    };
  }

})();
