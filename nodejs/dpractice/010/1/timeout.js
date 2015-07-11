/*
 * @constructor
 */
function Bomb() {
  this.message = 'Boom!';
}

Bomb.prototype.explode = function() {
  console.log( this.message );
};

var bomb = new Bomb();
// Identify the timeout to stop it later
// Bind the method to ensure that this will be called with the correct "this"
var timeoutId = setTimeout( bomb.explode.bind( bomb ), 1000 );
clearTimeout( timeoutId );
