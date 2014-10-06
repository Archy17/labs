/*

  Array.length

  - Mede o tamanho do array
  - Essa propriedade pode sera alterada:
    * caso seja setado um valor menor, os elementos do fim serão excluídos
    * caso seja setado um valor maior, os elementos do fim serão adicionados
    com valor undefined

*/

var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
console.log( 'Length: ' + numbers.length + ' | Array: ' + numbers );

numbers.length = 7;
console.log( 'Length: ' + numbers.length + ' | Array: ' + numbers );

numbers.length = 13;
console.log( 'Length: ' + numbers.length + ' | Array: ' + numbers );
