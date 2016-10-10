(function() {

  'use strict';

  angular
    .module('app')
    .directive('linkDemo', linkDemo);

  linkDemo.$inject = [];

  function linkDemo() {
    return {
      restrict: 'A',
      link: function(scope, el, attrs) {
        el.on('click', function() {
          el.html('You Clicked Me!');
        });

        el.on('mouseenter', function() {
          el.addClass('btn');
        });

        el.on('mouseleave', function() {
          el.removeClass('btn');
        });
      }
    };
  }

})();
