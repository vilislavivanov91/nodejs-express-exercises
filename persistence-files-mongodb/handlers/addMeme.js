const fs = require('fs')
const formidable = require('formidable')
const shortId = require('shortid')
const mkdirp = require('mkdirp')
const db = require('../data/db')
const getFolderName = require('../utility/getFolderName')

const addMemeHandler = (req, res) => {
  if (req.method === 'GET' && req.pathName === '/addMeme') {
    fs.readFile('./views/addMeme.html', 'utf-8', (err, data) => {
      if (err) {
        res.writeHead(404, {
          'content-type': 'text/plain'
        })
        res.write('page not found')
        res.end()
      } else {
        res.writeHead(200, {
          'content-type': 'text/html'
        })
        res.write(data)
        res.end()
      }
    })
  } else if (req.method === 'POST' && req.pathName === '/addMeme') {
    const form = new formidable.IncomingForm()
    form.parse(req, (err, fields, files) => {
      if (err) {
        console.log(err)
      } else {
        const folderName = getFolderName()
        const id = shortId.generate()
        const dateStamp = Date.now()
        const folderPath = `./public/memeStorage/${folderName}`
        const memeName = shortId.generate()
        const memeSrc = `${folderPath}/${memeName}.jpg`

        fs.access(folderPath, err => {
          if (err) {
            mkdirp(folderPath, mkdirErr => {
              if (mkdirErr) {
                console.log(mkdirErr)
              }
              fs.rename(files.image.path, memeSrc, (err) => {
                if (err) {
                  console.log(err)
                }
              })
            })
          } else {
            fs.rename(files.image.path, memeSrc, (err) => {
              if (err) {
                console.log(err)
              }
            })
          }
        })

        const meme = {
          id,
          title: fields.title,
          privacy: fields.privacy,
          memeSrc,
          description: fields.description,
          dateStamp,
          posterSrc: `${memeName}.jpg`
        }
        console.log(meme)
        db.addMeme(meme)
        res.writeHead(302, {
          'Location': '/memes/all'
        })
        res.end()
      }
    })
  } else {
    return true
  }
}

module.exports = addMemeHandler
