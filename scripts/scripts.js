"use strict";angular.module("jsformationApp",[]).config(["$routeProvider",function(e){e.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/resources",{templateUrl:"views/reslist.html",controller:"ResourcesCtrl"}).when("/resources/ec2",{templateUrl:"views/ec2.html",controller:"EC2Ctrl"}).when("/resources/s3",{templateUrl:"views/s3.html",controller:"S3Ctrl"}).otherwise({redirectTo:"/"})}]),angular.module("jsformationApp").controller("MainCtrl",["$scope","$rootScope","$location",function(e,r,o){r.cfObj={},r.cfObj.AWSTemplateFormatVersion="2010-09-09",r.cfObj.Description="",r.cfObj.Parameters={},r.cfObj.Mappings={},r.cfObj.Resources={},r.cfObj.Outputs={},r.jsonOut=null,e.printJSON=function(){e.jsonOut=JSON.stringify(r.cfObj)},e.resources=function(){o.path("/resources").replace()}}]),angular.module("jsformationApp").controller("ResourcesCtrl",["$scope","$rootScope","$location",function(e,r,o){e.var=1,r.var=1,o.var=1}]);