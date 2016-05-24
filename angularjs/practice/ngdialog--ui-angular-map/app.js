(function() {
  'use strict';

  var app = angular.module('app', ['ngDialog', 'uiGmapgoogle-maps']);

  app.controller('MainController', MainController);

  function MainController(ngDialog, $scope, $log, $timeout) {
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
    }

    ///////////// index-01.html
    vm.address = { center: { latitude: 45, longitude: -73 }, zoom: 8 };

    ///////////// index-02.html
    
    $scope.map = {center: {latitude: 40.1451, longitude: -99.6680 }, zoom: 4 };
    $scope.options = {scrollwheel: false};
    $scope.coordsUpdates = 0;
    $scope.dynamicMoveCtr = 0;
    $scope.marker = {
      id: 0,
      coords: {
        latitude: 40.1451,
        longitude: -99.6680
      },
      options: { draggable: false },
      events: {
        dragend: function (marker, eventName, args) {
          $log.log('marker dragend');
          var lat = marker.getPosition().lat();
          var lon = marker.getPosition().lng();
          $log.log(lat);
          $log.log(lon);

          $scope.marker.options = {
            draggable: true,
            labelContent: "lat: " + $scope.marker.coords.latitude + ' ' + 'lon: ' + $scope.marker.coords.longitude,
            labelAnchor: "100 0",
            labelClass: "marker-labels"
          };
        }
      }
    };
    $scope.$watchCollection("marker.coords", function (newVal, oldVal) {
      if (_.isEqual(newVal, oldVal))
        return;
      $scope.coordsUpdates++;
    });
    $timeout(function () {
      $scope.marker.coords = {
        latitude: 42.1451,
        longitude: -100.6680
      };
      $scope.dynamicMoveCtr++;
      $timeout(function () {
        $scope.marker.coords = {
          latitude: 43.1451,
          longitude: -102.6680
        };
        $scope.dynamicMoveCtr++;
      }, 2000);
    }, 1000);

    $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
    vm.address = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
  }
})();
