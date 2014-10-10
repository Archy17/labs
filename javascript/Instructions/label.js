/* Labels */
var numbers = [ 1, 2, 3, 4, 5, 6 ];
var length = numbers.length
var count = 0;

showNumbers: while( count < numbers.length ) {
  if ( count === 4 ) return;

  console.log( numbers[ count ] );
  count++;
}
