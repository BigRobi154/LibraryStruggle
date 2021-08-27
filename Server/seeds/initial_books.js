
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('books_table').del()
    .then(function () {
      // Inserts seed entries
      return knex('books_table').insert([
        {id: 1, booktitle: 'Bob\'s Cooking', author: 'Bob', isbn: '2469812763', checkedout: true, returndate: new Date(Date.now() + 12096e5)},
        {id: 2, booktitle: 'How to Grill Vegetables The New Bible for Barbecuing Vegetables over Live Fire', author: 'Steven Raichlen', isbn: '9781523509843', checkedout: true, returndate: new Date(Date.now() + 12096e5)},
        {id: 3, booktitle: 'Strip Tease', author: 'Carl Hiaasen', isbn: '9780525431770', checkedout: true, returndate: new Date(Date.now() + 12096e5)},
      ]);
    });
};
