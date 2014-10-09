/*

  for in

*/

var guitarDetails = {
  brand: 'Music Man',
  model: 'Majesty',
  price: 3100.00
};

var key = [];
var value = [];
var i = 0;

for ( key[ i++ ] in guitarDetails ) /* empty */;
console.log( key );

// *********************************************** //

var key = [];
var value = [];
var i = 0;
var j = 0;

for ( key[ i++ ] in guitarDetails ) {
  value[ j ] = guitarDetails[ key[ j++ ] ];
}

console.log( key );
console.log( value );
