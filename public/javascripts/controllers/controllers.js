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

.controller('facebookInfoController', function($scope, $http){
  // $scope.list;
  //
  // //   // New SDK (v2.x)
  //    js.src = "//connect.facebook.net/en_US/sdk.js"
  // /* make the API call */
  // FB.api(
  //   '/fbpageid/insights',
  //   'GET',
  //   {"metric":["page_actions_post_reactions_like_total","page_fans","page_fans_city","page_fans_gender_age","page_views_total","page_posts_impressions"]},
  //   function(response) {
  //       // Insert your code here
  //       $scope.list = data.data;
  //       console.log(response);
  //   }
  // );

    $scope.list;

    $http.jsonp('https://graph.facebook.com/v2.7/fbpageid/insights?metric%5B0%5D=page_actions_post_reactions_like_total&metric%5B1%5D=page_fans&metric%5B2%5D=page_fans_city&metric%5B3%5D=page_fans_gender_age&metric%5B4%5D=page_views_total&metric%5B5%5D=page_posts_impressions&access_token=EAACEdEose0cBACDMKnZCZCY15eST0yYvtnSV2K3EtbmPOyfmrp66UynDNXF5b0tDy5d8AuZAZBQcjEE5y8ul18l576ZA2d5hza1VZClPQNILeEZCq0CWVzJdNYm5kusp17asw5dm9cVgq6gqLFfxt2STZBifVxhLLuVPQzDkMGgIcwZDZD').then(function(data){
      console.log(data.data[0]);
    $scope.list = data.data[0];
    })
})
// *******************
// *******************
// products controller
.controller('adminController', function($scope){
  $scope.view = {};
  $scope.showModal = false;

//google charts donut chart
  google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Work',     11],
          ['Eat',      2],
          ['Commute',  2],
          ['Watch TV', 2],
          ['Sleep',    7]
        ]);

        var options = {
          pieHole: 0.4,
        };

        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
        chart.draw(data, options);
      }


      //d3 chart
      d3.selectAll("span")
  .data([4, 8, 15, 16, 23, 42])
    .style("font-size", function(d) { return d + "px"; });
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
// ?callback=JSON_CALLBACK
