function NotStringException (msg = 'Given key must be a string') {
  this.name = 'Not String Exception'
  this.message = msg
}

module.exports = NotStringException
