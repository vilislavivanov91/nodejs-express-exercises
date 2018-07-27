const http = require('http')
const handlers = require('./handlers')
// const MongoClient = require('mongodb').MongoClient
const mongoose = require('mongoose')
const url = require('url')
const Image = require('./model/Image')
const Tag = require('./model/Tag')
const port = 4242
const mongoUrl = 'mongodb://localhost:27017/mongooseTest'

// MongoClient.connect(mongoUrl, (err, db) => {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(db)
//   }
// })

mongoose.connect(mongoUrl)

const db = mongoose.connection
db.on('error', () => {
  console.log('error conection')
})
db.once('open', () => {
  console.log('connected!')
  const newTag = new Tag({name: 'UPPERCASE'})
  newTag.tagNameToLower()
  newTag.save(err => {
    if (err) {
      console.log('err')
    } else {
      console.log('tag saved')
    }
  })
})

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
