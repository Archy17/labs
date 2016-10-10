(function() {

  'use strict';

  angular
    .module('app')
    .directive('isolatedScopeAmpersandProperty', isolatedScopeAmpersandProperty);

  isolatedScopeAmpersandProperty.$inject = [];

  function isolatedScopeAmpersandProperty() {
    return {
      restrict: 'E',
      scope: {
        name: '@',
        print: '&'
      },
      template: 'Customer Name: {{ name }} - Log name <button ng-click="print()">Log this name</button>'
    };
  }

})();
