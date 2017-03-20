// const angular = require('angular');
var app = angular.module('app', ['ngRoute']);

app.config(["$routeProvider", ($routeProvider) => {
    $routeProvider.
      when('', {
          templateUrl: './../views/index.html',
          controller: 'DeploymentCtrl'
      })
}]);


app.run(($rootScope) => {
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});
// exports.app = app;