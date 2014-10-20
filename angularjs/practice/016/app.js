var app = angular.module( 'GuitarApp', [] );

app.controller( 'RepeatController', function( $scope ) {

  $scope.guitars = [
    { model : 'MusicMan', price : '3100' },
    { model : 'Ibanez', price : '2700' },
    { model : 'PRS', price : '4100' },
    { model : 'Mayones', price : '5000' },
    { model : 'Fender', price : '1600' },
    { model : 'Gibson', price : '2300' }
  ];

});