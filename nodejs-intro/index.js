const storage = require('./storage')

storage.put('test', 1)
storage.put('test1', 11)
storage.put('test1212', 1000)

storage.update('test1', 232333333)

console.log(storage.getAll())

storage.delete('test1212')
storage.save()
console.log(storage.getAll())
storage.clear()
console.log(storage.getAll())
storage.load()
console.log(storage.getAll())
