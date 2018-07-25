const fs = require('fs')

const viewAllHandler = (req, res) => {
  if (req.method === 'GET' && req.pathName === '/memes/all') {
    res.writeHead(200, {
      'content-type': 'text/html'
    })
    res.write('Hello from /viewAllHandler')
    res.end()
  } else {
    return true
  }
}

module.exports = viewAllHandler
