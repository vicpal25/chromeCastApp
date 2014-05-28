require.config({
  baseUrl: "scripts",
  // alias libraries paths.  Must set 'angular'
  paths: {
    'angular': '//ajax.googleapis.com/ajax/libs/angularjs/1.2.0/angular.min',
    'angular-route': '//ajax.googleapis.com/ajax/libs/angularjs/1.2.0/angular-route.min',
    'angularAMD': '//cdn.jsdelivr.net/angular.amd/0.1.0/angularAMD.min',
    'googleCastSender' : '//www.gstatic.com/cv/js/sender/v1/cast_sender',
    'receiverSample' : 'receiverSample'
  },
  // Add angular modules that does not support AMD out of the box, put it in a shim
  shim: {
    'angularAMD': ['angular'],
    'angular-route': ['angular']
  },
  // kick start application
  deps: ['app']
});
