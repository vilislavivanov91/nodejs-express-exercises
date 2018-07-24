const http = require('http')
const port = 4242

http.createServer((req, res) => {
  res.writeHead(200, {
    'content-type': 'text/plain'
  })
  res.write('Hello from node')
  res.end()
}).listen(port, () => {
  console.log(`App up and running at localhost:${port}`)
})
