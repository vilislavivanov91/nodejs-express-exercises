const http = require('http')
const handlers = require('./handlers')
const MongoClient = require('mongodb').MongoClient
const url = require('url')
const port = 4242
const mongoUrl = 'mongodb://localhost:27017'

// MongoClient.connect(mongoUrl, (err, db) => {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(db)
//   }
// })

http.createServer((req, res) => {
  req.pathName = url.parse(req.url).pathname
  for (const handler of handlers) {
    if (!handler(req, res)) {
      break
    }
  }
}).listen(port, () => {
  console.log(`App up and running at localhost:${port}`)
  MongoClient.connect(mongoUrl, { useNewUrlParser: true }, (err, client) => {
    if (err) {
      console.log('err')
    }
    const db = client.db('projectName')
    console.log('MOngo connected')
    client.close()
  })
})
