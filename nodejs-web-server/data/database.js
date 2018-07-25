const data = [
]

module.exports = {
  get: () => {
    return data.slice(0)
  },
  add: (title, url, yearRelease, synopsis) => {
    const movie = { title, url, yearRelease, synopsis }
    data.push(movie)
  }
}
