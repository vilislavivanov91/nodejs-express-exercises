const fs = require('fs')
const formidable = require('formidable')

const Image = require('../model/Image')
const Tag = require('../model/Tag')

const filteredHandler = (req, res) => {
  if (req.method === 'GET' && req.pathName === '/filtered') {
    fs.readFile('./views/filtered.html', 'utf-8', (err, data) => {
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
  } else if (req.method === 'POST' && req.pathName === '/filtered') {
    const form = new formidable.IncomingForm()
    form.parse(req, (err, fields) => {
      if (err) {
        console.log(err)
      } else {
        const tagName = fields.tag
        const searchedImageIdArr = []
        Image.find({})
        .then(images => {
          images.forEach(image => {
            const tagIdArr = image.tags
            tagIdArr.forEach(tagId => {
              Tag.findById(tagId)
                .then(tag => {
                  if (tag.name === tagName) {
                    searchedImageIdArr.push(image._id)
                    // Found the looking image
                  }
                })
                .catch(err => console.log(err))
            })
          })
        }).catch(err => {
          console.log(err)
        })
      }
    })
  } else {
    return true
  }
}

module.exports = filteredHandler
