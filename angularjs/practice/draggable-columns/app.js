// Code goes here
var app = angular.module('app', ['as.sortable']);

app.controller('MainController', MainController);

function MainController($window, $timeout) {
  var vm = this;
  
  vm.title = 'Hey, Sr.';
  vm.headers = _makeTableHeader();
  vm.itemsList = [];

  for (i = 0; i <= 4; i += 1) {
    vm.itemsList.push({
      'id': i,
      'label': 'Item ' + i,
      'status': 'Active',
      'price': (i + 1) * 1000
    });
  }

  vm.sortableOptions = {
    containment: '#horizontal-container',
    //restrict move across columns. move only within column.
    accept: function(sourceItemHandleScope, destSortableScope) {
      return sourceItemHandleScope.itemScope.sortableScope.$id === destSortableScope.$id;
    }
  };
  
  vm.updateHeader = function(headers) {
    $timeout(function() {
      $window.localStorage.setItem('tableHeader', JSON.stringify(headers));
    });
  };
  
  vm.printStorage = function() {
    console.log($window.localStorage.getItem('tableHeader'));
  };
  
  function _showHeader(value) {
    return value;
  }
  
  function _makeTableHeader() {
    var deafaultHeader = [
      {
        'name': 'ID',
        'prop': 'id',
        'display': _showHeader(true)
      },
      {
        'name': 'LABEL',
        'prop': 'label',
        'display': _showHeader(true)
      },
      {
        'name': 'STATUS',
        'prop': 'status',
        'display': _showHeader(true)
      },
      {
        'name': 'HIDDEN',
        'prop': 'hidden',
        'display': _showHeader(false)
      }
    ];
    
    var header = $window.localStorage.getItem('tableHeader') ? 
      JSON.parse($window.localStorage.getItem('tableHeader')) : 
      deafaultHeader;
    
    return header;
  }
}
