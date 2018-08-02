const homeHandler = require('./home')
const addBookHandler = require('./addBook')
const viewAllHandler = require('./viewAll')

module.exports = (app) => {
  app.use(homeHandler)
  app.use(addBookHandler)
  app.use(viewAllHandler)
}
