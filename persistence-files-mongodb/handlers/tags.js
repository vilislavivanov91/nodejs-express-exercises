const fs = require('fs')
const Tag = require('../model/Tag')

const tagsHandler = (req, res) => {
  if (req.method === 'GET' && req.pathName === '/tags') {
    fs.readFile('./views/tags.html', 'utf-8', (err, data) => {
      if (err) {
        res.writeHead(404, {
          'content-type': 'text/plain'
        })
        res.write('Error')
        res.end()
      } else {
        Tag.find({})
          .then(tags => {
            let replacedString = ''
            tags.forEach(tag => {
              replacedString += `<div class='tag' id=${tag._id}">${tag.name}</div>.`
            })
            data = data.replace('{{addTags}}', replacedString)
            res.writeHead(200, {
              'content-type': 'text/html'
            })
            res.write(data)
            res.end()
          }).catch(err => {
            console.log(err)
            res.writeHead(200, {
              'content-type': 'text/html'
            })
            res.write(data)
            res.end()
          })
      }
    })
  } else {
    return true
  }
}

module.exports = tagsHandler
