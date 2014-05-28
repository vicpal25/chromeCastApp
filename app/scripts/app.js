define(['angularAMD', 'angular-route'], function (angularAMD) {
  var app = angular.module("webapp", ['ngRoute']);
  
  app.config(function ($routeProvider) {
    $routeProvider
    .when("/home", angularAMD.route({
        templateUrl: 'views/home.html', controller: 'HomeCtrl', controllerUrl: 'controllers/home'
    }))
    .when("/receiver", angularAMD.route({
        templateUrl: 'views/receiver.html', controller: 'ReceiverCtrl', controllerUrl: 'controllers/receiver'
    }))
    .otherwise({redirectTo: "/home"});
  });
  
  console.log("loaded amd");
  
  angularAMD.bootstrap(app);
  
  return app;
});
