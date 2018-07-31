const homeHander = require('./home')
const addMemeHandler = require('./addMeme')
const viewAllMemesHandler = require('./viewAllMemes')

const handlers = (app, express) => {
  app.use('/public', express.static('public'))
  app.use(homeHander)
  app.use(addMemeHandler)
  app.use(viewAllMemesHandler)
}

module.exports = handlers
