app.factory('DeploymentInfoService', () => {
    console.log('DeploymentInfoService');

    let _deployment = {};

    let stub = {};

    stub.getDeploymentInfo = () => {
        return _deployment;
    }


    stub.$ajaxGetDeploymentInfo = (depId) => {
        console.log('ajaxGetDeploymentInfo');
        return $.get('/api/deployment/' + depId, { depId: depId })
            .done((response) => {
                _deployment = response;
            });
    };

    return stub;
});
