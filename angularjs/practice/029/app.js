(function() {
  'use strict';

  angular
    .module( 'app', [] )
    .controller( 'ConstantController', ConstantController )
    .constant( 'Title', { h1 : "AngularJS Constants and Values" } )
    .value( 'Paragraph', Paragraph() );

  // CONTROLLERS
  ConstantController.$inject = [ 'Title', 'Paragraph' ];

  function ConstantController( Title, Paragraph ) {
    var vm = this;
    vm.title = Title;
    vm.paragraph = Paragraph;
  }

  // VALUES
  function Paragraph() {
    return 'Lorem ipsum dolor sit amet, consectetur adipisicing elit!';
  }

}());