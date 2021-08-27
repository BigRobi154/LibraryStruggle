const knex = require('knex')({
  client: 'pg'
  connection : {
    host: 'localhost'
    database: 'booksdb'
    user: 'postgres'
    password: 'docker'
  }
})
module.exports = knex;