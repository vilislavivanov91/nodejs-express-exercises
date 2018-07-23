const storage = require('./storage')

storage.put('test', 1)
storage.put('test1', 11)

storage.update('test1', 2323)

console.log(storage.getAll())
