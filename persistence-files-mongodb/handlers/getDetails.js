const fs = require('fs')

const getDetailsHandler = (req, res) => {
  if (req.method === 'GET' && req.pathName === '/getDetails') {
    fs.readFile('./views/getDetails.html', 'utf-8', (err, data) => {
      if (err) {
        res.writeHead(404, {
          'content-type': 'text/plain'
        })
        res.write('page not found')
        res.end()
      } else {
        const targetedMeme = {
          memeSrc: 'https://steemitimages.com/DQmYfiDGFmZsgkpq6XPE3WssU6CK9SagBUCHyWVZGmVxU3T/92bd51939ce6e27f773aee3516b2cd6f--happy-monday-its-monday.jpg',
          title: 'test',
          description: 'desc',
          posterSrc: 'https://steemitimages.com/DQmYfiDGFmZsgkpq6XPE3WssU6CK9SagBUCHyWVZGmVxU3T/92bd51939ce6e27f773aee3516b2cd6f--happy-monday-its-monday.jpg'
        }
        const result = `<div class="content">
    <img src="${targetedMeme.memeSrc}" alt=""/>
    <h3>Title  ${targetedMeme.title}</h3>
    <p> ${targetedMeme.description}</p>
    <button><a href="${targetedMeme.posterSrc}">Download Meme</a></button>
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
