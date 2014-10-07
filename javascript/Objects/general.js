/********** Sintaxe Literal **********/
var guitar = {
  brand: 'Music Man',
  model: 'Majesty',
  fullName: function() {
    return this.brand + ' ' + this.model;
  }
};

console.log( guitar.fullName() );

/********** Função Factory **********/

function factoryGuitar( brand, model, price ) {
  return {
    brand : brand,
    model : model,
    price : price,

    getNameAndPrice : function() {
      return this.brand + ' ' + this.model + ': $' + this.price;
    }
  }; 
}

var mm = factoryGuitar( 'Music Man', 'Majesty', 3000.00 );
var ib = factoryGuitar( 'Ibanez', 'JEM777', 4050.99 );

console.log( mm.getNameAndPrice() );
console.log( ib.getNameAndPrice() );

/********** Função Construtora **********/

var Guitar = function( brand, model, price ) {
  this.brand = brand;
  this.model = model;
  this.price = price;

  this.getNameAndPrice = function() {
    return this.brand + ' ' + this.model + ': $' + this.price;
  };

  this.comparePrice = function( otherGuitar ) {
    if ( otherGuitar instanceof Guitar ) {
      return 'The price difference between ' + this.brand + ' ' + this.model +
        ' and ' + otherGuitar.brand + ' ' + otherGuitar.model + ' is: $' +
        Math.abs( this.price - otherGuitar.price );
    } else {
      return "Sorry, we couldn't compare this";
    }
  };
};

var mm2 = new Guitar( 'Music Man', 'JPXIII 7 strings', 3100.00 );
var ib2 = new Guitar( 'Ibanez', 'JEM777 7 Strings', 5000.00 );


console.log( mm2 );
console.log( ib2 );

console.log( mm2.getNameAndPrice() );
console.log( ib2.getNameAndPrice() );

console.log( mm2.comparePrice( ib2 ) );
console.log( ib2.comparePrice( mm2 ) );

console.log( mm2.comparePrice( { brand: 'Jackson', model: 'Soloist', price: 1300.00 } ) );
