const bodyParser = require('body-parser')
const handlebars = require('express-handlebars')
const port = 2121

module.exports = (app, express) => {
  app.use(bodyParser.urlencoded({
    extended: false
  }))

  app.engine('hbs', handlebars({
    extname: 'hbs'
  }))
  app.set('view engine', 'hbs')

  app.use(express.static('public'))

  app.listen(port, () => {
    console.log(`App up and running at localhost:${port}`)
  })
}
