const router = require('express').Router()

router.route('/addBook').get((req, res) => {
  res.render('addBook', {
    title: 'Hello from add book handler'
  })
})

module.exports = router
