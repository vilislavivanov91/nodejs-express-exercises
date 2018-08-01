const router = require('express').Router()
const Genre = require('../model/Genre')
const fieldChecker = require('../utility/fieldChecker')
let uploadSucceed = null

router.route('/addGenre')
  .get((req, res) => {
    res.render('addGenre', {
      uploadSucceed
    })
  }).post((req, res) => {
    if (fieldChecker(req.body)) {
      // returns true if req.body fields are empty

      res.redirect('/addGenre')
      uploadSucceed = false
    } else {
      const title = req.body.genreTitle
      const genre = new Genre({
        title
      })

      genre.save(err => {
        if (err) {
          console.log(err)
        } else {
          uploadSucceed = true
          res.redirect('/addGenre')
        }
      })
    }
  })

module.exports = router
