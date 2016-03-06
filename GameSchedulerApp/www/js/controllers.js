angular.module('gamescheduler.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function( chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function ($scope, $stateParams, Chats, GamesDB) {
  $scope.chat = Chats.get($stateParams.chatId);
  //GamesDB.GetPlatformsList()
  //  .success(function (resp) {
  //    console.log(resp.data);
  //  })
  //  .error(function (error) {
  //    console.log(error.message);
  //  });
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
