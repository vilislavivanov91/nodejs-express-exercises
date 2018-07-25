const http = require('http')
const url = require('url')
const port = 4243
const handlers = require('./handlers')

http.createServer((req, res) => {
  req.pathName = url.parse(req.url).pathname
  for (const handler of handlers) {
    if (!handler(req, res)) {
      break
    }
  }
}).listen(port, () => {
  console.log(`App up and running at localhost:${port}`)
})
