const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  url: { type: String, required: true },
  yearRelease: { type: String },
  author: { type: String, required: true }
})

const Book = mongoose.model('Book', bookSchema)

module.exports = Book
