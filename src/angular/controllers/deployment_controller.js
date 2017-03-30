'use strict';

let convertDate = (mmddyyyy) => {
    let dateParts = mmddyyyy.split('-');
    return dateParts[3] + "-" + dateParts[1] + "-" + dateParts[2];
}


app.controller('DeploymentCtrl',
    ['$scope', '$stateParams', 'DeploymentService', 'DeploymentInfoService', 'FilterDateService', ($scope, $stateParams, DeploymentService, DeploymentInfoService, FilterDateService) => {
        console.log('DeploymentCtrl');

        $scope.deployment = DeploymentService.findDeployment($stateParams.depId);

        $scope.date = convertDate(FilterDateService.getFilteredDate());
    }]);