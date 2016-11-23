'use strict';

/* Services */

angular.module('cmsServices', ['ngResource'])
.factory('CityDataServer', ['$resource',
  function($resource){
    return $resource('../common/json/city.json', {}, {
      query: {method:'GET', isArray:true}
    });
  }])
.factory('UserAdminServer', ['$resource',
  function($resource){
    return $resource('../common/json/user_admin.json', {}, {
      query: {method:'GET', isArray:true}
    });
  }])
.factory('UserBasicServer', ['$resource',
  function($resource){
    return $resource('../common/json/user_basic.json', {}, {
      query: {method:'GET', isArray:true}
    });
  }])
.factory('StoreServer', ['$resource',
  function($resource){
    return $resource('../common/json/store.json', {}, {
      query: {method:'GET', isArray:true}
    });
  }])
.factory('ChargeServer', ['$resource',
  function($resource){
    return $resource('../common/json/charge.json', {}, {
      query: {method:'GET', isArray:true}
    });
  }])
.factory('CustomerServer', ['$resource',
  function($resource){
    return $resource(API_PC+'/customer/:type/:action/', {type:'@type',action:'@action'}, {
    });
  }])