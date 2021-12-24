const express = require('express')
const app = express()

app.get('/', function (req, res) {
    // 1) add method for getting data from DB
    // 2) result from DB put to res.send(result)
  res.send('Hello World')
})

app.listen(3000)