(function(){
  'use strict';

  angular
  .module( 'app', [] )
  .controller( 'LuthierController', LuthierController );

  function LuthierController() {
    var vm = this;
    vm.guitars = [
      { guitar : 'music man like', done : true },
      { guitar : 'caparison like', done : false }
    ];
    vm.getDoneClass = getDoneClass;

    function getDoneClass( guitar ) {
      return {
        finished : guitar.done,
        unfinished : !guitar.done
      };
    }
  }
}());