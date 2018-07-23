const NotStringException = require('./exceptions/not-string')
const KeyNotExistException = require('./exceptions/key-not-exist')
const isEmpty = require('./utility/obj-is-empty')
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
  },
  getAll: () => {
    if (isEmpty(storage)) {
      console.log('Storage is empty')
      return {}
    } else {
      const clonedStorage = JSON.parse(JSON.stringify(storage))
      return clonedStorage
    }
  },
  update: (key, newValue) => {
    if (typeof (key) === 'string') {
      if (storage[key]) {
        storage[key] = newValue
      } else {
        throw new KeyNotExistException()
      }
    } else {
      throw new NotStringException()
    }
  }
}
