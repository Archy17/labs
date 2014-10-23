(function() {
  'use strict';

  function limitChar() {

    return function( data, limit ) {
      data = data ? data : '';
      limit = limit ? limit : 13;

      dataSize = data.length;

      if ( dataSize <= limit ) {
        return data;
      } else {
        return data.substr( 0, limit ) + '...';
      }
    };

  }

  function limitScore() {

    function checkScore( obj, limit ) {
      if ( obj.score < limit ) {
        return false;
      } else {
        result.push( obj );
        return true;
      }
    }

    return function( data, limit ) {
      limit = limit ? limit : 2000;
      var result = [];

      data.filter( checkScore );

      return result;

    };

  }

  angular.module( 'FilterApp', [] )
    .filter( 'limitChar', limitChar )
    .filter( 'limitScore', limitScore );
})();