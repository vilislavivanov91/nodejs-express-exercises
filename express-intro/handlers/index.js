const homeHander = require('./home')

const handlers = (app, express) => {
  app.use('/public', express.static('public'))
  app.use(homeHander)
}

module.exports = handlers
