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
            .state('login', {//渠道系统 - 登录页面
                url: '/login',
                templateUrl: 'html/login.html',
                controller: 'LoginController'
            })
            .state('manage', {//渠道系统 - 管理页面
                url: '/manage',
                templateUrl: 'html/manage.html',
                controller: 'ManageController'
            })
            .state('manage.distributor_introduce', {//渠道系統 - 经销商信息管理
                url: '/distributor_introduce',
				views:{
					'':{
            			templateUrl: 'html/manage.html'
					},
					'manage':{
						templateUrl: 'html/distributor_introduce.html',
    					controller: 'Distributor_introduceController'
					}
				}
            })
            .state('manage.distributor_add', {//渠道系統 - 经销商新增
                url: '/distributor_add',
				views:{
					'':{
            			templateUrl: 'html/manage.html'
					},
					'manage':{
                		templateUrl: 'html/distributor_add.html',
                		controller: 'Distributor_addController'
					}
				}
            })
            .state('manage.distributor_list', {//渠道系統 - 经销商列表
                url: '/distributor_list',
				views:{
					'':{
            			templateUrl: 'html/manage.html'
					},
					'manage':{
                		templateUrl: 'html/distributor_list.html',
                		controller: 'Distributor_listController'
					}
				}
            })
            .state('manage.report_introduce', {//渠道系統 - 报表管理
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
            .state('manage.report_distributor', {//渠道系统 - 报表管理-经销商月度返利报表
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
            .state('manage.report_year', {//渠道系统 - 报表管理-经销商年度分润报表
                url: '/report_year',
				views:{
					'':{
            			templateUrl: 'html/manage.html'
					},
					'manage':{
                		templateUrl: 'html/report_year.html',
                		controller: 'Report_yearController'
					}
				}
            })
            .state('manage.report_charge', {//渠道系统 - 报表管理-商户充值报表
                url: '/report_charge',
				views:{
					'':{
            			templateUrl: 'html/manage.html'
					},
					'manage':{
                		templateUrl: 'html/report_charge.html',
                		controller: 'Report_chargeController'
					}
				}
            })
            .state('manage.setting_introduce', {//渠道系统 - 系统管理
                url: '/setting_introduce',
				views:{
					'':{
            			templateUrl: 'html/manage.html'
					},
					'manage':{
                		templateUrl: 'html/setting_introduce.html',
                		controller: 'Setting_introduceController'
					}
				}
            })
            .state('manage.setting_account', {//渠道系统 - 账号管理
                url: '/setting_account',
				views:{
					'':{
            			templateUrl: 'html/manage.html'
					},
					'manage':{
                		templateUrl: 'html/setting_account.html',
                		controller: 'Setting_accountController'
					}
				}
            })
            .state('manage.setting_account_add', {//渠道系统 - 新增渠道经理账号
                url: '/setting_account_add',
				views:{
					'':{
            			templateUrl: 'html/manage.html'
					},
					'manage':{
                		templateUrl: 'html/setting_account_add.html',
                		controller: 'Setting_account_addController'
					}
				}
            })
            .state('manage.setting_access', {//渠道系统 - 系统权限
                url: '/setting_access',
				views:{
					'':{
            			templateUrl: 'html/manage.html'
					},
					'manage':{
                		templateUrl: 'html/setting_access.html',
                		controller: 'Setting_accessController'
					}
				}
            })
            
        ;
    }]);














