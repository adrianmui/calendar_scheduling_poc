// 'use strict';

// const request = require('request');
// let app = require('./../app');

app.factory('DeploymentInfoService', () => {
    console.log('DeploymentInfoService');
    
    let _deployment = {};
    
    stub = {};

    stub.getDeploymentInfo = () => {
        return _deployment;
    }


    stub.$ajaxGetDeploymentInfo = (depId) => {
        console.log('ajaxGetDeploymentInfo');
        return $.get('/api/deployment/' + depId, { depId: depId})
          .done((response) => {
            _deployment = response;
          }); 
    };

    return stub;
});
