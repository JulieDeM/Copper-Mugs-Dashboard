angular.module('moscowMugs.factory', [])

.factory('queries_apicall', function($http) {
    return {
        all: function() {
            return $http.get('/api/cyprusadmin/all');
        },
        createUser: function(){
          return $http.get('/api/cyprusadmin/create-new')
        }
    }
})

.factory('googletrends', function(){
  return {
    trendsdata: [
      {
    "10/11/15" :	18,
    "10/18/15" :	15,
    "10/25/15" :	16,
    '11/1/15' :	16,
    '11/8/15' :	28,
    '11/15/15' :	37,
    '11/22/15' :	63,
    '11/29/15' : 74,
    '12/6/15' :	87,
    '12/13/15' :	100,
    '12/20/15' :	87,
    '12/27/15' :	44,
    '1/3/16' :	21,
    '1/10/16' :	19,
    '1/17/16' :	16,
    '1/24/16' :	15,
    '1/31/16'	:16,
    '2/7/16'	:16,
    '2/14/16'	:15,
    '2/21/16'	:14,
    '2/28/16'	:13,
    '3/6/16'	:13,
    '3/13/16'	:14,
    '3/20/16'	:13,
    '3/27/16'	:11,
    '4/3/16'	:12,
    '4/10/16'	:14,
    '4/17/16'	:14,
    '4/24/16'	:19,
    '5/1/16'	:19,
    '5/8/16'	:17,
    '5/15/16'	:18,
    '5/22/16'	:20,
    '5/29/16'	:26,
    '6/5/16'	:17,
    '6/12/16'	:26,
    '6/19/16'	:22,
    '6/26/16'	:23,
    '7/3/16'	:26,
    '7/10/16'	:22,
    '7/17/16'	:21,
    '7/24/16'	:17,
    '7/31/16'	:20,
    '8/7/16'	:18,
    '8/14/16'	:16,
    '8/21/16'	:19,
    '8/28/16'	: 16,
    '9/4/16'	: 22,
    '9/11/16'	: 17,
    '9/18/16'	: 17,
    '9/25/16'	: 14,
    '10/2/16'	: 14,
    '10/9/16'	: 20
      }
    ]
  }
})

.factory('gaapiFactory', function() {

    return {
        apiResults: [],
        ga_results: [
          {
            kind: "analytics#gaData",
            id: "https://www.googleapis.com/analytics/v3/data/ga?ids=ga:122459357&metrics=ga:users,ga:newUsers,ga:percentNewSessions,ga:bounceRate,ga:entranceRate,ga:pageviews,ga:uniquePageviews,ga:avgTimeOnPage,ga:exitRate,ga:adsenseAdsViewed&start-date=30daysAgo&end-date=yesterday",
            query: {
            startdate: "30daysAgo",
            enddate: "yesterday",
            ids: "ga:122459357",
            metrics: [
            "ga:users",
            "ga:newUsers",
            "ga:percentNewSessions",
            "ga:bounceRate",
            "ga:entranceRate",
            "ga:pageviews",
            "ga:uniquePageviews",
            "ga:avgTimeOnPage",
            "ga:exitRate",
            "ga:adsenseAdsViewed"
            ],
            startindex: 1,
            maxresults: 1000
            },
            itemsPerPage: 1000,
            totalResults: 1,
            selfLink: "https://www.googleapis.com/analytics/v3/data/ga?ids=ga:122459357&metrics=ga:users,ga:newUsers,ga:percentNewSessions,ga:bounceRate,ga:entranceRate,ga:pageviews,ga:uniquePageviews,ga:avgTimeOnPage,ga:exitRate,ga:adsenseAdsViewed&start-date=30daysAgo&end-date=yesterday",
            profileInfo: {
            profileId: "122459357",
            accountId: "78137905",
            webPropertyId: "UA-78137905-1",
            internalWebPropertyId: "117094232",
            profileName: "All Web Site Data",
            tableId: "ga:122459357"
            },
            containsSampledData: false,
            columnHeaders: [
            {
            name: "ga:users",
            columnType: "METRIC",
            dataType: "INTEGER"
            },
            {
            name: "ga:newUsers",
            columnType: "METRIC",
            dataType: "INTEGER"
            },
            {
            name: "ga:percentNewSessions",
            columnType: "METRIC",
            dataType: "PERCENT"
            },
            {
            name: "ga:bounceRate",
            columnType: "METRIC",
            dataType: "PERCENT"
            },
            {
            name: "ga:entranceRate",
            columnType: "METRIC",
            dataType: "PERCENT"
            },
            {
            name: "ga:pageviews",
            columnType: "METRIC",
            dataType: "INTEGER"
            },
            {
            name: "ga:uniquePageviews",
            columnType: "METRIC",
            dataType: "INTEGER"
            },
            {
            name: "ga:avgTimeOnPage",
            columnType: "METRIC",
            dataType: "TIME"
            },
            {
            name: "ga:exitRate",
            columnType: "METRIC",
            dataType: "PERCENT"
            },
            {
            name: "ga:adsenseAdsViewed",
            columnType: "METRIC",
            dataType: "INTEGER"
            }
            ],
            totalsForAllResults: {
            gausers: "1",
            ganewUsers: "1",
            gapercentNewSessions: "11.11111111111111",
            gabounceRate: "11.11111111111111",
            gaentranceRate: "2.9702970297029703",
            gapageviews: "303",
            gauniquePageviews: "9",
            gaavgTimeOnPage: "44.863945578231295",
            gaexitRate: "2.9702970297029703",
            gaadsenseAdsViewed: "0"
            },
            rows: [
            [
            "1",
            "1",
            "11.11111111111111",
            "11.11111111111111",
            "2.9702970297029703",
            "303",
            "9",
            "44.863945578231295",
            "2.9702970297029703",
            "0"
            ]
          ]
        }


        ]
    };
})

