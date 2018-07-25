const staticHandler = require('./static')
const moviesHandler = require('./movies')
const errorHandler = require('./error')
const addMovieHandler = require('./add-movie')
const detailsHanlder = require('./details')
const homeHanlder = require('./home')

const handlers = [
  staticHandler,
  homeHanlder,
  moviesHandler,
  addMovieHandler,
  detailsHanlder,
  errorHandler
]

module.exports = handlers
