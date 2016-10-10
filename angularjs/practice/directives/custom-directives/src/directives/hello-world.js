(function() {

  'use strict';

  angular
    .module('app')
    .directive('helloWorld', helloWorld);

  helloWorld.$inject = [];

  function helloWorld() {
    return {
      template: 'Hello Directives!'
    };
  }

})();
