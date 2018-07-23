const NotStringException = require('./exceptions/not-string')
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
        // Throw not existing key
      }
    } else {
      throw new NotStringException()
    }
  }
}
