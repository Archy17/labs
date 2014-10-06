/*

  Array.join( separador )

  - Concatena os elementos do array para formar uma string
  - 'separador' é um argumento opcional, caso não seja fornecido,
  é usada uma vírgula para separar os elementos
  - converte todos os elementos em string e usa o separador para uní-los
  ps: o método split() faz o processo inverso

*/

var guitars = [ 'Ibanez', 'Music Man', 'Caparison' ];

console.log( guitars.join() );
console.log( guitars );

console.log( guitars.join( ' <====> ' ) );

// Criando uma linha
var linha = new Array( 50 ); // cria um array com 50 posições vazias
console.log( linha.join( '><' ) );
