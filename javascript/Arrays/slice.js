/*

  Array.slice( inicio, fim )

  - retorna uma parte de um array, mas NÃO o modifica
  ps: para modificar o array deve se usar o método splice()
  - o array retornado começa no elemento de índice 'inicio',
  e termina no elemento anterior a 'fim'. 'fim' NÃO é incluso
  - caso não seja passado o argumento 'fim', ele fatia até o fim do array

*/

var numbers = [ 1, 2, 3, 4, 5 ];

console.log( numbers.slice( 1, 3 ) + ' esperado: 2,3' );
console.log( numbers.slice( 3, 5 ) + ' esperado: 4,5' );
console.log( numbers.slice( 3 ) + ' esperado: 4,5' );
console.log( numbers.slice( 1, -3 ) + ' esperado: 2' );
console.log( numbers.slice( 1, -2 ) + ' esperado: 2,3' );
console.log( numbers.slice( -3, -1 ) + ' esperado: 3,4' );
