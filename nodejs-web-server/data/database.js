const data = [
]

module.exports = {
  get: () => {
    console.log(data, 'from get()')
    return data.slice(0)
  },
  add: (title, url, yearRelease, synopsis) => {
    const movie = { title, url, yearRelease, synopsis }
    data.push(movie)
    console.log(data, 'from add()')
  }
}
