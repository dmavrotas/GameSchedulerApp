angular.module('gamescheduler')

//Service call factory for GamesDB. Subject to change if the API provides a new functionality in the future.
  .constant("SERVICESTEAMDBBASE", "http://api.steampowered.com/ISteamUser/")

  .constant("STEAMWEBAPIKEY", "901103C28A81C38D5BD9B5733B30C73D")

//.constant("SERVICEBASE", )

.factory('SteamDB', ['$http', 'SERVICESTEAMDBBASE', 'STEAMWEBAPIKEY', function ($http, SERVICESTEAMDBBASE, STEAMWEBAPIKEY) {
  var SteamDB = {};

  SteamDB.GetPlayerSummaries = function (steamIDs, format) {
    var request = SERVICESTEAMDBBASE + "GetPlayerSummaries/v0002/?key=" + STEAMWEBAPIKEY + "&steamids=" + [steamIDs];
    if (factor != null) request += "&format=" + format;
    return $http.get(request);
  };

  SteamDB.GetOwnedGames = function (steamID, include_appinfo, include_played_free_games, format) {
    var request = SERVICESTEAMDBBASE + "GetOwnedGames/v0001/?key=" + STEAMWEBAPIKEY + "&steamid=" + steamID;
    if (!include_appinfo) request += "&include_app_info=" + include_appinfo;
    if (!include_played_free_games) request += "&include_played_free_games" + include_played_free_games;
    if (format != null) request += "&format=" + format;
    return $http.get(request);
  };

  return SteamDB;
}]);