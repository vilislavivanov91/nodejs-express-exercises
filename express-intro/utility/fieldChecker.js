let fieldChecker = obj => {
  for (let prop in obj) {
    if (obj[prop] === '') {
      return true
    }
  }
}

module.exports = fieldChecker
