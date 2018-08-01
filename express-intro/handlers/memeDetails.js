const route = require('express').Router()
const Meme = require('../model/Meme')

route.route('/getDetails')
  .get((req, res) => {
    const id = req.query.id

    Meme.findById(id)
      .then(meme => {
        console.log(meme)
        res.render('details', {
          memeSrc: meme.filePath,
          title: meme.title,
          description: meme.description,
          id: meme._id
        })
      }).catch(err => {
        res.send('Error' + err)
      })
  })

module.exports = route
