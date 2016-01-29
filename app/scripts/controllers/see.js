'use strict';

/**
 * @ngdoc function
 * @name ccscFrisbeeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ccscFrisbeeApp
 */
angular.module('ccscFrisbeeApp')
  .controller('SeeCtrl', function ($scope, localStorageService, members) {
  	var self = this;
  	self.members = members.list;
  });
