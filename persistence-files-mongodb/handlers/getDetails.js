const fs = require('fs')

const getDetailsHandler = (req, res) => {
  if (req.method === 'GET' && req.pathName === '/details') {
    res.writeHead(200, {
      'content-type': 'text/html'
    })
    res.write('Hello from /getDetailsHandler')
    res.end()
  } else {
    return true
  }
}

module.exports = getDetailsHandler
