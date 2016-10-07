// var app = angular.module('moscowMugs', ["ui.router", 'moscowMugs.controllers', 'environment']);
var app = angular.module('moscowMugs', ["ui.router", 'moscowMugs.controllers']);

// app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', 'envServiceProvider', function($stateProvider, $urlRouterProvider, envServiceProvider, $locationProvider) {
app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',  function($stateProvider, $urlRouterProvider, $locationProvider) {
 $urlRouterProvider.otherwise('home')
 $stateProvider
   .state('home', {
     url: '/',
     templateUrl: '/views/home.html',
     controller: 'homePageController'
   })
   .state('recipes', {
     url: '/recipes',
     templateUrl: '/views/recipes.html',
     controller: 'recipesController'
   })
   .state('blog', {
     url: '/blog',
     templateUrl: '/views/blog.html',
     controller: 'blogController'
   })
   .state('admin', {
     url: '/adminin',
     templateUrl: '/views/admin.html',
     controller: 'adminController'
   })
   .state('adminsignup', {
     url: '/admin',
     templateUrl: '/views/signinadmin.html',
     controller: 'adminControllersignup'
   })
   .state('gaapiinfo', {
     url: '/gaapi',
     templateUrl: '/views/gaapi.html',
     controller: 'GAapi'
   })
   .state('websiteinfo', {
     url: '/website',
     templateUrl: '/views/websiteinfo.html',
     controller: 'websiteInfoController'
   })
   .state('facebookinfo', {
     url: '/facebook-analytics',
     templateUrl: '/views/facebookinfo.html',
     controller: 'facebookInfoController'
   })
   .state('todo', {
     url: '/to-do',
     templateUrl: '/views/todo.html',
     controller: 'todoController'
   })
}])
