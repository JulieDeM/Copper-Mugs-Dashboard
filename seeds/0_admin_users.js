
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cyprusadmin').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('cyprusadmin').insert({id: 1,  firstname: 'Torrey',lastname: 'demasters', username: 'torreyd', passwordhash:'bacon', email: 'tdemasters@me.com' }),
        knex('cyprusadmin').insert({id: 2,  firstname: 'Tim', lastname: 'demasters', passwordhash: 'bacon', username: 'timd', email: 'timdemast@me.com' }),
        knex('cyprusadmin').insert({id: 3,  firstname: 'Julie', lastname: 'demasters', passwordhash: 'bacon', username: 'jdem', email: 'jdemast@me.com' })
      ]);
    });
};
