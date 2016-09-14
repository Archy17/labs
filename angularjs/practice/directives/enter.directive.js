(function() {

  'use strict';

  angular
    .module('directives')
    .directive('enter', enter);

  enter.$inject = [];

  function enter() {
    // return a function is the same that returns an object
    // with the "link" property
    
    return function(scope, element, attrs) {
      element.bind('mouseenter', function() {
        element.addClass(attrs.enter);

        console.log("I'm ENTERING the", attrs.name, 'element');
      });
    };
  }
})();
