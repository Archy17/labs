(function(){
  'use strict';

  angular
    .module( 'app', [] )
    .controller( 'CheckController', CheckController );

  function CheckController() {
    var vm = this;
    vm.data = [
      {
        brand : "MusicMan",
        selected : "yes"
      }, 
      {
        brand : "Ibanez",
        selected : "yes"
      },
      {
        brand : "Fender",
        selected : "no"
      },
      {
        brand : "Caparison",
        selected : "yes"
      }
    ];
  }
}());