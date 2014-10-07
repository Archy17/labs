/*

  Array.splice( inicio, numeroElementosExcluidos, valorAdicional )

  - Exclui 0 ou mais elementos do array, começando por 'inicio' (inclusive)
  e terminando em 'numeroElementosExcluidos'.
  - Se a segunda variável for zero, não exclui nenhum, apenas adiciona
  - Este método modifica o array em questão
  - Retorna os elementos excluídos

*/

var guitars = [ 'Jackson', 'Cort' ];

guitars.splice( 1, 0, [ 'Ibanez' ] );
console.log( guitars );

guitars.splice( 1, 1, 'Music Man' );
console.log( guitars );

guitars.splice( 3, 0, 'Ibanez' );
console.log( guitars );

guitars.splice( 0, 3, 'Mayones' );
console.log( guitars );
