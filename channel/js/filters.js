'use strict';

/* Filters */

angular.module('cmsFilters', [])
.filter('checkedornot', function() {
  return function(input) {
  		if(input==-1)return false;
  		return true;
  };
  
})

.filter('substr20', function() {
  return function(input) {
  	if(!input)return '';
  		return input.substr(0,20);
  };
  
})

.filter('substr10', function() {
  return function(input) {
  		return input.substr(0,10);
  };
  
})

.filter('dateFormat', function() {
  return function(input) {
  	if(!input)return'';
  		return input.substr(0,10)+' '+input.substr(11,5);
  };
  
})

.filter('countture', function() {
  return function(input) {
  		var num=0;
  		for(var i=0;i<input.length;i++){
  			if(input[i]==true)num++;
  		}
  		return num;
  };
  
})
.filter('parseInt', function() {
  return function(input) {
			if(input==undefined)return 0;
			return parseInt(input);
  };
  
})