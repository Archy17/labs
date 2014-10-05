/*

  Array.concat()

  cria e retorna um novo array.
  Não modifica o array.
  Se for passado um array como argumento,
  os elementos do array que serão concatenados

*/


var guitars = [ 'Ibanez', 'Music Man', 'PRS' ];

console.log( guitars.concat( 'Gibson' ) );
console.log( guitars.concat( [ 'Fender', 'Mayones' ] ) );
console.log( guitars.concat( function test() { /* code here */ } ) );
console.log( guitars.concat( { model: 'Caparison' } ) );

var guitars2 = guitars.concat( { model: 'Caparison' } );
console.log( guitars2 );
console.log( guitars2[ guitars2.length -1 ].model );
console.log( guitars );
