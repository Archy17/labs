// Encode data for Basic Authorization = name:password in base64 encoding
var name = 'Eric';
var pass = '1234';
var auth = new Buffer( name + ':' + pass ).toString( 'base64' );

console.log( auth );
// RXJpYzoxMjM0
