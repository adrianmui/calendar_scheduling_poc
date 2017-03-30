import _ from 'underscore';

app.controller('NavigationCtrl', ['$scope', 'DeploymentService', 'FilterDateService', ($scope, DeploymentService, FilterDateService) => {
  console.log('NavigationCtrl');

  $scope.queriedDeployments = [];

  DeploymentService.$ajaxGetDeployments()
    .then((resp) => {
      $scope.queriedDeployments = DeploymentService.getDeployments();
      $scope.$apply();
    });

  //listener

  $scope.$on('date:changed', () => {
    console.log('Date in FilterDateService has been changed');
    $scope.$evalAsync(() => {
      $scope.queriedDeployments = _.filter(DeploymentService.getDeployments(), (obj) => {
        return obj.CreatedDate.includes(FilterDateService.getFilteredDate());
      });
    });
  })

}]);