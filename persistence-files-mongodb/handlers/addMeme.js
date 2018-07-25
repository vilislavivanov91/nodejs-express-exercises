const fs = require('fs')

const addMemeHandler = (req, res) => {
  if (req.method === 'GET' && req.pathName === '/meme') {
    res.writeHead(200, {
      'content-type': 'text/html'
    })
    res.write('Hello from /addMemeHandler')
    res.end()
  } else {
    return true
  }
}

module.exports = addMemeHandler
