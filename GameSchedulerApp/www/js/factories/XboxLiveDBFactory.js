angular.module('gamescheduler')

//Service call factory for PSN. Subject to change if the API provides a new functionality in the future.
.constant("SERVICEBASEXBOX", "")

.factory('XBOXDB', ['$http', 'SERVICEBASEXBOX'], function ($http, SERVICEBASEXBOX) {
  var XBOXDB = {};



  return XBOXDB;
});