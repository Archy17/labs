// Math.random() : retorna um número pseudoaleatório,
// maior ou igual a 0 e menor que 1

console.log( Math.random() );
console.log( Math.random() );
console.log( Math.random() );
console.log( Math.random() );

// Sorteando um número entre 0 e 10

function randomInt( min, max ) {
  return Math.floor( Math.random() * ( max - min ) ) + min;
}

console.log( 'Random 1-3 => ' + randomInt( 1, 3 ) );
console.log( 'Random 3-10 => ' + randomInt( 3, 10 ) );
console.log( 'Random 10, 21 => ' + randomInt( 10, 21 ) );
