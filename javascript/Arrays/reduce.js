/*

  Array.reduce( fn, valorInicial )

  - recebe uma função como primeiro argumento
  - essa função receberá 4 valores
    * primeiro valor do array ou 'valorInicial'
    * segundo (ou primeiro) valor do array
    * índice de array do segundo elemento passado
    * o próprio array
  - esse método serve para reduzir um array para um valor
  - efetua as operações determinadas pela função e retorna um valor final

*/

var numbers = [ 1, 2, 3, 4, 5 ];

function fatorial( x, y ) {
  if ( x <= 0 || y <= 0 ) return 'Impossible to calculate this fatorial';
  
  return x * y;
}

console.log( numbers.reduce( fatorial ) );

// este exemplo é apenas didático, deve ser feito mais verificações para
// de fato ser válido para todos os casos
