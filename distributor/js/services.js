'use strict';

/* Services */

angular.module('cmsServices', ['ngResource'])
.factory('MyServer', ['$resource',
  function($resource){
    return $resource('../common/json/my.json', {}, {
      query: {method:'GET', isArray:false}
    });
  }])
.factory('ReportStoreServer', ['$resource',
  function($resource){
    return $resource('../common/json/report_store.json', {}, {
      query: {method:'GET', isArray:true}
    });
  }])
.factory('ReportKpiServer', ['$resource',
  function($resource){
    return $resource('../common/json/report_kpi.json', {}, {
      query: {method:'GET', isArray:true}
    });
  }])
.factory('ReportDistributorServer', ['$resource',
  function($resource){
    return $resource('../common/json/report_distributor_my.json', {}, {
      query: {method:'GET', isArray:true}
    });
  }])