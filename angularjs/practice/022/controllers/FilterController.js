function FilterController( $scope ) {

  $scope.data = [ 'One', 'Two', 'Three', 'Four', 'Five' ];


  $scope.users = [
    {
      name: 'Eric',
      score: 3100,
      createdAt: new Date().getTime()
    }, 
    {
      name: 'Douglas',
      score: 1300,
      createdAt: new Date().getTime()
    }
  ];

}

angular.module( 'FilterApp', [] )
  .controller( 'FilterController', FilterController );