const fs = require('fs')
const db = require('../data/database')

const allMovies = (req, res) => {
  if (req.method === 'GET' && req.pathName === '/movies') {
    fs.readFile('./views/all-movies.html', 'utf-8', (err, allMoviesHtml) => {
      if (err) {

      } else {
        fs.readFile('views/movie.html', 'utf-8', (err, movieHtml) => {
          if (err) {
            console.log(err)
            res.writeHead(404, {
              'content-type': 'text/plain'
            })
            res.write('Error')
            res.end()
          } else {
            res.writeHead(200, {
              'content-type': 'text/html'
            })
            let replacedResult = ''
            db.get().forEach(d => {
              let templateMovieHtml = movieHtml.replace('{{movieUrl}}', d.url)
              replacedResult += templateMovieHtml
            })
            const moviesHtmlReplaced = allMoviesHtml.replace('{{movies}}', replacedResult)
            res.write(moviesHtmlReplaced)
            res.end()
          }
        })
      }
    })
  } else {
    return true
  }
}

module.exports = allMovies
