(function() {
  'use strict';

  var app = angular.module('app', ['ngDialog', 'uiGmapgoogle-maps']);

  app.controller('MainController', MainController);

  function MainController(ngDialog, $scope) {
    var vm = this;

    vm.title = 'NgDialog + NgMap';

    vm.openModal = openModal;

    function openModal() {
      ngDialog.open({
        template: 'modal.html',
        className: 'ngdialog-theme-default',
        controller: 'MainController',
        controllerAs: 'vm'
      });

    // NgMap.getMap().then(function(map) {
    //   console.log(map.getCenter());
    //   console.log('markers', map.markers);
    //   console.log('shapes', map.shapes);
    // });

    }

    // NgMap.getMap().then(function(map) {
    //   console.log(map.getCenter());
    //   console.log('markers', map.markers);
    //   console.log('shapes', map.shapes);
    // });
    
    $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
    vm.address = { center: { latitude: 45, longitude: -73 }, zoom: 8 };

  }
})();
