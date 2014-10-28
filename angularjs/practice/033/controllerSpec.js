describe( 'Controller: LuthierController', function() {

  beforeEach( module( 'app' ) );

  var ctrl;

  beforeEach( inject( function( $controller ){
    ctrl = $controller( 'LuthierController' );
  }));

  it( 'should have guitars available on load', function() {
    expect( ctrl.guitars ).toEqual( [
      { guitar : 'music man like', done : true },
      { guitar : 'caparison like', done : false }
    ]);
  });

  it( 'should have highlight guitars based on state', function() {
    var guitar = { guitar : 'music man like', done : true };

    var actualClass = ctrl.getDoneClass( guitar );
    expect( actualClass.finished ).toBeTruthy();
    expect( actualClass.unfinished ).toBeFalsy();

    guitar.done = false;
    var actualClass = ctrl.getDoneClass( guitar );
    expect( actualClass.finished ).toBeFalsy();
    expect( actualClass.unfinished ).toBeTruthy();
  });

});