var express = require( 'express' );
var app = express();

app.use( express.static( __dirname + '/' ) );

app.get( '/bands/:id', function( req, res ) {
  var bandId = parseInt( req.params.id );
  var data = {};
  var len = bands.length;

  for ( var i = 0; i < len; i += 1 ) {
    if ( bands[ i ].id === bandId ) {
      data = bands[ i ];
      break;
    }
  }
  res.json( data );
});

app.get( '/bands', function( req, res ) {
  res.json( bands );
});

app.listen( 3000 );
console.log( 'Running at port 3000' );

var bands = [ 
  { 
    id: 1, 
    name: 'Dream Theater', 
    origin: 1989, 
    albums: 13, 
    genre: 'Progressive Metal', 
    stdio: [
      { album: 'one', year: 1989, price: 13.13 },
      { album: 'two', year: 1990, price: 13.13 },
      { album: 'three', year: 1992, price: 13.13 },
      { album: 'four', year: 1994, price: 13.13 },
      { album: 'five', year: 1995, price: 13.13 },
      { album: 'six', year: 1996, price: 13.13 },
      { album: 'seven', year: 1997, price: 13.13 },
      { album: 'eight', year: 1999, price: 13.13 },
      { album: 'nine', year: 2013, price: 13.13}
    ]
  },
  { 
    id: 2, 
    name: 'Symphony X', 
    origin: 1993, 
    albums: 9, 
    genre: 'Progressive Metal', 
    stdio: [
      { album: 'one', year: 1989, price: 13.13 },
      { album: 'two', year: 1990, price: 13.13 },
      { album: 'three', year: 1992, price: 13.13 },
      { album: 'four', year: 1994, price: 13.13 },
      { album: 'five', year: 1995, price: 13.13 },
      { album: 'six', year: 1996, price: 13.13 },
      { album: 'seven', year: 1997, price: 13.13 },
      { album: 'eight', year: 1999, price: 13.13 },
      { album: 'nine', year: 2013, price: 13.13}
    ]
  },
  { 
    id: 3, 
    name: 'Karmakanic', 
    origin: 1999, 
    albums: 3, 
    genre: 'Progressive Fusion', 
    stdio: [
      { album: 'one', year: 1989, price: 13.13 },
      { album: 'two', year: 1990, price: 13.13 },
      { album: 'three', year: 1992, price: 13.13 },
      { album: 'four', year: 1994, price: 13.13 },
      { album: 'five', year: 1995, price: 13.13 },
      { album: 'six', year: 1996, price: 13.13 },
      { album: 'seven', year: 1997, price: 13.13 },
      { album: 'eight', year: 1999, price: 13.13 },
      { album: 'nine', year: 2013, price: 13.13}
    ]
  },
  { 
    id: 4, 
    name: 'Circus Maximus', 
    origin: 2000, 
    albums: 4, 
    genre: 'Progressive Metal', 
    stdio: [
      { album: 'one', year: 1989, price: 13.13 },
      { album: 'two', year: 1990, price: 13.13 },
      { album: 'three', year: 1992, price: 13.13 },
      { album: 'four', year: 1994, price: 13.13 },
      { album: 'five', year: 1995, price: 13.13 },
      { album: 'six', year: 1996, price: 13.13 },
      { album: 'seven', year: 1997, price: 13.13 },
      { album: 'eight', year: 1999, price: 13.13 },
      { album: 'nine', year: 2013, price: 13.13}
    ]
  }
];
