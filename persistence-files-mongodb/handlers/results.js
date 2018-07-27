const fs = require('fs')
const Image = require('../model/Image')
const resultHandler = (req, res) => {
  if (req.method === 'GET' && req.pathName === '/results') {
    fs.readFile('./views/results.html', 'utf-8', (err, data) => {
      if (err) {
        res.writeHead(404, {
          'content-type': 'text/plain'
        })
        res.write('Error')
        res.end()
      } else {
        let replaceString = ''
        Image.find({})
          .then(images => {
            images.forEach(image => {
              replaceString += `<fieldset> <legend>${image.title}:</legend> 
              <img src="${image.url}">
              </img><p>${image.description}<p/>
              <button onclick='location.href="/delete?id=${image._id}"'class='deleteBtn'>Delete
              </button> 
              </fieldset>`
            })
            res.writeHead(200, {
              'content-type': 'text/html'
            })
            data = data.replace('{{replace}}', replaceString)
            res.write(data)
            res.end()
          }).catch(err => {
            console.log(err)
          })
      }
    })
  } else {
    return true
  }
}

module.exports = resultHandler
