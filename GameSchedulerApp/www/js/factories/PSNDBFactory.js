angular.module('gamescheduler')

//Service call factory for PSN. Subject to change if the API provides a new functionality in the future.
.constant("SERVICEBASEPSN", "")

.factory('PSNDB', ['$http', 'SERVICEBASEPSN'], function ($http, SERVICEBASEPSN) {
  var PSNDB = {};

  return PSNDB;
});