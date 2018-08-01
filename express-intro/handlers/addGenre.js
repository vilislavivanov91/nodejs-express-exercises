const router = require('express').Router()
const Genre = require('../model/Genre')
const fieldChecker = require('../utility/fieldChecker')
let uploadSucceed = null

router.route('/addGenre')
  .get((req, res) => {
    res.render('addGenre', {
      uploadSucceed
    })
  })

module.exports = router
