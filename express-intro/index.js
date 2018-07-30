const express = require('express')
const app = express()
require('./config/dbConfig')
require('./handlers')(app)

const port = 2121

app.use(express.static('public'))

app.listen(port, () => {
  console.log(`App up and running at localhost:${port}`)
})
