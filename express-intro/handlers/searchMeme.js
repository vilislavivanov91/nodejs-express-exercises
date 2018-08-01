const route = require('express').Router()
const Genre = require('../model/Genre')

route.route('/searchMeme')
  .get((req, res) => {
    Genre.find()
      .then(genres => {
        res.render('searchMeme', {
          genres
        })
      })
  }).post((req, res) => {
    const genreSelect = req.body.genreSelect
    const searchedString = req.body.memeTitle

    let redirectString = `./result?`

    if (genreSelect) {
      redirectString += `genre=${genreSelect}`
    }
    if (searchedString) {
      redirectString += `&name=${searchedString}`
    }

    res.redirect(redirectString)
  })

module.exports = route
