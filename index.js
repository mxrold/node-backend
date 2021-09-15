const express = require('express')
const { config } = require('./movies-api/config/')
const app = express()

app.get('/', function(req, res) {
  res.send('Hello World!')
})

app.get('/json', function(req, res) {
  res.json({ hello: 'World!' })
})

app.listen(config.port, function() {
  console.log(`Listening: http://localhost:${config.port}`)
})