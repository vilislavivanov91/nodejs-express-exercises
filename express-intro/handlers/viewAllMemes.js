const router = require('express').Router()

router.route('/viewAllMemes')
  .get((req, res) => {
    res.render('viewAllMemes')
  })

module.exports = router
