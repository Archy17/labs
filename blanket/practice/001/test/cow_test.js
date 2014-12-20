var expect = chai.expect;

describe( 'Cow', function() {
  decribe( 'Constructor', function() {
    it( 'should have a default name', function() {
      var cow = new Cow();
      expect( cow.name ).to.equal( 'Anon Cow' );
    });

    it( 'should set cow\'s name if provided', function() {
      var cow = new Cow( 'Kate' );
      expect( cow.name ).to.equal( 'Kate' );
    });
  });

  describe( '/#greets', function() {
    it( 'should greet passed target', function() {
      var greetings = ( new Cow( 'Kate' )).greets( 'Baby' );
      expect( greetings ).to.equal( 'Kate greets Baby' );
    });
  });
});