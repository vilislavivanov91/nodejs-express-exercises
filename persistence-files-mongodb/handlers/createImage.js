const fs = require('fs')
const formidable = require('formidable')
const Image = require('../model/Image')
const Tag = require('../model/Tag')

const createImageHandler = (req, res) => {
  if (req.method === 'GET' && req.pathName === '/createImage') {
    fs.readFile('./views/createImage.html', 'utf-8', (err, data) => {
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
  } else if (req.method === 'POST' && req.pathName === '/createImage') {
    const form = new formidable.IncomingForm()
    form.parse(req, (err, fields) => {
      if (err) {
        res.end(err)
      } else {
        const tags = fields.imageTags.split(', ')
        console.log(tags)
        const image = new Image({
          url: fields.imageUrl,
          description: fields.imageDescription,
          title: fields.imageTitle
        })
        tags.forEach(tag => {
          const tagDb = new Tag({name: tag})
          tagDb.images.push(image)
          image.tags.push(tagDb)
          tagDb.save(err => {
            if (err) {
              console.log(err)
            } else {
              console.log('tag created')
            }
          })
        })
        image.save(err => {
          if (err) {
            console.log(err)
          } else {
            console.log('image created')
          }
        })
        res.end()
      }
    })
  } else {
    return true
  }
}

module.exports = createImageHandler
