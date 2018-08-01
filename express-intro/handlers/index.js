const homeHander = require('./home')
const addMemeHandler = require('./addMeme')
const viewAllMemesHandler = require('./viewAllMemes')
const memeDetailsHandler = require('./memeDetails')

const handlers = (app, express) => {
  app.use('/public', express.static('public'))
  app.use(homeHander)
  app.use(addMemeHandler)
  app.use(viewAllMemesHandler)
  app.use(memeDetailsHandler)
}

module.exports = handlers
