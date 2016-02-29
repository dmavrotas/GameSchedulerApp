angular.modules('starter.services', [])

  //Service call factory for GamesDB. Subject to change if the API provides a new functionality in the future.

  .constant('SERVICEBASE', 'http://thegamesdb.net/api/')

.factory('GetGamesList', function ($scope, $http, $name) {
  $http.get(SERVICEBASE +'GetGamesList.php?name=' + $name).then(function(resp){
    console.log('SUCCESS', resp)
    return $resp.data;
  }, function(err) {
    console.error('ERROR', err)
    return null;
  })
})

.factory('GetGame', function ($scope, $http, $field, $platform) {
  var request = SERVICEBASE + 'GetGame.php?' + $field + '=' + $name
  if ($platform != null) request = SERVICEBASE + 'GetGame.php?' + $field + '=' + $name + '&platform=' + $platform
  $http.get(request).then(function (resp) {
    console.log('SUCCESS', resp)
    return $resp.data;
  }, function (err) {
    console.error('ERROR', err)
    return null;
  })
})

.factory('GetArt', function ($scope, $http, $id) {
  $http.get(SERVICEBASE + 'GetArt.php?id=' + $id).then(function (resp) {
    console.log('SUCCESS', resp)
    return $resp.data;
  }, function (err) {
    console.error('ERROR', err)
    return null;
  })
})

.factory('GetPlatformsList', function ($scope, $http) {
  $http.get(SERVICEBASE + 'GetPlatformsList.php?').then(function (resp) {
    console.log('SUCCESS', resp)
    return $resp.data;
  }, function (err) {
    console.error('ERROR', err)
    return null;
  })
})

.factory('GetPlatform', function ($scope, $http, $id) {
  $http.get(SERVICEBASE + 'GetPlatform.php?id=' + $id).then(function (resp) {
    console.log('SUCCESS', resp)
    return $resp.data;
  }, function (err) {
    console.error('ERROR', err)
    return null;
  })
})

.factory('GetPlatformGames', function ($scope, $http, $id) {
  var request = SERVICEBASE + 'GetPlatformGames.php?'
  if ($id != null) request = SERVICEBASE + 'GetPlatformGames.php?id=' + $id
  $http.get(request).then(function (resp) {
    console.log('SUCCESS', resp)
    return $resp.data;
  }, function (err) {
    console.error('ERROR', err)
    return null;
  })
})

.factory('PlatformGames', function ($scope, $http, $platform) {
  $http.get(SERVICEBASE + 'PlatformGames.php?platform=' + $platform).then(function (resp) {
    console.log('SUCCESS', resp)
    return $resp.data;
  }, function (err) {
    console.error('ERROR', err)
    return null;
  })
})

.factory('Updates', function ($scope, $http, $time) {
  $http.get(SERVICEBASE + 'Updates.php?time=' + $time).then(function (resp) {
    console.log('SUCCESS', resp)
    return $resp.data;
  }, function (err) {
    console.error('ERROR', err)
    return null;
  })
})

.factory('UserRating', function ($scope, $http, $accountId, $itemId, $rating) {
  var request = SERVICEBASE + 'User_Rating.php?accountid=' + $accountId + '&itemid=' + $itemId
  if (request != null) request = SERVICEBASE + 'UserRating.php?accountid=' + $accountId + '&itemid=' + $itemId + '&rating'

  $http.get(request).then(function (resp) {
    console.log('SUCCESS', resp)
    return $resp.data;
  }, function (err) {
    console.error('ERROR', err)
    return null;
  })
})

.factory('UserFavorites', function ($scope, $http, $accountId, $type, $gameId) {
  var request = SERVICEBASE + 'User_Favorites.php?accountid=' + $accountId
  if ($type != null) request = SERVICEBASE + 'User_Favorites.php?accountid=' + $accountId + '&type=' + $type
  if ($gameId != null) request += '&gameid=' + $gameId
  $http.get(request).then(function (resp) {
    console.log('SUCCESS', resp)
    return $resp.data;
  }, function (err) {
    console.error('ERROR', err)
    return null;
  })
});