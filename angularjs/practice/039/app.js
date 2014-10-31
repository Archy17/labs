(function(){
  'use strict';

  angular
    .module( 'app', [] )
    .controller( 'LogController', LogController );

  LogController.$inject = [ '$log' ];

  function LogController( $log ) {
    var vm = this;
    vm.print = print;

    function print() {
      $log.log( 'You pressed the button' );
    }
  }
  
}());