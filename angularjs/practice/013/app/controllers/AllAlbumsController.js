(function() {
  var AllAlbumsController = function( $scope, bandFactory ) {
    $scope.albums = 0;
    $scope.total = 0.0;
    $scope.totalType;

    function start() {
      bandFactory.getBands()
        .success( function(  ))
    }
  };  
})();
