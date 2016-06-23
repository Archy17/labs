describe('MyController', function(){
  beforeEach(module('my-module'));

  describe('getFullName()', function(){
    it('should handle names correctly', inject(function($controller){
      var scope = {};
      var myController = $controller('MyController', {
        $scope: scope
      });

      myController.firstName = 'George';
      myController.lastName = 'Harrison';

      myController.getFullName().should.equal('George Harrison');

      scope.addSong('While My Guitar Gently Weeps');
      scope.songs.should.contain('While My Guitar Gently Weeps');
    }));
  });
});
