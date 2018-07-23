const storage = require('./storage')

storage.put('test', 1)
storage.put('test1', 11)
console.log(storage.getAll())
