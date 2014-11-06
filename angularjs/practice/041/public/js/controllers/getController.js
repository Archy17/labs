(function() {
  'use strict';

  angular
    .module( 'app' )
    .controller( 'GetController', GetController );

  GetController.$inject = [ '$http' ];

  function GetController( $http ) {
    var vm = this;
    vm.items = [];
    vm.title = 'Angular $http';

    $http.get( '/api/note' ).then(function( response ) {
      vm.items = response.data;
    }, function( errResponse ) {
      console.error( 'Error while fetching notes' );
    });
  }
}());