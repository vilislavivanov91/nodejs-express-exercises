const homeHander = require('./home')
const addMemeHandler = require('./addMeme')
const addGenreHandler = require('./addGenre')
const viewAllMemesHandler = require('./viewAllMemes')
const memeDetailsHandler = require('./memeDetails')
const searchMemeHandler = require('./searchMeme')
const resultHandler = require('./result')

const handlers = (app, express) => {
  app.use('/public', express.static('public'))
  app.use(homeHander)
  app.use(addMemeHandler)
  app.use(addGenreHandler)
  app.use(viewAllMemesHandler)
  app.use(memeDetailsHandler)
  app.use(searchMemeHandler)
  app.use(resultHandler)
}

module.exports = handlers
