const express = require('express')
const app = express()
const PORT = 3030
const knex = require('knex')(require('./knexfile.js')['development'])
// ({
//   client: 'pg'
//   connection : {
//     host: 'localhost'
//     database: 'booksdb'
//     user: 'postgres'
//     password: 'docker'
//   }
// })

app.get('/', (req, res) => {
  res.send('All Abord The Stuggle Bus...')
})

app.get('/books/:id', (req, res) => ){
  //res.send('Somebody once told me...')
  // res.send(books[req.params.booksId])
/*
const movies = JSON.parse(fs.readFileSync("movies.JSON"))
app.get('/movies/:movieId', (req, res) => res.send(movies[req.params.movieId]))
*/

  knex
  .select()
  .from('books_table')
  // .where('id', id)
    .then(data => res.status(200).json(data))
  .catch(err =>
    res.status(404).json({
      message:
        'The book you are looking for could not be found. Please try again'
    })
  );
})


app.get('/users/:id', (req, res) => {
  //res.send('Somebody once told me...')
  knex
  .select('*')
  .from('users_table')
  .then(data => res.status(200).json(data))
  .catch(err =>
    res.status(404).json({
      message:
        'The user you are looking for could not be found. Please try again'
    })
  );
})

app.listen(PORT, () => {
  console.log(`The server is running on ${PORT}`)
})