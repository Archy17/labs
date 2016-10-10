(function() {

  'use strict';

  angular
    .module('app')
    .directive('isolatedScopeAtProperty', isolatedScopeAtProperty);

  isolatedScopeAtProperty.$inject = [];

  function isolatedScopeAtProperty() {
    return {
      restrict: 'E',
      scope: {
        name: '@'
      },
      template: 'Customer: {{ name }}'
    };
  }

})();
