(function() {
  
  'use strict';

  angular
    .module( 'app' )
    .controller( 'SelectController', SelectController );

  SelectController.$inject = [];

  function SelectController() {

    var vm = this;

    ///////////// Properties

    vm.inputData = [
      { 
        name: "<strong>All Browsers</strong>",
        multiSelectGroup: true
      },
      { 
        name: "<strong>Modern Browsers</strong>",
        multiSelectGroup: true
      },
      { 
        name: "Opera",
        maker: "(Opera Software)",     
        ticked: true  
      },
      { 
        name: "Firefox",           
        maker: "(Mozilla Foundation)", 
        ticked: true  
      },
      { 
        name: "Safari",           
        maker: "(Apple)",              
        ticked: false 
      },
      { 
        name: "Chrome",            
        maker: "(Google)",             
        ticked: true  
      },
      {
        multiSelectGroup: false
      },
      { 
        name: "<strong>Classic Browsers</strong>",
        multiSelectGroup: true
      },
      { 
        name: "Internet Explorer", 
        maker: "(Microsoft)",          
        ticked: false 
      },
      { 
        name: "NetScape Navigator",            
        maker: "(NetScape Corporation)",             
        ticked: true  
      },
      {
          multiSelectGroup: false
      },
      {
          multiSelectGroup: false
      }
    ];

    vm.outputData = [];

    ///////////// Methods

    /////////////

  }

}());