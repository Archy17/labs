(function(){
  'use strict';

  angular
    .module( 'app', [] )
    .controller( 'ComboController', ComboController );

  function ComboController() {
    var vm = this;
    vm.marvel = [
      { hero : 'thor', id : 1 },
      { hero : 'iron man', id : 2  },
      { hero : 'hulk', id : 3  },
      { hero : 'magneto', id : 4 }
    ];
    vm.selectedHeroId = 4;
    vm.selectedHero = vm.marvel[ 1 ];
  }
}());