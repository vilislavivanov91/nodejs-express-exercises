const homeHandler = require('./home')
const addBookHandler = require('./addBook')
const viewAllHandler = require('./viewAll')
const bookDetailsHandler = require('./books/details')

module.exports = (app) => {
  app.use(homeHandler)
  app.use(addBookHandler)
  app.use(viewAllHandler)
  app.use(bookDetailsHandler)
}
