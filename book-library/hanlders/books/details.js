const router = require('express').Router()
const Book = require('../../model/Book')

router.route('/books/details/:id').get((req, res) => {
  const id = req.params.id

  Book.findById(id).then(book => {
    res.render('books/details', {
      url: book.url,
      title: book.title
    })
  })
})

module.exports = router
