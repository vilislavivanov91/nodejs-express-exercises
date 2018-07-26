const fs = require('fs')
const getContentType = require('../utility/getContentType')

const staticHandler = (req, res) => {
  if (req.method === 'GET' && req.pathName.startsWith('/public')) {
    if (req.pathName.endsWith('.html') || req.pathName.endsWith('.js') || req.pathName.endsWith('.css') || req.pathName.endsWith('.ico') || req.pathName.endsWith('.jpg')) {
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
      return true
    }
  } else {
    return true
  }
}

module.exports = staticHandler
