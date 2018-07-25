const fs = require('fs')

const addMovie = (req, res) => {
  if (req.method === 'GET' && req.pathName === '/movie') {
    fs.readFile('views/add-movie.html', 'utf-8', (err, data) => {
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

module.exports = addMovie
