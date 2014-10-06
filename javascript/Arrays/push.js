/*

  Array.push()

  - Adiciona elementos ao fim do array
  - Retorna o novo comprimento do array
  ps: Com o método pop(), forma a estrutura de pilha
  (primeiro a entrar, último a sair)

*/

var guitars = [ 'Jackson' ];

console.log( guitars.push( 'Cort' ) );
console.log( guitars );

console.log( guitars.push( 'ESP' ) );
console.log( guitars );

console.log( guitars.push( 'Ibanez', 'Music Man', [ 'Gibson', 'Fender' ] ) );
console.log( guitars );
