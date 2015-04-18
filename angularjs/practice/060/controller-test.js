describe( 'TestController', function() {

  beforeEach( module( 'app' ));

  describe( '#getFullName()', function() {

    it( 'should handle names correctly', inject( function( $controller ) {

      var testController = $controller( 'TestController', {
        $scope : {}
      });

      testController.firstName = 'Eric';
      testController.lastName  = 'Douglas';

      testController.getFullName().should.equal( 'Eric Douglas' );

    }));

  });

  describe( '#addSong()', function() {

    it( 'should add songs', inject( function( $controller ) {

      var scope = {};
      var testController = $controller( 'TestController', {
        $scope : scope
      });

      scope.addSong( 'The best of times' );
      
      scope.songs.should.contain( 'The best of times' );
      scope.songs.should.contain( 'Take the time' );

    }));

  });

});