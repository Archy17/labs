/*

  Array.map( fn, obj )

  - Cria um novo array de tamanaho igual ao que foi chamado o método
  - Os novos elementos serão o retorno da função passada como arg.

*/

var numbers = [ 1, 2, 3, 4, 5, 6, 7 ];

function cube( value ) {
  return Math.pow( value, 3 );
}

var cubeNumber = numbers.map( cube );
console.log( cubeNumber );
