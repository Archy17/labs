/*

  Array.sort( fn-opcional )

  - Ordena os elementos do array de acordo com algum critério
  - caso seja passada uma função auxiliar na ordenação,
  ela deve retornar 3 tipos valores:
    * valor menor do que zero caso a seja menor do que b
    * valor 0 caso a e b sejam iguais
    * valor maior que 0 caso a seja maior que b
    ps: a questão de maior ou menor depende do critério avaliado
  - caso não seja passada a função, ela os elementos vão ser
  convertidos em strings e ordenados de acordo com a codificaçao de caracteres
  (ordem alfabética)

*/

var numbers = [ 2, 4, 1, 9, 5, 50, 130, 47 ];
var words = [ 'oi', 'a', 'olá', 'como vai?!', 'bem-vindo', 'Volte sempre!' ];

var compareSize = function( a, b ) {
  if ( typeof a === 'number' && typeof b === 'number' ) return a - b;

  return a.length - b.length;
};


console.log( numbers );
console.log( words );

numbers.sort();
words.sort();

console.log( numbers );
console.log( words );

var numbers = [ 2, 4, 1, 9, 5, 50, 130, 47 ];
var words = [ 'oi', 'a', 'olá', 'como vai?!', 'bem-vindo', 'Volte sempre!' ];

numbers.sort( compareSize );
words.sort( compareSize );

console.log( numbers );
console.log( words );
