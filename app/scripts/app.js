'use strict';

/**
 * @ngdoc overview
 * @name ccscFrisbeeApp
 * @description
 * # ccscFrisbeeApp
 *
 * Main module of the application.
 */
angular
  .module('ccscFrisbeeApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.sortable',
    'LocalStorageModule'
  ])
  .config(['localStorageServiceProvider', function(localStorageServiceProvider){
    localStorageServiceProvider.setPrefix('ls');
  }])
  .factory('members', function(){
    var allMembers = {}; 
    allMembers.list = [
      {
        name: 'Isaac Oh',
        gender: 'Male'
      },
      {
        name: 'James Kim',
        gender: 'Male'
      },
      {
        name: 'Wonjae Bong',
        gender: 'Male'
      },
      {
        name: 'Irene Kim',
        gender: 'Female'
      },
      {
        name: 'Noel Kim',
        gender: 'Female'
      }
    ];
    return allMembers;
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/chooseMembers', {
        templateUrl: 'views/chooseMembers.html',
        controller: 'ChooseCtrl',
        controllerAs: 'choose'
      })
      .when('/seeAllMembers', {
        templateUrl: 'views/seeAllMembers.html',
        controller: 'SeeCtrl', 
        controllerAs: 'see'
      })
      .when('/addNewMember', {
        templateUrl: 'views/addNewMember.html',
        controller: 'AddCtrl',
        controllerAs: 'add'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
