const homeHandler = require('./home')
const viewAllHandler = require('./viewAll')
const getDetailsHandler = require('./getDetails')
const addMemeHandler = require('./addMeme')
const errorHandler = require('./error')

const handlers = [
  homeHandler,
  viewAllHandler,
  getDetailsHandler,
  addMemeHandler,
  errorHandler
]

module.exports = handlers
