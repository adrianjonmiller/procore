"use strict";angular.module("procoreApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","ui.select2","datatables"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/table",{templateUrl:"views/table.html",controller:"TableCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("procoreApp").controller("MainCtrl",["$scope",function(a){a.columns=[{name:"Name"},{name:"Number"},{name:"Created By"},{name:"Address"},{name:"City"},{name:"State"},{name:"Zip"},{name:"Phone"},{name:"Program"},{name:"Status"},{name:"Stage"},{name:"Type"},{name:"Department"},{name:"Square Feet"},{name:"Store Number"},{name:"Notes"},{name:"Actual Start"},{name:"Estimated Start Date"},{name:"Estimated Completion Date"},{name:"Office Name"},{name:"Designated Market Area"},{name:"Architect"},{name:"Construction Manager"},{name:"Owner"},{name:"Project Engineer"},{name:"CM"},{name:"Project Manager"}]}]),angular.module("procoreApp").controller("TableCtrl",["$scope",function(a){a.columns=[{name:"Name"},{name:"Number"},{name:"Created By"},{name:"Address"},{name:"City"},{name:"State"},{name:"Zip"},{name:"Phone"},{name:"Program"},{name:"Status"},{name:"Stage"},{name:"Type"},{name:"Department"},{name:"Square Feet"},{name:"Store Number"},{name:"Notes"},{name:"Actual Start"},{name:"Estimated Start Date"},{name:"Estimated Completion Date"},{name:"Office Name"},{name:"Designated Market Area"},{name:"Architect"},{name:"Construction Manager"},{name:"Owner"},{name:"Project Engineer"},{name:"CM"},{name:"Project Manager"}]}]);