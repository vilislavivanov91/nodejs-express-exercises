const router = require('express').Router()
const Book = require('../model/Book')

router.route('/viewAll').get((req, res) => {
  Book.find({}).sort('yearRelease').then(books => {
    res.render('viewAll', {
      books
    })
  })
})

module.exports = router
