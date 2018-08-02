const mongoose = require('mongoose')
const mongoUrl = 'mongodb://localhost:27017/book-library'

mongoose.connect(mongoUrl, err => {
  if (err) {
    console.log(err)
  } else {
    console.log('MongoDB set and running')
  }
})
