// 'use strict';

// let app = require('./../app');

app.controller('DeploymentCtrl', ($scope, DeploymentService) => {
  console.log('DeploymentCtrl');

  $scope.deployments = [];

  // treat this as NgOnInit() in Angular 2
  DeploymentService.ajaxDeployments()
    .then((resp) => {
      console.log('ajaxDeployments done');
      $scope.deployments = DeploymentService.getDeployments();
      $scope.$apply();
  });

  $scope.hello = ()=> {
    debugger;
  }
});

