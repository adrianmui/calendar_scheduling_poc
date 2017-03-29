app.controller('DeploymentCtrl', ['$scope', 'DeploymentService', 'DeploymentInfoService', ($scope, DeploymentService, DeploymentInfoService) => {
    console.log('DeploymentCtrl');

    $scope.deployments = [];
    $scope.deployment;
    $scope.selected;

    // treat this as NgOnInit() in Angular 2
    DeploymentService.$ajaxGetDeployments()
        .then((resp) => {
            console.log('ajaxDeployments done');
            $scope.deployments = DeploymentService.getDeployments();
            $scope.$apply();
        });

    // selects and triggers ajax getDepInfo call
    $scope.selectDeployment = function ($event, trackId) {
        var $node = $($event.currentTarget);

        if (!$scope.selected) {
            $scope.selected = $node;
        } else {
            // if selected another $node
            $scope.selected.toggleClass('a123').toggleClass('b123').toggleClass('selected');
            $scope.selected = $node;
        }

        // if ($scope.deployment) {
        //     $scope.deployment = undefined;
        // }

        $scope.selected.toggleClass('a123').toggleClass('b123').toggleClass('selected');

        DeploymentInfoService.$ajaxGetDeploymentInfo(trackId)
            .then(function (resp) {
                $scope.deployment = DeploymentInfoService.getDeploymentInfo();
                $scope.$apply();
            }, function (err) {
                console.log(err.status, err.statusText);
            })
    }
}]);