app.factory('mugsService', function($http) {
    return {
        all: function() {
            return $http.get('/api/mugs');
        }
    }
})

app.factory('gaapiFactory', function() {

    return {
        apiResults: [],
        getTotal: function() {
            var cart = teaFactory.currentItems;
            var sum = 0;
            var qty = 0;
            for (var i = 0; i < cart.length; i++) {
                sum += (cart[i].price);
                qty += cart[i].qty
            }
            var total = (sum * qty)
            console.log(total);
            return total
            $scope.totalCost = total;
            $scope.totalCost = ($scope.totalCost / 100);
        },
        cartShopping: function() {
            return this.currentItems
        },
        ga_results: [{
                "_id": "55c8ee82152165d244b98300",
                "name": "Bayard stew",
                "ingredients": "concentrated gluten, jewelry, dill, beetle nut, toast",
                "caffeineScale": 244,
                "price": 1540,
                "inStock": true,
                "rating": 1,
                "imageUrl": "http://s7d5.scene7.com/is/image/Teavana/32664_d?$cimg$",
                "__v": 0,
                "categories": ["dark", "cold"]
            },

            {
                "_id": "55c8ee82152165d244b98301",
                "name": "Incompactness syrup",
                "ingredients": "fennel, nutmeg leaves, parsley, cream of 'cream of cream', blarney",
                "caffeineScale": 49,
                "price": 7348,
                "inStock": true,
                "rating": 2,
                "imageUrl": "http://s7d5.scene7.com/is/image/Teavana/32303_d?$cimg$",
                "__v": 0,
                "categories": ["awesome"]
            }, {
                "_id": "55c8ee82152165d244b98302",
                "name": "Flexner white tea",
                "ingredients": "hot sauce, iron, beetle nut, fresco, blarney, raw mashed potato",
                "caffeineScale": 38,
                "price": 4991,
                "inStock": true,
                "rating": 4,
                "imageUrl": "http://s7d5.scene7.com/is/image/Teavana/31358_d?$cimg$",
                "__v": 0,
                "categories": ["cold"]
            }, {
                "_id": "55c8ee82152165d244b98303",
                "name": "Pressor leaf",
                "ingredients": "purina chow, flavorings, pepper, acorns, quality tallow, old sock, bay leaf",
                "caffeineScale": 153,
                "price": 5496,
                "inStock": true,
                "rating": 1,
                "imageUrl": "http://s7d5.scene7.com/is/image/Teavana/31358_d?$cimg$",
                "__v": 0,
                "categories": ["dry", "hot", "awesome"]
            }, {
                "_id": "55c8ee82152165d244b98304",
                "name": "Flexner veggie tea",
                "ingredients": "cream of tartar, eggplant, cake, deer antler",
                "caffeineScale": 181,
                "price": 2445,
                "inStock": true,
                "rating": 1,
                "imageUrl": "http://s7d5.scene7.com/is/image/Teavana/32621_d?$cimg$",
                "__v": 0,
                "categories": ["summer"]
            }, {
                "_id": "55c8ee82152165d244b98305",
                "name": "Topflighter malt",
                "ingredients": "botox, toast, cream of 'cream of 'cream of cream'', kitchen scraps, beef, aligator tongue, lawn clippings",
                "caffeineScale": 241,
                "price": 4486,
                "inStock": true,
                "rating": 3,
                "imageUrl": "http://s7d5.scene7.com/is/image/Teavana/31359_d?$cimg$",
                "__v": 0,
                "categories": ["dry", "lucid", "warm"]
            }, {
                "_id": "55c8ee82152165d244b98306",
                "name": "Cooking mix",
                "ingredients": "flavorings, roasted mushrooms, toast, tumeric",
                "caffeineScale": 230,
                "price": 6973,
                "inStock": true,
                "rating": 3,
                "imageUrl": "http://s7d5.scene7.com/is/image/Teavana/32303_d?$cimg$",
                "__v": 0,
                "categories": ["summer"]
            }, {
                "_id": "55c8ee82152165d244b98307",
                "name": "Cooking stew",
                "ingredients": "eggplant",
                "caffeineScale": 122,
                "price": 6003,
                "inStock": true,
                "rating": 2,
                "imageUrl": "http://s7d5.scene7.com/is/image/Teavana/31358_d?$cimg$",
                "__v": 0,
                "categories": ["dry", "winter", "lucid"]
            }, {
                "_id": "55c8ee82152165d244b98308",
                "name": "Prevenient herb tea",
                "ingredients": "cream of tartar, cream of cream, kitchen scraps, flavorings",
                "caffeineScale": 196,
                "price": 1374,
                "inStock": true,
                "rating": 3,
                "imageUrl": "http://s7d5.scene7.com/is/image/Teavana/32174_d?$cimg$",
                "__v": 0,
                "categories": ["lucid", "hot"]
            }, {
                "_id": "55c8ee82152165d244b98309",
                "name": "Angular mix",
                "ingredients": "hot sauce, lawn clippings, fennel, parsley, quinine",
                "caffeineScale": 196,
                "price": 4158,
                "inStock": true,
                "rating": 2,
                "imageUrl": "http://s7d5.scene7.com/is/image/Teavana/32621_d?$cimg$",
                "__v": 0,
                "categories": ["spring", "warm", "winter"]
            }
        ]
    };
})


