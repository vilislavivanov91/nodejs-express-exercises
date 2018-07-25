const fs = require('fs')

const viewAllHandler = (req, res) => {
  if (req.method === 'GET' && req.pathName === '/memes/all') {
    fs.readFile('./views/viewAll.html', 'utf-8', (err, data) => {
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

module.exports = viewAllHandler
