const staticHandler = require('./static')
const homeHandler = require('./home')
const viewAllHandler = require('./viewAll')
const getDetailsHandler = require('./getDetails')
const addMemeHandler = require('./addMeme')
const downloadMemeHandler = require('./downloadMeme')
const errorHandler = require('./error')

const handlers = [
  staticHandler,
  homeHandler,
  viewAllHandler,
  getDetailsHandler,
  addMemeHandler,
  downloadMemeHandler,
  errorHandler
]

module.exports = handlers
