"use strict";angular.module("cfApp",[]).config(["$routeProvider",function(e){e.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/resources",{templateUrl:"views/resources.html",controller:"ResourcesCtrl"}).when("/resources/ec2",{templateUrl:"views/ec2.html",controller:"ResourcesEC2Ctrl"}).when("/resources/s3",{templateUrl:"views/s3.html",controller:"ResourcesS3Ctrl"}).otherwise({redirectTo:"/"})}]),angular.module("cfApp").controller("MainCtrl",["$scope","$rootScope","$location",function(e,r,o){r.cfObj={},r.cfObj.Description="",e.goToResources=function(){o.path("/resources").replace()}}]),angular.module("cfApp").controller("ResourcesCtrl",["$scope","$rootScope",function(e,r){e.Description=r.cfObj.Description}]),angular.module("cfApp").controller("ResourcesEC2Ctrl",["$scope",function(e){e.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("cfApp").controller("ResourcesS3Ctrl",["$scope",function(e){e.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]);