const mongoose = require('mongoose')
const Schema = mongoose.Schema

const imageSchema = new Schema({
  url: { type: String, required: true },
  creationDate: { type: Date, default: Date.now },
  description: String,
  tags: { type: Schema.Types.ObjectId, ref: 'Tag' }
})

const Image = mongoose.model('Image', imageSchema)
module.exports = Image
