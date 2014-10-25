(function() {
  
  'use strict';

  angular
    .module( 'app', [] )
    .controller( 'SyntaxController', SyntaxController );

    function SyntaxController() {

      var vm = this;
      vm.data = {};
      vm.data.title = 'AngularJS Amazing Syntax';
      vm.print = print;

      function print() {
        console.log( vm.data );
      }

    }

}());