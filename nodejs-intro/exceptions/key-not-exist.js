function KeyNotExist (msg = 'The given key not exist') {
  this.name = 'Key Not Excist Exception'
  this.message = msg
}

module.exports = KeyNotExist
