(function() {
  'use strict';

  angular
    .module( 'app', [] )
    .controller( 'ListController', ListController );

    function ListController() {
      var vm = this;
      vm.getClass = getClass;
      vm.data = [
        {label: 'First Note', done: false, assignee: 'Shyam'},
        {label: 'Second Note', done: false},
        {label: 'Done Note', done: true},
        {label: 'Last Note', done: false, assignee: 'Brad'}
      ];
      vm.guitars = {
        // capitalized names appear first
        Ibanez   : { price : 1300 },
        musicman : { price : 3100 },
        Mayones  : { price : 3370 },
        Gibson   : { price : 2300 },
        Fender : { price : 1700 },
        Caparison  : { price : 4370 }
      };

      function getClass( status ) {
        return status ? 'alert alert-success' : 'alert alert-warning';
      }
    }
}());