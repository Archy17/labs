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

    vm.distance = calculateDistance( vm.lat1, vm.lon1, vm.lat2, vm.lon2 );

    ///////////// Methods
    vm.toRadians = toRadians;
    vm.calculateDistance = calculateDistance;

    /////////////
    function toRadians( value ) {
      return value * ( Math.PI / 180 );
    }

    function calculateDistance( lat1, lon1, lat2, lon2 ) {
      var distance;
      var R = 6371; // km

      var latitudeDistance = toRadians( lat2 - lat1 );
      var longitudeDistance = toRadians( lon2 - lon1 );

      var lat1Rad = toRadians( lat1 );
      var lat2Rad = toRadians( lat2 );

      var haversine = Math.sin( latitudeDistance / 2 ) * Math.sin( latitudeDistance / 2 ) +
                      Math.cos( lat1Rad ) * Math.cos( lat2Rad ) +
                      Math.sin( longitudeDistance / 2 ) * Math.sin( longitudeDistance );

      var angularDistance = 2 * Math.atan2( Math.sqrt( haversine ), Math.sqrt( 1 - haversine ));

      distance = R * angularDistance;

      return distance;
    }
  }
}());
