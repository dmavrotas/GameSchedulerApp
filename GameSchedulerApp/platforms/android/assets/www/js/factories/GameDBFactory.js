angular.module('gamescheduler')

//Service call factory for GamesDB. Subject to change if the API provides a new functionality in the future.

.constant("SERVICEGAMESDBBASE", "http://thegamesdb.net/api/")

.factory('GamesDB', ['$http', 'SERVICEBASE', function ($http, SERVICEGAMESDBBASE) {
  var GamesDB = {};

  GamesDB.GetGamesList = function(gameName) {
    return $http.get(SERVICEGAMESDBBASE + 'GetGamesList.php?name=' + gameName);
  };

  GamesDB.GetGame = function(searchField, gamingPlatform, gameName) {
    var request = SERVICEGAMESDBBASE + 'GetGame.php?' + searchField + '=' + gameName;
    if(platform != null) request += '&platform=' + gamingPlatform;
    return $http.get(request);
  };

  GamesDB.GetArt = function(gameID) {
    return $http.get(SERVICEGAMESDBBASE + 'GetArt.php?id=' + gameID);
  };

  GamesDB.GetPlatformsList = function() {
    return $http.get(SERVICEGAMESDBBASE + 'GetPlatformsList.php?');
  };

  GamesDB.GetPlatform = function(gameID) {
    return $http.get(SERVICEGAMESDBBASE + 'GetPlatform.php?id=' + gameID);
  };

  GamesDB.GetPlatformGames = function(platformID) {
    var request = SERVICEGAMESDBBASE + 'GetPlatformGames.php?';
    if(platformID != null) request += 'id=' + gameID;
    return $http.get(request);
  };

  GamesDB.PlatformGames = function(platform) {
    return $http.get(SERVICEGAMESDBBASE + 'PlatformGames.php?platform=' + platform);
  };

  GamesDB.Updates = function(timeElapsed) {
    return $http.get(SERVICEGAMESDBBASE + 'Updates.php?time=' + timeElapsed);
  };

  GamesDB.UserRating = function(accountID, itemID, rating) {
    var request = SERVICEGAMESDBBASE + 'User_Rating.php?accountid=' + accountID + '&itemid=' + itemID;
    if(rating) request += '&rating=' + rating;
    return $http.get(request);
  };

  GamesDB.UserFavorites = function(accountID, type, gameID) {
    var request = SERVICEGAMESDBBASE + 'User_Favorites.php?accountid=' + accountID;
    if(type != null) request += '&type=' + type;
    if(gameID != null) request += '&gameid=' + gameID;
    return $http.get(request);
  };

  return GamesDB;
}]);
