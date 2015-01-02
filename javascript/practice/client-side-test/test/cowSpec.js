var expect = chai.expect;

describe( 'Cow', function() {
  describe( 'Constructor', function() {
    it( 'should have a default name', function() {
      var cow = new Cow();
      expect( cow.name ).to.equal( 'Anon cow' );
    });
  });
});
