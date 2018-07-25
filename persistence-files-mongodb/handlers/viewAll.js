const fs = require('fs')
const db = require('../data/db')

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
        const allMemes = db.getAll()
        let result = ''
        allMemes.forEach(meme => {
          result += `<div class="meme">
          <a href="/getDetails?id=${meme.id}">
          <img class="memePoster" src="${meme.memeSrc}"/>          
 </div>`
        })
        res.writeHead(200, {
          'content-type': 'text/html'
        })
        data = data.replace('{{replaceMe}}', result)
        res.write(data)
        res.end()
      }
    })
  } else {
    return true
  }
}

module.exports = viewAllHandler
