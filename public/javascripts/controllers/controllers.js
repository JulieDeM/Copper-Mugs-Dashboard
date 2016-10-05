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
  $scope.list={};
  //make a fb call with your personal /about/me
  //then make a function that creates the
  // settings


  $.ajax(settings).done(function (response) {if (response && !response.error) {
    //data needed for the aggregate of users below
    var fbfangeo=[];
    console.log(response.data);
    var fbfans = response.data[5].values[2].value;
    console.log(fbfans);

    console.log(response.data[3]);
    var fbdatafansgeo = response.data[3].values[2].value;
    console.log(fbdatafansgeo);
    for (var i = 0; i < fbdatafansgeo.length; i++) {
    fbfangeo.push(fbdatafansgeo[i]);
    }
    console.log("fbfangeo");
    console.log(fbfangeo);

    var fbdataagegender = response.data[4].values[1].value;

  }

    $scope.fbfans = fbfans;
    $scope.fbdatatest = fbdataagegender;
    console.log($scope.fbdatatest);
    $scope.fbage = "i will put a graph here"
    $scope.$apply();

    //google charts region map //STILL NEED TO CHANGE TO COUNTRY
    google.charts.load('upcoming', {'packages':['geochart']});
      google.charts.setOnLoadCallback(drawRegionsMap);

      function drawRegionsMap() {

        var data = google.visualization.arrayToDataTable([
          ['City', 'Fans'],
          ['Germany', 200],
          ['United States', 300],
          ['Brazil', 400],
          ['Canada', 500],
          ['France', 600],
          ['RU', 700]
        ]);
        // var data = google.visualization.arrayToDataTable([
        //   ['State', 'Users'],
        //   ['Colorado', 30]
        // ])
        var options = {backgroundColor: "transparent"};
        var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
        chart.draw(data, options);
      }
  });

//google chart for the fb users -- age and gender
 google.charts.load('current', {'packages':['bar']});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Age Range', 'Males', 'Females'],
          ['18-24', 8, 10],
          ['25-34', 44, 58],
          ['35-44', 37, 35],
          ['45-54', 2, 10],
          ['55-64', 1, 20],
        ]);

        var options = {
          chart: {
            title: 'Age of Facebook Fans'
          },
          annotations: {
            textStyle: {
              fontName: 'Times-Roman',
              fontSize: 18,
              bold: true,
              italic: true,
              // The color of the text.
              color: '#871b47'
              }
            },
            backgroundColor: "transparent"
        };

        var chart = new google.charts.Bar(document.getElementById('columnchart_material'));
        chart.draw(data, options);
      }

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
          backgroundColor: 'transparent'
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
// // Google Analytics API controller
// .controller('GAapi', function ($scope, $http, $rootScope){
//
//   $scope.list;
//
//   $http.jsonp('https://www.googleapis.com/analytics/v3/data/ga?callback=JSON_CALLBACK').then(function(data){
//     console.log(data);
//     $scope.list = data.data;
//     console.log($scope.list);
//   })
//
//   $rootScope.$on('$stateChangeSuccess', function (event) {
//     $window.ga('send', 'pageview', $location.path());
//   });
// })
//
// //
// // // *******************
// // // *******************
// // Google Analytics API controller
// .controller('facebookInfoController', function ($scope, $http, $rootScope, $window){
//   $scope.list;
//
//   $http.jsonp('https://www.googleapis.com/analytics/v3/data/ga?callback=JSON_CALLBACK').then(function(data){
//     console.log(data);
//     $scope.list = data.data;
//   })
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
// });



//
// })
// ?callback=JSON_CALLBACK


.run(function ($rootScope, $location) {
  $rootScope.$on('$routeChangeSuccess', function(){
    ga('send', 'pageview', $location.path());
  });
});
