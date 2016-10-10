(function() {

  'use strict';

  angular
    .module('app')
    .directive('isolatedScopeEqualsProperty', isolatedScopeEqualsProperty);

  isolatedScopeEqualsProperty.$inject = [];

  function isolatedScopeEqualsProperty() {
    return {
      restrict: 'E',
      scope: {
        customer: '='
      },
      template: [
        '{{ customer.name }} is {{ customer.age }} years old.',
        '<br>',
        'Change it\'s name to ERIC and age to AGE * 5.',
        '<button ng-click="customer.name = \'ERIC\'; customer.age = customer.age * 5">Change name</button>'
      ].join('')
    };
  }

})();
