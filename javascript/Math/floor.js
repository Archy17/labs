// Math.floor() : Arredonda um número para baixo 

console.log( '13.01 => ' + Math.floor(13.01) );
console.log( '31.99 => ' + Math.floor(31.99) );
console.log( '"0" => ' + Math.floor('0') );
console.log( '"NaN" => ' + Math.floor('NaN') );
console.log( 'NaN => ' + Math.floor(NaN) );
console.log( '"456.21" => ' + Math.floor('456.21') );
console.log( '"13.84" => ' + Math.floor('13.84') );
console.log( '-31.13 => ' + Math.floor(-31.13) );
console.log( '31 => ' + Math.floor(31) );

// Dica: Math.floor() faz coerção de tipo
// Dica: Número negativo vai ficar *menor*, afastando-se do 0!!!
