const url = require('url')
const fs = require('fs')

const downloadMeme = (req, res) => {
  if (req.method === 'GET' && req.pathName === '/meme/download') {
    const query = (url.parse(req.url).query)
    const src = query.split('=')[1]
    const path = `./public/memeStorage/1/${src}`

    fs.readFile(path, (err, data) => {
      if (err) {
        console.log(err)
      } else {
        res.setHeader('Content-disposition', 'attachment; filename=' + `${src}`)
        res.end(data)
      }
    })
  } else {
    return true
  }
}

module.exports = downloadMeme
