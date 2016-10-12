var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var queries = require('../lib/queries');


router.get('/all', function(req, res, next){
  queries.all().then(function(muginfo){
    res.json(muginfo)
  })
})

router.get('/create-new', function(req, res, next){
  queries.createUser().then(function(userinfo){
    res.json(userinfo)
  })
})

module.exports = router;
