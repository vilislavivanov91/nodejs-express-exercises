const staticHandler = require('./static')
const moviesHandler = require('./movies')
const errorHandler = require('./error')
const addMovieHandler = require('./add-movie')

const handlers = [
  staticHandler,
  moviesHandler,
  addMovieHandler,
  errorHandler
]

module.exports = handlers
