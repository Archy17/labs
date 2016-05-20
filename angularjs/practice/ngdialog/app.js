(function() {
  'use strict';

  var app = angular.module('app', ['ngDialog']);

  app.controller('mainController', mainController);

  function mainController(ngDialog) {
    var vm = this;

    vm.title = 'NG Dialog';

    vm.openModal = openModal;

    function openModal() {
      ngDialog.open({
        template: 'modal.html',
        className: 'ngdialog-theme-default'
      });
    }
  }
})();
