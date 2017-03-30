'use strict';

import _ from 'underscore';

app.factory('DeploymentService', () => {
    console.log('DeploymentService');

    let _deployments = [];

    let stub = {};

    stub.getDeployments = () => {
        console.log('getDeployments', _deployments);
        return _deployments;
    };

    stub.findDeployment = (deployId) => {
        return _.find(_deployments, (deployment) => {
            return (deployment.TrackId == deployId);
        });
    }

    stub.$ajaxGetDeployments = () => {
        return $.get("/api/deployments")
            .done((response) => {
                _deployments = response.Deployments;
                _deployments.forEach((deployment) => {
                    console.log(deployment);
                });
            });
    };

    return stub;
});
