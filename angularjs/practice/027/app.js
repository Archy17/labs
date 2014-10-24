(function() {
  'use strict';

  angular
    .module( 'ownFilter', [] )
    .controller( 'FilterController', FilterController );

  function FilterController() {

    /* jshint validthis: true */
    var vm = this;
    vm.title = [ 'Angular JS', ' is  ', 'A w e s o m e !!!' ].join( '' );

  }

}());