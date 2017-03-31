'use strict';

let convertDate = (yyyymmdd) => {
    console.log('convertDate: ' + yyyymmdd);
    let dateParts = yyyymmdd.split('-');
    return dateParts[0] + "-" + dateParts[1] + "-" + dateParts[2];
};

app.controller('DeploymentCtrl',
    ['$scope', '$state', '$stateParams', 'DeploymentService', 'DeploymentInfoService', 'FilterDateService', ($scope, $state, $stateParams, DeploymentService, DeploymentInfoService, FilterDateService) => {
        console.log('DeploymentCtrl');

        $scope.deployment = DeploymentService.findDeployment($stateParams.depId);

        $scope.date = convertDate(FilterDateService.getFilteredDate());

        $state.go('default.deployment.summary');

        $scope.goTo = (subRouteName) => {
            $state.go('default.deployment.' + subRouteName);
        };
    }]);