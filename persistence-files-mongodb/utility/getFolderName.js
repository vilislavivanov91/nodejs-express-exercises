const db = require('../data/db')

let memesCount = db.getMemesCount()
let pageCount = 1

module.exports = () => {
  if (memesCount > 999) {
    memesCount -= 999
    pageCount++
  }
  return pageCount
}
