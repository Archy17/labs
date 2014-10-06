/*

  Array.forEach()

  - Chama uma função para cada elemento do array
  - Não retorna nada
  - Detalhes válidos para forEach(), map(), filter(), every() e some()
    * espera dois argumentos: uma função e um segundo argumento "x"
    * caso tenha o segundo, a função será chamada como método de "x"
    * se não for passado um segundo valor, a função será chamada como tal
    * no modo restrito this é igual a null, no modo normal this se refere
    ao objeto global
    * os métodos observam o array antes de iniciar o laço
    * a função não é chamada para elementos criados depois do início
    * para valores alterados pela função, a mesma considera o valor atual
    * para arrays esparsos, somente os índices com valor real são iterados

*/

var prices = [ 130.99, 1598.74, 4567.12, 4565.00 ];

function updatePrices( value, index, array ) {
  var tax = 1.13;

  array[ index ] = value * tax;
}

prices.forEach( updatePrices );

console.log( prices );
