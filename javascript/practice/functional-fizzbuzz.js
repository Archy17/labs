/* 
* Functional FizzBuzz
*
* multiple of 3       - fizz
* multiple of 5       - buzz
* multiple of 3 and 5 - fizzbuzz
*
*/
var totalNumbers = 100;
var numbersArray = new Array( totalNumbers + 1 ).join( 1 ).split( '' );

numbersArray
  .forEach( function( number, index, array ) {
  
    array[ index ] = index + parseInt( number );

});  

var result = numbersArray.map( fizzbuzz );
console.log( result );

///////////// Methods
function fizzbuzz( number ) {
  
  var text = number;
  
  if ( number % 3 === 0 && number % 5 === 0 ) {
    
    text = 'fizzbuzz';
    
  } else  if ( number % 3 === 0 ) {
    
    text = 'fizz';
    
  } else if ( number % 5 === 0 ) {
    
    text = 'buzz';
    
  }
  
  return text;
  
}
