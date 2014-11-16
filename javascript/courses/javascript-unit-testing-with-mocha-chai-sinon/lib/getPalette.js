function getPalette() {
  // return [ '#ccc', '#900455', '#0055ff' ];
  return 'hello';
}

module.exports = function() {

  var palette = getPalette();

  if ( !Array.isArray( palette )) {
    throw new Error( 'Palette is not an array' );
  }

  return palette;

};