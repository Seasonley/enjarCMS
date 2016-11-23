'use strict';
var cmsApp = angular.module('cmsApp', [
    'ngCookies',
    'ui.router',
    'ui.uploader',
    'cmsAnimations',
    'cmsControllers',
    'cmsFilters',
    'cmsServices',
    'cmsDirectives'
]);

cmsApp.config(['$stateProvider','$urlRouterProvider',
    function($stateProvider,$urlRouterProvider) {
    	$urlRouterProvider.when("", "/info");
        $stateProvider
        	.state('info', {//商户开通页面-主页
                url: '/info',
                templateUrl: 'html/info.html',
                controller: 'InfoController'
            })
        	.state('register', {//商户开通页面-注册
                url: '/register',
                templateUrl: 'html/register.html',
                controller: 'RegisterController'
            })
            .state('login', {//商户开通页面-登录
                url: '/login',
                templateUrl: 'html/login.html',
                controller: 'LoginController'
            })
            .state('forgetpassword', {//商户开通页面-忘记密码
                url: '/forgetpassword',
                templateUrl: 'html/forgetpassword.html',
                controller: 'ForgetpasswordController'
            })
            .state('resetpassword', {//商户开通页面-重置密码
                url: '/resetpassword',
                templateUrl: 'html/resetpassword.html',
                controller: 'ResetpasswordController'
            })
            .state('manage', {//商户开通页面 - 商户管理页面
                url: '/manage',
                templateUrl: 'html/manage.html',
                controller: 'ManageController'
            })
            .state('manage.basic_company', {//商户开通页面 - 商户管理页面 -企业基本信息 -公司基本资料维护 -编辑页面
                url: '/basic_company',
				views:{
					'':{
            			templateUrl: 'html/manage.html'
					},
					'manage':{
						templateUrl: 'html/basic_company.html',
    					controller: 'Basic_companyController'
					}
				}
            })
            .state('manage.basic_user_introduce', {//商户开通页面 - 商户管理页面 -企业基本信息-使用者资料维护
                url: '/basic_user_introduce',
				views:{
					'':{
            			templateUrl: 'html/manage.html'
					},
					'manage':{
                		templateUrl: 'html/basic_user_introduce.html',
                		controller: 'Basic_user_introduceController'
					}
				}
            })
            .state('manage.basic_user_role', {//商户开通页面 - 商户管理页面 -企业基本信息-使用者资料维护 -角色管理页面
                url: '/basic_user_role',
				views:{
					'':{
            			templateUrl: 'html/manage.html'
					},
					'manage':{
                		templateUrl: 'html/basic_user_role.html',
                		controller: 'Basic_user_roleController'
					}
				}
            })
            .state('manage.basic_users', {//商户开通页面 - 商户管理页面 -企业基本信息-使用者资料维护 -公司使用者管理页面
                url: '/basic_users',
				views:{
					'':{
            			templateUrl: 'html/manage.html'
					},
					'manage':{
                		templateUrl: 'html/basic_users.html',
                		controller: 'Basic_usersController'
					}
				}
            })
            .state('manage.my_store_introduce', {//商户开通页面 - 商户管理页面 -企业基本信息-使用者资料维护 -管理我的门店页面
                url: '/my_store_introduce',
				views:{
					'':{
            			templateUrl: 'html/manage.html'
					},
					'manage':{
                		templateUrl: 'html/my_store_introduce.html',
                		controller: 'My_store_introduceController'
					}
				}
            })
            .state('manage.my_store_add', {//商户开通页面 - 商户管理页面 -企业基本信息-使用者资料维护 -新增门店页面
                url: '/my_store_add',
				views:{
					'':{
            			templateUrl: 'html/manage.html'
					},
					'manage':{
                		templateUrl: 'html/my_store_add.html',
                		controller: 'My_store_addController'
					}
				}
            })
            .state('manage.my_store_list', {//商户开通页面 - 商户管理页面 -企业基本信息-使用者资料维护 -门店列表
                url: '/my_store_list',
				views:{
					'':{
            			templateUrl: 'html/manage.html'
					},
					'manage':{
                		templateUrl: 'html/my_store_list.html',
                		controller: 'My_store_listController'
					}
				}
            })
            .state('manage.charge_introduce', {//商户开通页面 - 商户管理页面 -充值维护
                url: '/charge_introduce',
				views:{
					'':{
            			templateUrl: 'html/manage.html'
					},
					'manage':{
                		templateUrl: 'html/charge_introduce.html',
                		controller: 'Charge_introduceController'
					}
				}
            })
            .state('manage.charge_account', {//商户开通页面 - 商户管理页面 -充值维护 -账户充值
                url: '/charge_account',
				views:{
					'':{
            			templateUrl: 'html/manage.html'
					},
					'manage':{
                		templateUrl: 'html/charge_account.html',
                		controller: 'Charge_accountController'
					}
				}
            })
            .state('manage.charge_list', {//商户开通页面 - 商户管理页面 -充值维护 -充值报表
                url: '/charge_list',
				views:{
					'':{
            			templateUrl: 'html/manage.html'
					},
					'manage':{
                		templateUrl: 'html/charge_list.html',
                		controller: 'Charge_listController'
					}
				}
            })
            .state('menu', {//商户开通页面 - 管理
                url: '/menu',
                templateUrl: 'html/menu.html',
                controller: 'MenuController'
            })
            .state('menu.news', {//商户开通页面 - 企业讯息
                url: '/news',
				views:{
					'':{
            			templateUrl: 'html/menu.html'
					},
					'menu':{
                		templateUrl: 'html/menu/news.html',
                		controller: 'NewsController'
					}
				}
            })
            .state('menu.radar', {//商户开通页面 - 销售雷达
                url: '/radar',
				views:{
					'':{
            			templateUrl: 'html/menu.html'
					},
					'menu':{
                		templateUrl: 'html/menu/radar.html',
                		controller: 'RadarController'
					}
				}
            })
            .state('menu.set_menu', {//商户开通页面 - 菜单管理
                url: '/set_menu',
				views:{
					'':{
            			templateUrl: 'html/menu.html'
					},
					'menu':{
                		templateUrl: 'html/menu/set_menu.html',
                		controller: 'Set_menuController'
					}
				}
            })
            .state('menu.edit_menu', {//商户开通页面 - 菜单资料维护
                url: '/edit_menu',
				views:{
					'':{
            			templateUrl: 'html/menu.html'
					},
					'menu':{
                		templateUrl: 'html/menu/edit_menu.html',
                		controller: 'Edit_menuController'
					}
				}
            })
            .state('menu.menu_access', {//商户开通页面 - 菜单授权
                url: '/menu_access',
				views:{
					'':{
            			templateUrl: 'html/menu.html'
					},
					'menu':{
                		templateUrl: 'html/menu/menu_access.html',
                		controller: 'Menu_accessController'
					}
				}
            })
            .state('menu.set_flavor', {//商户开通页面 - 口味设定
                url: '/set_flavor',
				views:{
					'':{
            			templateUrl: 'html/menu.html'
					},
					'menu':{
                		templateUrl: 'html/menu/set_flavor.html',
                		controller: 'Set_flavorController'
					}
				}
            })
            .state('menu.set_feed', {//商户开通页面 - 加料设定
                url: '/set_feed',
				views:{
					'':{
            			templateUrl: 'html/menu.html'
					},
					'menu':{
                		templateUrl: 'html/menu/set_feed.html',
                		controller: 'Set_feedController'
					}
				}
            })
            .state('menu.set_key', {//商户开通页面 - 按键管理
                url: '/set_key',
				views:{
					'':{
            			templateUrl: 'html/menu.html'
					},
					'menu':{
                		templateUrl: 'html/menu/set_key.html',
                		controller: 'Set_keyController'
					}
				}
            })
            .state('menu.edit_key', {//商户开通页面 - 按键维护
                url: '/edit_key',
				views:{
					'':{
            			templateUrl: 'html/menu.html'
					},
					'menu':{
                		templateUrl: 'html/menu/edit_key.html',
                		controller: 'Edit_keyController'
					}
				}
            })
            .state('menu.access_key', {//商户开通页面 - 按键授权
                url: '/access_key',
				views:{
					'':{
            			templateUrl: 'html/menu.html'
					},
					'menu':{
                		templateUrl: 'html/menu/access_key.html',
                		controller: 'Access_keyController'
					}
				}
            })
            .state('menu.set_coin', {//商户开通页面 - 收款别
                url: '/set_coin',
				views:{
					'':{
            			templateUrl: 'html/menu.html'
					},
					'menu':{
                		templateUrl: 'html/menu/set_coin.html',
                		controller: 'Set_coinController'
					}
				}
            })
            .state('menu.edit_coin', {//商户开通页面 - 收款别维护
                url: '/edit_coin',
				views:{
					'':{
            			templateUrl: 'html/menu.html'
					},
					'menu':{
                		templateUrl: 'html/menu/edit_coin.html',
                		controller: 'Edit_coinController'
					}
				}
            })
            .state('menu.access_coin', {//商户开通页面 - 收款别授权
                url: '/access_coin',
				views:{
					'':{
            			templateUrl: 'html/menu.html'
					},
					'menu':{
                		templateUrl: 'html/menu/access_coin.html',
                		controller: 'Access_coinController'
					}
				}
            })
            .state('menu.set_marquee', {//商户开通页面 - 跑马灯设定
                url: '/set_marquee',
				views:{
					'':{
            			templateUrl: 'html/menu.html'
					},
					'menu':{
                		templateUrl: 'html/menu/set_marquee.html',
                		controller: 'Set_marqueeController'
					}
				}
            })
            .state('menu.import_basic_data', {//商户开通页面 - 基础数据导入
                url: '/import_basic_data',
				views:{
					'':{
            			templateUrl: 'html/menu.html'
					},
					'menu':{
                		templateUrl: 'html/menu/import_basic_data.html',
                		controller: 'Import_basic_dataController'
					}
				}
            })
            .state('menu.vip', {//商户开通页面 - 会员
                url: '/vip',
				views:{
					'':{
            			templateUrl: 'html/menu.html'
					},
					'menu':{
                		templateUrl: 'html/menu/vip.html',
                		controller: 'VipController'
					}
				}
            })
            .state('menu.grade_vip', {//商户开通页面 - 会员分级
                url: '/grade_vip',
				views:{
					'':{
            			templateUrl: 'html/menu.html'
					},
					'menu':{
                		templateUrl: 'html/menu/grade_vip.html',
                		controller: 'Grade_vipController'
					}
				}
            })
            .state('menu.edit_vip', {//商户开通页面 - 会员资料维护
                url: '/edit_vip',
				views:{
					'':{
            			templateUrl: 'html/menu.html'
					},
					'menu':{
                		templateUrl: 'html/menu/edit_vip.html',
                		controller: 'Edit_vipController'
					}
				}
            })
            .state('menu.recharge', {//商户开通页面 - 积分与充值
                url: '/recharge',
				views:{
					'':{
            			templateUrl: 'html/menu.html'
					},
					'menu':{
                		templateUrl: 'html/menu/recharge.html',
                		controller: 'RechargeController'
					}
				}
            })
            .state('menu.set_recharge', {//商户开通页面 - 积分与充值设定
                url: '/set_recharge',
				views:{
					'':{
            			templateUrl: 'html/menu.html'
					},
					'menu':{
                		templateUrl: 'html/menu/set_recharge.html',
                		controller: 'Set_rechargeController'
					}
				}
            })
            .state('menu.set_exchange', {//商户开通页面 - 积分兑换设定
                url: '/set_exchange',
				views:{
					'':{
            			templateUrl: 'html/menu.html'
					},
					'menu':{
                		templateUrl: 'html/menu/set_exchange.html',
                		controller: 'Set_exchangeController'
					}
				}
            })
            .state('menu.edit_vip_exchange', {//商户开通页面 - 会员充值维护
                url: '/edit_vip_exchange',
				views:{
					'':{
            			templateUrl: 'html/menu.html'
					},
					'menu':{
                		templateUrl: 'html/menu/edit_vip_exchange.html',
                		controller: 'Edit_vip_exchangeController'
					}
				}
            })
            .state('menu.access_store', {//商户开通页面 - 档期与门店授权
                url: '/access_store',
				views:{
					'':{
            			templateUrl: 'html/menu.html'
					},
					'menu':{
                		templateUrl: 'html/menu/access_store.html',
                		controller: 'Access_storeController'
					}
				}
            })
            .state('menu.pro', {//商户开通页面 - 促销活动
                url: '/pro',
				views:{
					'':{
            			templateUrl: 'html/menu.html'
					},
					'menu':{
                		templateUrl: 'html/menu/pro.html',
                		controller: 'ProController'
					}
				}
            })
            .state('menu.pro_vip', {//商户开通页面 - 会员分级折扣活动
                url: '/pro_vip',
				views:{
					'':{
            			templateUrl: 'html/menu.html'
					},
					'menu':{
                		templateUrl: 'html/menu/pro_vip.html',
                		controller: 'Pro_vipController'
					}
				}
            })
            .state('menu.pro_special', {//商户开通页面 - 特价促销活动
                url: '/pro_special',
				views:{
					'':{
            			templateUrl: 'html/menu.html'
					},
					'menu':{
                		templateUrl: 'html/menu/pro_special.html',
                		controller: 'Pro_specialController'
					}
				}
            })
            .state('menu.pro_volume', {//商户开通页面 - 量价促销活动
                url: '/pro_volume',
				views:{
					'':{
            			templateUrl: 'html/menu.html'
					},
					'menu':{
                		templateUrl: 'html/menu/pro_volume.html',
                		controller: 'Pro_volumeController'
					}
				}
            })
            .state('menu.pro_full', {//商户开通页面 - 满额送促销活动
                url: '/pro_full',
				views:{
					'':{
            			templateUrl: 'html/menu.html'
					},
					'menu':{
                		templateUrl: 'html/menu/pro_full.html',
                		controller: 'Pro_fullController'
					}
				}
            })
            .state('menu.pro_buy', {//商户开通页面 - 买送促销活动
                url: '/pro_buy',
				views:{
					'':{
            			templateUrl: 'html/menu.html'
					},
					'menu':{
                		templateUrl: 'html/menu/pro_buy.html',
                		controller: 'Pro_buyController'
					}
				}
            })
            .state('menu.pro_shopkeeper', {//商户开通页面 - 店长赠送活动
                url: '/pro_shopkeeper',
				views:{
					'':{
            			templateUrl: 'html/menu.html'
					},
					'menu':{
                		templateUrl: 'html/menu/pro_shopkeeper.html',
                		controller: 'Pro_shopkeeperController'
					}
				}
            })
            .state('menu.coupon', {//商户开通页面 - 礼券管理
                url: '/coupon',
				views:{
					'':{
            			templateUrl: 'html/menu.html'
					},
					'menu':{
                		templateUrl: 'html/menu/coupon.html',
                		controller: 'CouponController'
					}
				}
            })
            .state('menu.set_coupon', {//商户开通页面 - 礼券
                url: '/set_coupon',
				views:{
					'':{
            			templateUrl: 'html/menu.html'
					},
					'menu':{
                		templateUrl: 'html/menu/set_coupon.html',
                		controller: 'Set_couponController'
					}
				}
            })
            .state('menu.edit_coupon', {//商户开通页面 - 礼券资料维护
                url: '/edit_coupon',
				views:{
					'':{
            			templateUrl: 'html/menu.html'
					},
					'menu':{
                		templateUrl: 'html/menu/edit_coupon.html',
                		controller: 'Edit_couponController'
					}
				}
            })
            .state('menu.aikuaigou', {//商户开通页面 - 爱快购管理
                url: '/aikuaigou',
				views:{
					'':{
            			templateUrl: 'html/menu.html'
					},
					'menu':{
                		templateUrl: 'html/menu/aikuaigou.html',
                		controller: 'AikuaigouController'
					}
				}
            })
            .state('menu.network_order', {//商户开通页面 - 网络订单设定
                url: '/network_order',
				views:{
					'':{
            			templateUrl: 'html/menu.html'
					},
					'menu':{
                		templateUrl: 'html/menu/network_order.html',
                		controller: 'Network_orderController'
					}
				}
            })
            .state('menu.online_multi_platform', {//商户开通页面 - 在线多平台设定
                url: '/online_multi_platform',
				views:{
					'':{
            			templateUrl: 'html/menu.html'
					},
					'menu':{
                		templateUrl: 'html/menu/online_multi_platform.html',
                		controller: 'Online_multi_platformController'
					}
				}
            })
            .state('menu.aikuaigou_report', {//商户开通页面 - 爱快购报表
                url: '/aikuaigou_report',
				views:{
					'':{
            			templateUrl: 'html/menu.html'
					},
					'menu':{
                		templateUrl: 'html/menu/aikuaigou_report.html',
                		controller: 'Aikuaigou_reportController'
					}
				}
            })
            .state('menu.aikuaigou_report_sale', {//商户开通页面 - 爱快购销售报表
                url: '/aikuaigou_report_sale',
				views:{
					'':{
            			templateUrl: 'html/menu.html'
					},
					'menu':{
                		templateUrl: 'html/menu/aikuaigou_report_sale.html',
                		controller: 'Aikuaigou_report_saleController'
					}
				}
            })
            .state('menu.aikuaigou_report_sale_detail', {//商户开通页面 - 爱快购销售明细表
                url: '/aikuaigou_report_sale_detail',
				views:{
					'':{
            			templateUrl: 'html/menu.html'
					},
					'menu':{
                		templateUrl: 'html/menu/aikuaigou_report_sale_detail.html',
                		controller: 'Aikuaigou_report_sale_detailController'
					}
				}
            })
            .state('menu.门店按月分析', {
                url: '/门店按月分析',
				views:{
					'':{
            			templateUrl: 'html/menu.html'
					},
					'menu':{
                		templateUrl: 'html/chart/门店按月分析.htm'
					}
				}
            })
            .state('menu.销售统计表', {
                url: '/销售统计表',
				views:{
					'':{
            			templateUrl: 'html/menu.html'
					},
					'menu':{
                		templateUrl: 'html/chart/销售统计表.htm'
					}
				}
            })
            .state('menu.销售状况比较表依日', {
                url: '/销售状况比较表依日',
				views:{
					'':{
            			templateUrl: 'html/menu.html'
					},
					'menu':{
                		templateUrl: 'html/chart/销售状况比较表(依日).htm'
					}
				}
            })
            .state('menu.销售状况比较表依月', {
                url: '/销售状况比较表依月',
				views:{
					'':{
            			templateUrl: 'html/menu.html'
					},
					'menu':{
                		templateUrl: 'html/chart/销售状况比较表(依月).htm'
					}
				}
            })
            .state('menu.销售类别统计表', {
                url: '/销售类别统计表',
				views:{
					'':{
            			templateUrl: 'html/menu.html'
					},
					'menu':{
                		templateUrl: 'html/chart/销售类别统计表.htm'
					}
				}
            })
            .state('menu.店别商品销售比较表依商品', {
                url: '/店别商品销售比较表依商品',
				views:{
					'':{
            			templateUrl: 'html/menu.html'
					},
					'menu':{
                		templateUrl: 'html/chart/店别商品销售比较表(依商品).htm'
					}
				}
            })
            .state('menu.店别商品销售比较表依类别', {
                url: '/店别商品销售比较表依类别',
				views:{
					'':{
            			templateUrl: 'html/menu.html'
					},
					'menu':{
                		templateUrl: 'html/chart/店别商品销售比较表(依类别).htm'
					}
				}
            })
            .state('menu.商品销量排行榜依商品', {
                url: '/商品销量排行榜依商品',
				views:{
					'':{
            			templateUrl: 'html/menu.html'
					},
					'menu':{
                		templateUrl: 'html/chart/商品销量排行榜(依商品).htm'
					}
				}
            })
            .state('menu.商品销量排行榜依门店', {
                url: '/商品销量排行榜依门店',
				views:{
					'':{
            			templateUrl: 'html/menu.html'
					},
					'menu':{
                		templateUrl: 'html/chart/商品销量排行榜(依门店).htm'
					}
				}
            })
            .state('menu.商品销量排行榜依商品类别', {
                url: '/商品销量排行榜依商品类别',
				views:{
					'':{
            			templateUrl: 'html/menu.html'
					},
					'menu':{
                		templateUrl: 'html/chart/商品销量排行榜(依商品类别).htm'
					}
				}
            })
            .state('menu.门店营运报表', {
                url: '/门店营运报表',
				views:{
					'':{
            			templateUrl: 'html/menu.html'
					},
					'menu':{
                		templateUrl: 'html/chart/门店营运报表.htm'
					}
				}
            })
            .state('menu.门店销售总记录表', {
                url: '/门店销售总记录表',
				views:{
					'':{
            			templateUrl: 'html/menu.html'
					},
					'menu':{
                		templateUrl: 'html/chart/门店销售总记录表.htm'
					}
				}
            })
            .state('menu.收款类别报表', {
                url: '/收款类别报表',
				views:{
					'':{
            			templateUrl: 'html/menu.html'
					},
					'menu':{
                		templateUrl: 'html/chart/收款类别报表.htm'
					}
				}
            })
            .state('menu.会员消费充值统计表', {
                url: '/会员消费充值统计表',
				views:{
					'':{
            			templateUrl: 'html/menu.html'
					},
					'menu':{
                		templateUrl: 'html/chart/会员消费充值统计表.htm'
					}
				}
            })
            .state('menu.门店退款记录表', {
                url: '/门店退款记录表',
				views:{
					'':{
            			templateUrl: 'html/menu.html'
					},
					'menu':{
                		templateUrl: 'html/chart/门店退款记录表.htm'
					}
				}
            })
            .state('menu.每小时销售报表', {
                url: '/每小时销售报表',
				views:{
					'':{
            			templateUrl: 'html/menu.html'
					},
					'menu':{
                		templateUrl: 'html/chart/每小时销售报表.htm'
					}
				}
            })
            .state('menu.月份同比报表', {
                url: '/月份同比报表',
				views:{
					'':{
            			templateUrl: 'html/menu.html'
					},
					'menu':{
                		templateUrl: 'html/chart/月份同比报表.htm'
					}
				}
            })
            .state('menu.爱快购销售报表', {
                url: '/爱快购销售报表',
				views:{
					'':{
            			templateUrl: 'html/menu.html'
					},
					'menu':{
                		templateUrl: 'html/chart/爱快购销售报表.htm'
					}
				}
            })
            
        ;
    }]);














