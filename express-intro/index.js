const express = require('express')
require('./config/dbConfig')

const app = express()
const port = 2121

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('')
})

app.listen(port, () => {
  console.log(`App up and running at localhost:${port}`)
})
