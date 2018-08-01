const router = require('express').Router()
const fieldChecker = require('../utility/fieldChecker')
const formidable = require('formidable')
const shortId = require('shortid')
const fs = require('fs')
const Meme = require('../model/Meme')

const genres = [
  {
    name: 'RickAndMorty'
  },
  {
    name: 'NotRickAndMorty'
  }
]
let uploadSucceed = null

router.route('/addMeme')
  .get((req, res) => {
    res.render('addMeme', {
      genres,
      uploadSucceed
    })
  }).post((req, res) => {
    const form = new formidable.IncomingForm()
    const fileName = shortId.generate() + '.jpg'
    const destPath = './public/memeStorage/0/'
    const fileNewPath = destPath + fileName

    form.parse(req, (err, fields, files) => {
      if (err) {
        console.log('err')
      } else {
        if (files.meme.size === 0 || fieldChecker(fields)) {
          uploadSucceed = false
          res.redirect('/addMeme')
        } else {
          const fileOldPath = files.meme.path
          const title = fields.memeTitle
          const description = fields.memeDescription
          const status = fields.status
          // const genre = fields.genreSelect
          fs.access(destPath, (err) => {
            if (err) {
              fs.mkdirSync(destPath)
            }
            fs.rename(fileOldPath, fileNewPath, () => {})
            const meme = new Meme({
              title,
              filePath: fileNewPath,
              description,
              status
            })
            meme.save(err => {
              if (err) {
                console.log(err)
                res.redirect('/addMeme')
              } else {
                uploadSucceed = true
                res.redirect('/addMeme')
              }
            })
          })
        }
      }
    })
  })

module.exports = router
