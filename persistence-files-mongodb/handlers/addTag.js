const fs = require('fs')

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
  } else {
    return true
  }
}

module.exports = tagHandler
