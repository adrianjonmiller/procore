'use strict';

/**
 * @ngdoc function
 * @name procoreApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the procoreApp
 */
angular.module('procoreApp')
  .controller('TableCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
