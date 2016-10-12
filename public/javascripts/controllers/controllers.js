angular.module('moscowMugs.controllers', [])

.controller('adminControllersignup', function($scope, queries_apicall, $state){
  $scope.list = {};

  queries_apicall.all().then(function(info){
    $scope.list.user1 = info.response.rows;
    console.log($scope.list.user1);
  })
  queries_apicall.createUser().then(function(newUser){
    $scope.list.new = newUser.data.rows;
  })
  $scope.signin = function(){
    $state.go('admin')
  }
})

.controller('createuserController', function($scope, $http, queries_apicall, $state){

})

.controller('facebookInfoController', function($scope, $http, cyprusfbFactory){
  $scope.list={};
  var fbdataagegender = cyprusfbFactory.data[16].values[2].value;
  // console.log(fbdataagegender);
  $scope.fbfans = cyprusfbFactory.data[17].values[2].value;
  $scope.postimpressions = cyprusfbFactory.data[11].values[0].value;
  $scope.pageviewstotal =  cyprusfbFactory.data[19].values[2].value;
  var bigAr = [];
  Object.keys(fbdataagegender).forEach(function fbgen (key) {
    var smallAr = [];
    var key = key;
    // key.splice(2)
    console.log(key);
    if(key == 'f'){
      console.log(key[0]);
    }
    key.split(2)
    smallAr.push(key);
    smallAr.push(fbdataagegender[key]);
    bigAr.push(smallAr);
  });
  bigAr.sort();
  bigAr.unshift(['Age Range', 'Males', 'Females'])
  console.log(bigAr);
  console.log(typeof bigAr);
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
        var options = {backgroundColor: "transparent",
        textStyle: { color: 'white'
           }
        };
        var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
        chart.draw(data, options);
      }
  // });
  //gets the key and object pairs for fbdata and gender
  // $scope.$apply();
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
        ]);
        // var data = google.visualization.arrayToDataTable(bigAr)
        var options = {
          backgroundColor: 'transparent',
          chart: {
            title: 'Age of Facebook Fans',
          },
          annotations: {
            textStyle: {
              fontName: 'Oxygen',
              fontSize: 10,
              bold: true,
              italic: true,
              color: 'white'
              }
            }
        };
        var chart = new google.charts.Bar(document.getElementById('columnchart_material'));
        chart.draw(data, options);
      }
      // $scope.$apply();
      google.charts.load("current", {packages:["corechart"]});
    google.charts.setOnLoadCallback(drawChartfinal);
    function drawChartfinal() {
      var data = google.visualization.arrayToDataTable([
        ["Element", "Density", { role: "style" } ],
        ["Copper", 8.94, "#b87333"],
        ["Silver", 10.49, "silver"],
        ["Gold", 19.30, "gold"],
        ["Platinum", 21.45, "color: #e5e4e2"]
      ]);

      var view = new google.visualization.DataView(data);
      view.setColumns([0, 1,
                       { calc: "stringify",
                         sourceColumn: 1,
                         type: "string",
                         role: "annotation" },
                       2]);

      var options = {
        title: "",
        width: 600,
        height: 400,
        bar: {groupWidth: "95%"},
        legend: { position: "none" },
      };
      var chart = new google.visualization.BarChart(document.getElementById("barchart_values"));
      chart.draw(view, options);
  }
})

