'use strict';

/**
 * @ngdoc function
 * @name procoreApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the procoreApp
 */
angular.module('procoreApp')
  .controller('MainCtrl', function ($scope) {
    $scope.columns = [{
    	name: 'Name'
    },{
    	name: 'Number'
    },{
    	name: 'Created By'
    },{
    	name: 'Address'
    },{
    	name: 'City'
    },{
    	name: 'State'
    },{
    	name: 'Zip'
    },{
    	name: 'Phone'
    },{
    	name: 'Program'
    },{
    	name: 'Status'
    },{
    	name: 'Stage'
    },{
    	name: 'Type'
    },{
    	name: 'Department'
    },{
    	name: 'Square Feet'
    },{
    	name: 'Store Number'
    },{
    	name: 'Notes'
    },{
    	name: 'Actual Start'
    },{
    	name: 'Estimated Start Date'
    },{
    	name: 'Estimated Completion Date'
    },{
    	name: 'Office Name'
    },{
    	name: 'Designated Market Area'
    },{
    	name: 'Architect'
    },{
    	name: 'Construction Manager'
    },{
    	name: 'Owner'
    },{
    	name: 'Project Engineer'
    },{
    	name: 'CM'
    },{
    	name: 'Project Manager'
    }];
  });
