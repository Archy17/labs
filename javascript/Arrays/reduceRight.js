/*

  Array.reduceRight( fn, valorInicial )

  - funciona como reduceRight(), mas começa da direita para esquerda
  - recebe uma função como primeiro argumento
  - essa função receberá 4 valores
    * primeiro valor do array ou 'valorInicial'
    * segundo (ou primeiro) valor do array
    * índice de array do segundo elemento passado
    * o próprio array
  - esse método serve para reduzir um array para um valor
  - efetua as operações determinadas pela função e retorna um valor final

*/

var numbers = [ 2, 40, 400 ];

function divide( x, y ) {
  return x / y;
}

console.log( numbers.reduceRight( divide ) );
