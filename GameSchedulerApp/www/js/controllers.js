angular.module('gamescheduler')

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function( chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl',['$scope', '$stateParams', 'Chats', 'GamesDB', function ($scope, $stateParams, Chats, GamesDB) {
  $scope.chat = Chats.get($stateParams.chatId);
  GamesDB.GetPlatformsList()
    .success(function (resp) {
      var x2js = new X2JS();
      var jsonObject = x2js.xml_str2json(resp);
      console.log(jsonObject);
    })
    .error(function (error) {
      console.log("error");
    });
}])

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
