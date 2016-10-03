angular.module('moscowMugs.controllers', [])

// homePageController
.controller('homePageController', function($scope){
  console.log('hello dog');
  $scope.view={}
  $scope.view.hey = "hello";

})
// *******************
// *******************
// recipes controller
.controller('recipesController', function($scope){
  $scope.view={};
  $scope.view.test = "hello, julie";

})
// *******************
// *******************
// blog controller
.controller('blogController', function($scope){

})
// *******************
// *******************
// products controller
.controller('adminController', function($scope){
  $scope.view = {};
  $scope.showModal = false;
})

// *******************
// *******************
// products controller
.controller('adminControllersignup', function($scope){


})

// *******************
// *******************
// website info controller
.controller('websiteInfoController', function($scope){


})


// *******************
// *******************
// Google Analytics API controller
// .controller('GAapi', function ($scope, $http, $rootScope){
//
//   $scope.list;
//
//   $http.jsonp('https://www.googleapis.com/analytics/v3/data/ga?callback=JSON_CALLBACK').then(function(data){
//     console.log(data);
//     $scope.list = data.data;
//   })
//
//   $rootScope.$on('$stateChangeSuccess', function (event) {
//     $window.ga('send', 'pageview', $location.path());
//   });
// })
//
// .run(function ($rootScope, $location) {
//     $rootScope.$on('$routeChangeSuccess', function(){
//         ga('send', 'pageview', $location.path());
//     });
// });
//
//
// // *******************
// // *******************
// // Google Analytics API controller
// .controller('facebookInfoController', function ($scope, $http, $rootScope, $window){
//
//   // New SDK (v2.x)
//   // js.src = "//connect.facebook.net/en_US/sdk.js";
//   //
//   // $window.fbAsyncInit = function() {
//   //   FB.init({
//   //     appId: 'fbappid',
//   //     status: true,
//   //     cookie: true,
//   //     xfbml: true,
//   //     version: 'v2.4'
//   //   });
//
//     /* make the API call */
// // FB.api(
// //     "/{page-id}?fields=instant_articles_insights.metric(metric-name)",
// //     function (response) {
// //       if (response && !response.error) {
// //         /* handle the result */
// //       }
// //     }
// // );
// };
//
//
//
//   // $scope.list;
//
//   // $http.jsonp('https://www.googleapis.com/analytics/v3/data/ga?callback=JSON_CALLBACK').then(function(data){
//   //   console.log(data);
//   //   $scope.list = data.data;
//   // })
//
// })
