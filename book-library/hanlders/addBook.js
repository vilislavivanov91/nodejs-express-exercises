const router = require('express').Router()
const Book = require('../model/Book')

router.route('/addBook')
.get((req, res) => {
  res.render('addBook', {
    title: 'Hello from add book handler'
  })
}).post((req, res) => {
  const title = req.body.title
  const url = req.body.url
  const yearRelease = req.body.yearRelease
  const author = req.body.author

  const book = new Book({
    title,
    url,
    yearRelease,
    author
  })

  book.save(err => {
    if (err) {
      const errMessageArr = []
      const errors = err.errors
      for (const key in errors) {
        if (errors.hasOwnProperty(key)) {
          const currErr = errors[key]
          errMessageArr.push(currErr)
        }
      }
      res.render('addBook', {
        errMessageArr
      })
    } else {
      res.redirect('/viewAll')
    }
  })
})

module.exports = router
