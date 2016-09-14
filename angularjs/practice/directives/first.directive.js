(function() {

  'use strict';

  angular
    .module('directives')
    .directive('firstDirective', firstDirective);

  firstDirective.$inject = [];

  function firstDirective() {
    return function(scope, element, attrs) {
      console.log(scope.vm.message);

      element.text(scope.vm.message + " " + attrs.message);
    };
  }
})();
