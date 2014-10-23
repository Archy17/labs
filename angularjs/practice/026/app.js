var app = angular.module( 'app', [] );

/* DIRECTIVES */
app.directive( 'hello', function() {
  return {
    restrict : 'A',
    replace : 'true',
    template : '<p style="background-color:{{color}}">AngularJS Directives!</p>',
    link : function( scope, elem, attrs ) {
      elem.bind( 'click', function() {
        elem.css( 'background-color', 'white' );
        scope.$apply( function() {
          scope.color = 'white';
        });
      });
      elem.bind( 'mouseover', function() {
        elem.css( 'cursor', 'pointer' );
      });
    }
  };
});

/* CONTROLLERS */
app.controller( 'DirController', function( $scope ) {} );