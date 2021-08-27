
exports.up = function(knex) {
    return knex.schema.createTable('books_table', table => {
        table.increments('id'); // adds an auto incrementing PK column
        table.string('booktitle').notNullable();
        table.string('author').notNullable();
        table.string('isbn').notNullable();
        table.boolean('checkedout').notNullable();
        table.timestamps(true, true); // adds created_at and updated_at
      });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('books_table');
};
