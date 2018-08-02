const handlerbars = require('express-handlebars')
const bodyParser = require('body-parser')
const port = 4242

module.exports = (app, express) => {
  app.engine('hbs', handlerbars({extname: 'hbs', defaultLayout: 'main'}))
  app.set('view engine', 'hbs')

  app.use(bodyParser.urlencoded({extended: true}))

  app.use(express.static('public'))

  app.listen(port, () => {
    console.log(`App up an running at localhost:${port}`)
  })
}
