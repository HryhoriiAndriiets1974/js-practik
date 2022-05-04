const express = require('express')
const app = express()
const port = 3000

let users = [
  {name: 'Boby', age: 15},
  {name: 'Emma', age: 20},
  {name: 'Tom', age: 25},
];

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/contact', (req, res) => {
  res.send('World Hello !!!!!!!!!!!!!!!!!')
})

app.get('/users', (req, res) => {
  res.json(users);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
