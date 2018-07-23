const storage = require('./storage')

storage.put('test', 1)
console.log(storage.get('test'))
