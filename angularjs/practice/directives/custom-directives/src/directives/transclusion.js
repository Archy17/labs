(function() {

  'use strict';

  angular
    .module('app')
    .directive('transclusion', transclusion);

  transclusion.$inject = [
    '$log'
  ];

  function transclusion() {
    return {
      restrict: 'E',
      transclude: true,
      controller: controller,
      controllerAs: 'vm',
      bindToController: true,
      templateUrl: 'src/directives/transclusion.html',
      scope: {
        list: '=',
        title: '@'
      }
    };
  }

  function controller($log) {
    var vm = this;

    ///////////// Properties
    
    ///////////// Methods
    vm.addItem = addItem;

    ///////////// Function declarations
    function addItem(array) {
      var len = array.length;

      array.push({
        model: 'Model X' + len,
        brand: 'Brand XYZ',
        price: len * 250
      });
    };
  }

})();
