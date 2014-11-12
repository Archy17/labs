// O controlador é uma função regular JavaScript. Ela é chamada
// uma vez quando o AngularJS roda dentro da declaração ng-controller

(function() {
  'use strict';

  angular
    .module( 'app', [] )
    .controller( 'InlineEditorController', InlineEditorController );

  function InlineEditorController () {

  // vm é um objeto especial que faz
  // estas propriedades disponíveis para o View
  // como variáveis. Aqui nós definimos alguns valores padrão:
  var vm = this;

  vm.showtooltip = false;
  vm.value = 'Click aqui para editar!';

  // Algumas funções auxiliares que estarão
  // disponíveis nas declarações angular

  vm.hideTooltip = function () {

    // Quando um model é alterado, o View vai ser automaticamente
    // atualizado pelo AngularJS. Neste caso irá esconder o tooltip

    vm.showtooltip = false;
  }

  vm.toggleTooltip = function (e) {
    e.stopPropagation ();
    vm.showtooltip = !vm.showtooltip;
  }

  vm.values = [
    {data:1},
    {data:2},
    {data:3},
    {data:4},
    {data:5},
    {data:6},
    {data:7}
  ];
}
}());

