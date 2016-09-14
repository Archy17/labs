(function() {

  'use strict';

  angular
    .module('directives')
    .directive('kid', kid);

  kid.$inject = [];

  function kid() {
    return {
      restrict: "E",
      scope: {
        done: '&'
      },
      template: [
        '<input type="text" ng-model="chore">',
        '<br>',
        '{{ chore }}',
        '<br>',
        '<button ng-click="done({ chore: chore })">I\'m done!</button>'
      ].join('')
    };
  }
})();

// scope: {} creates an isolated iscope
// '&' shows that the property passed must be an expression
