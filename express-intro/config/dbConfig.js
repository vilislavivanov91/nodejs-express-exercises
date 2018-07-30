const mongoose = require('mongoose')
const dbUrl = 'mongodb://localhost:27017/mongooseTest'

mongoose.connect(dbUrl, (err) => {
  if (err) {
    console.log(err)
  }
  console.log('mongoose conected')
})
