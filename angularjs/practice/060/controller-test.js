describe( 'TestController', function() {

  beforeEach( module( 'app' ));

  describe( '#getFullName()', function() {

    it( 'should handle names correctly', inject( function( $controller ) {

      var testController = $controller( 'TestController' );

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

  describe( 'get-instruments result', function() {

    it( 'should be added to scope', inject( function( $controller, $httpBackend ) {

      var scope = {};

      $httpBackend
        .when( 'GET', 'api/get-instruments')
        .respond([
          'vocals',
          'guitar',
          'sitar'
        ]);

      var testController = $controller( 'TestController', {
        $scope : scope
      });

      $httpBackend.flush();

      scope.instruments.should.contain( 'vocals' );
      scope.instruments.should.contain( 'guitar' );
      scope.instruments.should.contain( 'sitar' );

    }));

  });

  describe( '#get-instruments with error', function() {

    it( 'should have a status with error', inject( function( $controller, $httpBackend ) {

      var scope = {};

      $httpBackend
        .when( 'GET', 'api/get-instruments' )
        .respond( 500, '' );

      var testController = $controller( 'TestController', {
        $scope : scope
      });

      $httpBackend.flush();

      scope.status.should.equal( 'ERROR' );

    }));

  });

});