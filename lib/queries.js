var knex = require('../db/knex');

module.exports ={
  createUser : function(id, username, first_name, last_name){
    return knex.raw(`INSERT INTO cyprusadmin columns(id, username, first_name, last_name) as (DEFAULT, username='${username}', first_name=${first_name}, last_name=${last_name}, password='${password}')`)
  },
  getUserInfo: function(id){
    return knex.raw(`SELECT * FROM cyprusadmin`)
  }
}
