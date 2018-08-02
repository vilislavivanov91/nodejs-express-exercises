const homeHandler = require('./home')
const addBookHandler = require('./addBook')

module.exports = (app) => {
  app.use(homeHandler)
  app.use(addBookHandler)
}
