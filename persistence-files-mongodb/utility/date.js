let maxDate = new Date(8640000000000000)
let minDate = new Date(-8640000000000000)

module.exports = {
  getMaxDate: () => {
    return new Date(maxDate.getTime())
  },
  getMinDate: () => {
    return new Date(minDate.getTime())
  }
}
