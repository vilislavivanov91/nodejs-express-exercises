const NotStringException = require('./exceptions/not-string')
const KeyNotExistException = require('./exceptions/key-not-exist')
const storage = {}

module.exports = {
  put: (key, value) => {
    if (typeof (key) === 'string') {
      if (storage[key]) {

      } else {
        storage[key] = value
      }
    } else {
      throw new NotStringException()
    }
  },
  get: (key) => {
    if (typeof (key) === 'string') {
      if (storage[key]) {
        return storage[key]
      } else {
        throw new KeyNotExistException()
      }
    } else {
      throw new NotStringException()
    }
  }
}
