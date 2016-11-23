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
    	$urlRouterProvider.when("", "/login");
        $stateProvider
            .state('login', {//经销商管理系統 - 登录页面
                url: '/login',
                templateUrl: 'html/login.html',
                controller: 'LoginController'
            })
            .state('manage', {//经销商管理系統 - 管理页面
                url: '/manage',
                templateUrl: 'html/manage.html',
                controller: 'ManageController'
            })
            .state('manage.product_introduce', {//经销商管理系統 - 产品介绍
                url: '/product_introduce',
				views:{
					'':{
            			templateUrl: 'html/manage.html'
					},
					'manage':{
						templateUrl: 'html/product_introduce.html',
    					controller: 'Product_introduceController'
					}
				}
            })
            .state('manage.setup_introduce', {//经销商管理系統 - 装机指南
                url: '/setup_introduce',
				views:{
					'':{
            			templateUrl: 'html/manage.html'
					},
					'manage':{
                		templateUrl: 'html/setup_introduce.html',
                		controller: 'Setup_introduceController'
					}
				}
            })
            .state('manage.operation_manual', {//经销商管理系統 - 操作手册
                url: '/operation_manual',
				views:{
					'':{
            			templateUrl: 'html/manage.html'
					},
					'manage':{
                		templateUrl: 'html/operation_manual.html',
                		controller: 'Operation_manualController'
					}
				}
            })
            .state('manage.account', {//经销商管理系統 - 商户信息管理
                url: '/account',
				views:{
					'':{
            			templateUrl: 'html/manage.html'
					},
					'manage':{
                		templateUrl: 'html/account.html',
                		controller: 'AccountController'
					}
				}
            })
            .state('manage.account_update', {//经销商管理系統 - 商户信息管理-编輯
                url: '/account_update',
				views:{
					'':{
            			templateUrl: 'html/manage.html'
					},
					'manage':{
                		templateUrl: 'html/account_update.html',
                		controller: 'Account_updateController'
					}
				}
            })
            .state('manage.report_introduce', {//经销商管理系統 - 报表管理
                url: '/report_introduce',
				views:{
					'':{
            			templateUrl: 'html/manage.html'
					},
					'manage':{
                		templateUrl: 'html/report_introduce.html',
                		controller: 'Report_introduceController'
					}
				}
            })
            .state('manage.report_store', {//经销商管理系統 - 报表管理 - 商户门店状态报表
                url: '/report_store',
				views:{
					'':{
            			templateUrl: 'html/manage.html'
					},
					'manage':{
                		templateUrl: 'html/report_store.html',
                		controller: 'Report_storeController'
					}
				}
            })
            .state('manage.report_kpi', {//经销商管理系統 - 报表管理 - 经销商KPI报表
                url: '/report_kpi',
				views:{
					'':{
            			templateUrl: 'html/manage.html'
					},
					'manage':{
                		templateUrl: 'html/report_kpi.html',
                		controller: 'Report_kpiController'
					}
				}
            })
            .state('manage.report_distributor', {//经销商管理系統 - 报表管理 - 经销商分润报表
                url: '/report_distributor',
				views:{
					'':{
            			templateUrl: 'html/manage.html'
					},
					'manage':{
                		templateUrl: 'html/report_distributor.html',
                		controller: 'Report_distributorController'
					}
				}
            })
            
        ;
    }]);














