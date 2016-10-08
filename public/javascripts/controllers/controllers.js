angular.module('moscowMugs.controllers', [])


.controller('facebookInfoController', function($scope, $http){
  $scope.list={};
  //make a fb call with your personal /about/me
  //then make a function that creates the
  // settings

  var fbdataagegender = null;
  $.ajax(settings).done(function (response) {if (response && !response.error) {
    var fbdataagegender = response.data[4].values[1].value;
    var fbfans = response.data[5].values[2].value;
    for (var key in fbdataagegender) {
      if (fbdataagegender.hasOwnProperty(key)) {
        console.log(key + " -> " + fbdataagegender[key]);
      }
    }
    var fbfangeo=[];
  }
  console.log(fbdataagegender);
  var fbdataagegender = response.data[4].values[1].value;
  var bigAr = [];
  Object.keys(fbdataagegender).forEach(function fbgen (key) {
    var smallAr = [];
    // console.log(key, obj[key]);
    // console.log(key, fbdataagegender[key]);
    var key = key;
    smallAr.push(key);
    smallAr.push(fbdataagegender[key]);
    bigAr.push(smallAr);
  });
  console.log(bigAr);
  bigAr.sort();
  console.log(bigAr);
  console.log(bigAr[0]);
  console.log(bigAr[0][0]);
  var fbdatafansgeo = response.data[3].values[2].value;

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
        var options = {backgroundColor: "transparent"};
        var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
        chart.draw(data, options);
      }
  });
  //gets the key and object pairs for fbdata and gender
  // $scope.dataGrab = function dataGrab (){
// }

  // $scope.fbfans = fbfans;
  $scope.fbage = "i will put a graph here";
  $scope.$apply();
//google chart for the fb users -- age and gender
 google.charts.load('current', {'packages':['bar']});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        // div ng-init="dataGrab()" //go at the tob of fb page
        var data = google.visualization.arrayToDataTable([
          ['Age Range', 'Males', 'Females'],
          ['18-24', 8, 10],
          ['25-34', 44, 58],
          ['35-44', 37, 35],
          ['45-54', 2, 10],
          ['55-64', 1, 20]
        //   // ['F.18-24', 1, 20]
        //   // bigAr[0][0], bigAr[0][1], bigAr[5][0]
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

  function datadonunt(){
    var donutOut = [];
    Object.keys(fbdataagegender).forEach(function fbgen (key) {
      var donutIn = [];
      var key = key;
      donutIn.push(key)
      donutIn.push(fbdataagegender[key])
      donutOut.push(donutIn)
    });
      donutOut.sort()
      console.log(donutOut);
  }

//google charts donut chart
  google.charts.load("current", {packages:["corechart"]});
  google.charts.setOnLoadCallback(drawChart1);
  google.charts.setOnLoadCallback(drawChart2);
  function drawChart1() {
    var data = google.visualization.arrayToDataTable([
      ['New ', 'Returning'],
      ['New',     11],
      ['Returning',      2]
    ]);
  var options = {
    pieHole: 0.4,
    pieSliceBorderColor: 'none',
    backgroundColor: 'transparent',
    legend: 'none',
    alignment: 'center',
    chartArea:{left:13,top:13,width:'60%',height:'60%'},
    titlePosition: 'in', axisTitlesPosition: 'in',
    hAxis: {showTextEvery: '1', textPosition: 'out'},
    vAxis: {textPosition: 'out'}
  };
  var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
  chart.draw(data, options);
  }


    //second graph, webviews
    function drawChart2() {
       var data = google.visualization.arrayToDataTable([
         ['Date', 'Pageviews'],
         ['1',  1],
         ['2',  2],
         ['3',  3],
         ['4',  4]
       ]);

       var options = {
        //  title: 'Pageviews',
         curveType: 'function',
         backgroundColor: 'transparent',
         chartArea:{left:40,top:26,width:'50%',height: '45%'},
        //  legend: { positxion: 'bottom' }
        legend: 'none'
       };

       var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

       chart.draw(data, options);
     }
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
      google.charts.setOnLoadCallback(drawChart2);


      function drawChart2() {
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
      //bounce rate week of
      google.charts.load("current", {packages:["corechart"]});
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
      var data = google.visualization.arrayToDataTable([
        ['ID', 'X', 'Y', 'Temperature'],
        ['',   80,  167,      120],
        ['',   79,  136,      130],
        ['',   78,  184,      50],
        ['',   72,  278,      230],
        ['',   81,  200,      210],
        ['',   72,  170,      100],
        ['',   68,  477,      80]
      ]);

      var options = {
        colorAxis: {colors: ['yellow', 'red']}
      };

      var chart = new google.visualization.BubbleChart(document.getElementById('chart_div'));
      chart.draw(data, options);
    }

    //
})

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
// // Google Analytics API controller
.controller('GAapi', function ($scope, $http, $rootScope){

  $scope.list;
//add function payload here

  //  var response = UrlFetchApp.fetch(uri, options),
  //  response_json = JSON.parse(response.getContentText()),
  //  token = response_json.access_token;
  //  console.log("*********");
  //  console.log("*********");
  //  console.log(token);
  //  return(token);
  // }
  // tokenRefresh();

    // $http.jsonp('https://www.googleapis.com/analytics/v3/data/ga?callback=JSON_CALLBACK').then(function(data){
    //   console.log("data");
    //   console.log(data);
    //   $scope.list = data.data;
    // })

})


.run(function ($rootScope, $location) {
  $rootScope.$on('$routeChangeSuccess', function(){
    ga('send', 'pageview', $location.path());
  });
});
