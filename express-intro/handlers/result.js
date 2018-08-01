const router = require('express').Router()
const Genre = require('../model/Genre')
const Meme = require('../model/Meme')

router.route('/result')
  .get((req, res) => {
    const genreTitle = req.query.genre
    const searchedString = req.query.name

    Genre.find({
      title: genreTitle
    }).then(genres => {
      const genre = genres[0]
      const memeArr = genre.memeArr
      const promiseArr = []
      const searchedMemes = []

      memeArr.forEach(memeId => {
        promiseArr.push(
          Meme.findById(memeId)
            .then(meme => {
              const memeTitle = meme.title
              const memeDesc = meme.description

              if (searchedString) {
                if (memeTitle.indexOf(searchedString) !== -1 || memeDesc.indexOf(searchedString) !== -1) {
                  searchedMemes.push(meme)
                }
              } else {
                searchedMemes.push(meme)
              }
            })
        )
      })

      Promise.all(promiseArr).then(() => {
        res.render('result', {
          resultMemes: searchedMemes
        })
      })
    }).catch(err => {
      console.log(err)
    })
  })

module.exports = router
