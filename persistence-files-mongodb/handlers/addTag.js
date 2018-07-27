const fs = require('fs')
const Tag = require('../model/Tag')

const formidable = require('formidable')

const tagHandler = (req, res) => {
  if (req.method === 'GET' && req.pathName === '/addTag') {
    fs.readFile('./views/addTag.html', 'utf-8', (err, data) => {
      if (err) {
        res.writeHead(404, {
          'content-type': 'text/plain'
        })
        res.write('Error')
        res.end()
      } else {
        res.writeHead(200, {
          'content-type': 'text/html'
        })
        res.write(data)
        res.end()
      }
    })
  } else if (req.method === 'POST' && req.pathName === '/addTag') {
    const form = new formidable.IncomingForm()
    form.parse(req, (err, fields) => {
      if (err) {
        console.log(err)
      } else {
        const tag = new Tag({
          name: fields.tagName
        })
        tag.tagNameToLower()
        tag.save(err => {
          if (err) {
            console.log(err)
          } else {
            console.log('tag saved')
          }
        })
        res.end()
      }
    })
  } else {
    return true
  }
}

module.exports = tagHandler
