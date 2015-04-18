(function() {
  
  'use strict';

  angular
    .module( 'app' )
    .controller( 'TestController', TestController );

  TestController.$inject = [];

  function TestController() {

    var vm = this;

    ///////////// Properties
    vm.firstName = '';
    vm.lastName  = '';

    ///////////// Public Methods
    vm.getFullName = getFullName;

    ///////////// Private Methods

    ///////////// Methods Declarations
    function getFullName() {

      return vm.firstName + ' ' + vm.lastName;

    }

  }

}());