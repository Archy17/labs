(function() {

  'use strict';

  angular
    .module('directives')
    .directive('leave', leave);

  leave.$inject = [];

  function leave() {
    return function(scope, element, attrs) {
      element.bind('mouseleave', function() {
        element.removeClass(attrs.enter);

        console.log("I'm LEAVING the", attrs.name, 'element');
      });
    };
  }
})();
