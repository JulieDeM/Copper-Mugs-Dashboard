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

// .controller('facebookInfoController', function($scope, $http, envService){
//   var environment = envService.get();
//   // envService.set('production');
//   var fbpageid = envService.read('fbpageid');//gets the fb app id
//   console.log("fbpageid");
//   console.log(fbpageid);
//   var apiUrl = envService.read('apiUrl'); //gets the fb access token
.controller('facebookInfoController', function($scope, $http){

  $scope.list={};
  //make a fb call with your personal /about/me
  //then make a function that creates the
  // settings



  $.ajax(settings).done(function (response) {if (response && !response.error) {
    //data needed for the aggregate of users below
    var fbdataagegender = response.data[4].values[1].value;
    var fbfans = response.data[5].values[2].value;
    for (var key in fbdataagegender) {
      if (fbdataagegender.hasOwnProperty(key)) {
        console.log(key + " -> " + fbdataagegender[key]);
      }
    }
    var fbfangeo=[];
  }
    // var fbdatafansgeo = response.data[3].values[2].value;
  // }
//   $.each(obj, function(key, value) {
//     console.log(key, value);
// });
//
// //
var obj = { first: "John", last: "Doe" };

Object.keys(obj).forEach(function(key) {
    // console.log(key, obj[key]);
    console.log(key, obj[key]);

});


//gets the key and object pairs for fbdata and gender
var bigAr = [];
Object.keys(fbdataagegender).forEach(function fbgen (key) {
  var smallAr = [];
    // console.log(key, obj[key]);
    // console.log(key, fbdataagegender[key]);
    var key = key;
    smallAr.push(key)
    smallAr.push(fbdataagegender[key])
    bigAr.push(smallAr)
    // console.log(bigAr);
});
// console.log(smallAr);
console.log(bigAr);
bigAr.sort()
console.log(bigAr);


    $scope.fbfans = fbfans;
    // $scope.fbdatatest = fbdataagegender;
    // console.log($scope.fbdatatest);
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
          ['55-64', 1, 20]
          // for (var i = 0; i < bigAr.length; i++) {
          //   bigAr[i]
          //   console.log(bigAr[i]);
          // }
          // bigAr[0], bigAr[1]
        ]);

        var options = {
          backgroundColor: 'transparent',
          chart: {
            title: 'Age of Facebook Fans'

          },
          annotations: {
            textStyle: {
              fontName: 'Times-Roman',
              fontSize: 10,
              bold: true,
              italic: true,
              // The color of the text.
              color: '#871b47'
              }
            }
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
          ['New ', 'Returning'],
          ['New',     11],
          ['Returning',      2]
        ]);

        var options = {
          pieHole: 0.4,
          pieSliceBorderColor: 'none',
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


//top website chart
  google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Year', 'Sales', 'Expenses'],
          ['2004',  1000,      400],
          ['2005',  1170,      460],
          ['2006',  660,       1120],
          ['2007',  1030,      540]
        ]);

        var options = {
          title: 'Company Performance',
          backgroundColor: 'transparent',
          color: 'white',
          textStyle:{color: 'white'},
          curveType: 'function',
          legend: { position: 'bottom' }
        };

        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

        chart.draw(data, options);
      }

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
