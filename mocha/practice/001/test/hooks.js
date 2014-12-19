var assert = require( 'assert' );

describe( 'hooks', function() {

  before( function() {
    // runs before all tests in this block
    console.log( 'before' );
  });

  after( function(){
    // runs after all tests in this block
    console.log( 'after' );
  });

  beforeEach( function(){
    // runs before each test in this block
    console.log( 'beforeEach' );
  });

  afterEach( function(){
    // runs after each test in this block
    console.log( 'afterEach' );
  });

  // test cases
  it( 'should return -1 when the value is not present', function() {
    assert.equal( -1, [ 1, 2, 3 ].indexOf( 5 ));
    assert.equal( -1, [ 1, 2, 3 ].indexOf( 0 ));
  });
  it( 'should return 0 when the value is present in the first place', function() {
    assert.equal( 0, [ 1, 2, 3 ].indexOf( 1 ));
    assert.equal( 0, [ 2, 3 ].indexOf( 2 ));
  });
});