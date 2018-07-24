const http = require('http')
const fs = require('fs')
const url = require('url')
const port = 4243

const getContentType = pathName => {
  if (pathName.endsWith('.html')) {
    return 'text/html'
  } else if (pathName.endsWith('.js')) {
    return 'application/json'
  } else if (pathName.endsWith('.css')) {
    return 'text/css'
  } else if (pathName.endsWith('.ico')) {
    return 'image/x-icon'
  }
}

http.createServer((req, res) => {
  const pathName = url.parse(req.url).pathname
  if (req.method === 'GET' && pathName.startsWith('/public')) {
    if (pathName.endsWith('.html') || pathName.endsWith('.js') || pathName.endsWith('.css') || pathName.endsWith('.ico')) {
      fs.readFile('.' + pathName, (err, data) => {
        if (err) {
          res.writeHead(200, {
            'content-type': 'text/plain'
          })
          res.write('error')
          res.end()
        } else {
          res.writeHead(200, {
            'content-type': getContentType(pathName)
          })
          res.write(data)
          res.end()
        }
      })
    } else {
      res.writeHead(403, {
        'content-type': 'text/plain'
      })
      res.write('Forbidden')
      res.end()
    }
  }
}).listen(port, () => {
  console.log(`App up and running at localhost:${port}`)
})
