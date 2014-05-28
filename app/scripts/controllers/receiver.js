define(['app', 'googleCastSender', 'receiverSample'], function (app, receiver) {
    app.register.controller('ReceiverCtrl', function ($scope) {
        $scope.message = "Google Cast Receiver Controller"; 

        $scope.providersList = [];
        //Etract to Firebase
        $scope.providersList.push("Elephants Dream");
        $scope.providersList.push("Tears of Steel MOV");
        $scope.providersList.push("Reel MP4");
        $scope.providersList.push("Google I/0 2011");
        $scope.callMedia = function(key) {
            selectMedia(key);
        }
        $scope.launchApp = function(key) {
            launchApp();
        }
        $scope.stopApp = function(key) {
            stopApp();
        }
        $scope.loadMedia = function(key) {
            loadMedia();
        }
        $scope.playMedia = function(key) {
            playMedia();
        }
        $scope.stopMedia = function(key) {
            stopMedia();
        }

    });
}); 
