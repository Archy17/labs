(function() {

  'use strict';

  angular
    .module( 'GeoApp' )
    .controller( 'GeoController', GeoController );

  GeoController.$inject = [];

  function GeoController() {
    
    var vm = this;

    ///////////// Properties
    vm.lat1 = 37.42565;
    vm.lat1Rad = toRadians( vm.lat1 );
    vm.lon1 = -122.1411007;
    vm.lon1Rad = toRadians( vm.lon1 );

    vm.lat2 = 38.42565;
    vm.lat2Rad = toRadians( vm.lat2 );
    vm.lon2 = -123.1411007;
    vm.lon2Rad = toRadians( vm.lon2 );

    vm.distance = 13;

    ///////////// Methods
    vm.toRadians = toRadians;
    vm.calculateDistance = calculateDistance;

    /////////////
    function toRadians( value ) {
      return value * ( Math.PI / 180 );
    }

    function calculateDistance() {
    
    }
  }
}());
