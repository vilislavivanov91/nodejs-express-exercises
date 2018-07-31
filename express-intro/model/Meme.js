const mongoose = require('mongoose')
const Schema = mongoose.Schema

const memeSchema = new Schema({
  title: { type: String, required: true },
  creationDate: { type: String, default: Date.now },
  status: { type: String, required: true },
  filePath: { type: String, required: true },
  description: { type: String, required: true }
})

const Meme = mongoose.model('Meme', memeSchema)
module.exports = Meme
