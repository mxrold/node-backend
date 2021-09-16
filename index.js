const express = require('express')
const { config } = require('./movies-api/config/')
const { moviesApi } = require('./movies-api/routes/movies')
const app = express()

moviesApi(app)

app.listen(config.port, function() {
  console.log(`Listening: http://localhost:${config.port}`)
})