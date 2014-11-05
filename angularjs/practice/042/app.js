(function() {
  'use strict';

  angular
    .module( 'app', [ 'angucomplete-alt' ] )
    .controller( 'AutoController', AutoController );

  function AutoController() {
    var vm = this;
    vm.data = [
      {
        "brand" : "ibanez",
        "price" : 1300
      },
      {
        "brand" : "music man",
        "price" : 3100
      },
      {
        "brand" : "caparison",
        "price" : 3300
      },
      {
        "brand" : "PRS",
        "price" : 4300
      },
      {
        "brand" : "Jackson",
        "price" : 1100
      }
    ];


  }
}());