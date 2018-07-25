const staticHandler = require('./staticHandler')
const moviesHandler = require('./allMovies')
const errorHandler = require('./error')

const handlers = [
  moviesHandler,
  staticHandler,
  errorHandler
]

module.exports = handlers
