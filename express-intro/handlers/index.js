const homeHander = require('./home')
const addMemeHandler = require('./addMeme')

const handlers = (app, express) => {
  app.use('/public', express.static('public'))
  app.use(homeHander)
  app.use(addMemeHandler)
}

module.exports = handlers
