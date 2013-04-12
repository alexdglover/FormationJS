"use strict";angular.module("cfApp",[]).config(["$routeProvider",function(e){e.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/resources",{templateUrl:"views/resources.html",controller:"ResourcesCtrl"}).when("/ec2",{templateUrl:"views/ec2.html",controller:"ResourcesEC2Ctrl"}).when("/s3",{templateUrl:"views/s3.html",controller:"ResourcesS3Ctrl"}).when("/dynamo",{templateUrl:"views/dynamo.html",controller:"ResourcesDynamoCtrl"}).when("/sqs",{templateUrl:"views/sqs.html",controller:"ResourcesSQSCtrl"}).when("/output",{templateUrl:"views/output.html",controller:"OutputCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("cfApp").controller("MainCtrl",["$scope","$rootScope","$location",function(e,o,t){o.cfObj={},o.cfObj.AWSTemplateFormatVersion="2010-09-09",o.cfObj.Description="",o.cfObj.Resources={},o.ec2=0,o.s3=0,o.dynamo=0,o.sqs=0,e.goToResources=function(){t.path("/resources")}}]),angular.module("cfApp").controller("ResourcesCtrl",["$scope","$rootScope","$location",function(e,o,t){e.addEC2Resource=function(){t.path("/ec2")},e.addS3Resource=function(){t.path("/s3")},e.addDynamoDBResource=function(){t.path("/dynamo")},e.addSQSResource=function(){t.path("/sqs")},e.goToOutput=function(){t.path("/output")},e.hasMinimumRequirements=function(){return o.s3>0||o.ec2>0||o.dynamo>0||o.sqs>0}}]),angular.module("cfApp").controller("ResourcesEC2Ctrl",["$scope","$rootScope","$location",function(e,o,t){e.EC2Resource={Type:"AWS::EC2::Instance"},e.EC2Resource.Properties={},e.typeList=["t1.micro","m1.small","m1.medium","m1.large","m1.xlarge","c1.xlarge","c1.medium","m2.xlarge"],e.zones=["us-east-1a","us-east-1b","us-east-1c","us-east-1d","us-west-2a","us-west-2b","us-west-2c","us-west-1a","us-west-1c"],e.disableTerminationValues=[{key:"yes",value:"true"},{key:"no",value:"false"}],e.instanceName="",e.AvailabilityZone="",e.InstanceType="",e.ImageId="",e.DisableApiTermination="",e.KeyName="",e.addEC2Resource=function(){var a={};a.AvailabilityZone=e.AvailabilityZone,a.InstanceType=e.InstanceType,a.DisableApiTermination=e.DisableApiTermination||"true",a.ImageId=e.ImageId,e.KeyName&&(a.KeyName=e.KeyName),e.EC2Resource.Properties=a,o.cfObj.Resources[""+e.instanceName]=e.EC2Resource,o.ec2+=1,t.path("/resources")},e.cancel=function(){t.path("/resources")}}]),angular.module("cfApp").controller("ResourcesS3Ctrl",["$scope","$rootScope","$location",function(e,o,t){e.S3Resouce={Type:"AWS::S3::Bucket"},e.acList=["Private","PublicRead","PublicReadWrite","AuthenticatedRead","BucketOwnerRead","BucketOwnerFullControl"],e.bucketName="",e.accessControl="",e.indexDocument="",e.errorDocument="",e.addS3Resource=function(){var a={},r=e.accessControl||"Private";a.AccessControl=r,(e.indexDocument||e.errorDocument)&&(a.WebsiteConfiguration={},a.WebsiteConfiguration.IndexDocument=e.indexDocument,a.WebsiteConfiguration.errorDocument=e.errorDocument),e.S3Resouce.Properties=a,o.s3+=1,o.cfObj.Resources[""+e.bucketName]=e.S3Resouce,t.path("/resources")},e.cancel=function(){t.path("/resources")}}]),angular.module("cfApp").controller("OutputCtrl",["$scope","$rootScope","$location",function(e,o,t){e.output=angular.toJson(o.cfObj,!0),e.addMore=function(){t.path("/resources")},e.reset=function(){o.cfObj={},t.path("/")}}]),angular.module("cfApp").controller("ResourcesDynamoCtrl",["$scope","$rootScope","$location",function(e,o,t){e.DynamoDBResource={Type:"AWS::DynamoDB::Table"},e.validTypes=["S","N"],e.Properties={},e.tableName="",e.KeySchema={},e.KSHashKeyName="",e.KSHashKeyType="",e.KSHashRangeName="",e.KSHashRangeType="",e.ReadCapacityUnits="",e.WriteCapacityUnits="",e.addDynamoDBResource=function(){var a={};a.KeySchema={},a.KeySchema.HashKeyElement={},a.KeySchema.HashKeyElement.AttributeName=e.KSHashKeyName,a.KeySchema.HashKeyElement.AttributeType=e.KSHashKeyType,""!==e.KSHashRangeName&&""!==e.KSHashRangeType&&(a.KeySchema.RangeKeyElement={},a.KeySchema.RangeKeyElement.AttributeName=e.KSHashRangeName,a.KeySchema.RangeKeyElement.AttributeType=e.KSHashRangeType),a.ProvisionedThroughput={},a.ProvisionedThroughput.ReadCapacityUnits=e.ReadCapacityUnits,a.ProvisionedThroughput.WriteCapacityUnits=e.WriteCapacityUnits,e.DynamoDBResource.Properties=a,o.cfObj.Resources[""+e.tableName]=e.DynamoDBResource,o.dynamo+=1,t.path("/resources")},e.cancel=function(){t.path("/resources")}}]),angular.module("cfApp").controller("ResourcesSQSCtrl",["$scope","$rootScope","$location",function(e,o,t){e.SQSResouce={Type:"AWS::SQS::Queue"},e.queName="",e.visibilityTimeout="",e.addSQSResource=function(){var a={};a.VisibilityTimeout=parseInt(e.visibilityTimeout,10),e.SQSResouce.Properties=a,o.sqs+=1,o.cfObj.Resources[""+e.queName]=e.SQSResouce,t.path("/resources")},e.cancel=function(){t.path("/resources")}}]);