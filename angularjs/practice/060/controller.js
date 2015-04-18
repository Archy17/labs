(function() {
  
  'use strict';

  angular
    .module( 'app' )
    .controller( 'TestController', TestController );

  TestController.$inject = [
    '$scope',
    '$http'
  ];

  function TestController( $scope, $http ) {

    var vm = this;

    ///////////// Properties
    vm.firstName       = '';
    vm.lastName        = '';

    $scope.songs       = [ 'Take the time' ];
    $scope.instruments = [ 'guitar' ];

    ///////////// Public Methods
    vm.getFullName     = getFullName;

    $scope.addSong     = addSong;

    ///////////// Private Methods
    $http
      .get( 'api/get-instruments')
      .success( function( data ) {
        $scope.instruments = data;
      })
      .error( function( e ) {
        $scope.status = 'ERROR';
      });

    ///////////// Methods Declarations
    function getFullName() {

      return vm.firstName + ' ' + vm.lastName;

    }

    function addSong( song ) {

      $scope.songs.push( song );

    }

  }

}());