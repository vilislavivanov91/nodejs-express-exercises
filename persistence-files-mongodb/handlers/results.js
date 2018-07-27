const fs = require('fs')
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

module.exports = resultHandler
