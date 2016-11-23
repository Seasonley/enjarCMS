'use strict';
var con = angular.module('cmsControllers', [])
    //渠道系统 - 登录页面
    .controller('LoginController', ['$scope','$location',
        function ($scope,$location) {
			$scope.login=function(isValid){
                    if(isValid){
                    	if($scope.user.code+$scope.user.password=='enjarfd001fd001'||$scope.user.code+$scope.user.password=='enjarcsd001csd001'||$scope.user.code+$scope.user.password=='enjarcsm001csm001'){
                    		alert('登录成功');
                    		$location.path('/manage/distributor_list');
                    	}else{
                    		alert('账号或密码有误');
                    	}
                    	
                    }
			}
        }])
    //渠道系统 - 管理页面
    .controller('ManageController', ['$scope',
        function ($scope) {
			$scope.show_toggle=function(tag_id){
        		console.log("");
        		for(var i=0;i<10;i++){
        			if(tag_id==i){
        				slow(".tag"+i,"show",200);
        			}else{
        				slow(".tag"+i,"hide",200);
        			}
        		}
        			
        	}

        }])
    //渠道系统 - 经销商信息管理介绍
    .controller('Distributor_introduceController', ['$scope',
        function ($scope) {


        }])
    //渠道系统 - 经销商新增
    .controller('Distributor_addController', ['$scope','CityDataServer','$location',
        function ($scope,CityDataServer,$location) {
			$scope.CityData= CityDataServer.query();
			$scope.register=function(valid){
				if(valid){
					alert('添加成功');
					$location.path('manage/distributor_list');
				}
			}

        }])
    //渠道系统 - 经销商列表
    .controller('Distributor_listController', ['$scope','DistributorServer','CityDataServer',
        function ($scope,DistributorServer,CityDataServer) {
				$scope.CityData= CityDataServer.query();
				$scope.Distributor={
					'list':DistributorServer.query(),
					'edit':function(index,formid){
						ow(formid);
						$scope.fileindex=index;
						$scope.distributor=$scope.Distributor.list[index];
					}
				}
				$scope.register=function(valid){
					if(valid){
						alert('添加成功');
						location.reload();
					}
				}
        }])
    //渠道系统 - 报表管理
    .controller('Report_introduceController', ['$scope',
        function ($scope) {
        }])
    //渠道系统 - 报表管理-经销商月度返利报表
    .controller('Report_distributorController', ['$scope','ReportDistributorServer',
        function ($scope,ReportDistributorServer) {
				$scope.ReportDistributor={
					'list':ReportDistributorServer.query(),
					'edit':function(index,formid){
						ow(formid);
						$scope.fileindex=index;
					},
					'Upload':function(){
						alert('提交成功');
						$('#w_edit').hide();
						$scope.ReportDistributor.list[$scope.fileindex].confirm='已上传';
					},
					"ChangeType":function(){
						
					}
				}

        }])
    //渠道系统 - 报表管理-经销商年度分润报表
    .controller('Report_yearController', ['$scope','ReportDistributorServer',
        function ($scope,ReportDistributorServer) {
				$scope.ReportDistributor={
					'list':ReportDistributorServer.query(),
					'edit':function(index,formid){
						ow(formid);
						$scope.fileindex=index;
					},
					'Upload':function(){
						alert('提交成功');
						$('#w_edit').hide();
						$scope.ReportDistributor.list[$scope.fileindex].confirm='已上传';
					},
					"ChangeType":function(){
						
					}
				}

        }])
    //渠道系统 - 报表管理-商户充值报表
    .controller('Report_chargeController', ['$scope','ReportChargeServer',
        function ($scope,ReportChargeServer) {
				$scope.ReportCharge={
					'list':ReportChargeServer.query()
				}

        }])
    //渠道系统 - 系统管理
    .controller('Setting_introduceController', ['$scope',
        function ($scope) {


        }])
    //渠道系统 - 账号管理
    .controller('Setting_accountController', ['$scope','AccountServer','CityDataServer',
        function ($scope,AccountServer,CityDataServer) {
			$scope.CityData= CityDataServer.query();
			$scope.Account={
				'list':AccountServer.query(),
				'edit':function(index,formid){
					ow(formid);
					$scope.user=$scope.Account.list[index];
				},
				'Update':function(valid){
					if(valid){
						alert('提交成功');
						$('#w_edit').hide();
					}
				}
			}

        }])
    //渠道系统 - 系统权限
    .controller('Setting_accessController', ['$scope','AccountServer',
        function ($scope,AccountServer) {
				$scope.Account={
					'list':AccountServer.query(),
					'edit':function(index,formid){
						ow(formid);
						$scope.Account.list[index]
					}
				}

        }])
    //渠道系统 - 新增渠道经理账号
    .controller('Setting_account_addController', ['$scope','CityDataServer','$location',
        function ($scope,CityDataServer,$location) {
			$scope.CityData= CityDataServer.query();
			$scope.register=function(isValid){
                    if(isValid){
                    	alert('注册成功');
                    	$location.path('manage/setting_account');
                    }
			}
        }])












