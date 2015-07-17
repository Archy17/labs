var property = require( './module-export' ); // will export an empty object
var prop     = require( './export' ); // correct way to export a property - using exports.nameOfTheProperty

console.log( property );
console.log( prop.other );
