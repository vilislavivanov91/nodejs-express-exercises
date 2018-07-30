const homeHander = require('./home')

const handlers = (app) => {
  app.use(homeHander)
}

module.exports = handlers
