const storage = require('./storage')

storage.put('test', 1)
storage.put('test1', 11)
storage.put('test1212', 1000)

storage.update('test1', 2323)

console.log(storage.getAll())

storage.delete('test1212')

console.log(storage.getAll())
