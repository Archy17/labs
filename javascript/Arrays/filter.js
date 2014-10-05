/*

  Array.filter()

  1. Retorna um novo array contendo os elementos que retornaram
  true da função passada como argumento a filter
  2. Não modifica o array no qual foi chamado filter(), mas a
  função passada como argumento pode modificar
  3. Itera de forma crescente pelo array.
  4. Função passada a filter() recebe 3 parâmetros
    * Não é necessário usar todos
  5. Caso o valor retornado pela função seja truthy, ele será
  anexado ao novo array

*/

var stack = [ 'JS', 'NodeJS', 'ExpressJS', 'AngularJS', 'HTML', 'CSS' ];

function findJS( valor, indice, array ) {
  if ( valor.indexOf( 'JS' ) >= 0 ) return true;
}

console.log( stack.filter( findJS ) );
