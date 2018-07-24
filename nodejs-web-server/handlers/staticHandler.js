const fs = require('fs')
const getContentType = require('../utility/get-content-type')

const staticHandler = (req, res) => {
  if (req.method === 'GET' && req.pathName.startsWith('/public')) {
    if (req.pathName.endsWith('.html') || req.pathName.endsWith('.js') || req.pathName.endsWith('.css') || req.pathName.endsWith('.ico')) {
      fs.readFile('.' + req.pathName, (err, data) => {
        if (err) {
          res.writeHead(200, {
            'content-type': 'text/plain'
          })
          res.write('error')
          res.end()
        } else {
          res.writeHead(200, {
            'content-type': getContentType(req.pathName)
          })
          res.write(data)
          res.end()
        }
      })
    } else {
      res.writeHead(403, {
        'content-type': 'text/plain'
      })
      res.write('Forbidden')
      res.end()
    }
  }
}

module.exports = staticHandler
