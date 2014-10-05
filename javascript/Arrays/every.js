/*

  Array.every()

  - Testa se um predicado é verdadeiro para cada elemento
  - Recebe dois parâmetros 
    * o primeiro é a função que irá retornar
      um valor true or false.
    * o segundo é um valor opcional para this nas chamadas do predicado
  - Retorna um booleano
  - A função passada como predicado deve receber 3 parâmetros
    * valor, que será array[ i ]
    * índice
    * array

    ex: function nome( valor, index, array ) {}

*/

var mean = [ 'MongoDB', 'AngularJS', 'Express', 'NodeJS' ];

function beMean( value, index, array ) {
  if ( 
    value === 'MongoDB' || 
    value === 'AngularJS' ||
    value === 'Express' ||
    value === 'NodeJS'
  ) { return true; }
}

console.log( mean.every( beMean ) );

var mean2 = [ 'MongoDB', 'AngularJS', 'Express', 'NodeJS', 'JavaScript' ];

function beJS( value, index, array ) {
  return value === 'JavaScript';
}

console.log( mean2.every( beJS ) );
