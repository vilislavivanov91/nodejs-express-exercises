const staticHandler = require('./static')
const homeHandler = require('./home')
const viewAllHandler = require('./viewAll')
const getDetailsHandler = require('./getDetails')
const addMemeHandler = require('./addMeme')
const addTagHandler = require('./addTag')
const tagsHandler = require('./tags')
const createImageHandler = require('./createImage')
const resultsHandler = require('./results')
const searchHandler = require('./search')
const searchByDateHandler = require('./searchByCreationDate')
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
  searchHandler,
  searchByDateHandler,
  downloadMemeHandler,
  deleteImageHandler,
  errorHandler
]

module.exports = handlers
