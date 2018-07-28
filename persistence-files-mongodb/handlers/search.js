const fs = require('fs')
const formidable = require('formidable')

const Image = require('../model/Image')
const Tag = require('../model/Tag')

const filteredHandler = (req, res) => {
  if (req.method === 'GET' && req.pathName === '/search') {
    fs.readFile('./views/search.html', 'utf-8', (err, data) => {
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
        data = data.replace('{{filtered}}', '')
        res.write(data)
        res.end()
      }
    })
  } else if (req.method === 'POST' && req.pathName === '/search') {
    const form = new formidable.IncomingForm()
    form.parse(req, (err, fields) => {
      if (err) {
        console.log(err)
      } else {
        const tagName = fields.tag
        let replacedString = ''

        Tag.find({})
          .where('name')
          .equals(tagName)
          .then(tags => {
            tags.forEach(tag => {
              const images = tag.images
              images.forEach(imageId => {
                Image.findById(imageId)
                .then(image => {
                  if (image) {
                    replacedString += `<fieldset> <legend>${image.title}:</legend> 
              <img src="${image.url}">
              </img><p>${image.description}<p/>
              <button onclick='location.href="/delete?id=${image._id}"'class='deleteBtn'>Delete
              </button> 
              </fieldset>`
                  }
                }).catch(err => {
                  console.log(err)
                })
              })
            })
            return true
          }).then(() => {
            fs.readFile('./views/search.html', 'utf-8', (err, data) => {
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
                data = data.replace('{{filtered}}', replacedString)
                res.write(data)
                res.end()
              }
            })
          }).catch(err => {
            console.log(err)
          })
        // Image.find({})
        // .then(images => {
        //   images.forEach(image => {
        //     const tagIdArr = image.tags
        //     tagIdArr.forEach(tagId => {
        //       Tag.findById(tagId)
        //         .then(tag => {
        //           if (tag.name === tagName) {
        //             searchedImageIdArr.push(image._id)
        //             // Found the looking image
        //           }
        //         })
        //         .catch(err => console.log(err))
        //     })
        //   })
        // }).catch(err => {
        //   console.log(err)
        // })
      }
    })
  } else {
    return true
  }
}

module.exports = filteredHandler
