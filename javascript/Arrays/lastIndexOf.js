/*

  Array.lastIndexOf( valor, inicio )

  - Busca um valor começando do fim do array
  - Busca por 'valor' no array a partir do 'inicio'
  - 'inicio' é opcional, caso não seja passado inicia da última posição
  - retorna a primeira posição (índice) caso o valor seja encontrado,
  caso não seja achado nada, retorna -1

*/

var stack = [ 'MongoDB', 'AngularJS', 'NodeJS', 'MongoDB', 'AngularJS' ];

console.log( stack.lastIndexOf( 'MongoDB' ) ); // 0
console.log( stack.lastIndexOf( 'JS' ) ); // -1
console.log( stack.lastIndexOf( 'AngularJS' ) ); // 2
