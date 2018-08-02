const homeHandler = require('./home')

module.exports = (app) => {
  app.use(homeHandler)
}
