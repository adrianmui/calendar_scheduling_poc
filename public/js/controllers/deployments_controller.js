// 'use strict';

// let app = require('./../app');

app.controller('DeploymentCtrl', ($scope, DeploymentService) => {
  console.log('DeploymentCtrl');

  $scope.deployments = [];
  $scope.selected;

  // treat this as NgOnInit() in Angular 2
  DeploymentService.ajaxDeployments()
    .then((resp) => {
      console.log('ajaxDeployments done');
      $scope.deployments = DeploymentService.getDeployments();
      $scope.$apply();
  });

  $scope.hello = () => {
    debugger;
  };

  $scope.selectDeployment = ($event) => {
    let $node = $($event.currentTarget);

    if (!$scope.selected) {
      $scope.selected = $node;
    }  else {
      // if selected another $node
      $scope.selected.toggleClass('a123').toggleClass('b123');
      $scope.selected = $node;
    }

    $scope.selected.toggleClass('a123').toggleClass('b123');
  }
});

