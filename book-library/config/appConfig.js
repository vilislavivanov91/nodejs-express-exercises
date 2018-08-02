const handlerbars = require('express-handlebars')
const port = 4242

module.exports = (app, express) => {
  app.engine('hbs', handlerbars({extname: 'hbs', defaultLayout: 'main'}))
  app.set('view engine', 'hbs')

  app.use(express.static('public'))

  app.listen(port, () => {
    console.log(`App up an running at localhost:${port}`)
  })
}
