'use strict';

/* Services */

angular.module('cmsServices', ['ngResource'])
.factory('CityDataServer', ['$resource',
  function($resource){
    return $resource('../common/json/city.json', {}, {
      query: {method:'GET', isArray:true}
    });
  }])
.factory('DistributorServer', ['$resource',
  function($resource){
    return $resource('../common/json/distributor.json', {}, {
      query: {method:'GET', isArray:true}
    });
  }])
.factory('ReportDistributorServer', ['$resource',
  function($resource){
    return $resource('../common/json/report_distributor.json', {}, {
      query: {method:'GET', isArray:true}
    });
  }])
.factory('ReportChargeServer', ['$resource',
  function($resource){
    return $resource('../common/json/report_charge.json', {}, {
      query: {method:'GET', isArray:true}
    });
  }])
.factory('AccountServer', ['$resource',
  function($resource){
    return $resource('../common/json/account.json', {}, {
      query: {method:'GET', isArray:true}
    });
  }])