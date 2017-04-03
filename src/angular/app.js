const angular = require('angular');
const $ = require('jquery');

console.log('app.js Angular starting');

var app = angular.module('app', [require('angular-ui-router')]);

app.config(['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('default', {
        url: '',
        views: {
            'navigation@': {
                templateUrl: './partials/navigation-view.html',
                controller: 'NavigationCtrl'
            },
            'main@': {
                templateUrl: './partials/calendar-view.html',
                controller: 'CalendarCtrl'
            }
        }
    }).state('default.deployment', {
        url: '/deployment/:depId',
        views: {
            'main@': {
                templateUrl: './partials/deployment-edit.html',
                controller: 'DeploymentCtrl'
            }
        }
    }).state('default.deployment.summary', {
        url: '/summary',
        views: {
            'wizard@default.deployment': {
                templateUrl: './partials/deployment/summary-view.html'
            }
        }
    }).state('default.deployment.audience', {
        url: '/audience',
        views: {
            'wizard@default.deployment': {
                templateUrl: './partials/deployment/audience-view.html'
            }
        }
    }).state('default.deployment.content', {
        url: '/content',
        views: {
            'wizard@default.deployment': {
                templateUrl: './partials/deployment/content-view.html'
            }
        }
    }).state('default.deployment.other', {
        url: '/other',
        views: {
            'wizard@default.deployment': {
                templateUrl: './partials/deployment/other-view.html'
            }
        }
    })
}]);

app.run(($rootScope) => {
    $rootScope.$on('$stateChangeError', console.log.bind(console));
});