const fs = require('fs')
const db = require('../data/database')
const detailsHandler = (req, res) => {
  if (req.method === 'GET' && req.pathName === '/details') {
    fs.readFile('views/details.html', 'utf-8', (err, data) => {
      if (err) {
        res.writeHead(200, {
          'content-type': 'text/plain'
        })
        res.write('error')
        res.end()
      } else {
        const movies = db.get()
        let result = ''
        movies.forEach(movie => {
          result += `<div class="content">
                      <img src=${movie.url} alt=${movie.title}/>
                      <h3>Title ${movie.title}</h3>
                      <h3>Year ${movie.yearRelease}</h3>
                      <p>${movie.synopsis}</p>
                    </div>​`
        })
        data = data.replace('{{replace}}', result)
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

module.exports = detailsHandler
