const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tagSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  creationDate: {
    type: Date,
    default: Date.now
  },
  images: { type: [Schema.Types.ObjectId], ref: 'Image' }
})

tagSchema.methods.tagNameToLower = function () {
  this.name = this.name.toLowerCase()
}

const Tag = mongoose.model('Tag', tagSchema)

module.exports = Tag
