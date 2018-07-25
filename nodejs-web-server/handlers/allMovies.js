const fs = require('fs')

const data = [
  {
    movieUrl: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/iqA5wZC1wDX7mRfF1uqr7Qpt3XT.png',
    name: 'The Last Man'
  },
  {
    movieUrl: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/iqA5wZC1wDX7mRfF1uqr7Qpt3XT.png',
    name: 'Harry Potter'
  },
  {
    movieUrl: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/iqA5wZC1wDX7mRfF1uqr7Qpt3XT.png',
    name: 'Avatar'
  }
]

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
            data.forEach(d => {
              let templateMovieHtml = movieHtml.replace('{{movieUrl}}', d.movieUrl)
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
