var expect = chai.expect;

describe( 'Cow', function() {
  var sandbox;

  beforeEach( function() {
    // create a sandbox
    sandbox = sinon.sandbox.create();

    // stub some console methods
    sandbox.stub( window.console, 'log' );
    sandbox.stub( window.console, 'error' );
  });

  afterEach( function() {
    // restore the environment as it was before
    sandbox.restore();
  });

  describe( '#logGreets', function() {
    it( 'should log an error if no target is passed in', function() {
      (new Cow()).logGreets();

      sinon.assert.notCalled( console.log );
      sinon.assert.calledOnce( console.error );
      sinon.assert.calledWithExactly( console.error, 'missing target' );
    });
  });
});