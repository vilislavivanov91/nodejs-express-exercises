const fs = require('fs')
const url = require('url')
const db = require('../data/db')

const getDetailsHandler = (req, res) => {
  if (req.method === 'GET' && req.pathName === '/getDetails') {
    fs.readFile('./views/getDetails.html', 'utf-8', (err, data) => {
      const id = url.parse(req.url).query.split('=')[1]
      console.log(id)
      if (err) {
        res.writeHead(404, {
          'content-type': 'text/plain'
        })
        res.write('page not found')
        res.end()
      } else {
        const currentMeme = db.getMemeById(Number(id))
        const result = `<div class="content">
    <img src="${currentMeme.memeSrc}" alt=""/>
    <h3>Title  ${currentMeme.title}</h3>
    <p> ${currentMeme.description}</p>
    <button><a href="${currentMeme.posterSrc}">Download Meme</a></button>
    </div>`
        data = data.replace('{{replaceMe}}', result)
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

module.exports = getDetailsHandler