// *******************
// *******************
// products controller
.controller('adminController', function($scope, gaapiFactory, cyprusfbFactory, googletrends){
  $scope.view = {};
  $scope.productssold = 250;
  $scope.dollarspent = '$' + 50;
  $scope.username = "Torrey";
  $scope.reports = ['Bounce Rate','Products Sold','Number of Facebook Fans', 'Advertising Spend'];
  //pageviews ga
  $scope.pageviewstotal =  gaapiFactory.ga_results[0].totalsForAllResults.gapageviews;
  $scope.pageviewsapp = 234;
  $scope.pageviewsmain = 69;
  //bounce rate ga
  $scope.bounceratetotal =  (Number(gaapiFactory.ga_results[0].totalsForAllResults.gabounceRate/100) * 100).toFixed(2) + '%';
  console.log(typeof $scope.bounceratetotal);
  $scope.bouncerateapp = 0 +"%";
  $scope.bounceratemain = 20 +"%";
  //avg time on page ga
  $scope.avgtimeonpage = gaapiFactory.ga_results[0].totalsForAllResults.gaavgTimeOnPage;
  $scope.avgtimeonpageapp = 00 + ":"+49;
  $scope.avgtimeonpagemain = 00+":"+30;

  //% exit rate ga
  $scope.percentExit = (Number(gaapiFactory.ga_results[0].totalsForAllResults.gaexitRate/100)*100).toFixed(2) + '%';
  console.log(typeof $scope.bounceratetotal);

  console.log("percent exit");
  console.log($scope.percentExit);
  $scope.percentExitapp = 1.71 + "%";
  $scope.percentExitmain = 7.25 + "%";

  $scope.toogleme = function (moreReports){
    moreReports.thishides = !moreReports.thishides
  }

  $scope.addrepo = function (addOne){
    addOne.thishides = !addOne.thishides
  }
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
    colors:['#8F9DFA','#7EBB8B'],
    backgroundColor: 'transparent',
    legend: 'none',
    alignment: 'center',
    chartArea:{left:14,top:14,width:'60%',height:'60%'},
    titlePosition: 'in', axisTitlesPosition: 'in',
    hAxis: {showTextEvery: '1', textPosition: 'out',textStyle: {color: 'white'} },
    vAxis: {textPosition: 'out', textStyle: {color: 'white'}}
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
     ['4',  4],
     ['5',  2],
     ['6',  3],
     ['7',  4],
     ['8',  3],
     ['9',  4],
     ['10',  2],
     ['11',  3],
     ['12',  4],
     ['13',  4],
     ['14',  3],
     ['15',  4],
     ['16',  2],
     ['17',  3],
     ['18',  4],
     ['19',  4],
     ['20',  4],
     ['21',  3],
     ['22',  4],
     ['23',  2],
     ['24',  3],
     ['25',  4],
     ['26',  4],
     ['27',  3],
     ['28',  4],
     ['29',  2],
     ['30',  3],
     ['31',  4]
   ]);
   var options = {
     title: 'Pageviews for September 2016',
     colors:['#8F9DFA'],
     curveType: 'function',
     backgroundColor: 'transparent',
     chartArea:{left:40,top:26,right:15,width:'100%',height: '60%'},
     vAxis: {
       textStyle: {color: 'white'}
     },
     hAxis: {
       textStyle: {color: 'white'}
     },
    textStyle: {
      fontName: 'Times-Roman',
      fontSize: 18,
      bold: false,
      italic: true,
      color: 'white',
      auraColor: '#d799ae',
      opacity: 0.8
    },
    titleTextStyle: {color: 'white'},
    legend: 'none'
   };
   var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));
   chart.draw(data, options);
 }
 //third chart
 //area chart -- represents sales versus ads spent
 google.charts.load('current', {'packages':['corechart']});
 google.charts.setOnLoadCallback(drawChart4);

 function drawChart4() {
   var data = google.visualization.arrayToDataTable([
     ['Month', 'Expense', 'Sales'],
     ['June',  20,      16],
     ['July',  30,      2],
     ['August',  10,       5],
     ['September',  50,      10]
   ]);

   var options = {
     title: 'Ad Performance to Sales of Mugs',
     hAxis: {title: 'Year',  titleTextStyle: {color: 'white'}},
     vAxis: {minValue: 0},
     colors:['#7EBB8B','#8F9DFA'],
     backgroundColor: 'transparent',
     vAxis: {
       textStyle: {color: 'white'}
     },
     hAxis: {
       textStyle: {color: 'white'}
     },
     titleTextStyle: {color: 'white'},
     textStyle: {
       color: 'white'
     },
     legend: { position: 'bottom', textStyle: {color: 'white'} }
   };

   var chart = new google.visualization.AreaChart(document.getElementById('chart_div2'));
   chart.draw(data, options);
   }

   //map for google trends moscow mule mugs
   var trendsinfo = googletrends.trendsdata[0];
   console.log(trendsinfo);
   var googletrenddata = [];
   Object.keys(trendsinfo).forEach(function fbgen (key2) {
     var innergtd = [];
     var key3 = key2;
     console.log(key2);
     key3.split(2)
     innergtd.push(key3);
     innergtd.push(trendsinfo[key3]);
     googletrenddata.push(innergtd);
   });
   googletrenddata.sort();
   googletrenddata.unshift(['Date', 'Interest'])
   console.log(googletrenddata);

   google.charts.load('current', {'packages':['corechart']});
 google.charts.setOnLoadCallback(drawCharttrends);
 function drawCharttrends() {
  var data = google.visualization.arrayToDataTable(googletrenddata);

   var options = {
     title: '12 Month Trend of Moscow Mule Mugs - Google Trends',
     hAxis: {title: 'Date', minValue: 0, maxValue: 15, height: 20, textStyle: {color: 'white'}, legendTextStyle: {color:'white'}},
     vAxis: {title: 'Interest', minValue: 0, maxValue: 15, textStyle: {color: 'white'},legendTextStyle: {color:'white'}},
     legend: 'none',
     backgroundColor: 'transparent',
     titleTextStyle: {color: 'white'},
     legendTextStyle: {color:'white'}
   };

   var chart = new google.visualization.ScatterChart(document.getElementById('chart_divtrends'));

   chart.draw(data, options);
 }

