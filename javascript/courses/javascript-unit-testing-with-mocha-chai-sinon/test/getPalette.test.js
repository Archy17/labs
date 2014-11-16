var getPalette = require( '../lib/getPalette' );
var expect = require( 'chai' ).expect;
var assert = require( 'chai' ).assert;

describe( 'getPalette', function() {

  it( 'should throw an error if the result is not an array', function( done ) {

    var notArray = function() {
      getPalette( process.cwd() + '/test/fixtures/config-palette-non-array.json' );
    };

    expect( notArray ).to.throw( /is not an array/ );
    done();

  });

  it.only( 'should return an array with 3 items by default', function() {

    var palette = getPalette();
    assert.isArray( palette, 'did not return an array' );
    assert.lengthOf( palette, 3, 'did not return 3 items' );    

  });

});