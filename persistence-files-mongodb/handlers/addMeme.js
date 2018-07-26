const fs = require('fs')
const formidable = require('formidable')
const shortId = require('shortid')
const mkdirp = require('mkdirp')

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
        const id = shortId.generate()
        const dateStamp = Date.now()
        const memeSrc = `./public/memeStorage/${shortId.generate()}.jpg`

        fs.access('./public/memeStorage', err => {
          if (err) {
            mkdirp('./public/memeStorage', mkdirErr => {
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
          memeSrc,
          description: fields.description,
          dateStamp
        }
        console.log(meme)
        res.writeHead(302, {
          'Location': '/'
        })
        res.end()
      }
    })
  } else {
    return true
  }
}

module.exports = addMemeHandler
