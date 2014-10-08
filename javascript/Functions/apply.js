/* 

  Function.apply( obj, [args,...] )
  
  - Chama uma função como se fosse um método de 'obj'
  - Passa os '[args]' para a função
  - Dentro da função, this se refere a 'obj'
  - O argumento [args] deve ser um array ou *arguments*

*/

var numbers = [ 5, 7, 2, 48, 21, 31, 130, 260, 4, 0 ];

// Achando o maior valor do array
var maxNum = Math.max.apply( null, numbers );
var minNum = Math.min.apply( null, numbers );

console.log( 'Dado o array ' + numbers + '\nO menor valor é ' +
  minNum + ' e o maior valor é ' + maxNum );

// Usando apply em objetos
var guitar = {
  brand: 'Music Man',
  model: 'JP6',
  show: function( owner, price ) {
    return this.brand + ' ' + this.model + 
      '\nOwner: ' + owner + ' Price: $' + price;
  }
};

console.log( guitar.show( 'J. Petrucci', 3100.00 ) );

var guitar2 = {
  brand: 'Ibanez',
  model: 'JPM 100'
};

console.log( guitar.show.apply( guitar2, [ 'John Petrucci', 2300.99 ] ) );
