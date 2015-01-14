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
      { name: "Opera",             maker: "(Opera Software)",     ticked: true  },
      { name: "Internet Explorer", maker: "(Microsoft)",          ticked: false },
      { name: "Firefox",           maker: "(Mozilla Foundation)", ticked: true  },
      { name: "Safari",            maker: "(Apple)",              ticked: false },
      { name: "Chrome",            maker: "(Google)",             ticked: true  }
    ];

    vm.outputData = [];

    ///////////// Methods

    /////////////

  }

}());