.factory('cyprusfbFactory', function() {

  return {
  data: [
    {
      "name": "page_impressions",
      "period": "day",
      "values": [
        {
          "value": 1,
          "end_time": "2016-10-06T07:00:00+0000"
        },
        {
          "value": 2,
          "end_time": "2016-10-07T07:00:00+0000"
        },
        {
          "value": 3,
          "end_time": "2016-10-08T07:00:00+0000"
        }
      ],
      "title": "Daily Total Impressions",
      "description": "Daily: The number of impressions seen of any content associated with your Page. (Total Count)",
      "id": "886221544827048/insights/page_impressions/day"
    },
    {
      "name": "page_impressions",
      "period": "week",
      "values": [
        {
          "value": 15,
          "end_time": "2016-10-06T07:00:00+0000"
        },
        {
          "value": 14,
          "end_time": "2016-10-07T07:00:00+0000"
        },
        {
          "value": 16,
          "end_time": "2016-10-08T07:00:00+0000"
        }
      ],
      "title": "Weekly Total Impressions",
      "description": "Weekly: The number of impressions seen of any content associated with your Page. (Total Count)",
      "id": "886221544827048/insights/page_impressions/week"
    },
    {
      "name": "page_impressions",
      "period": "days_28",
      "values": [
        {
          "value": 580,
          "end_time": "2016-10-06T07:00:00+0000"
        },
        {
          "value": 567,
          "end_time": "2016-10-07T07:00:00+0000"
        },
        {
          "value": 566,
          "end_time": "2016-10-08T07:00:00+0000"
        }
      ],
      "title": "28 Days Total Impressions",
      "description": "28 Days: The number of impressions seen of any content associated with your Page. (Total Count)",
      "id": "886221544827048/insights/page_impressions/days_28"
    },
    {
      "name": "page_impressions_paid",
      "period": "day",
      "values": [
        {
          "value": 0,
          "end_time": "2016-10-06T07:00:00+0000"
        },
        {
          "value": 0,
          "end_time": "2016-10-07T07:00:00+0000"
        },
        {
          "value": 0,
          "end_time": "2016-10-08T07:00:00+0000"
        }
      ],
      "title": "Daily Paid Impressions",
      "description": "Daily: The number of impressions of a Sponsored Story or Ad pointing to your Page. (Total Count)",
      "id": "886221544827048/insights/page_impressions_paid/day"
    },
    {
      "name": "page_impressions_paid",
      "period": "week",
      "values": [
        {
          "value": 0,
          "end_time": "2016-10-06T07:00:00+0000"
        },
        {
          "value": 0,
          "end_time": "2016-10-07T07:00:00+0000"
        },
        {
          "value": 0,
          "end_time": "2016-10-08T07:00:00+0000"
        }
      ],
      "title": "Weekly Paid Impressions",
      "description": "Weekly: The number of impressions of a Sponsored Story or Ad pointing to your Page. (Total Count)",
      "id": "886221544827048/insights/page_impressions_paid/week"
    },
    {
      "name": "page_impressions_paid",
      "period": "days_28",
      "values": [
        {
          "value": 0,
          "end_time": "2016-10-06T07:00:00+0000"
        },
        {
          "value": 0,
          "end_time": "2016-10-07T07:00:00+0000"
        },
        {
          "value": 0,
          "end_time": "2016-10-08T07:00:00+0000"
        }
      ],
      "title": "28 Days Paid Impressions",
      "description": "28 Days: The number of impressions of a Sponsored Story or Ad pointing to your Page. (Total Count)",
      "id": "886221544827048/insights/page_impressions_paid/days_28"
    },
    {
      "name": "page_negative_feedback",
      "period": "day",
      "values": [
        {
          "value": 0,
          "end_time": "2016-10-06T07:00:00+0000"
        },
        {
          "value": 0,
          "end_time": "2016-10-07T07:00:00+0000"
        },
        {
          "value": 0,
          "end_time": "2016-10-08T07:00:00+0000"
        }
      ],
      "title": "Daily Negative Feedback From Users",
      "description": "Daily: The number of times people have given negative feedback to your Page. (Total Count)",
      "id": "886221544827048/insights/page_negative_feedback/day"
    },
    {
      "name": "page_negative_feedback",
      "period": "week",
      "values": [
        {
          "value": 0,
          "end_time": "2016-10-06T07:00:00+0000"
        },
        {
          "value": 0,
          "end_time": "2016-10-07T07:00:00+0000"
        },
        {
          "value": 0,
          "end_time": "2016-10-08T07:00:00+0000"
        }
      ],
      "title": "Weekly Negative Feedback From Users",
      "description": "Weekly: The number of times people have given negative feedback to your Page. (Total Count)",
      "id": "886221544827048/insights/page_negative_feedback/week"
    },
    {
      "name": "page_negative_feedback",
      "period": "days_28",
      "values": [
        {
          "value": 0,
          "end_time": "2016-10-06T07:00:00+0000"
        },
        {
          "value": 0,
          "end_time": "2016-10-07T07:00:00+0000"
        },
        {
          "value": 0,
          "end_time": "2016-10-08T07:00:00+0000"
        }
      ],
      "title": "28 Days Negative Feedback From Users",
      "description": "28 Days: The number of times people have given negative feedback to your Page. (Total Count)",
      "id": "886221544827048/insights/page_negative_feedback/days_28"
    },
    {
      "name": "page_fan_removes",
      "period": "day",
      "values": [
        {
          "value": 0,
          "end_time": "2016-10-06T07:00:00+0000"
        },
        {
          "value": 0,
          "end_time": "2016-10-07T07:00:00+0000"
        },
        {
          "value": 0,
          "end_time": "2016-10-08T07:00:00+0000"
        }
      ],
      "title": "Daily Unlikes",
      "description": "Daily: The number of Unlikes of your Page (Total Count)",
      "id": "886221544827048/insights/page_fan_removes/day"
    },
    {
      "name": "page_posts_impressions",
      "period": "day",
      "values": [
        {
          "value": 0,
          "end_time": "2016-10-06T07:00:00+0000"
        },
        {
          "value": 0,
          "end_time": "2016-10-07T07:00:00+0000"
        },
        {
          "value": 0,
          "end_time": "2016-10-08T07:00:00+0000"
        }
      ],
      "title": "Daily Total Impressions of your posts",
      "description": "Daily: The number of impressions that came from all of your posts. (Total Count)",
      "id": "886221544827048/insights/page_posts_impressions/day"
    },
    {
      "name": "page_posts_impressions",
      "period": "week",
      "values": [
        {
          "value": 3,
          "end_time": "2016-10-06T07:00:00+0000"
        },
        {
          "value": 2,
          "end_time": "2016-10-07T07:00:00+0000"
        },
        {
          "value": 2,
          "end_time": "2016-10-08T07:00:00+0000"
        }
      ],
      "title": "Weekly Total Impressions of your posts",
      "description": "Weekly: The number of impressions that came from all of your posts. (Total Count)",
      "id": "886221544827048/insights/page_posts_impressions/week"
    },
    {
      "name": "page_posts_impressions",
      "period": "days_28",
      "values": [
        {
          "value": 329,
          "end_time": "2016-10-06T07:00:00+0000"
        },
        {
          "value": 329,
          "end_time": "2016-10-07T07:00:00+0000"
        },
        {
          "value": 329,
          "end_time": "2016-10-08T07:00:00+0000"
        }
      ],
      "title": "28 Days Total Impressions of your posts",
      "description": "28 Days: The number of impressions that came from all of your posts. (Total Count)",
      "id": "886221544827048/insights/page_posts_impressions/days_28"
    },
    {
      "name": "page_fan_adds_by_paid_non_paid_unique",
      "period": "day",
      "values": [
        {
          "value": {
            "total": 0,
            "unpaid": 0,
            "paid": 0
          },
          "end_time": "2016-10-06T07:00:00+0000"
        },
        {
          "value": {
            "total": 0,
            "unpaid": 0,
            "paid": 0
          },
          "end_time": "2016-10-07T07:00:00+0000"
        },
        {
          "value": {
            "total": 0,
            "unpaid": 0,
            "paid": 0
          },
          "end_time": "2016-10-08T07:00:00+0000"
        }
      ],
      "title": "Daily New likes by paid and non-paid",
      "description": "Daily: The number of new people who have liked your page broken down by paid and non-paid. (Unique Users)",
      "id": "886221544827048/insights/page_fan_adds_by_paid_non_paid_unique/day"
    },
    {
      "name": "page_fans_city",
      "period": "lifetime",
      "values": [
        {
          "value": {
            "Philadelphia, PA": 1,
            "Nashwauk, MN": 1,
            "Denham Springs, LA": 1,
            "Tilden, NE": 1,
            "El Segundo, CA": 1,
            "Seattle, WA": 1,
            "Santa Clara, Villa Clara Province, Cuba": 1,
            "Quesnel, BC, Canada": 1,
            "Westminster, CO": 2,
            "Sumter, SC": 1,
            "Duncan, BC, Canada": 1,
            "Shallowater, TX": 1,
            "Homer, AK": 1,
            "Schertz, TX": 1,
            "Jasper, TN": 1,
            "Littleton, CO": 2,
            "Kellogg, ID": 1,
            "Fairbanks, AK": 1,
            "Gunnison, CO": 2,
            "Lakewood, CO": 3,
            "Centennial, CO": 4,
            "Melbourne, VIC, Australia": 1,
            "Los Angeles, CA": 2,
            "Eugene, OR": 2,
            "Chesapeake, VA": 2,
            "Englewood, CO": 6,
            "Colorado Springs, CO": 3,
            "Oklahoma City, OK": 1,
            "Dallas, TX": 2,
            "Aurora, CO": 5,
            "Denver, CO": 19,
            "Sherman Oaks, CA": 1,
            "Geigertown, PA": 1,
            "Vancouver, BC, Canada": 2,
            "Hearne, TX": 1,
            "Estero, FL": 1,
            "Mexico City, Distrito Federal, Mexico": 2,
            "Auckland, Auckland Region, New Zealand": 1,
            "Avondale, AZ": 1,
            "New York, NY": 2,
            "Ouachita, AR": 1,
            "Akron, OH": 2,
            "Overland Park, KS": 1,
            "Stilwell, KS": 2,
            "Highlands Ranch, CO": 2
          },
          "end_time": "2016-10-06T07:00:00+0000"
        },
        {
          "value": {
            "Tilden, NE": 1,
            "Calgary, AB, Canada": 1,
            "Lexington, SC": 1,
            "Westminster, CO": 2,
            "Omaha, NE": 1,
            "Duncan, BC, Canada": 1,
            "Littleton, CO": 2,
            "Rockford, MI": 1,
            "North Highlands, CA": 1,
            "Gunnison, CO": 2,
            "Lakewood, CO": 3,
            "Moradabad, Uttar Pradesh, India": 1,
            "Montoursville, PA": 1,
            "Centennial, CO": 4,
            "Los Angeles, CA": 2,
            "Eugene, OR": 2,
            "Chesapeake, VA": 2,
            "Englewood, CO": 6,
            "Colorado Springs, CO": 3,
            "Oklahoma City, OK": 1,
            "Boulder, CO": 1,
            "Dallas, TX": 2,
            "Aurora, CO": 5,
            "Denver, CO": 19,
            "Geigertown, PA": 1,
            "Big River, CA": 1,
            "Vancouver, BC, Canada": 2,
            "Springfield, MI": 1,
            "Jackson Center, PA": 1,
            "Houston, TX": 1,
            "Mexico City, Distrito Federal, Mexico": 2,
            "Bastrop, LA": 1,
            "White Sulphur Springs, WV": 1,
            "Palmer, AK": 1,
            "Laconia, NH": 1,
            "West Milford, NJ": 1,
            "New York, NY": 2,
            "Ouachita, AR": 1,
            "Watauga, TX": 1,
            "Akron, OH": 2,
            "Overland Park, KS": 1,
            "Grand Junction, CO": 1,
            "Stilwell, KS": 2,
            "Highlands Ranch, CO": 2,
            "Sangamon, IL": 1
          },
          "end_time": "2016-10-07T07:00:00+0000"
        },
        {
          "value": {
            "Mount Pleasant, MI": 1,
            "Sumter, SC": 1,
            "Perryopolis, PA": 1,
            "Surprise, AZ": 1,
            "Homer, AK": 1,
            "Schertz, TX": 1,
            "Clovis, NM": 1,
            "Reynosa, Tamaulipas, Mexico": 2,
            "Rockford, MI": 1,
            "Woodbine, KY": 1,
            "Gunnison, CO": 2,
            "Lakewood, CO": 3,
            "Knoxville, TN": 1,
            "Birmingham, AL": 1,
            "Centennial, CO": 4,
            "Los Angeles, CA": 2,
            "Eugene, OR": 2,
            "Chesapeake, VA": 2,
            "Englewood, CO": 6,
            "Colorado Springs, CO": 3,
            "Dallas, TX": 2,
            "Port Coquitlam, BC, Canada": 1,
            "Aurora, CO": 5,
            "Denver, CO": 20,
            "Istanbul, Istanbul Province, Turkey": 1,
            "Mandan, ND": 1,
            "Cleveland, OH": 1,
            "Big River, CA": 1,
            "Vancouver, BC, Canada": 2,
            "North Perry, OH": 1,
            "Bartlett, IL": 1,
            "Eger, Heves County, Hungary": 1,
            "Dakar, Dakar Region, Senegal": 1,
            "Lebanon, OH": 1,
            "Midland, TX": 1,
            "Neshoba, MS": 1,
            "Kingsport, TN": 1,
            "New York, NY": 2,
            "Middleton, ID": 1,
            "Lynchburg, VA": 1,
            "Akron, OH": 2,
            "Hotchkiss, CO": 1,
            "Stilwell, KS": 2,
            "Highlands Ranch, CO": 2,
            "Sangamon, IL": 1
          },
          "end_time": "2016-10-08T07:00:00+0000"
        }
      ],
      "title": "Lifetime Likes by City",
      "description": "Lifetime: Aggregated Facebook location data, sorted by city, about the people who like your Page. (Unique Users)",
      "id": "886221544827048/insights/page_fans_city/lifetime"
    },
    {
      "name": "page_fans_country",
      "period": "lifetime",
      "values": [
        {
          "value": {
            "IN": 1,
            "CH": 1,
            "MX": 3,
            "IT": 5,
            "NZ": 1,
            "HU": 1,
            "CU": 2,
            "SG": 1,
            "AU": 2,
            "SN": 1,
            "CA": 8,
            "US": 189,
            "TR": 1
          },
          "end_time": "2016-10-06T07:00:00+0000"
        },
        {
          "value": {
            "IN": 1,
            "CH": 1,
            "MX": 3,
            "IT": 5,
            "NZ": 1,
            "HU": 1,
            "CU": 2,
            "SG": 1,
            "AU": 2,
            "SN": 1,
            "CA": 8,
            "US": 189,
            "TR": 1
          },
          "end_time": "2016-10-07T07:00:00+0000"
        },
        {
          "value": {
            "IN": 1,
            "CH": 1,
            "MX": 3,
            "IT": 5,
            "NZ": 1,
            "HU": 1,
            "CU": 2,
            "SG": 1,
            "AU": 2,
            "SN": 1,
            "CA": 8,
            "US": 189,
            "TR": 1
          },
          "end_time": "2016-10-08T07:00:00+0000"
        }
      ],
      "title": "Lifetime Likes by Country",
      "description": "Lifetime: Aggregated Facebook location data, sorted by country, about the people who like your Page. (Unique Users)",
      "id": "886221544827048/insights/page_fans_country/lifetime"
    },
    {
      "name": "page_fans_gender_age",
      "period": "lifetime",
      "values": [
        {
          "value": {
            "M.25-34": 44,
            "F.55-64": 5,
            "M.55-64": 3,
            "F.35-44": 36,
            "U.35-44": 1,
            "F.45-54": 10,
            "U.25-34": 3,
            "M.18-24": 8,
            "M.35-44": 37,
            "M.45-54": 2,
            "F.25-34": 57,
            "F.18-24": 10
          },
          "end_time": "2016-10-06T07:00:00+0000"
        },
        {
          "value": {
            "M.25-34": 44,
            "F.55-64": 5,
            "M.55-64": 3,
            "F.35-44": 36,
            "U.35-44": 1,
            "F.45-54": 10,
            "U.25-34": 3,
            "M.18-24": 8,
            "M.35-44": 37,
            "M.45-54": 2,
            "F.25-34": 57,
            "F.18-24": 10
          },
          "end_time": "2016-10-07T07:00:00+0000"
        },
        {
          "value": {
            "M.25-34": 44,
            "F.55-64": 5,
            "M.55-64": 3,
            "F.35-44": 36,
            "U.35-44": 1,
            "F.45-54": 10,
            "U.25-34": 3,
            "M.18-24": 8,
            "M.35-44": 37,
            "M.45-54": 2,
            "F.25-34": 57,
            "F.18-24": 10
          },
          "end_time": "2016-10-08T07:00:00+0000"
        }
      ],
      "title": "Lifetime Likes by Gender and Age",
      "description": "Lifetime: Aggregated demographic data about the people who like your Page based on the age and gender information they provide in their user profiles. (Unique Users)",
      "id": "886221544827048/insights/page_fans_gender_age/lifetime"
    },
    {
      "name": "page_fans",
      "period": "lifetime",
      "values": [
        {
          "value": 216,
          "end_time": "2016-10-06T07:00:00+0000"
        },
        {
          "value": 216,
          "end_time": "2016-10-07T07:00:00+0000"
        },
        {
          "value": 216,
          "end_time": "2016-10-08T07:00:00+0000"
        }
      ],
      "title": "Lifetime Total Likes",
      "description": "Lifetime: The total number of people who have liked your Page. (Unique Users)",
      "id": "886221544827048/insights/page_fans/lifetime"
    },
    {
      "name": "page_views_total",
      "period": "day",
      "values": [
        {
          "value": 0,
          "end_time": "2016-10-06T07:00:00+0000"
        },
        {
          "value": 1,
          "end_time": "2016-10-07T07:00:00+0000"
        },
        {
          "value": 1,
          "end_time": "2016-10-08T07:00:00+0000"
        }
      ],
      "title": "Daily Total views count per Page",
      "description": "Daily: Total views count per Page",
      "id": "886221544827048/insights/page_views_total/day"
    },
    {
      "name": "page_views_total",
      "period": "week",
      "values": [
        {
          "value": 1,
          "end_time": "2016-10-06T07:00:00+0000"
        },
        {
          "value": 2,
          "end_time": "2016-10-07T07:00:00+0000"
        },
        {
          "value": 3,
          "end_time": "2016-10-08T07:00:00+0000"
        }
      ],
      "title": "Weekly Total views count per Page",
      "description": "Weekly: Total views count per Page",
      "id": "886221544827048/insights/page_views_total/week"
    },
    {
      "name": "page_views_total",
      "period": "days_28",
      "values": [
        {
          "value": 71,
          "end_time": "2016-10-06T07:00:00+0000"
        },
        {
          "value": 70,
          "end_time": "2016-10-07T07:00:00+0000"
        },
        {
          "value": 69,
          "end_time": "2016-10-08T07:00:00+0000"
        }
      ],
      "title": "28 Days Total views count per Page",
      "description": "28 Days: Total views count per Page",
      "id": "886221544827048/insights/page_views_total/days_28"
    },
    {
      "name": "page_actions_post_reactions_like_total",
      "period": "day",
      "values": [
        {
          "value": 0,
          "end_time": "2016-10-06T07:00:00+0000"
        },
        {
          "value": 0,
          "end_time": "2016-10-07T07:00:00+0000"
        },
        {
          "value": 0,
          "end_time": "2016-10-08T07:00:00+0000"
        }
      ],
      "title": "Daily total post like reactions of a page.",
      "description": "Daily: total post like reactions of a page.",
      "id": "886221544827048/insights/page_actions_post_reactions_like_total/day"
    }
  ],
  "paging": {
    "previous": "https://graph.facebook.com/v2.8/886221544827048/insights?access_token=EAACEdEose0cBACAruaWNY8kZBd9G9UY6uKVim0jGDarJUJ1rTM7ptY105hWh1Blc1d1jdf8fc5QKjvYAgus39WVZAnkuo0qvHPew374XhwZB3qDBsTwSsjOSfxJsvBOVUQxYyEqdKBHRWtBWC9VH04cTsMCkbmZChZAIRtTQ8JAZDZD&debug=all&format=json&method=get&metric=%5B%22page_actions_post_reactions_like_total%22%2C%22page_impressions%22%2C%22page_impressions_paid%22%2C%22page_negative_feedback%22%2C%22page_fan_adds_by_paid_non_paid_unique%22%2C%22page_fans%22%2C%22page_fans_city%22%2C%22page_fans_country%22%2C%22page_fans_gender_age%22%2C%22page_fan_removes%22%2C%22page_views_total%22%2C%22page_posts_impressions%22%2C%22post_impressions_paid%22%2C%22post_video_avg_time_watched%22%2C%22domain_feed_clicks%22%5D&pretty=0&suppress_http_code=1&since=1475421760&until=1475680960",
    "next": "https://graph.facebook.com/v2.8/886221544827048/insights?access_token=EAACEdEose0cBACAruaWNY8kZBd9G9UY6uKVim0jGDarJUJ1rTM7ptY105hWh1Blc1d1jdf8fc5QKjvYAgus39WVZAnkuo0qvHPew374XhwZB3qDBsTwSsjOSfxJsvBOVUQxYyEqdKBHRWtBWC9VH04cTsMCkbmZChZAIRtTQ8JAZDZD&debug=all&format=json&method=get&metric=%5B%22page_actions_post_reactions_like_total%22%2C%22page_impressions%22%2C%22page_impressions_paid%22%2C%22page_negative_feedback%22%2C%22page_fan_adds_by_paid_non_paid_unique%22%2C%22page_fans%22%2C%22page_fans_city%22%2C%22page_fans_country%22%2C%22page_fans_gender_age%22%2C%22page_fan_removes%22%2C%22page_views_total%22%2C%22page_posts_impressions%22%2C%22post_impressions_paid%22%2C%22post_video_avg_time_watched%22%2C%22domain_feed_clicks%22%5D&pretty=0&suppress_http_code=1&since=1475940160&until=1476199360"
    }
  }
})
