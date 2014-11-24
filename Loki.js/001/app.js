(function() {
  
  'use strict';

  angular
    .module( 'lokiApp', [] )
    .factory( 'dataService', dataService );

  function dataService() {

    var allData = data;

    var service = {
      data : allData,
      getData : getData
    };

    return service;

    /////////////
    function getData() {
      return allData;
    }

  }

}());