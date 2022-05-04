Спочатку встановлено "express": "^4.18.1" командою npm install express з https://expressjs.com/en/starter/installing.html
Створено папку server і файл index.js скрипт для нього з https://expressjs.com/en/starter/hello-world.html
Запуск сервера командою node server/index.js
Додатково створено дві сторінки contact i users
Для доступу в браузері http://localhost:3000, http://localhost:3000/contact, http://localhost:3000/users

Сам код файла server/index.js

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
