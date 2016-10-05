exports.up = function(knex, Promise) {
          return knex.schema.createTable('cyprusadmin', function(table){
            table.increments();
            table.string('firstname');
            table.string('lastname');
            table.string('username');
            table.string('passwordhash');
            table.string('email');
          });
};

exports.down = function(knex, Promise) {
          return knex.schema.dropTableIfExists('cyprusadmin');
};
