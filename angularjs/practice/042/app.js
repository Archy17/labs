(function() {
  'use strict';

  angular
    .module( 'app', [ 'angucomplete-alt' ] )
    .controller( 'AutoController', AutoController );

  function AutoController() {
    var vm = this;
    vm.data = [
      { "brand" : "MusicMan1", "price" : 1000 },
      { "brand" : "MusicMan2", "price" : 2000 },
      { "brand" : "MusicMan3", "price" : 3000 },
      { "brand" : "MusicMan4", "price" : 4000 },
      { "brand" : "MusicMan5", "price" : 5000 },
      { "brand" : "MusicMan6", "price" : 6000 },
      { "brand" : "MusicMan7", "price" : 7000 },
      { "brand" : "MusicMan8", "price" : 8000 },
      { "brand" : "MusicMan9", "price" : 9000 },
      { "brand" : "MusicMan10", "price" : 10000 },
      { "brand" : "MusicMan11", "price" : 11000 }
    ];


  }
}());