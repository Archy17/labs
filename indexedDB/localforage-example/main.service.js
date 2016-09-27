(function() {

  'use strict';

  angular
    .module('storage')
    .service('MainService', MainService);

  MainService.$inject = [
    '$http',
    '$log',
    '$rootScope',
    'EVENTS'
  ];

  function MainService($http, $log, $rootScope, EVENTS) {
    var self = this;

    ///////////// Public Properties
    self.data = [];

    ///////////// Private Properties

    ///////////// Public Methods
    self.getData = getData;

    ///////////// Private Methods

    ///////////// Events

    ///////////// Bootstrap

    ///////////// Function Declarations
    function getData() {
      var item = localforage.getItem('jsStack');

      item.then(function(value) {
        if (!value) {

          $http
            .get('data.json')
            .then(function(response) {
              self.data = response.data;

              localforage
                .setItem('jsStack', self.data)
                .then(function(newValue) {
                  $rootScope.$emit(EVENTS.DB_READY);
                })
                .catch(function(err) {
                  $log.error(err);
                });
            })
            .catch(function(error) {
              $log.log(JSON.stringify(error, null, 2));
            });
        } else {
          self.data = value;
          $rootScope.$emit(EVENTS.DB_READY);
        }
      });

    }
  }
})();
