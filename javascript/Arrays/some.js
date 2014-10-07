/*

  Array.some( fn, o )

  - Parecido com every(), mas caso alguma condição retornada
  seja verdadeira, o resultado da chamada deste método retorna true
  - se chamado em um array vazio SEMPRE retorna false

*/

var numbers = [ 1, 2, 3, 5, 6, 7, 9, 10, 11 ];

function isGreaterThan( value ) {
  var reference = 4;

  if ( value > reference ) return true;
}

console.log( numbers.some( isGreaterThan ) );
