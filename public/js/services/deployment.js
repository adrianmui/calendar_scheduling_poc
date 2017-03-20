// 'use strict';

// const request = require('request');
// let app = require('./../app');

app.factory('DeploymentService', () => {
    console.log('DeploymentService');

    let _deployments = [];
    
    stub = {};

    stub.getDeployments = () => {
        console.log('getDeployments', _deployments);
        return _deployments;
    };

    stub.ajaxDeployments = () => {
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