// app.factory('facebookService', function($q) {
//     return {
//         getMyLastName: function() {
//             var deferred = $q.defer();
//             FB.api('/me', {
//                 fields: 'last_name'
//             }, function(response) {
//                 if (!response || response.error) {
//                     deferred.reject('Error occured');
//                 } else {
//                     deferred.resolve(response);
//                 }
//             });
//             return deferred.promise;
//         }
//     }
// });



app.factory('cyprusfbFactory', function() {

  return {
    fb_data: [{
      name: "page_posts_impressions",
      period: "day",
      values: [{
        value: 1,
        end_time: "2016-09-29T07:00:00+0000"
      }, {
            value: 1,
            end_time: "2016-09-30T07:00:00+0000"
        }, {
            value: 0,
            end_time: "2016-10-01T07:00:00+0000"
        }],
        title: "Daily Total Impressions of your posts",
        description: "Daily: The number of impressions that came from all of your posts. (Total Count)",
        id: "886221544827048/insights/page_posts_impressions/day"
    }, {
        name: "page_posts_impressions",
        period: "week",
        values: [{
            value: 59,
            end_time: "2016-09-29T07:00:00+0000"
        }, {
            value: 15,
            end_time: "2016-09-30T07:00:00+0000"
        }, {
            value: 7,
            end_time: "2016-10-01T07:00:00+0000"
        }],
        title: "Weekly Total Impressions of your posts",
        description: "Weekly: The number of impressions that came from all of your posts. (Total Count)",
        id: "886221544827048/insights/page_posts_impressions/week"
    }, {
        name: "page_posts_impressions",
        period: "days_28",
        values: [{
            value: 351,
            end_time: "2016-09-29T07:00:00+0000"
        }, {
            value: 352,
            end_time: "2016-09-30T07:00:00+0000"
        }, {
            value: 352,
            end_time: "2016-10-01T07:00:00+0000"
        }],
        title: "28 Days Total Impressions of your posts",
        description: "28 Days: The number of impressions that came from all of your posts. (Total Count)",
        id: "886221544827048/insights/page_posts_impressions/days_28"
    }, {
        name: "page_fans_city",
        period: "lifetime",
        values: [{
            value: {
                Philadelphia,
                PA: 1,
                Greenville,
                PA: 1,
                New Orleans,
                LA: 1,
                Kansas City,
                MO: 1,
                North East,
                PA: 1,
                Westminster,
                CO: 2,
                Sumter,
                SC: 1,
                Kenmore,
                WA: 1,
                Clovis,
                NM: 1,
                Reynosa,
                Tamaulipas,
                Mexico: 2,
                Gunnison,
                CO: 2,
                Lakewood,
                CO: 3,
                Centennial,
                CO: 4,
                Los Angeles,
                CA: 2,
                Las Vegas,
                NV: 1,
                Eugene,
                OR: 2,
                Broomfield,
                CO: 1,
                Englewood,
                CO: 6,
                Chalco,
                NE: 1,
                Colorado Springs,
                CO: 3,
                Oklahoma City,
                OK: 1,
                Boulder,
                CO: 1,
                Dallas,
                TX: 2,
                Aurora,
                CO: 5,
                Denver,
                CO: 18,
                Rayne,
                LA: 1,
                Vancouver,
                BC,
                Canada: 2,
                Byron,
                MN: 1,
                Naranja,
                FL: 1,
                Laredo,
                TX: 1,
                Hearne,
                TX: 1,
                Midlothian,
                IL: 1,
                Lebanon,
                OH: 1,
                White Sulphur Springs,
                WV: 1,
                Waukegan,
                IL: 1,
                Wooster,
                OH: 1,
                Avondale,
                AZ: 1,
                New York,
                NY: 2,
                Middleton,
                ID: 1,
                Barstow,
                CA: 1,
                Watauga,
                TX: 1,
                Akron,
                OH: 2,
                Overland Park,
                KS: 1,
                Stilwell,
                KS: 2,
                Highlands Ranch,
                CO: 2
            },
            end_time: "2016-09-29T07:00:00+0000"
        }, {
            value: {
                Missoula,
                MT: 1,
                Espanola,
                NM: 1,
                Quesnel,
                BC,
                Canada: 1,
                Milwaukee,
                WI: 1,
                North East,
                PA: 1,
                Zion,
                IL: 1,
                Montesilvano,
                Abruzzo,
                Italy: 1,
                Duncan,
                BC,
                Canada: 1,
                Hendricks,
                IN: 1,
                Littleton,
                CO: 1,
                Reynosa,
                Tamaulipas,
                Mexico: 2,
                Gunnison,
                CO: 2,
                Lakewood,
                CO: 3,
                West Orange,
                TX: 1,
                Centennial,
                CO: 4,
                Richmond,
                VA: 1,
                Grand Rapids,
                MI: 1,
                Jackson,
                MS: 1,
                Los Angeles,
                CA: 2,
                Eugene,
                OR: 2,
                Coquitlam,
                BC,
                Canada: 1,
                Broomfield,
                CO: 1,
                Englewood,
                CO: 6,
                Colorado Springs,
                CO: 3,
                Boulder,
                CO: 1,
                Dallas,
                TX: 2,
                Aurora,
                CO: 5,
                Denver,
                CO: 20,
                Mandan,
                ND: 1,
                Vancouver,
                BC,
                Canada: 2,
                Hearne,
                TX: 1,
                Naranja,
                FL: 1,
                Laredo,
                TX: 1,
                Houston,
                TX: 1,
                Midland,
                TX: 1,
                Wooster,
                OH: 1,
                New York,
                NY: 2,
                Caimanera,
                Cienfuegos Province,
                Cuba: 1,
                Lynchburg,
                VA: 1,
                Schuylkill Haven,
                PA: 1,
                Akron,
                OH: 2,
                Fayette,
                WV: 1,
                Speedway,
                IN: 1,
                Highlands Ranch,
                CO: 2,
                Stilwell,
                KS: 2
            },
            end_time: "2016-09-30T07:00:00+0000"
        }, {
            end_time: "2016-10-01T07:00:00+0000"
        }],
        title: "Lifetime Likes by City",
        description: "Lifetime: Aggregated Facebook location data, sorted by city, about the people who like your Page. (Unique Users)",
        id: "886221544827048/insights/page_fans_city/lifetime"
    }, {
        name: "page_fans_gender_age",
        period: "lifetime",
        values: [{
            value: {
                M .25 - 34: 44,
                F .55 - 64: 5,
                M .55 - 64: 3,
                F .35 - 44: 35,
                U .35 - 44: 1,
                F .45 - 54: 10,
                U .25 - 34: 3,
                M .18 - 24: 8,
                M .35 - 44: 37,
                M .45 - 54: 2,
                F .25 - 34: 58,
                F .18 - 24: 11
            },
            end_time: "2016-09-29T07:00:00+0000"
        }, {
            value: {
                M .25 - 34: 44,
                F .55 - 64: 5,
                M .55 - 64: 3,
                F .35 - 44: 35,
                U .35 - 44: 1,
                F .45 - 54: 10,
                U .25 - 34: 3,
                M .18 - 24: 8,
                M .35 - 44: 37,
                M .45 - 54: 2,
                F .25 - 34: 58,
                F .18 - 24: 10
            },
            end_time: "2016-09-30T07:00:00+0000"
        }, {
            end_time: "2016-10-01T07:00:00+0000"
        }],
        title: "Lifetime Likes by Gender and Age",
        description: "Lifetime: Aggregated demographic data about the people who like your Page based on the age and gender information they provide in their user profiles. (Unique Users)",
        id: "886221544827048/insights/page_fans_gender_age/lifetime"
    }, {
        name: "page_fans",
        period: "lifetime",
        values: [{
            value: 217,
            end_time: "2016-09-29T07:00:00+0000"
        }, {
            value: 217,
            end_time: "2016-09-30T07:00:00+0000"
        }, {
            value: 216,
            end_time: "2016-10-01T07:00:00+0000"
        }],
        title: "Lifetime Total Likes",
        description: "Lifetime: The total number of people who have liked your Page. (Unique Users)",
        id: "886221544827048/insights/page_fans/lifetime"
    }, {
        name: "page_views_total",
        period: "day",
        values: [{
            value: 0,
            end_time: "2016-09-29T07:00:00+0000"
        }, {
            value: 0,
            end_time: "2016-09-30T07:00:00+0000"
        }, {
            value: 0,
            end_time: "2016-10-01T07:00:00+0000"
        }],
        title: "Daily Total views count per Page",
        description: "Daily: Total views count per Page",
        id: "886221544827048/insights/page_views_total/day"
    }, {
        name: "page_views_total",
        period: "week",
        values: [{
            value: 22,
            end_time: "2016-09-29T07:00:00+0000"
        }, {
            value: 18,
            end_time: "2016-09-30T07:00:00+0000"
        }, {
            value: 14,
            end_time: "2016-10-01T07:00:00+0000"
        }],
        title: "Weekly Total views count per Page",
        description: "Weekly: Total views count per Page",
        id: "886221544827048/insights/page_views_total/week"
    }, {
        name: "page_views_total",
        period: "days_28",
        values: [{
            value: 82,
            end_time: "2016-09-29T07:00:00+0000"
        }, {
            value: 81,
            end_time: "2016-09-30T07:00:00+0000"
        }, {
            value: 80,
            end_time: "2016-10-01T07:00:00+0000"
        }],
        title: "28 Days Total views count per Page",
        description: "28 Days: Total views count per Page",
        id: "886221544827048/insights/page_views_total/days_28"
    }, {
        name: "page_actions_post_reactions_like_total",
        period: "day",
        values: [{
            value: 0,
            end_time: "2016-09-29T07:00:00+0000"
        }, {
            value: 0,
            end_time: "2016-09-30T07:00:00+0000"
        }, {
            value: 0,
            end_time: "2016-10-01T07:00:00+0000"
        }],
        title: "Daily total post like reactions of a page.",
        description: "Daily: total post like reactions of a page.",
        id: "886221544827048/insights/page_actions_post_reactions_like_total/day"
    }],
    paging: {
        previous: "https://graph.facebook.com/v2.7/886221544827048/insights?metric%5B0%5D=page_actions_post_reactions_like_total&metric%5B1%5D=page_fans&metric%5B2%5D=page_fans_city&metric%5B3%5D=page_fans_gender_age&metric%5B4%5D=page_views_total&metric%5B5%5D=page_posts_impressions&access_token=EAACEdEose0cBACDMKnZCZCY15eST0yYvtnSV2K3EtbmPOyfmrp66UynDNXF5b0tDy5d8AuZAZBQcjEE5y8ul18l576ZA2d5hza1VZClPQNILeEZCq0CWVzJdNYm5kusp17asw5dm9cVgq6gqLFfxt2STZBifVxhLLuVPQzDkMGgIcwZDZD&since=1474827602&until=1475086802",
        next: "https://graph.facebook.com/v2.7/886221544827048/insights?metric%5B0%5D=page_actions_post_reactions_like_total&metric%5B1%5D=page_fans&metric%5B2%5D=page_fans_city&metric%5B3%5D=page_fans_gender_age&metric%5B4%5D=page_views_total&metric%5B5%5D=page_posts_impressions&access_token=EAACEdEose0cBACDMKnZCZCY15eST0yYvtnSV2K3EtbmPOyfmrp66UynDNXF5b0tDy5d8AuZAZBQcjEE5y8ul18l576ZA2d5hza1VZClPQNILeEZCq0CWVzJdNYm5kusp17asw5dm9cVgq6gqLFfxt2STZBifVxhLLuVPQzDkMGgIcwZDZD&since=1475346002&until=1475605202"
    }
  }