//chart
google.charts.load("current", {packages:['corechart']});
    google.charts.setOnLoadCallback(drawChartposts);
    function drawChartposts() {
      var data = google.visualization.arrayToDataTable([
        ["Type", "Avg Likes", { role: "style" } ],
        ["Text Only", 8.94, "#8F9DFA"],
        ["Picture", 10.49, "#7EBB8B"],
        ["Video", 19.30, "#5A9EC8"],
      ]);

      var view = new google.visualization.DataView(data);
      view.setColumns([0, 1,
                       { calc: "stringify",
                         sourceColumn: 1,
                         type: "string",
                         role: "annotation" },
                       2]);

      var options = {
        title: "Avg Likes to Type of Facebook Post",
        titleTextStyle: {color: 'white'},
        textStyle: {color: 'white'},
        bar: {groupWidth: "95%"},
        backgroundColor: 'transparent',
        legend: { position: "none" },
        vAxis: {
          textStyle: {color: 'white'}
        },
        hAxis: {
          textStyle: {color: 'white'}
        },
      };
      var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_valuesposts"));
      chart.draw(view, options);
  }
})


// *******************
// *******************
// website info controller
.controller('websiteInfoController', function($scope, gaapiFactory){

  $scope.bouncerate = (Number(gaapiFactory.ga_results[0].totalsForAllResults.gabounceRate/100)*100).toFixed(2) + '%';
  $scope.totalwebviews = gaapiFactory.ga_results[0].totalsForAllResults.gapageviews;
  $scope.averagetimeonsite = gaapiFactory.ga_results[0].totalsForAllResults.gaavgTimeOnPage;
  $scope.adsenseAdsViewed = gaapiFactory.ga_results[0].totalsForAllResults.gaadsenseAdsViewed;
//top website chart
  google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart2);

      function drawChart2() {
        var data = google.visualization.arrayToDataTable([
          ['Date', 'Pageviews'],
          ['1',  1],
          ['2',  2],
          ['3',  3],
          ['4',  4],
          ['5',  2],
          ['6',  3],
          ['7',  4],
          ['8',  3],
          ['9',  4],
          ['10',  2],
          ['11',  3],
          ['12',  4],
          ['13',  4],
          ['14',  3],
          ['15',  4],
          ['16',  2],
          ['17',  3],
          ['18',  4],
          ['19',  4],
          ['20',  4],
          ['21',  3],
          ['22',  4],
          ['23',  2],
          ['24',  3],
          ['25',  4],
          ['26',  4],
          ['27',  3],
          ['28',  4],
          ['29',  2],
          ['30',  3],
          ['31',  4]
        ]);

        var options = {
          textStyle:{color: 'white'},
          title:'Monthly Pageviews',
          backgroundColor: 'transparent',
          vAxis: {
            textStyle: {color: 'white'}
          },
          hAxis: {
            textStyle: {color: 'white'}
          },
          titleTextStyle: {color: 'white'},
          // color: 'white',
          colors:['#7EBB8B','#8F9DFA'],
          curveType: 'function',
          // legend: { position: 'bottom' }
          legend: 'none'
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
        colorAxis: {colors: ['#7EBB8B', '#8F9DFA']},
        backgroundColor: 'transparent',
        textStyle:{color: 'white'},
        titleTextStyle: {color: 'white'},
        vAxis: {
          textStyle: {color: 'white'}
        },
        hAxis: {
          textStyle: {color: 'white'}
        },
        legend: {
         textStyle: {
             color: 'white'
         }
       },
       tooltip:{textStyle:{color:'"white'}},
      }
      var chart = new google.visualization.BubbleChart(document.getElementById('chart_div'));
      chart.draw(data, options);
    }

    //area chart -- represents sales versus ads spent
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart4);

    function drawChart4() {
      var data = google.visualization.arrayToDataTable([
        ['Month', 'Expense', 'Sales'],
        ['June',  20,      16],
        ['July',  30,      2],
        ['August',  10,       5],
        ['September',  50,      10]
      ]);

      var options = {
        title: 'Ad Performance to Sales of Mugs',
        hAxis: {title: 'Year',  titleTextStyle: {color: 'white'}},
        vAxis: {minValue: 0},
        colors:['#7EBB8B','#8F9DFA'],
        backgroundColor: 'transparent',
        vAxis: {
          textStyle: {color: 'white'}
        },
        hAxis: {
          textStyle: {color: 'white'}
        },
        titleTextStyle: {color: 'white'},
        textStyle: {
          color: 'white'
        },
        legend: { position: 'bottom', textStyle: {color: 'white'} }
      };

      var chart = new google.visualization.AreaChart(document.getElementById('chart_div2'));
      chart.draw(data, options);
      }

    //second graph, webviews
  function drawChart3() {
   var data = google.visualization.arrayToDataTable([
     ['Date', 'Pageviews'],
     ['1',  1],
     ['2',  2],
     ['3',  3],
     ['4',  4],
     ['5',  2],
     ['6',  3],
     ['7',  4],
     ['8',  3],
     ['9',  4],
     ['10',  2],
     ['11',  3],
     ['12',  4],
     ['13',  4],
     ['14',  3],
     ['15',  4],
     ['16',  2],
     ['17',  3],
     ['18',  4],
     ['19',  4],
     ['20',  4],
     ['21',  3],
     ['22',  4],
     ['23',  2],
     ['24',  3],
     ['25',  4],
     ['26',  4],
     ['27',  3],
     ['28',  4],
     ['29',  2],
     ['30',  3],
     ['31',  4]
   ]);
   var options = {
     title: 'Pageviews',
     colors:['#8F9DFA'],
     curveType: 'function',
     backgroundColor: 'transparent',
     chartArea:{left:40,top:26,right:15,width:'100%',height: '60%'},
     vAxis: {
       textStyle: {color: 'white'}
     },
     hAxis: {
       textStyle: {color: 'white'}
     },
    textStyle: {
      fontName: 'Times-Roman',
      fontSize: 18,
      bold: true,
      italic: true,
      color: 'white',
      auraColor: '#d799ae',
      opacity: 0.8
    },
    legend: 'none'
   };
   var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));
   chart.draw(data, options);
 }
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
