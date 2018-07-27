const fs = require('fs')
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
  } else {
    return true
  }
}

module.exports = createImageHandler
