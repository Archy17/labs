(function() {

  'use strict';

  angular
    .module('directives')
    .directive('phone', phone);

  phone.$inject = [];

  function phone() {
    return {
      restrict: 'EA',
      scope: {
        dial: '&'
      },
      template: [
        '<input type="text" ng-model="value">',
        '<button ng-click="dial({ message: value })">Call Home!</button>'
      ].join('')
    };
  }
})();
