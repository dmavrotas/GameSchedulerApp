angular.module('gamescheduler')

//Service call factory for Steam Web API. Subject to change if the API provides a new functionality in the future.
.constant("SERVICESTEAMDBBASEUSER", "http://api.steampowered.com/ISteamUser/")

.constant("SERVICESTEAMDBBASEPLAYER", "http://api.steampowered.com/IPlayerService/")

.constant("SERVICESTEAMDBBASEUSERSTATS", "http://api.steampowered.com/ISteamUserStats/")

.constant("STEAMWEBAPIKEY", "901103C28A81C38D5BD9B5733B30C73D")

.factory('SteamDB', ['$http', 'SERVICESTEAMDBBASE', 'SERVICESTEAMDBBASEUSER', 'SERVICESTEAMDBBASEUSERSTATS','STEAMWEBAPIKEY', 
  function ($http, SERVICESTEAMDBBASE, SERVICESTEAMDBBASEUSER, SERVICESTEAMDBBASEUSERSTATS, STEAMWEBAPIKEY) {
  var SteamDB = {};

  SteamDB.GetPlayerSummaries = function (steamIDs, format) {
    var request = SERVICESTEAMDBBASE + "GetPlayerSummaries/v0002/?key=" + STEAMWEBAPIKEY + "&steamids=" + [steamIDs];
    if (factor != null) request += "&format=" + format;
    return $http.get(request);
  };

  SteamDB.GetOwnedGames = function (steamID, include_appinfo, include_played_free_games, format) {
    var request = SERVICESTEAMDBBASEPLAYER + "GetOwnedGames/v0001/?key=" + STEAMWEBAPIKEY + "&steamid=" + steamID;
    if (!include_appinfo) request += "&include_app_info=" + include_appinfo;
    if (!include_played_free_games) request += "&include_played_free_games" + include_played_free_games;
    if (format != null) request += "&format=" + format;
    return $http.get(request);
  };

  SteamDB.GetPlayerAchievements = function (steamID, appID, language) {
    var request = SERVICESTEAMDBBASEUSERSTATS + "GetPlayerAchievements/v0001/?appid=" + appID + "&key=" +
                  STEAMWEBAPIKEY + "&steamid=" + steamID;
    if (language != null) request += "&I=" + language;
    return $http.get(request);
  };

  return SteamDB;
}]);