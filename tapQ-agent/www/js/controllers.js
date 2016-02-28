angular.module('starter.controllers', ['firebase'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})


//all is the starter code, take a peak before i delete

  .controller('SessionCtrl', function($scope, $rootScope,$http, $firebase, $stateParams, $ionicLoading){

   var firebaseRef = new Firebase("https://qtap.firebaseio.com/user");
    firebaseRef.once('value', function(dataSnapshot){

      $scope.returnCall = function(number){
        $http.get("http://qtap-api.azurewebsites.net/returnCall/" + number);
      };

    $scope.total = dataSnapshot.val();

    $rootScope.bill = dataSnapshot.val().bill;
    console.log($scope.bill);

    $scope.email = dataSnapshot.val().email;
    console.log($scope.email);

    $scope.last = dataSnapshot.val().lastname;
    console.log($scope.last);

    $scope.first = dataSnapshot.val().firstname;
    console.log($scope.first);

  });
});


