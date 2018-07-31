const express = require('express')
const app = express()
require('./config/appConfig')(app, express)
require('./config/dbConfig')
require('./handlers')(app, express)

const Genre = require('./model/Genre')
const Meme = require('./model/Meme')

const memeOne = new Meme({
  title: 'meme title',
  filePath: 'some random path',
  description: 'meme description'
})

const memeTwo = new Meme({
  title: 'meme two title',
  filePath: 'some random path two',
  description: 'meme two description'
})

memeOne.save(err => {
  if (err) {
    console.log(err)
  }
})

memeTwo.save(err => {
  if (err) {
    console.log(err)
  }
})

const genre = new Genre({
  title: 'genre title',
  memeArr: [memeOne, memeTwo]
})
genre.save(err => {
  if (err) {
    console.log(err)
  }
})
