var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var queries = require('../lib/queries');

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/api/mugs', function(req, res, next){
  queries.all().then(function(muginfo){
    res.json(muginfo)
  })
})

module.exports = router;
