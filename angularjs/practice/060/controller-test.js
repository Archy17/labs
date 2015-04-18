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

});