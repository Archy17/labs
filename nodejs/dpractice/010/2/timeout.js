// create a constructor
/*
 * @constructor
 */
function Bomb() {
  this.message = 'Boom!';
}
// add a explode method to that function
Bomb.prototype.explode = function() {
  console.log( this.message );
};
// create a bomb instance
var bomb = new Bomb();
// call explode method with setTimeout using bind
var timeoutId = setTimeout( bomb.explode.bind( bomb ), 1000 );
// clear the previous call
clearTimeout( timeoutId );
