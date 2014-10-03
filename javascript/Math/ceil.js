// Math.ceil() : Arredonda um número para cima

console.log( '13.01 => ' + Math.ceil(13.01) );
console.log( '31.99 => ' + Math.ceil(31.99) );
console.log( '"0" => ' + Math.ceil('0') );
console.log( '"NaN" => ' + Math.ceil('NaN') );
console.log( 'NaN => ' + Math.ceil(NaN) );
console.log( '"456.21" => ' + Math.ceil('456.21') );
console.log( '"13.84" => ' + Math.ceil('13.84') );
console.log( '-31.13 => ' + Math.ceil(-31.13) );

// Dica: Math.ceil() faz coerção de tipo
// Dica: Em relação aos números negativos, a função arredonda para cima 
// em direção ao 0 !!!
