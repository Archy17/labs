var hex2rgb = require( '../lib/hex2rgb' );
var assert = require( 'assert' );

describe( 'hex2rgb', function() {

  it( 'should throw an error if the value is not a hex code', function() {

    assert.throws( function() {

      hex2rgb( 'blue' );

    }, /Invalid hexadecimal string/ );

  });

});