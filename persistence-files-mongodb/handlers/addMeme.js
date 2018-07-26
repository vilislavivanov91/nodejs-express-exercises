const fs = require('fs')
const formidable = require('formidable')

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
        console.log(fields)
        console.log(files)
      }
    })
  } else {
    return true
  }
}

module.exports = addMemeHandler
