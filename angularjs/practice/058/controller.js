(function() {
  
  'use strict';

  angular
    .module( 'app' )
    .controller( 'MomentController', MomentController );

  MomentController.$inject = [];

  function MomentController() {

    var vm = this;

    ///////////// Properties
    vm.message = {
      'time' : '2014-01-16T10:16:16.281Z'
    }
    vm.m1    = moment( '2014-01-01 12:00:00','YYYY-MM-DD HH:mm:ss' );
    vm.m2    = moment( '2014-02-03 15:04:05','YYYY-MM-DD HH:mm:ss' );
    vm.diff  = moment.duration( vm.m1.diff( vm.m2 )).humanize();
    vm.pDiff = moment.preciseDiff( vm.m1, vm.m2 ) + ' atrás';

    ///////////// Public Methods

    ///////////// Private Methods

    /////////////

  }

}());