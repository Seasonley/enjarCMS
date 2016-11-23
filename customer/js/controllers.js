'use strict';
var con = angular.module('cmsControllers', [])
    /*
     * 商户开通页面-主页
     * IndexController
     */
    .controller('InfoController', ['$scope',
        function ($scope) {


        }])
    //商户开通页面-注册
    .controller('RegisterController', ['$scope','CityDataServer','$location','CustomerServer',
        function ($scope,CityDataServer,$location,CustomerServer) {
			$scope.CityData= CityDataServer.query();
			$scope.register=function(isValid){
                    if(isValid){
                    	var r = CustomerServer.save({ 'type': 'signin' }, 
                    	{
						    "request": {
						        "phone": $scope.user.phone,
						        "password": $scope.user.password,
						        "validation":  $scope.user.verify_code,
						        "account": $scope.user.center_name,
						        "province": $scope.user.province.label,
						        "city": $scope.user.city.label,
						    }
						}
						, function () {
	                        if (r.status == 0) {
	                            alert('注册成功');
                    			$location.path('/login');
	                        } else {
	                            alert(r.message);
	                        }
	                    });
                    }
                    else{
                    	alert('信息填写不正确');
                    }
			}
			$scope.getVcode=function(isValid){
                    if(isValid){
                    	alert('手机验证码已发送');
                    }
                   else{
                   	alert("手机号不存在,请确认!");
                   }
			}

        }])
    //商户开通页面-登录
    .controller('LoginController', ['$scope','$location',
        function ($scope,$location) {
			$scope.login=function(isValid){
                    if(isValid){
                    	alert('登录成功');
                    	$location.path('/manage/basic_company');
                    }
			}
        }])
    //商户开通页面-忘记密码
    .controller('ForgetpasswordController', ['$scope','$location','$filter',
        function ($scope,$location,$filter) {
			$scope.forget=function(isValid){
                    if(isValid){
                    	$location.path('/resetpassword');
                    }
			}
			$scope.Checkcode={
				"trueCode":"",
				"Create":function(){
					$scope.Checkcode.trueCode=""
					var codeLength = 4;//验证码的长度
				    var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');  
				     for(var i = 0; i < codeLength; i++) {
				        var index = Math.floor(Math.random()*36);//取得随机数的索引（0~35）  
				        $scope.Checkcode.trueCode += random[index];//根据索引取得随机数加到code上  
				    }  
				    
				},
				"Check":function(code){
					if($filter('uppercase')(code)==$scope.Checkcode.trueCode)return true;
					return false;
				}
			}

        }])
    //商户开通页面-重置密码
    .controller('ResetpasswordController', ['$scope','$location',
        function ($scope,$location) {
			$scope.reset_password=function(isValid){
                    if(isValid){
                    	alert("重置成功");
                    	$location.path('/login');
                    }
			}
        }])
    //商户开通页面-商户管理页面
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
    //商户开通页面 - 商户管理页面 -企业基本信息 -公司基本资料维护 -编辑页面
    .controller('Basic_companyController', ['$scope',
        function ($scope) {
			$scope.User={
//				'per_count':5.01,
//				'brand_name':'朋利来',
//				'store_count':1,
//				'电子邮箱':''
				
			}
			$scope.basic_company=function(isValid){
                    if(isValid){
                    	alert("编辑成功");
                    }
			}

        }])
    //商户开通页面 - 商户管理页面 -企业基本信息-使用者资料维护
    .controller('Basic_user_introduceController', ['$scope',
        function ($scope) {


        }])
    //商户开通页面 - 商户管理页面 -企业基本信息-使用者资料维护 -角色管理页面
    .controller('Basic_user_roleController', ['$scope','UserAdminServer',
        function ($scope,UserAdminServer) {
				$scope.UserAdmin={
					'list':UserAdminServer.query(),
					'del':function(index){
						$scope.UserAdmin.list.splice(index,1);
					},
					'edit':function(index,formid){
						ow(formid);
						$scope.user=$scope.UserAdmin.list[index];
					}
				}
				$scope.FromUpdate=function(valid){
					if(valid){
						alert('修改成功');
						$('#w_edit').hide();
					}
				}
        }])
    //商户开通页面 - 商户管理页面 -企业基本信息-使用者资料维护 -公司使用者管理页面
    .controller('Basic_usersController', ['$scope','UserBasicServer',
        function ($scope,UserBasicServer) {
				$scope.UserBasic={
					'list':UserBasicServer.query(),
					'edit':function(index,formid){
						ow(formid);
						$scope.user=$scope.UserBasic.list[index];
					}
				}
				$scope.FromUpdate=function(valid){
					if(valid){
						alert('修改成功');
						$('#w_edit').hide();
					}
				}
				$scope.FromPassword=function(valid){
					if(valid){
						alert('修改成功');
						$('#w_edit_password').hide();
					}
				}

        }])
    //商户开通页面 - 商户管理页面 -企业基本信息-使用者资料维护 -管理我的门店页面
    .controller('My_store_introduceController', ['$scope',
        function ($scope) {


        }])
    //商户开通页面 - 商户管理页面 -企业基本信息-使用者资料维护 -新增门店页面
    .controller('My_store_addController', ['$scope','CityDataServer','$location','CustomerServer',
        function ($scope,CityDataServer,$location,CustomerServer) {
			$scope.CityData= CityDataServer.query();
			$scope.FormUpdate=function(isValid){
                    if(isValid){
                    	var r = CustomerServer.save({ 'type':'store','action': 'add' }, 
                    	{
						    "request": {
										        "comno": $scope.user.dis_name,
										        "storename": $scope.user.center_name,
										        "area": $scope.user.area,
										        "province": $scope.user.province.label,
										        "city": $scope.user.city.label,
										        "address": $scope.user.address,
										        "mobile": $scope.user.tel
							}
						}
						, function () {
	                        if (r.status == 0) {
	                            alert('添加成功');
                    			$location.path('manage/my_store_list');
	                        } else {
	                            alert(r.message);
	                            console.log(r);
	                        }
	                    });
                    }
                    else{
                    	alert('信息填写不正确');
                    }
                    	
			}

        }])
    //商户开通页面 - 商户管理页面 -企业基本信息-使用者资料维护 -门店列表
    .controller('My_store_listController', ['$scope','StoreServer','CityDataServer',
        function ($scope,StoreServer,CityDataServer) {
			$scope.CityData= CityDataServer.query();
				$scope.Store={
					'list':StoreServer.query(),
					'edit':function(index,formid){
						ow(formid);
						$scope.user=$scope.Store.list[index];
						$scope.user.area1="华东";
						$scope.user.province1="上海";
						$scope.user.city1="上海";
					}
				}
				$scope.FormUpdate=function(valid){
					if(valid){
						alert('更新成功');
						$('#w_edit').hide();
					}
				}
				$scope.FromPassword=function(valid){
					if(valid){
						alert('修改成功');
						$('#w_edit_password').hide();
					}
				}

        }])
    //商户开通页面 - 商户管理页面 -充值维护
    .controller('Charge_introduceController', ['$scope',
        function ($scope) {


        }])
    //商户开通页面 - 商户管理页面 -账户充值
    .controller('Charge_accountController', ['$scope',
        function ($scope) {


        }])
    //商户开通页面 - 商户管理页面 -充值报表
    .controller('Charge_listController', ['$scope','ChargeServer',
        function ($scope,ChargeServer) {
			$scope.Charge={
					'list':ChargeServer.query()
				}

        }])
    //商户功能页面 - 管理
    .controller('MenuController', ['$scope',
        function ($scope) {
			$scope.show_toggle=function(tag_id){
        		console.log("");
        		for(var i=0;i<50;i++){
        			if(tag_id==i){
        				slow(".tag"+i,"show",200);
        			}else{
        				slow(".tag"+i,"hide",200);
        			}
        		}
        			
        	}

        }])
    //商户功能页面 - 企业讯息
    .controller('NewsController', ['$scope',
        function ($scope) {


        }])
    //商户功能页面 - 销售雷达
    .controller('RadarController', ['$scope',
        function ($scope) {


        }])
    //商户功能页面 - 菜单管理
    .controller('Set_menuController', ['$scope',
        function ($scope) {


        }])
    //商户功能页面 - 菜单资料资料维护
    .controller('Edit_menuController', ['$scope',
        function ($scope) {


        }])
    //商户功能页面 - 菜单授权
    .controller('Menu_accessController', ['$scope',
        function ($scope) {


        }])
    //商户功能页面 - 口味设定
    .controller('Set_flavorController', ['$scope',
        function ($scope) {


        }])
    //商户功能页面 - 加料设定
    .controller('Set_feedController', ['$scope',
        function ($scope) {


        }])
    //商户功能页面 - 按键管理
    .controller('Set_keyController', ['$scope',
        function ($scope) {


        }])
    //商户功能页面 - 按键维护
    .controller('Edit_keyController', ['$scope',
        function ($scope) {


        }])
    //商户功能页面 - 按键授权
    .controller('Access_keyController', ['$scope',
        function ($scope) {


        }])
    //商户功能页面 - 收款别
    .controller('Set_coinController', ['$scope',
        function ($scope) {


        }])
    //商户功能页面 - 收款别维护
    .controller('Edit_coinController', ['$scope',
        function ($scope) {


        }])
    //商户功能页面 - 收款别授权
    .controller('Access_coinController', ['$scope',
        function ($scope) {


        }])
    //商户功能页面 - 跑马灯设定
    .controller('Set_marqueeController', ['$scope',
        function ($scope) {


        }])
    //商户功能页面 - 基础数据导入
    .controller('Import_basic_dataController', ['$scope',
        function ($scope) {


        }])
    //商户功能页面 - 会员
    .controller('VipController', ['$scope',
        function ($scope) {


        }])
    //商户功能页面 - 会员分级
    .controller('Grade_vipController', ['$scope',
        function ($scope) {


        }])
    //商户功能页面 - 会员资料维护
    .controller('Edit_vipController', ['$scope',
        function ($scope) {


        }])
    //商户功能页面 - 积分与充值
    .controller('RechargeController', ['$scope',
        function ($scope) {


        }])
    //商户功能页面 - 积分与充值设定
    .controller('Set_rechargeController', ['$scope',
        function ($scope) {


        }])
    //商户功能页面 - 积分兑换设定
    .controller('Set_exchangeController', ['$scope',
        function ($scope) {


        }])
    //商户功能页面 - 会员充值维护
    .controller('Edit_vip_exchangeController', ['$scope',
        function ($scope) {


        }])
    //商户功能页面 - 档期与门店授权
    .controller('Access_storeController', ['$scope',
        function ($scope) {


        }])
    //商户功能页面 - 促销活动
    .controller('ProController', ['$scope',
        function ($scope) {


        }])
    //商户功能页面 - 会员分级折扣活动
    .controller('Pro_vipController', ['$scope',
        function ($scope) {


        }])
    //商户功能页面 - 特价促销活动
    .controller('Pro_specialController', ['$scope',
        function ($scope) {


        }])
    //商户功能页面 - 量价促销活动
    .controller('Pro_volumeController', ['$scope',
        function ($scope) {


        }])
    //商户功能页面 - 满额送促销活动
    .controller('Pro_fullController', ['$scope',
        function ($scope) {


        }])
    //商户功能页面 - 买送促销活动
    .controller('Pro_buyController', ['$scope',
        function ($scope) {


        }])
    //商户功能页面 - 店长赠送活动
    .controller('Pro_shopkeeperController', ['$scope',
        function ($scope) {


        }])
    //商户功能页面 - 礼券管理
    .controller('CouponController', ['$scope',
        function ($scope) {


        }])
    //商户功能页面 - 礼券
    .controller('Set_couponController', ['$scope',
        function ($scope) {


        }])
    //商户功能页面 - 礼券资料维护
    .controller('Edit_couponController', ['$scope',
        function ($scope) {


        }])
    //商户功能页面 - 爱快购管理
    .controller('AikuaigouController', ['$scope',
        function ($scope) {


        }])
    //商户功能页面 - 网络订单设定
    .controller('Network_orderController', ['$scope',
        function ($scope) {


        }])
    //商户功能页面 - 在线多平台设定
    .controller('Online_multi_platformController', ['$scope',
        function ($scope) {


        }])
    //商户功能页面 - 爱快购报表
    .controller('Aikuaigou_reportController', ['$scope',
        function ($scope) {


        }])
    //商户功能页面 - 爱快购销售报表
    .controller('Aikuaigou_report_saleController', ['$scope',
        function ($scope) {


        }])
    //商户功能页面 - 爱快购销售明细表
    .controller('Aikuaigou_report_sale_detailController', ['$scope',
        function ($scope) {


        }])












