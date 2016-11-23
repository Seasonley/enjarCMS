'use strict';

angular.module('cmsDirectives', [])

.directive('tree', function (AreaInfoServer) {//加载DeptTreeView
return {
require: '?ngModel',
restrict: 'A',
link: function ($scope, element, attrs, ngModel) {
var setting = {
data: {simpleData: {enable: true}},
callback: {onClick: function (event, treeId, treeNode, clickFlag) {
		$scope.$apply(function () {
			ngModel.$setViewValue(treeNode);
		});
	}
}
};

var r= AreaInfoServer.get({action:'getareainfo'},function(){
			var e=r.data;
			for(var i in e){
				e[i].name=e[i].area_name;
				e[i].id=e[i].area_id;
				e[i].pId=e[i].area_pid;
				if(e[i].area_level==1){
					e[i]={'name':e[i].name,'id':e[i].id,'pId':0,'open':true};
				}
			}
	var zNodes =e;
	$.fn.zTree.init(element, setting, zNodes);
	
});


}
};
})

.directive('grouptree', function (GroupServer) {//加载GroupTreeView
return {
require: '?ngModel',
restrict: 'A',
link: function ($scope, element, attrs, ngModel) {
var setting = {
data: {simpleData: {enable: true}},
callback: {onClick: function (event, treeId, treeNode, clickFlag) {
		$scope.$apply(function () {
			ngModel.$setViewValue(treeNode);
		});
	}
}
};

var r= GroupServer.get({action:'getall'},function(){
			var e=r.data;
			for(var i in e){
				e[i].name=e[i].group_name;
				e[i].id=e[i].group_id;
				e[i].pId=0;
			}
	var zNodes =e;
	$.fn.zTree.init(element, setting, zNodes);
});


}
};
})

.directive('coursetree', function (CourseClassServer) {//加载CourseTreeView
return {
require: '?ngModel',
restrict: 'A',
link: function ($scope, element, attrs, ngModel) {
var setting = {
data: {simpleData: {enable: true}},
callback: {onClick: function (event, treeId, treeNode, clickFlag) {
		$scope.$apply(function () {
			ngModel.$setViewValue(treeNode);
		});
	}
}
};

var r= CourseClassServer.get({action:'GetCourseClass'},function(){
			var e=r.data;
			for(var i in e){
				e[i].name=e[i].class_name;
				e[i].id=e[i].class_id;
//				e[i].pId=e[i].class_pid;
				e[i].pId=0;
			}
	var zNodes =e;
	$.fn.zTree.init(element, setting, zNodes);
});


}
};
})

.directive('examtree', function (CourseClassServer) {//加载ExamTreeView
return {
require: '?ngModel',
restrict: 'A',
link: function ($scope, element, attrs, ngModel) {
var setting = {
data: {simpleData: {enable: true}},
callback: {onClick: function (event, treeId, treeNode, clickFlag) {
		$scope.$apply(function () {
			ngModel.$setViewValue(treeNode);
		});
	}
}
};

	var zNodes =[
		{id:1,pId:0,name:'考试1'},
		{id:2,pId:0,name:'考试2'},
		{id:3,pId:0,name:'考试3'},
		{id:4,pId:0,name:'考试4'},
		{id:5,pId:0,name:'考试5'},
		{id:6,pId:1,name:'模拟测试第1考场'},
		{id:7,pId:1,name:'模拟测试第2考场'},
		{id:8,pId:1,name:'模拟测试第3考场'},
		{id:9,pId:1,name:'模拟测试第4考场'},
	];
	$.fn.zTree.init(element, setting, zNodes);



}
};
})

.directive('compile', function($compile) {
      // directive factory creates a link function
      return function(scope, element, attrs) {
        scope.$watch(
          function(scope) {
             // watch the 'compile' expression for changes
            return scope.$eval(attrs.compile);
          },
          function(value) {
            // when the 'compile' expression changes
            // assign it into the current DOM
            element.html(value);
            // compile the new DOM and link it to the current
            // scope.
            // NOTE: we only compile .childNodes so that
            // we don't get into infinite loop compiling ourselves
            $compile(element.contents())(scope);
          }
        );
      };
    })


.directive('areatree', function (AreaInfoServer) {//加载CourseTreeView
return {
require: '?ngModel',
restrict: 'A',
link: function ($scope, element, attrs, ngModel) {
var setting = {
data: {simpleData: {enable: true}},
callback: {onClick: function (event, treeId, treeNode, clickFlag) {
		$scope.$apply(function () {
			ngModel.$setViewValue(treeNode);
		});
	}
}
};

var r= AreaInfoServer.get({action:'getareainfo'},function(){
			var e=r.data;
			for(var i=0;i<e.length;i++){
				if(e[i].area_level==4){
						e.splice(i,1);
						i--;
				}
			}
			for(var i in e){
				e[i].name=e[i].area_name;
				e[i].id=e[i].area_id;
				e[i].pId=e[i].area_pid;
				if(e[i].area_level==1){
					e[i]={'name':e[i].name,'id':e[i].id,'pId':0,'open':true};continue;
				}
				if(e[i].area_level==4){
					e[i]={'name':e[i].name,'isHidden':true};continue;
				}
			}
	var zNodes =e;
	$.fn.zTree.init(element, setting, zNodes);
	
});


}
};
})

.directive('areatree', function (AreaInfoServer) {
return {
require: '?ngModel',
restrict: 'A',
link: function ($scope, element, attrs, ngModel) {
var setting = {
data: {simpleData: {enable: true}},
callback: {onClick: function (event, treeId, treeNode, clickFlag) {
		$scope.$apply(function () {
			ngModel.$setViewValue(treeNode);
		});
	}
}
};

var r= AreaInfoServer.get({action:'getareainfo'},function(){
			var e=r.data;
			for(var i=0;i<e.length;i++){
				if(e[i].area_level==4){
						e.splice(i,1);
						i--;
				}
			}
			for(var i in e){
				e[i].name=e[i].area_name;
				e[i].id=e[i].area_id;
				e[i].pId=e[i].area_pid;
				if(e[i].area_level==1){
					e[i]={'name':e[i].name,'area_level':1,'id':e[i].id,'pId':0,'open':true};
				}
			}
	var zNodes =e;
	$.fn.zTree.init(element, setting, zNodes);
	
});


}
};
})
.directive('datepicker', function() {
    return {
        restrict: 'A',
        require : 'ngModel',
        link : function (scope, element, attrs, ngModelCtrl) {
            $(function(){
                element.datepicker({
//              	prevText: '',
//					nextText: '',
					currentText: '今天',
					monthNames: ['一月','二月','三月','四月','五月','六月',
					'七月','八月','九月','十月','十一月','十二月'],
					monthNamesShort: ['一月','二月','三月','四月','五月','六月',
					'七月','八月','九月','十月','十一月','十二月'],
					dayNames: ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'],
					dayNamesShort: ['周日','周一','周二','周三','周四','周五','周六'],
					dayNamesMin: ['日','一','二','三','四','五','六'],
					weekHeader: '周',
					dateFormat: 'yy-mm-dd',
					firstDay: 1,
					isRTL: false,
					showMonthAfterYear: true,
					yearSuffix: '年',
                    onSelect:function (date) {
                        scope.$apply(function () {
                            ngModelCtrl.$setViewValue(date);
                        });
                    }
                });
            });
        }
    }
});