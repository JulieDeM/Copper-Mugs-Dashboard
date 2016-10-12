var knex = require('../db/knex');

module.exports ={
  createUser : function(id, firstname, lastname, username, passwordhash, email){
    return knex.raw(`INSERT INTO cyprusadmin columns(id, firstname, lastname, username, paswordhash, email) as (DEFAULT, username='${username}', firstname=${firstname}, lastname=${lastname}, passwordhash='${passwordhash}', email='${email}')`)
  },
  all: function(id){
    return knex.raw(`SELECT * FROM cyprusadmin`)
  }
}
