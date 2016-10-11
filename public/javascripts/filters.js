angular.module('moscowMugs.controllers', [])

.filter('percentageFilter', function ($filter) {
  // return  (input, decimals) {
    return $filter('number')(input * 100, decimals) + '%';
  // };
});
