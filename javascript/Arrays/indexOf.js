/*

  Array.indexOf( valor, inicio )

  - Busca por 'valor' no array a partir do 'inicio'
  - 'inicio' é opcional, caso não seja passado inicia do 0
  - retorna a primeira posição (índice) caso o valor seja encontrado,
  caso não seja achado nada, retorna -1

*/

var stack = [ 'MongoDB', 'ExpressJS', 'AngularJS', 'NodeJS' ];

console.log( stack.indexOf( 'MongoDB' ) ); // 0
console.log( stack.indexOf( 'JS' ) ); // -1
console.log( stack.indexOf( 'AngularJS' ) ); // 2
