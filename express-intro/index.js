const express = require('express')
require('./config/dbConfig')

const app = express()
const port = 2121

app.get('/', (req, res) => {
  res.send('Hello from express')
})

app.listen(port, () => {
  console.log(`App up and running at localhost:${port}`)
})
