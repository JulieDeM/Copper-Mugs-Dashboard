
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cyprusadmin').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('cyprusadmin').insert({id: 1, colName: 'rowValue1'}),
        knex('cyprusadmin').insert({id: 2, colName: 'rowValue2'}),
        knex('cyprusadmin').insert({id: 3, colName: 'rowValue3'})
      ]);
    });
};
