/**
 * Created by icastilho on 15/03/15.
 */

(function() {
  'use strict';

var sociallogin = angular.module('sociallogin', ['ngRoute', 'controller.home', 'controller.auth']);

sociallogin.config(['$routeProvider',


    function($routeProvider) {

    $routeProvider.
      when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      }).
      when('/login', {
        templateUrl: 'views/auth/login.html',
        controller: 'AuthCtrl'
      }).
      when('/register', {
        templateUrl: 'views/auth/register.html',
        controller: 'AuthCtrl'
      }).
      otherwise({
        redirectTo: '/home'
      });



  }])

  .run(['$rootScope', function($rootScope) {

    $rootScope.app = {
      setTitle: function(title) {
        this.title = title;
      }
    }

    $rootScope.app.setTitle('Sails UserApp Social Login');
  }]);

})();
