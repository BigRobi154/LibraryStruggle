exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users_table').del()
    .then(function () {
      // Inserts seed entries
      return knex('users_table').insert([
        {id: 1, firstname: 'Billy', lastname: 'Bob'},
        {id: 2, firstname: 'Buffalo', lastname: 'Bill'},
        {id: 3, firstname: 'Tucan', lastname: 'Sam'},
      ]);
    });
};
