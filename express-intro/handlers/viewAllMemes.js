const router = require('express').Router()
const Meme = require('../model/Meme')

router.route('/viewAllMemes')
  .get((req, res) => {
    let allMemesHtml = ''
    Meme.find({})
      .sort([['creationDate', -1]])
      .then(memes => {
        memes.forEach(meme => {
          allMemesHtml += `<div class="meme">
  <a href="/getDetails?id=${meme._id}">
  <img class="memePoster" src="${meme.filePath}"/>          
  </div>
  `
        })
        res.render('viewAllMemes', {
          allMemesHtml
        })
      }).catch(() => {
        res.render('viewAllMemes')
      })
  })

module.exports = router
