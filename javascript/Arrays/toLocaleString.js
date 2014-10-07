/*

  Array.toLocaleString()

  - Converte um array em uma string com os caracteres representados
  de forma localizada
  - Os elementos são separados especificamente de acordo com a localidade

*/

var number = 1330;
var date = new Date();
var array = [ number, date, 'algum texto aqui' ];

var result = array.toLocaleString();

console.log( array );
console.log( result );
