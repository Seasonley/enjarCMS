'use strict';
var con = angular.module('cmsControllers', [])
    //经销商管理系統 - 登录页面
    .controller('LoginController', ['$scope','$location',
        function ($scope,$location) {
			$scope.login=function(isValid){
                    if(isValid&&$scope.user.range==100){
                    	alert('登录成功');
                    	$location.path('/manage/report_store');
                    }
			}
        }])
    //经销商管理系統 - 管理页面
    .controller('ManageController', ['$scope',
        function ($scope) {
			$scope.show_toggle=function(tag_id){
        		for(var i=0;i<10;i++){
        			if(tag_id==i){
        				slow(".tag"+i,"show",200);
        			}else{
        				slow(".tag"+i,"hide",200);
        			}
        		}
        			
        	}

        }])
    //经销商管理系統 - 产品介绍
    .controller('Product_introduceController', ['$scope',
        function ($scope) {


        }])
    //经销商管理系統 - 装机指南
    .controller('Setup_introduceController', ['$scope',
        function ($scope) {


        }])
    //经销商管理系統 - 操作手册
    .controller('Operation_manualController', ['$scope',
        function ($scope) {


        }])
    //经销商管理系統 - 商户信息管理
    .controller('AccountController', ['$scope','MyServer',
        function ($scope,MyServer) {
			$scope.My=MyServer.query();
        }])
    //经销商管理系統 - 商户信息管理-编輯
    .controller('Account_updateController', ['$scope','MyServer','$location',
        function ($scope,MyServer,$location) {
			$scope.user=MyServer.query();
			$scope.register=function(user){
				if(user.hname=='')return;
				if(user.name=='')return;
				if(user.value1=='')return;
				if(user.value2=='')return;
				if(user.charge=='')return;
				if(user.ctel=='')return;
				if(user.maintain=='')return;
				if(user.mtel=='')return;
				alert('更改成功！');
				$location.path("manage/account");
			}
        }])
    //经销商管理系統 - 报表管理
    .controller('Report_introduceController', ['$scope',
        function ($scope) {


        }])
    //经销商管理系統 - 报表管理 - 商户门店状态报表
    .controller('Report_storeController', ['$scope','ReportStoreServer',
        function ($scope,ReportStoreServer) {
				$scope.ReportStore={
					'list':ReportStoreServer.query()
				}

        }])
    //经销商管理系統 - 报表管理 - 经销商KPI报表
    .controller('Report_kpiController', ['$scope','ReportKpiServer',
        function ($scope,ReportKpiServer) {
				$scope.ReportKPI={
					'list':ReportKpiServer.query()
				}

        }])
    //经销商管理系統 - 报表管理 - 经销商分润报表
    .controller('Report_distributorController', ['$scope','ReportDistributorServer',
        function ($scope,ReportDistributorServer) {
				$scope.ReportDistributor={
					'list':ReportDistributorServer.query()
				}

        }])












