/*

  Array.toString()

  - Retorna uma string com todos os elementos do array separados por vírgulas
  - Primeiro converte cada elemento, e depois os retorna
  - Funciona como o método .join() quando usado sem parâmetros

*/

var someArray = [ 
  'text', 13, 
  { author: 'Eric' }, 
  function hi() { console.log( hi ); } 
];

console.log( someArray.toString() );
