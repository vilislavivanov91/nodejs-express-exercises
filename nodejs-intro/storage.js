const fs = require('fs')
const NotStringException = require('./exceptions/not-string')
const KeyNotExistException = require('./exceptions/key-not-exist')
const isEmpty = require('./utility/obj-is-empty')
let storage = {}

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
  },
  delete: (key) => {
    if (typeof (key) === 'string') {
      if (storage[key]) {
        delete storage[key]
      } else {
        throw new KeyNotExistException()
      }
    } else {
      throw new NotStringException()
    }
  },
  clear: () => {
    storage = {}
  },
  save: () => {
    let promise = new Promise((resolve, reject) => {
      fs.writeFile('storage.json', JSON.stringify(storage), err => {
        if (err) {
          return reject(err)
        } else {
          return resolve(storage)
        }
      })
    })
    return promise
    // fs.writeFileSync('storage.json', JSON.stringify(storage))
  },
  load: () => {
    const filePath = 'storage.json'
    let promise = new Promise((resolve, reject) => {
      fs.access(filePath, err => {
        if (err) {
          return reject(err)
        } else {
          fs.readFile(filePath, 'utf-8', (err, data) => {
            if (err) {
              return reject(err)
            } else {
              storage = JSON.parse(data)
              return resolve(storage)
            }
          })
        }
      })
    })
    return promise
    // const fileAccess = fs.existsSync(filePath)
    // console.log(fileAccess)
    // if (fileAccess) {
    //   const data = fs.readFileSync(filePath, 'utf-8')
    //   storage = JSON.parse(data)
    // } else {
    //   console.log('There is no data in storage yet!')
    // }
  }
}
