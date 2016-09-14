(function() {

  'use strict';

  angular
    .module('directives')
    .directive('superman', superman);

  superman.$inject = [];

  function superman() {
    return {
      restrict: 'E',
      template: '<div>Here I am to save the day</div>'
    };
  }
})();
