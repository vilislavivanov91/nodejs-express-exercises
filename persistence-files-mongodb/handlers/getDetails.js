const fs = require('fs')

const getDetailsHandler = (req, res) => {
  if (req.method === 'GET' && req.pathName === '/details') {
    fs.readFile('./views/getDetails.html', 'utf-8', (err, data) => {
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
  } else {
    return true
  }
}

module.exports = getDetailsHandler
