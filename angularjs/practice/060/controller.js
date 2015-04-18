(function() {
  
  'use strict';

  angular
    .module( 'app' )
    .controller( 'TestController', TestController );

  TestController.$inject = [
    '$scope'
  ];

  function TestController( $scope ) {

    var vm = this;

    ///////////// Properties
    vm.firstName = '';
    vm.lastName  = '';

    $scope.songs = [ 'Take the time' ];

    ///////////// Public Methods
    vm.getFullName = getFullName;

    $scope.addSong = addSong;

    ///////////// Private Methods

    ///////////// Methods Declarations
    function getFullName() {

      return vm.firstName + ' ' + vm.lastName;

    }

    function addSong( song ) {

      $scope.songs.push( song );

    }

  }

}());