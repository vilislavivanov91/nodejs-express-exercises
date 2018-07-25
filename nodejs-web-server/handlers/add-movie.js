const fs = require('fs')
const qs = require('querystring')
const db = require('../data/database')

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
  } else if (req.method === 'POST' && req.pathName === '/movie') {
    let body = ''

    req.on('data', data => {
      body += data

      if (body.length > 1e6) {
        req.connection.destroy()
      }
    })
    req.on('end', () => {
      let post = qs.parse(body)
      db.add(post.title, post.url, post.yearRelease, post.synopsis)
      res.end()
    })
  } else {
    return true
  }
}

module.exports = addMovie
