const router = require('express').Router()

const genres = [
  {
    name: 'RickAndMorty'
  },
  {
    name: 'NotRickAndMorty'
  }
]
const statusHtml = '<div id="errBox"><h2 id="errMsg">Please fill all fields</h2></div>'
// '<div id="succssesBox"><h2 id="succssesMsg">Movie Added</h2></div>'

router.route('/addMeme')
  .get((req, res) => {
    res.render('addMeme', {
      genres,
      statusHtml
    })
  }).post((req, res) => {
    console.log(req.body)
    res.redirect('/')
  })

module.exports = router
