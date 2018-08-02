const router = require('express').Router()

router.route('/').get((req, res) => {
  res.render('home', {
    title: 'hello from handlerbars'
  })
})

module.exports = router
