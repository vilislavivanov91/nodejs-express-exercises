const mongoose = require('mongoose')
const Schema = mongoose.Schema

const genreSchema = new Schema({
  title: { type: String, required: true },
  memeArr: { type: [Schema.Types.ObjectId], ref: 'Meme' }
})

const Genre = mongoose.model('Genre', genreSchema)

module.exports = Genre
