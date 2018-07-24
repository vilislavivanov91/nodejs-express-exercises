const http = require('http')
const url = require('url')
const port = 4243
const staticHandler = require('./handlers/staticHandler')

http.createServer((req, res) => {
  req.pathName = url.parse(req.url).pathname
  staticHandler(req, res)
}).listen(port, () => {
  console.log(`App up and running at localhost:${port}`)
})
