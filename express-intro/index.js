const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
require('./config/dbConfig')
require('./handlers')(app, express)

const port = 2121

app.engine('hbs', handlebars({extname: 'hbs'}))
app.set('view engine', 'hbs')

app.use(express.static('public'))
app.get('/t', (req, res) => {
  res.render('test', {
    title: 'Hello from hbs'
  })
})

app.listen(port, () => {
  console.log(`App up and running at localhost:${port}`)
})
