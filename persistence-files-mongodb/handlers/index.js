const staticHandler = require('./static')
const homeHandler = require('./home')
const viewAllHandler = require('./viewAll')
const getDetailsHandler = require('./getDetails')
const addMemeHandler = require('./addMeme')
const addTagHandler = require('./addTag')
const tagsHandler = require('./tags')
const createImageHandler = require('./createImage')
const resultsHandler = require('./results')
const filteredHandler = require('./filtered')
const downloadMemeHandler = require('./downloadMeme')
const deleteImageHandler = require('./deleteImage')
const errorHandler = require('./error')

const handlers = [
  staticHandler,
  homeHandler,
  viewAllHandler,
  getDetailsHandler,
  addMemeHandler,
  addTagHandler,
  tagsHandler,
  createImageHandler,
  resultsHandler,
  filteredHandler,
  downloadMemeHandler,
  deleteImageHandler,
  errorHandler
]

module.exports = handlers
