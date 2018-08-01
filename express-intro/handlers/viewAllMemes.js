const router = require('express').Router()
const Meme = require('../model/Meme')

router.route('/viewAllMemes')
  .get((req, res) => {
    let allMemes = []

    Meme.find({})
      .sort([['creationDate', -1]])
      .then(memes => {
        memes.forEach(meme => {
          allMemes.push(meme)
        })
        res.render('viewAllMemes', {
          allMemes
        })
      }).catch(() => {
        res.render('viewAllMemes')
      })
  })

module.exports = router
