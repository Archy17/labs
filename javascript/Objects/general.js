// Sintaxe Literal
var guitar = {
  brand: 'Music Man',
  model: 'Majesty',
  fullName: function() {
    return this.brand + ' ' + this.model;
  }
};

console.log( guitar.fullName() );

// Função Factory

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
