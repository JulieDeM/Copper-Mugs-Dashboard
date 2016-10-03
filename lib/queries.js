var knex = require('../db/knex');

module.exports ={
  createUser : function(id, username, first_name, last_name){
    return knex.raw(`INSERT INTO cyprusadmin columns(id, username, first_name, last_name) as (DEFAULT, username='${username}', first_name=${first_name}, last_name=${last_name}, password='${password}')`)
  },
  // getUserInfo: function(id){
  //   return knex.raw(`SELECT * FROM cyprusadmin`)
  // },
  // scores: function(){
  //   return knex.raw(`SELECT * from user_games ORDER BY total_score desc`)
  // },
  // // userScore: function(scores){
  // //   return knex.raw(`SELECT * from user_games WHERE fb_id=${fb_id}`)
  // // },
  // userScore: function(scores){
  //   return knex.raw(`SELECT * from user_games`)
  // },
  // updateScores: function(id){
  //   return knex.raw(`UPDATE user_games WHERE id=${id}`)
  // },
  // // getfbuser: function(fbuser){
  // //   return knex.raw(`SELECT * FROM user_games WHERE fb_id = '${fbuser.id}'`)
  // // }
  // getfbuser: function(fbuser){
  //   return knex.raw(`SELECT * FROM user_games WHERE fb_id='${fbuser.id}'`)
  // }
}
