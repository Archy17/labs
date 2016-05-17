(function() {
	'use strict';

	var app = angular.module('app', ['ngMap']);

	app.controller('MarkerAnimationCtrl', function() {
		var vm = this;
		vm.toggleBounce = function() {
			if (this.getAnimation() != null) {
				this.setAnimation(null);
			} else {
				this.setAnimation(google.maps.Animation.BOUNCE);
			}
		}
	});
})();