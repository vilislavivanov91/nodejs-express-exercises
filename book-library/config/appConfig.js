const handlerbars = require('express-handlebars')
const port = 4242

module.exports = (app) => {
  app.engine('hbs', handlerbars({extname: 'hbs'}))
  app.set('view engine', 'hbs')

  app.listen(port, () => {
    console.log(`App up an running at localhost:${port}`)
  })
}
