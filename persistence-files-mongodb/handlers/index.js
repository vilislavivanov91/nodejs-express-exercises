const staticHandler = require('./static')
const homeHandler = require('./home')
const viewAllHandler = require('./viewAll')
const getDetailsHandler = require('./getDetails')
const addMemeHandler = require('./addMeme')
const downloadMemeHandler = require('./downloadMeme')
const addTagHandler = require('./addTag')
const errorHandler = require('./error')

const handlers = [
  staticHandler,
  homeHandler,
  viewAllHandler,
  getDetailsHandler,
  addMemeHandler,
  addTagHandler,
  downloadMemeHandler,
  errorHandler
]

module.exports = handlers
