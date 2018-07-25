const fs = require('fs')

const homeHandler = (req, res) => {
  if (req.method === 'GET' && req.pathName === '/') {
    fs.readFile('./views/home.html', 'utf-8', (err, data) => {
      if (err) {
        res.writeHead(200, {
          'content-type': 'text/plain'
        })
        res.write('error')
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

module.exports = homeHandler
