const angular = require('angular');
const $ = require('jquery');

var app = angular.module('app', [require('angular-ui-router')]);

app.config(['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise("/");

    $stateProvider.state('default', {
        url: '',
        views: {
            "navigation@": {
                templateUrl: "./partials/navigation-view.html",
                controller: "NavigationCtrl"
            },
            "calendar@": {
                templateUrl: "./partials/calendar-view.html",
                controller: "CalendarCtrl"
            }
        }
    }).state('default.deployment', {
        url: '/deployment/:depId',
        views: {
            "calendar@default": {
                templateUrl: "./partials/deployment-edit.html",
                controller: "DeploymentCtrl"
            }
        }
    });
}]);
// app.config(function($stateProvider, $urlRouterProvider) {
//     $urlRouterProvider.otherwise('/');

//     $stateProvider
//         .state('normal', {
//             url: '',
//             views: {
//                 "dateWidget@": {
//                     templateUrl: "templates/normal/dateWidget.html",
//                     controller: "dateCtrl"
//                 },
//                 "stocksWidget@": {
//                     templateUrl: "templates/normal/stocksWidget.html",
//                     controller: "stocksCtrl"
//                 },
//                 "mainWidget@": {
//                     templateUrl: "templates/normal/mainWidget.html",
//                     controller: "mainCtrl"
//                 }
//             },
//             resolve: {
//                 stocks: ['stockService', function(stockService) {
//                     return stockService.getStocks();
//                 }]
//             }
//         });
// .state('normal.portfolio', {
//   url:'/portfolio',
//   views: {
//     "widget@normal": {
//       templateUrl: "templates/portfolio.html",
//       controller: "portfolioCtrl"
//     }
//   }
// });
// });

app.run(($rootScope) => {
    $rootScope.$on("$stateChangeError", console.log.bind(console));
});