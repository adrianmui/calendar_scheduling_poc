const angular = require('angular');
const $ = require('jquery');

var app = angular.module('app', [require('angular-ui-router')]);

app.config(function ($stateProvider, $urlRouterProvider) {
    console.log('adrian1', $stateProvider);
    console.log('adrian2', $urlRouterProvider);

    $urlRouterProvider.otherwise("/");

    $stateProvider.state('default', {
        url: '',
        views: {
            "calendar@": {
                templateUrl: "./partials/calendar-view.html",
                controller: "CalendarCtrl"
            }
        }
    }).state('default.deployment', {
        url: '/deployment',
        views: {
            "wizard@default": {
                templateUrl: "./partials/deployment-edit.html",
                controller: "DeploymentCtrl"
            }
        }
    });
});
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

app.run(function($rootScope) {
    $rootScope.$on("$stateChangeError", console.log.bind(console));
});