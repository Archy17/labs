(function() {
  'use strict';

  function FilterController( $scope ) {

    $scope.data = [ 'One', 'Two', 'Three', 'Four', 'Five' ];
    $scope.userLimit = $scope.userLimit ? $scope.userLimit : 3;

    $scope.users = [
      {
        name: 'Eric',
        score: 3100,
        createdAt: new Date().getTime() + 10
      }, 
      {
        name: 'Douglas',
        score: 1300,
        createdAt: new Date().getTime() + 9
      },
      {
        name: 'John',
        score: 1100,
        createdAt: new Date().getTime() + 8
      }, 
      {
        name: 'Steve',
        score: 300,
        createdAt: new Date().getTime() + 7
      },
      {
        name: 'Peter',
        score: 100,
        createdAt: new Date().getTime() + 6
      }, 
      {
        name: 'Paul',
        score: 5500,
        createdAt: new Date().getTime() + 5
      }
    ];

  }

angular.module( 'FilterApp' )
  .controller( 'FilterController', FilterController );
  
})();